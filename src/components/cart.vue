<template>
  <q-btn
    icon="shopping_cart"
    color="white"
    round
    dense
    flat
    size="xl"
    @click="$router.push({ name: 'cart'})"
  />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {};
  },

  computed: {
    ...mapGetters('cart', ['products']),
  },
};
</script>

<style>
</style>
