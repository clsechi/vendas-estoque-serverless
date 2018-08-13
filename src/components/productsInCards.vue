<template>
  <div :class="cardsOrder">
    <q-card v-for="product in products"
      :key="product.code"
      inline
      class="q-ma-md card">
      <router-link :to="{ name: 'products', params: { id: product.code } }">
        <q-card-media>
          <custom-image
            class="card-image"
            :source="product.imageURL"
            :name="product.name"
          />
        </q-card-media>
        <q-card-main class="q-pb-xs text-center">
          <p class="name">{{ product.name }}</p>
          <p class="for-price text-primary">R$
            <span class="text-weight-bold price">{{ product.sell_price }},00</span>
          </p>
        </q-card-main>
    </router-link>
    </q-card>
  </div>
</template>

<script>
import customImage from '../components/customImage';

export default {
  name: 'ProductsInCards',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    'custom-image': customImage,
  },
  data() {
    return {};
  },
  computed: {
    cardsOrder() {
      if (this.$q.platform.is.mobile) return 'flex justify-center';
      return 'flex justify-start';
    },
  },
};
</script>

<style scoped>
.for-price {
  font-size: 15px;
}
.price {
  font-size: 23px;
}
.card {
  width: 250px;
  height: 340px;
}
.card .name {
  font-size: 1.10em;
  height: 30px;
}
.card-image {
  height:230px;
  background-color:#fafafa;
}
a {
  text-decoration: none;
}
</style>
