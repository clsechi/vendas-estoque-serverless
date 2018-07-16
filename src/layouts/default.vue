<template>
  <q-layout view="hHh Lpr fFf">
    <q-layout-header class="flex flex-center">
      <q-toolbar
        style="height: 70px;"
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu"/>
        </q-btn>

        <div class="text-center">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Estoque do Sechi"
            class="responsive q-mt-sm"
            style="width:70%;"
          />
        </div>

        <q-search
          v-model="terms"
          placeholder="O que você precisa?"
          clearable
          inverted-light
          hide-underline
          style="width:70%"
          color="white"
          dark
        >
          <q-autocomplete
            separator
            @search="search"
            @selected="selected"
          />
        </q-search>
        <q-icon
          class="q-ml-sm float-right"
          name="shopping_cart"
          color="white"
          size="35px"
        />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
        :overlay="false"
      >
      <q-list-header>Categorias</q-list-header>
        <q-item @click.native="$router.push('/categorias/fechaduras')">
          <q-item-side icon="school" />
          <q-item-main label="Fechaduras" sublabel="fechaduras e ..."/>
        </q-item>
        <q-item @click.native="$router.push('/categorias/trincos')">
          <q-item-side icon="school" />
          <q-item-main label="Trincos" sublabel="..."/>
        </q-item>
        <q-item @click.native="$router.push('/categorias/fechos')">
          <q-item-side icon="school" />
          <q-item-main label="Fechos" sublabel="..."/>
        </q-item>
        <q-item @click.native="$router.push('/categorias/pivos')">
          <q-item-side icon="school" />
          <q-item-main label="Pivôs" sublabel="..."/>
        </q-item>
        <q-item @click.native="$router.push('/categorias/acessorios')">
          <q-item-side icon="school" />
          <q-item-main label="Acessórios" sublabel="..."/>
        </q-item>
      <q-list-header>Administração</q-list-header>
        <q-item @click.native="$router.push('/admin')">
          <q-item-side icon="school" />
          <q-item-main label="Administração"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
      <hr>
      <div class="flex flex-center">
        <div class="q-mt-sm">
          <p class="text-weight-medium">Fale Conosco: (11) 4661-3634 © Estoque do Sechi 2018</p>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'LayoutDefault',
  data() {
    return {
      leftDrawerOpen: true,
      // this.$q.platform.is.desktop
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>
</style>
