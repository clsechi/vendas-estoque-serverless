<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar
        class="q-py-xs justify-center"
        color="primary"
      >
        <div class="q-ml-sm absolute-left">
          <q-btn
            v-if="$router.currentRoute.path !== '/checkout/cart'"
            icon="keyboard_arrow_left"
            text-color="white"
            size="xl"
            round
            dense
            flat
            no-ripple
            @click="$router.push('/')"
          />
        </div>
        <div class="text-center">
          <router-link to="/">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Estoque do Sechi"
              class="responsive"
              style="width:50%;"
            />
          </router-link>
        </div>
        <div class="q-mr-lg absolute-right flex flex-center">
          <q-icon
            name="lock"
            size="25px"
          >
            <q-tooltip>
              Ambiente 100% Seguro
            </q-tooltip>
          </q-icon>
          <q-icon
            name="security"
            size="25px"
          />
        </div>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
      <hr>
      <div class="flex flex-center">
        <div class="q-mt-sm text-center">
          <p class="text-weight-medium">Fale Conosco: (11) 4661-3634 © Estoque do Sechi 2018</p>
        </div>
      </div>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'Checkout',
};
</script>

<style>
</style>
