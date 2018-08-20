<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  async created() {
    await this.getProducts();
  },

  methods: {
    ...mapActions('product', ['getProducts']),
  },
};
</script>

<style>
hr {
  opacity: 0.5;
}
</style>
