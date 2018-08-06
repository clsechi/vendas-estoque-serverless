<template>
  <q-search
      v-model="terms"
      placeholder="O que você precisa?"
      clearable
      inverted-light
      hide-underline
      color="white"
    >
      <q-autocomplete
        separator
        @search="search"
        @selected="selected"
      />
    </q-search>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      terms: '',
    };
  },

  computed: {
    ...mapGetters('product', ['products']),
  },

  methods: {
    search(terms, done) {
      const result = this.products.filter(product => product.name.includes(terms));
      // if (result.length === 0) this.$q.notify('Nenhum produto encontrado');
      if (result.length > 0) {
        return done(result.map((res) => {
          res.label = `${res.name} - ${res.manufacturer}`;
          return res;
        }));
      }
      return done([]);
    },

    selected(item) {
      this.$router.push({ name: 'products', params: { id: item.code } });
    },
  },
};
</script>

<style>
</style>
