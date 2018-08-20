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
        class=""
        :height="height"
        @load="visible = !visible"
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
    height: {
      required: true,
      type: String,
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
      if (!this.source) return this.defaultImage;
      return this.source;
    },
  },
};
</script>

<style scoped>
</style>
