<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar>
        <q-toolbar-title class="text-center">
          ADMINISTRAÇÃO
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        <q-route-tab
          slot="title"
          icon="assignment"
          to="/"
          replace
          label="Inicio"
        />
        <q-route-tab
          slot="title"
          icon="assignment"
          to="/admin/products"
          replace
          label="Listar Produtos"
        />
        <q-route-tab
          slot="title"
          icon="library_add"
          to="/admin/product/new"
          replace
          label="Criar Produto"
        />
      </q-tabs>
    </q-layout-header>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
