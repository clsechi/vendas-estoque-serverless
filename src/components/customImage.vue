<template>
  <div class="relative-position">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <img
        :src="finalSource"
        :alt="name"
        class="responsive q-pt-md"
        @load="removeLoader"
      />
    </transition>
    <q-inner-loading :visible="visible"/>
  </div>
</template>

<script>
export default {
  name: 'CustomImage',

  props: {
    source: {
      required: true,
    },
    name: {
      required: true,
    },
  },

  data() {
    return {
      defaultImage: 'https://firebasestorage.googleapis.com/v0/b/vendas-estoque.appspot.com/o/indisponivel.png?alt=media&token=b1789f7a-c7ca-47f8-a096-a45362f823c6',
      visible: true,
    };
  },

  computed: {
    finalSource() {
      if (this.source === '') return this.defaultImage;
      return this.source;
    },
  },

  methods: {

    removeLoader() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
</style>
