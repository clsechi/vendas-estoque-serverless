<template>
  <div class="container">
    <q-page class="docs-input row flex justify-center">
      <my-product-form
        :button="button"
        :title="title"
      />
    </q-page>
  </div>
</template>

<script>
import productForm from '../../components/productForm';

export default {
  name: 'NewProduct',
  components: {
    'my-product-form': productForm,
  },

  data() {
    return {
      title: 'Cadastrar Novo Produto',
      button: {
        label: 'Criar Produto',
      },
    };
  },
};
</script>

<style scoped>
</style>
