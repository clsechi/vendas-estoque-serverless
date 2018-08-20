<template>
  <q-page padding>
    <div class="row flex-center gutter-y-md">
      <div class="col-xs-12 col-md-4 flex justify-center">
        <q-btn
          style="width: 80%"
          color="positive"
          size="lg"
          label="Concluir"
        />
      </div>
      <div class="col-12">
        <q-card>
          <q-card-title class="q-pb-none">
            <span class="q-headline text-primary">Resumo da compra</span>
            <span slot="subtitle">Produtos ({{ order.items.length }})</span>
          </q-card-title>
          <q-card-main class="q-py-none">
            <div
              class="row flex flex-center"
              v-for="item in order.items"
              :key="item.product.code"
            >
              <hr class="col-12">
              <div class="col-auto">
                <custom-image
                  height="70"
                  class="q-py-sm"
                  :source="item.product.imageURL"
                  :name="item.product.name"
                />
              </div>
              <div class="col-xs-8 col-md-6 q-px-md">
                <span class="text-weight-medium"> {{ item.product.name }} </span>
              </div>
              <div class="col-xs-5 col-md-2 q-py-md">
                <span> Quantidade: {{ item.quantity }}</span>
              </div>
              <div class="col-xs-7 col-md-3 q-py-md">
                Valor unitário:
                <span class="text-weight-medium">
                  R$ {{ item.product.sellPrice.toFixed(2) }}
                </span>
              </div>
            </div>
          </q-card-main>
          <hr class="col-12">
          <q-card-main class="row q-subheading q-pt-none">
            <div class="col-xs-12 col-md-4 q-py-xs">
              <span>Entrega:</span>
              <span> A definir</span>
            </div>
            <div class="col-xs-12 col-md-4 q-py-xs">
              <span>Pagamento: A definir</span>
            </div>
            <div class="col-xs-12 col-md-4 q-py-xs">
              <span class="text-weight-medium">Valor Total: R$ {{ totalOrder.toFixed(2) }}</span>
            </div>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 flex justify-center">
        <q-btn
          style="width: 80%"
          color="positive"
          size="lg"
          @click.native="opened = !opened"
          label="Concluir"
        />
      </div>
    </div>
    <div class="text-center q-my-md">
      <p>
        Atualmente não aceitamos pagamentos pela internet, estraremos em contato a partir
        das informações já fornecidas para finalizarmos o pedido.
      </p>
    </div>
    {{ opened }}
    <success-modal
      :status="true"
      :orderId="order.id"
    />
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import customImage from '../../components/customImage';
import successModal from './components/successModal';

export default {
  name: 'Confirmation',

  components: {
    'custom-image': customImage,
    'success-modal': successModal,
  },

  data() {
    return {
      opened: false,
    };
  },

  computed: {
    ...mapGetters('order', ['order']),

    totalOrder() {
      return this.order.items.reduce((acc, item) => { /* eslint-disable-line */
        return acc + (item.product.sellPrice * item.quantity);
      }, 0.00);
    },
  },
};
</script>

<style>

</style>
