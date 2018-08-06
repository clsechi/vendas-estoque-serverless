<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar class="justify-center">
        <div class="text-center">
          <router-link to="/">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Estoque do Sechi"
              class="responsive"
              style="width:70%;"
            />
          </router-link>
        </div>
        <span class="q-headline">Administração</span>
        <q-btn
          class="q-mr-lg q-mt-sm absolute-right"
          icon="exit_to_app"
          color="white"
          round
          dense
          flat
          size="xl"
          @click="$router.push('/logout')"
        />
      </q-toolbar>
      <q-tabs>
        <q-route-tab
          slot="title"
          icon="assignment"
          to="/admin/products"
          replace
          label="Produtos"
        />
        <q-route-tab
          slot="title"
          icon="attach_money"
          to="/admin/sales"
          replace
          label="Vendas"
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
