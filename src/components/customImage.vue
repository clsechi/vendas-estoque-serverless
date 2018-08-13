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
        class="responsive"
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
      defaultImage: '/assets/unavailable.png',
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
