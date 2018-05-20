<template>
  <q-page padding class="docs-input">
    <div style="width: 500px; max-width: 90vw;">
      <q-input v-model="text" float-label="Float Label" placeholder="Gigi" />
      <q-input v-model="text" float-label="Float Label" placeholder="Gigi" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>
</style>
