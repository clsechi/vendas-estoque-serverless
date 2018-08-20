<template>
  <q-page padding>
    <div v-if="items.length === 0" class="row">
      <hr class="col">
      <div class="col-12 q-my-xl text-center">
        <span class="q-headline">Seu carrinho está vazio :(</span>
      </div>
      <div class="col-12 q-mt-lg text-center">
        <q-btn
          color="positive"
          label="Continuar comprando"
          size="lg"
          to="/"
        />
      </div>
    </div>
    <div v-else>
      <q-card>
        <q-card-title class="q-pb-none">
          <p class="q-headline text-primary">Meu Carrinho</p>
        </q-card-title>
        <q-card-main class="q-py-none">
          <div
            class="row flex flex-center"
            v-for="item in items"
            :key="item.product.code"
          >
            <hr class="col-12">
            <div class="col-auto">
              <custom-image
                height="70"
                class="q-py-sm"
                :source="item.product.images[0]"
                :name="item.product.name"
              />
            </div>
            <div class="col-xs-8 col-md-3 q-ml-md">
              <span class="text-weight-medium"> {{ item.product.name }} </span>
            </div>
            <div class="col-xs-12 col-md-2 text-center q-py-md q-ml-lg">
              Valor unitário:
              <span class="text-weight-medium">
                R$ {{ item.product.sellPrice.toFixed(2) }}
              </span>
            </div>
            <div class="col-xs-8 col-md-2 flex flex-center">
              <quantity-selector
                :stockQuantity="item.product.stockQuantity"
                :itemQuantity.sync="item.quantity"
              />
            </div>
            <div class="col-xs-8 col-md-2 text-center">
              Subtotal:
              <span class="text-weight-medium">
                 R$ {{ (item.product.sellPrice * item.quantity).toFixed(2) }}
              </span>
            </div>
            <div class="col-auto">
              <q-btn
                icon="remove_shopping_cart"
                color="negative"
                round
                @click="removeCartProduct(item)"
              />
            </div>
          </div>
        </q-card-main>
        <hr class="col-12">
        <q-card-main>
          <div class="row flex justify-end q-subheading q-pt-none">
            <div class="col-2 text-weight-medium">
              <span>Total ({{ items.length }} itens):</span>
            </div>
            <div class="col-2 text-weight-medium">
              <span> R$ {{ totalOrder }},00 </span>
            </div>
          </div>
        </q-card-main>
      </q-card>
      <div class="row q-my-lg flex-center">
        <div class="col-xs-12 col-md-5 flex justify-center q-ma-sm">
          <router-link to="/">
            <span>Escolher mais produtos</span>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-5 flex justify-center q-ma-sm">
          <q-btn
            color="positive"
            icon-right="navigate_next"
            label="Finalizar Compra"
            size="lg"
            :to="{ name: 'register' }"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import customImage from '../../components/customImage';
import quantitySelector from './components/quantitySelector';

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
      return this.items.reduce((acc, item) => { /* eslint-disable-line */
        return acc + (item.product.sellPrice * item.quantity);
      }, 0.00);
    },
  },

  methods: {
    ...mapActions('order', [
      'removeProduct',
    ]),

    async removeCartProduct(item) {
      await this.$q.dialog({
        title: 'Confirm',
        message: 'Remover item do carrinho?',
        ok: 'Remover',
        cancel: 'Cancelar',
      });
      this.removeProduct(item.product.code);
      this.$q.notify({
        message: 'Produto removido',
        type: 'warning',
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
