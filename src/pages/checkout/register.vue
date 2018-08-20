<template>
  <q-page padding>
    <p class="q-display-1">Cadastro</p>
    <hr>
    <p class="text-center q-subheading">
      Antes de continuar precisamos de algumas informações
    </p>
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <q-card class="q-ma-sm">
          <q-card-title class="q-pb-none">
            Sobre você
          </q-card-title>
          <q-card-main>
            <q-field
              helper="Ex: nome@email.com"
              :error="$v.client.email.$error"
              error-label="Campo obrigatório"
            >
              <q-input
                v-model="client.email"
                @blur="$v.client.email.$touch"
                type="email"
                float-label="Email"
              />
            </q-field>
            <q-field
              helper="Está sendo um prazer te conhecer"
              :error="$v.client.name.$error"
              error-label="Campo obrigatório"
            >
              <q-input
                v-model="client.name"
                @blur="$v.client.name.$touch"
                type="text"
                float-label="Nome Completo"
              />
            </q-field>
            <q-field
              helper="Ex: 12/04/1995"
              :error="$v.client.birth.$error"
              error-label="Campo obrigatório"
            >
              <q-input
                v-model="client.birth"
                @blur="$v.client.birth.$touch"
                type="text"
                float-label="Data de nascimento"
              />
            </q-field>
            <q-field
              helper="Ex: (11) 91458-4589"
              :error="$v.client.phone.$error"
              error-label="Campo obrigatório"
            >
              <q-input
                v-model="client.phone"
                @blur="$v.client.phone.$touch"
                type="text"
                float-label="Telefone"
              />
            </q-field>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-6">
        <q-card class="q-ma-sm">
          <q-card-title class="q-pb-none">
            Sobre a entrega
          </q-card-title>
          <q-card-main>
            <q-field
              helper="Digite somente números"
              :error="$v.client.address.cep.$error"
              error-label="Campo obrigatório"
            >
              <q-input
                v-model="client.address.cep"
                @blur="$v.client.address.cep.$touch"
                type="text"
                float-label="CEP"
              />
            </q-field>
            <q-field
              helper="Ex: Rua Simão"
              :error="$v.client.address.street.$error"
              error-label="Campo obrigatório"
            >
              <q-input
                v-model="client.address.street"
                @blur="$v.client.address.street.$touch"
                type="text"
                float-label="Logradouro"
              />
            </q-field>
            <q-field
              helper="Ex: 2589"
              :error="$v.client.address.number.$error"
              error-label="Campo obrigatório"
            >
              <q-input
                v-model="client.address.number"
                @blur="$v.client.address.number.$touch"
                type="text"
                float-label="Número"
              />
            </q-field>
            <q-field
              helper="Ex: Vila Mariana"
              :error="$v.client.address.neighborhood.$error"
              error-label="Campo obrigatório"
            >
              <q-input
                v-model="client.address.neighborhood"
                @blur="$v.client.address.neighborhood.$touch"
                type="text"
                float-label=" Bairro"
              />
            </q-field>
            <q-field
              helper="Ex: São Paulo"
              :error="$v.client.address.city.$error"
              error-label="Campo obrigatório"
            >
              <q-input
                v-model="client.address.city"
                @blur="$v.client.address.city.$touch"
                type="text"
                float-label="Cidade"
              />
            </q-field>
            <q-field
              helper="Selecione o estado"
              :error="$v.client.address.state.$error"
              error-label="Campo obrigatório"
            >
              <q-select
                v-model="client.address.state"
                @blur="$v.client.address.state.$touch"
                type="text"
                float-label="Estado"
                :options="states"
              />
            </q-field>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-12">
        <q-btn
          class="float-right q-ma-md"
          color="positive"
          icon-right="navigate_next"
          size="lg"
          label="Continuar"
          @click="sendOrder"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
import states from '../../utils/states.json';

export default {
  name: 'Checkout',

  data() {
    return {
      client: {
        name: '',
        email: '',
        phone: '',
        birth: '',
        address: {
          cep: '',
          street: '',
          number: '',
          neighborhood: '',
          city: '',
          state: '',
        },
      },
      states,
    };
  },

  validations: {
    client: {
      name: { required },
      email: { required, email },
      phone: { required },
      birth: { required },
      address: {
        cep: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(8),
        },
        street: { required },
        number: { required },
        neighborhood: { required },
        city: { required },
        state: { required },
      },
    },
  },

  computed: {
    ...mapGetters('order', ['order']),
  },

  methods: {
    ...mapActions('order', [
      'addClientInfo',
      'createOrder',
    ]),
    async sendOrder() {
      // this.$v.$touch();

      // if (this.$v.client.$error) {
      //   this.$q.notify({
      //     message: 'Por favor preencha os campos corretamente.',
      //   });
      //   return;
      // }

      try {
        // await this.addClientInfo(this.client);
        // await this.createOrder(this.order);
        this.$router.push({ name: 'confirmation' });
      } catch (err) {
        this.$q.notify({
          message: 'Ops! Ocorreu um erro',
        });
      }
    },
  },
};
</script>

<style>
</style>
