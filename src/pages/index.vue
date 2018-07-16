<template>
  <q-page class="flex">
    <q-card v-for="product in products"
      :key="product.code"
      inline
      class="q-ma-md card">
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
          <span class="text-weight-bold price">{{ product.sell_price }}</span>
        </p>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
import customImage from '../components/customImage';

export default {
  name: 'PageIndex',
  components: {
    'custom-image': customImage,
  },

  data() {
    return {
      products: [],
      visible: true,
    };
  },

  methods: {
    removeLoader() {
      this.visible = false;
    },
  },
  created() {
    this.$firestore.collection('products').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.products.push(doc.data());
        });
        this.removeLoader();
      })
      .catch((err) => {
        this.$q.notify({
          type: 'negative',
          message: `Erro ao obter produtos, ${err.message}`,
          position: 'top',
        });
        this.removeLoader();
      });
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
  width: 200px;
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
</style>
