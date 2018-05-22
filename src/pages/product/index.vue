<template>
  <div class="container">
    <q-page padding class="docs-input row flex justify-center">
      <div class="col-xs-8 col-sm-8 col-md-8">
        <h3>Produtos Cadastrados</h3>
        <p v-if="products.length === 0">Nenhum produto cadastrado!</p>
        <ul v-else class="list">
          <li v-for="product in products" :key="product.code">
            <p>Nome: {{ product.name }}</p>
            <p>Código: {{ product.code }} </p>
            <p>Quantidade: {{ product.quantity }} </p>
            <p>Descrição: {{ product.description }}</p>
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
          console.log(doc.id, ' => ', doc.data())
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
</style>
