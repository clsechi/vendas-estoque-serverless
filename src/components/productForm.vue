<template>
  <div class="col-xs-8 col-sm-8 col-md-8">
    <h3>{{ title }}</h3>
    <q-input
      v-model="form.name"
      @blur="$v.form.name.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.name.$error"
      type="text"
      float-label="Nome"
    />

    <q-input
      class="q-mt-md"
      v-model="form.code"
      @blur="$v.form.code.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.code.$error"
      type="number"
      float-label="Código"
    />

    <q-input
      class="q-mt-md"
      v-model="form.quantity"
      @blur="$v.form.quantity.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.quantity.$error"
      type="number"
      float-label="Quantidade"
    />

    <q-input
      class="q-mt-md"
      v-model="form.description"
      @blur="$v.form.description.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.description.$error"
      type="textarea"
      float-label="Descrição"
    />

    <q-select
      class="q-mt-md"
      v-model="form.category"
      @blur="$v.form.category.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.category.$error"
      type="select"
      float-label="Categoria"
      :options="categories"
    />

    <q-input
      class="q-mt-md"
      v-model="form.material"
      @blur="$v.form.material.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.material.$error"
      type="text"
      float-label="Material"
    />

    <q-input
      class="q-mt-md"
      v-model="form.size"
      @blur="$v.form.size.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.size.$error"
      type="text"
      float-label="Dimensões"
    />

    <q-input
      class="q-mt-md"
      v-model="form.color"
      @blur="$v.form.color.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.color.$error"
      type="text"
      float-label="Cor/Acabamento"
    />

    <q-input
      class="q-mt-md"
      v-model="form.manufacturer"
      @blur="$v.form.manufacturer.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.manufacturer.$error"
      type="text"
      float-label="Fabricante"
    />

    <q-input
      class="q-mt-md"
      v-model="form.cost_price"
      @blur="$v.form.cost_price.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.cost_price.$error"
      type="number"
      float-label="Preço de Custo"
      :decimals="2"
      prefix="R$"
    />

    <q-input
      class="q-mt-md"
      v-model="form.sell_price"
      @blur="$v.form.sell_price.$touch"
      @keyup.enter="createProduct"
      :error="$v.form.sell_price.$error"
      type="number"
      float-label="Preço de Venda"
      :decimals="2"
      prefix="R$"
    />

    <q-input
      class="q-mt-md"
      v-model="form.obs"
      @keyup.enter="createProduct"
      type="textarea"
      float-label="Observações"
    />

    <q-uploader
      class="q-mt-md"
      :url="url"
      v-model="form.image"
      type="file"
      float-label="Imagem"
      :auto-expand="true"
      @add="uploadImage"
      ref="uploader"
      :hide-upload-button="true"
      :hide-upload-progress="true"
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
import { required } from 'vuelidate/lib/validators'

export default {
  props: {
    button: {
      required: true,
      type: Object
    },
    title: {
      required: true,
      type: String
    },
    code: {
      default: '',
      type: String
    }
  },

  data () {
    return {
      form: {
        name: '',
        code: '',
        quantity: '',
        description: '',
        category: '',
        material: '',
        size: '',
        color: '',
        manufacturer: 'IMAB',
        imageURL: '',
        cost_price: '',
        sell_price: '',
        obs: ''
      },
      url: '',
      categories: [
        {
          label: 'Fechadura',
          value: 'Fechadura'
        },
        {
          label: 'Trinco',
          value: 'Trinco'
        },
        {
          label: 'Fecho',
          value: 'Fecho'
        },
        {
          label: 'Pivô',
          value: 'Pivô'
        },
        {
          label: 'Acessórios',
          value: 'Acessórios'
        }
      ]
    }
  },

  validations: {
    form: {
      name: { required },
      code: { required },
      quantity: { required },
      description: { required },
      category: { required },
      material: { required },
      size: { required },
      color: { required },
      manufacturer: { required },
      cost_price: { required },
      sell_price: { required }
    }
  },

  created () {
    if (this.code) {
      this.$firestore.collection('products').doc(this.code).get()
        .then(doc => {
          this.form = doc.data()
        })
        .catch(err => {
          this.$q.notify({
            message: 'Erro ao criar produto!.',
            position: 'top'
          })
          console.error('Error adding document: ', err)
        })
    }
  },

  methods: {
    createProduct () {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify({
          message: 'Por favor preencha os campos corretamente.',
          position: 'top'
        })
        return
      }

      this.$firestore.collection('products').doc(this.form.code.toString()).set(this.form)
        .then(docRef => {
          this.$q.notify({
            type: 'positive',
            message: 'Produto criado com sucesso!',
            color: 'positive',
            position: 'top'
          })
        })
        .catch(err => {
          this.$q.notify({
            message: 'Erro ao procurar produto!.',
            position: 'top'
          })
          console.error('Error getting document: ', err)
        })
    },

    uploadImage () {
      const file = this.$refs.uploader.files[0]

      const metadata = { contentType: 'image/jpeg' }

      this.$storage.ref().child(`images/${Date.now().toString()}`).put(file, metadata)
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
            .then(downloadURL => {
              this.form.imageURL = downloadURL
              console.log('File available at', downloadURL)
            })
        })
        .catch(err => {
          this.$q.notify({
            message: 'Erro ao enviar imagem!.',
            position: 'top'
          })
          console.error('Error to send files', err)
        })
    }
  }
}
</script>

<style scoped>
.btn-submit {
  margin-top: 20px;
}
</style>
