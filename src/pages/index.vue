<template>
  <q-page class="flex flex-center">
    <q-card v-for="product in products"
      :key="product.code"
      inline style="width: 250px"
      class="q-ma-md">
      <q-card-media>
        <custom-image
          :source="product.imageURL"
          :name="product.name"
        />
      </q-card-media>
      <q-card-main class="q-pb-xs">
        <p>{{ product.name }}</p>
        <p class="for-price text-primary">Por:
          <span class="text-weight-bold price"> R$ {{ product.sell_price }}</span>
        </p>
      </q-card-main>
      <q-card-actions class="justify-center">
        <q-btn
          class="text-weight-bold q-mb-sm"
          color="secondary"
          label="Saiba Mais"
        />
      </q-card-actions>
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
  font-size: 18px;
}
.price{
  font-size: 23px;
}
</style>
