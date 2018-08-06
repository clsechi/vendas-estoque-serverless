<template>
  <q-page padding>
    <div v-if="categoryProducts.length > 0">
      <products-cards
        :products="categoryProducts"
      />
    </div>
    <h3 v-else>Desculpe, nenhum produto cadastrado para {{ category }}</h3>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import productsInCards from '../../components/productsInCards.vue';

export default {
  name: 'CategoryPage',

  components: {
    'products-cards': productsInCards,
  },

  computed: {
    ...mapGetters('product', ['products']),

    category() {
      return this.$route.params.id;
    },

    categoryProducts() {
      return this.products.filter(prod => prod.category.toLowerCase() === this.category);
    },
  },
};
</script>

<style>
</style>
