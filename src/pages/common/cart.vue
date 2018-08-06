<template>
  <q-page padding>
    <p class="q-display-1">Meu Carrinho</p>
    {{ items }}
    <hr>
    <div
      class="flex flex-center"
      v-for="item in items"
      :key="item.product.code"
    >
      <div class="col-1">
          <custom-image
          class="prod-image"
          :source="item.product.imageURL"
          :name="item.product.name"
        />
      </div>
      <div class="col-3">
        <p> {{ item.product.name }} </p>
      </div>
      <div class="col-2">
        <span> R$ {{ item.product.sell_price }},00 </span>
      </div>
      <div class="col-2">
        <q-btn
          icon="remove"
          size="md"
          no-ripple
          dense
          @click="updateQuantity(-1)"
        />
        <span class="q-mx-md"> {{ item.quantity }} </span>
        <q-btn
          icon="add"
          size="md"
          no-ripple
          dense
          @click="updateQuantity(+1)"
        />
      </div>
      <div class="col-2">
        <span> R$ {{ item.product.sell_price * item.quantity }},00 </span>
      </div>
      <div class="col-1">
        <q-btn
          icon="delete"
          color="negative"
          round
        />
      </div>
    </div>
    <hr>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import customImage from '../../components/customImage';

export default {
  name: 'Cart',

  components: {
    'custom-image': customImage,
  },

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    ...mapGetters('order', ['items']),
  },

  methods: {
    ...mapActions('order', [
      'removeProduct',
    ]),

    updateQuantity(value) {
      const validate = this.quantity + value;
      if (validate > 0 && validate <= this.product.quantity) this.quantity = validate;
    },
  },
};
</script>

<style scoped>
.prod-image {
  width: 100%;
}
</style>
