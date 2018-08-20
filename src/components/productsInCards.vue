<template>
  <div :class="cardsOrder">
    <q-card v-for="product in products"
      :key="product.code"
      inline
      class="q-ma-md card">
      <router-link :to="{ name: 'products', params: { id: product.code } }">
        <q-card-media class="text-center">
          <custom-image
            height="230"
            :source="product.images[0]"
            :name="product.name"
          />
        </q-card-media>
        <q-card-main class="text-center">
          <p class="name">{{ product.name }}</p>
          <p class="for-price text-primary">R$
            <span class="text-weight-bold price">{{ product.sellPrice.toFixed(2) }}</span>
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
  width: 230px;
  height: 340px;
}
.card .name {
  font-size: 1.10em;
  height: 30px;
}
.custom-image {
  background-color:#fafafa;
}
a {
  text-decoration: none;
}
</style>
