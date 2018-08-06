<template>
  <q-page padding>
    <div class="flex justify-center">
      <div class="col-12 q-mb-md">
        <span class="q-display-1 float-left">Produtos Cadastrados ({{ products.length }})</span>
        <q-btn
          class="float-right"
          icon="add"
          color="primary"
          label="Novo Produto"
          @click="$router.push({ name: 'new' })"
        />
      </div>
      <p v-if="products.length === 0">Nenhum produto cadastrado!</p>
      <div v-else class="col-12">
        <div v-for="product in products" :key="product.code">
          <div class="flex">
            <div class="col-xs-12 col-md-4">
                <custom-image
                  :source="product.imageURL"
                  :name="product.name"
                />
            </div>
            <div class="col-xs-12 col-md-8 q-pl-md q-pt-md">
              <p class="text-weight-bolder">{{ product.name }}</p>
              <p><b>Código:</b> {{ product.code }} </p>
              <p><b>Quantidade:</b> {{ product.quantity }} </p>
              <p><b>Descrição:</b> {{ product.description }}</p>
              <q-btn
                class="btn float-right q-ma-xs"
                icon="edit"
                color="primary"
                label="Editar"
                @click="$router.push({ name: 'edit', params: { id: product.code }})"
              />
              <q-btn
                class="btn float-right q-ma-xs"
                icon="delete"
                color="negative"
                label="Deletar"
                @click="$router.push({ name: 'edit', params: { id: product.code }})"
              />
            </div>
          </div>
          <hr>
        </div>
      </div>
      <q-inner-loading :visible="visible"/>
    </div>
  </q-page>
</template>

<script>
import customImage from '../../../components/customImage';

export default {
  name: 'IndexProducts',
  components: {
    'custom-image': customImage,
  },
  data() {
    return {
      products: [],
      visible: true,
    };
  },

  methods: {
    removeLoader() {
      this.visible = false;
    },
  },

  created() {
    this.$firestore.collection('products').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.products.push(doc.data());
        });
        this.removeLoader();
      })
      .catch((err) => {
        this.$q.notify({
          type: 'negative',
          message: `Erro ao obter produtos, ${err.message}`,
          position: 'top',
        });
        this.removeLoader();
      });
  },
};
</script>

<style scoped>
.btn {
  margin-top: 20px;
}
</style>
