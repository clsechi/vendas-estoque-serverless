<template>
  <q-page padding>
    <products-cards
      :products="products"
    />
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import productsInCards from '../components/productsInCards.vue';

export default {
  name: 'PageIndex',

  components: {
    'products-cards': productsInCards,
  },

  computed: {
    ...mapGetters('product', ['products']),
  },
};
</script>

<style>
</style>
