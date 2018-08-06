<template>
  <div class="container">
    <q-page padding class="docs-input row flex justify-center">
      <my-product-form
        :button="button"
        :title="title"
        :code="code"
      />
    </q-page>
  </div>
</template>

<script>
import productForm from '../components/productForm';

export default {
  name: 'EditProduct',
  components: {
    'my-product-form': productForm,
  },

  data() {
    return {
      title: 'Editar Produto',
      button: {
        label: 'Atualizar Produto',
      },
      code: this.$route.params.id.toString(),
    };
  },
};
</script>

<style scoped>
</style>
