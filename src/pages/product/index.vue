<template>
  <div class="container">
    <q-page padding class="docs-input row flex justify-center">
      <div class="col-xs-8 col-sm-8 col-md-8">
        <h3>Produtos Cadastrados</h3>
        <p v-if="products.length === 0">Nenhum produto cadastrado!</p>
        <ul v-else class="list">
          <li v-for="product in products" :key="product.code">
            <img :src="product.imageURL" :alt="product.name" class="responsive">
            <p>Nome: {{ product.name }}</p>
            <p>Código: {{ product.code }} </p>
            <p>Quantidade: {{ product.quantity }} </p>
            <p>Descrição: {{ product.description }}</p>
            <router-link :to="{ name: 'edit', params: { id: product.code }}">
              <q-btn
                class="btn float-right"
                icon="library_add"
                color="primary"
                label="Editar"
              />
            </router-link>
            <hr>
          </li>
        </ul>
      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  name: 'IndexProducts',
  data () {
    return {
      products: []
    }
  },

  created () {
    this.$firestore.collection('products').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.products.push(doc.data())
        })
      })
      .catch(err => {
        console.error('Error getting documents: ', err)
      })
  }
}
</script>

<style scoped>
.list {
  list-style-type: none;
}
.btn {
  margin-top: 20px;
}
</style>
