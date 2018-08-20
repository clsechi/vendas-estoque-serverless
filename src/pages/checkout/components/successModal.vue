<template>
  <q-modal
    v-model="opened"
    minimized
    @hide="$router.push('/')"
  >
    <div class="q-pa-lg text-center">
      <p class="q-display-1 text-center">Obrigado por confiar no
        <span class="text-primary">
          Estoque do Sechi
        </span>
      </p>
      <p class="q-headline text-positive">Seu pedido foi enviado com sucesso!</p>
      <p>O numero dele é {{ orderId }}</p>
      <p>Aguarde o contato da nossa equipe.</p>
      <q-btn
        color="primary"
        @click="opened = false"
        label="Ok"
      />
    </div>
  </q-modal>
</template>

<script>
export default {
  name: 'SuccessModal',

  props: {
    status: {
      type: Boolean,
      required: true,
    },
    orderId: {
      required: true,
    },
  },

  data() {
    return {
      opened: true,
    };
  },
};
</script>

<style>
</style>
