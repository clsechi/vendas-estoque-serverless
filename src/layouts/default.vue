<template>
  <q-layout view="hHh Lpr fFf">
    <q-layout-header
      reveal
      :reveal-offset="120"
    >
      <q-toolbar
        class="q-py-xs justify-center"
        color="primary"
      >
        <div class="q-ml-lg q-mt-sm fixed-left">
          <q-btn
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
              style="width:70%;"
            />
          </router-link>
        </div>
        <div class="q-mr-lg q-mt-sm fixed-right">
          <cart/>
        </div>
      </q-toolbar>
      <div class="flex flex-center bg-primary">
        <div class="col-10">
          <search/>
        </div>
      </div>
      <q-tabs >
        <q-route-tab
          slot="title"
          :to="{ name: 'categories', params: { id: 'fechaduras' }}"
          label="Fechaduras"
        />
        <q-route-tab
          slot="title"
          :to="{ name: 'categories', params: { id: 'trincos' }}"
          label="Trincos"
        />
        <q-route-tab
          slot="title"
          :to="{ name: 'categories', params: { id: 'fechos' }}"
          label="Fechos"
        />
        <q-route-tab
          slot="title"
          :to="{ name: 'categories', params: { id: 'pivos' }}"
          label="Pivôs"
        />
        <q-route-tab
          slot="title"
          :to="{ name: 'categories', params: { id: 'acessorios' }}"
          label="Acessórios"
        />
      </q-tabs>
    </q-layout-header>

    <q-page-container>
      <router-view />
      <hr>
      <q-btn
        v-back-to-top.animate="{offset: 500, duration: 200}"
        round
        color="teal-5"
        class="fixed-bottom-right"
        style="margin: 0 15px 15px 0"
      >
        <q-icon name="keyboard_arrow_up" />
      </q-btn>
      <div class="flex flex-center">
        <div class="q-mt-sm text-center">
          <p class="text-weight-medium">Fale Conosco: (11) 4661-3634 © Estoque do Sechi 2018 -
            <router-link to="/admin">
              <span>Administração</span>
            </router-link>
          </p>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import search from '../components/search';
import cart from '../components/cart';

export default {
  name: 'LayoutDefault',

  components: {
    search,
    cart,
  },

  data() {
    return {};
  },
};
</script>

<style>
</style>
