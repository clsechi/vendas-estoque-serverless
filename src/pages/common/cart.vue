<template>
  <q-page padding>
    <p class="q-display-1">Meu Carrinho</p>
    <div v-if="items.length === 0">
      <span>Seu carrinho está vazio :(</span>
    </div>
    <div v-else>
      <div
        class="row flex-center"
        v-for="item in items"
        :key="item.product.code"
      >
        <div class="col-12">
          <hr>
        </div>
        <div class="col-1">
          <custom-image
            class="prod-image q-py-sm"
            :source="item.product.imageURL"
            :name="item.product.name"
          />
        </div>
        <div class="col-3 q-ml-md">
          <p> {{ item.product.name }} </p>
        </div>
        <div class="col-2">
          <span> R$ {{ item.product.sell_price }},00 </span>
        </div>
        <div class="col-2">
          <quantity-selector
            :stockQuantity="item.product.quantity"
            :itemQuantity.sync="item.quantity"
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
            @click="removeCartProduct(item)"
          />
        </div>
        <hr>
      </div>
      <hr>
      <div class="row">
        <div class="col-6">
          <span>Total ({{ items.length }} itens):</span>
        </div>
        <div class="col-auto">
           <span> R$ {{ totalOrder }},00 </span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import customImage from '../../components/customImage';
import quantitySelector from '../../components/quantitySelector';

export default {
  name: 'Cart',

  components: {
    'custom-image': customImage,
    'quantity-selector': quantitySelector,
  },

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    ...mapGetters('order', ['items']),

    totalOrder() {
      return this.items.reduce((accumulator, item) => item.product.sell_price * item.quantity);
    },
  },

  methods: {
    ...mapActions('order', [
      'removeProduct',
    ]),

    async removeCartProduct(item) {
      await this.$q.dialog({
        title: 'Confirm',
        message: `Remover ${item.name} do carrinho`,
        ok: 'Remover',
        cancel: 'Cancelar',
      });
      this.removeProduct(item.code);
      this.$q.notify({
        message: 'Reunião deletada com sucesso',
        type: 'positive',
      });
    },
  },
};
</script>

<style scoped>
.prod-image {
  width: 100%;
}
</style>
