<template>
  <div class="flex">
    <q-btn
      icon="shopping_cart"
      color="white"
      round
      dense
      flat
      size="xl"
      @click="$router.push({ name: 'cart'})"
    />
    <span class="badge"> {{ items.length }} </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartIcon',
  data() {
    return {};
  },

  computed: {
    ...mapGetters('order', ['items']),
  },
};
</script>

<style scoped>
.badge {
   position: relative;
   top: 5px;
   right: 24px;
   font-size:.7em;
   background:yellow;
   color:black;
   width:18px;
   height:18px;
   text-align:center;
   line-height:18px;
   border-radius:50%;
   box-shadow:0 0 1px #333;
}
</style>
