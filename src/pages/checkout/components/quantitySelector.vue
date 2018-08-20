<template>
  <div>
    <q-btn
      icon="remove"
      size="md"
      no-ripple
      dense
      @click="validateQuantity(-1)"
    />
    <span class="q-mx-md"> {{ quantity }} </span>
    <q-btn
      icon="add"
      size="md"
      no-ripple
      dense
      @click="validateQuantity(+1)"
    />
  </div>
</template>

<script>
export default {
  name: 'Quantity',

  props: {
    stockQuantity: {
      type: Number,
      required: true,
    },
    itemQuantity: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      quantity: this.itemQuantity,
    };
  },

  methods: {
    validateQuantity(value) {
      const validate = this.quantity + value;
      if (validate > 0 && validate <= this.stockQuantity) {
        this.quantity = validate;
        this.updateQuantity();
      }
    },

    updateQuantity() {
      this.$emit('update:itemQuantity', this.quantity);
    },
  },
};
</script>

<style>
</style>
