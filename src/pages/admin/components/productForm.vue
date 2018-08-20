<template>
  <div class="col-xs-10 col-md-10">
    <span class="q-display-1">{{ title }}</span>
    <q-input
      v-model="form.name"
      @blur="$v.form.name.$touch"
      :error="$v.form.name.$error"
      type="text"
      float-label="Nome"
      autofocus
    />

    <q-input
      class="q-mt-md"
      v-model="form.code"
      @blur="$v.form.code.$touch"
      :error="$v.form.code.$error"
      type="number"
      float-label="Código"
    />

    <q-input
      class="q-mt-md"
      v-model="form.stockQuantity"
      @blur="$v.form.stockQuantity.$touch"
      :error="$v.form.stockQuantity.$error"
      type="number"
      float-label="Quantidade em Estoque"
    />

    <q-input
      class="q-mt-md"
      v-model="form.color"
      @blur="$v.form.color.$touch"
      :error="$v.form.color.$error"
      type="text"
      float-label="Cor/Acabamento"
    />

    <q-input
      class="q-mt-md"
      v-model="form.description"
      @blur="$v.form.description.$touch"
      :error="$v.form.description.$error"
      type="textarea"
      float-label="Descrição"
    />

    <q-select
      class="q-mt-md"
      v-model="form.category"
      @blur="$v.form.category.$touch"
      :error="$v.form.category.$error"
      type="select"
      float-label="Categoria"
      :options="categories"
    />

    <q-input
      class="q-mt-md"
      v-model="form.material"
      @blur="$v.form.material.$touch"
      :error="$v.form.material.$error"
      type="text"
      float-label="Material"
    />

    <q-input
      class="q-mt-md"
      v-model="form.size"
      @blur="$v.form.size.$touch"
      :error="$v.form.size.$error"
      type="text"
      float-label="Dimensões"
    />

    <q-input
      class="q-mt-md"
      v-model="form.manufacturer"
      @blur="$v.form.manufacturer.$touch"
      :error="$v.form.manufacturer.$error"
      type="text"
      float-label="Fabricante"
    />

    <q-input
      class="q-mt-md"
      v-model="form.costPrice"
      @blur="$v.form.costPrice.$touch"
      :error="$v.form.costPrice.$error"
      type="number"
      float-label="Preço de Custo"
      :decimals="2"
      prefix="R$"
      :step="0.01"
    />

    <q-input
      class="q-mt-md"
      v-model="form.sellPrice"
      @blur="$v.form.sellPrice.$touch"
      :error="$v.form.sellPrice.$error"
      type="number"
      float-label="Preço de Venda"
      :decimals="2"
      prefix="R$"
    />

    <q-input
      class="q-mt-md"
      v-model="form.obs"
      type="textarea"
      float-label="Observações"
    />

    <q-uploader
      class="q-mt-md"
      :url="url"
      v-model="form.image"
      type="file"
      float-label="Imagens"
      :auto-expand="true"
      :upload-factory="uploadImage"
      hide-upload-progress
      multiple
    />
    <q-btn
      class="btn-submit float-right"
      type="submit"
      color="primary"
      @click="createProduct"
      :label="button.label"
      icon="library_add"
    />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'ProductForm',
  props: {
    button: {
      required: true,
      type: Object,
    },
    title: {
      required: true,
      type: String,
    },
    code: {
      default: '',
      type: String,
    },
  },

  data() {
    return {
      form: {
        name: '',
        code: '',
        stockQuantity: '',
        description: '',
        category: '',
        material: '',
        size: '',
        color: '',
        manufacturer: 'IMAB',
        images: [],
        costPrice: '',
        sellPrice: '',
        obs: '',
      },
      url: '',
      categories: [
        {
          label: 'Fechaduras',
          value: 'Fechaduras',
        },
        {
          label: 'Trincos',
          value: 'Trincos',
        },
        {
          label: 'Fechos',
          value: 'Fechos',
        },
        {
          label: 'Pivôs',
          value: 'Pivos',
        },
        {
          label: 'Acessórios',
          value: 'Acessorios',
        },
      ],
    };
  },

  validations: {
    form: {
      name: { required },
      code: { required },
      stockQuantity: { required },
      description: { required },
      category: { required },
      material: { required },
      size: { required },
      color: { required },
      manufacturer: { required },
      costPrice: { required },
      sellPrice: { required },
    },
  },

  created() {
    if (this.code) {
      this.$firestore.collection('products').doc(this.code).get()
        .then((doc) => {
          this.form = doc.data();
        })
        .catch((err) => {
          this.$q.notify({
            message: `Erro obter produto, ${err.message}`,
          });
        });
    }
  },

  methods: {
    createProduct() {
      this.$v.form.$touch();

      if (this.$v.form.$error) {
        this.$q.notify({
          message: 'Por favor preencha os campos corretamente.',
        });
        return;
      }

      this.$firestore.collection('products').doc(this.form.code.toString()).set(this.form)
        .then(() => {
          this.$q.notify({
            type: 'positive',
            message: 'Produto criado com sucesso!',
          });
        })
        .catch((err) => {
          this.$q.notify({
            message: `Erro ao obter produto, ${err.message}`,
          });
        });
    },

    uploadImage(file) {
      const metadata = { contentType: file.type };

      return new Promise((resolve, reject) => {
        this.$storage.ref().child(`images/${Date.now().toString()}`).put(file, metadata)
          .then((snapshot) => {
            snapshot.ref.getDownloadURL()
              .then((url) => {
                this.form.images.push(url);
                this.$q.notify({
                  type: 'positive',
                  message: 'Imagem enviado com sucesso!',
                });
                resolve();
              });
          })
          .catch((err) => {
            this.$q.notify({
              message: `Erro ao enviar imagem, ${err.message}`,
            });
            reject();
          });
      });
    },
  },
};
</script>

<style scoped>
.btn-submit {
  margin-top: 20px;
}
</style>
