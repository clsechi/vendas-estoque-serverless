<template>
  <q-page padding>
    <div class="flex">
      <div class="col-12">
        <q-breadcrumbs
          separator=">"
          color="light"
        >
          <q-breadcrumbs-el label="Estoque do Sechi" to="/" />
          <q-breadcrumbs-el
            :label="product.category"
            :to="{ name: 'categories', params: { id: product.category.toLowerCase() }}"
          />
          <q-breadcrumbs-el :label="product.name" />
        </q-breadcrumbs>
      </div>
    </div>
    <hr>
    <div class="row q-mt-sm">
      <div class="col-xs-12 col-md-5 text-center">
        <custom-image
          class="card-image"
          :source="product.imageURL"
          :name="product.name"
        />
      </div>
      <div class="col-xs-12 col-md-7">
        <span> {{ product.manufacturer }} </span>
        <p class="q-display-1 text-weight-bolder"> {{ product.name }} </p>
        <p class="text-muted">Cód: {{ product.code }}</p>
        <div class="row flex-center">
          <div class="col-xs-12 col-md-12 text-center">
            <p class="for-price text-primary">R$
              <span class="text-weight-bold price">{{ product.sell_price }},00</span>
            </p>
          </div>
          <div class="col-xs-12 col-md-12 text-center">
            <q-btn
              label="Comprar"
              color="positive"
              size="xl"
              style="width: 80%"
              @click="addProductTOCart"
            />
          </div>
        </div>
      </div>
    </div>
    <hr class="q-mt-xl">
    <div class="row q-mt-md">
      <div class="col-xs-12 col-md-6">
        <p class="q-headline">Descrição</p>
        <p> {{ product.description }} </p>
      </div>
      <div class="col-xs-12 col-md-6">
        <p class="q-headline">Ficha Técnica</p>
        <q-list
          striped
          no-border
        >
          <q-item>
            <q-item-side left class="datasheet-title">
              Produto:
            </q-item-side>
            <q-item-main>
              {{ product.category }}
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-side left class="datasheet-title">
              Fabricante:
            </q-item-side>
            <q-item-main>
              {{ product.manufacturer }}
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-side left class="datasheet-title">
              Cor:
            </q-item-side>
            <q-item-main>
              {{ product.color }}
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-side left class="datasheet-title">
              Material:
            </q-item-side>
            <q-item-main>
              {{ product.material }}
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-side left class="datasheet-title">
              Dimensões:
            </q-item-side>
            <q-item-main>
              {{ product.size }}
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-side left class="datasheet-title">
              Observações:
            </q-item-side>
            <q-item-main>
              {{ product.obs }}
            </q-item-main>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import customImage from '../../components/customImage';

export default {
  name: 'PageIndex',
  components: {
    'custom-image': customImage,
  },

  data() {
    return {
      product: '',
      code: this.$route.params.id,
    };
  },

  methods: {
    ...mapActions('order', [
      'addProduct',
    ]),

    addProductTOCart() {
      const item = {
        product: this.product,
        quantity: 1,
      };
      this.addProduct(item);
      this.$q.notify({
        message: 'Produto adicionado ao carrinho',
        type: 'positive',
        color: 'positive',
      });
      this.$router.push('/cart');
    },

    findProduct() {
      this.product = this.products.find(prod => prod.code === this.code);
    },

  },

  computed: {
    ...mapGetters('product', ['products']),
  },

  beforeMount() {
    this.findProduct();
  },
};
</script>

<style scoped>
.for-price {
  font-size: 24px;
}
.price {
  font-size: 40px;
}
.text-muted{
  opacity: 0.5;
}
.datasheet-title {
  width: 40%;
}
hr {
  opacity: 0.5;
}
</style>
