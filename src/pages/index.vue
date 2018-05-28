<template>
  <q-page class="flex flex-center">
    <q-card inline style="width: 500px">
      <q-card-media>
        <img src="">
      </q-card-media>
      <q-card-title>
        {{ product.name }}
        <q-rating slot="subtitle" v-model="stars" :max="5" />
      </q-card-title>
      <q-card-main>
        <p>$・Italian, Cafe</p>
        <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat round dense icon="event" />
        <q-btn flat label="5:30PM" />
        <q-btn flat label="7:30PM" />
        <q-btn flat label="9:00PM" />
        <q-btn flat color="primary" label="Reserve" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style scoped>

</style>
