<template>
  <div class="container">
    <q-page padding class="docs-input row flex justify-center">
      <div class="col-xs-8 col-sm-8 col-md-8">
        <h3>Login</h3>
        <q-input
          v-model="form.email"
          type="email"
          @blur="$v.form.email.$touch"
          @keyup.enter="signin"
          :error="$v.form.email.$error"
          float-label="Email"
        />

        <q-input
          v-model="form.password"
          @blur="$v.form.password.$touch"
          @keyup.enter="signin"
          :error="$v.form.password.$error"
          type="password"
          float-label="Senha"
        />

        <q-btn
          class="btn-submit float-right"
          type="submit"
          :loading=loading
          color="primary"
          @click="signIn"
          label="Login"
          icon="play_arrow"
        />
      </div>
    </q-page>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'LoginPage',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      loading: false
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    signIn () {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        this.$q.notify('Por favor preencha os campos corretamente.')
        return
      }
      this.loading = true
      this.$auth.signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.loading = false
          this.$q.notify('Login efetuado com sucesso')
        })
        .catch(err => {
          this.loading = false
          this.$q.notify('Ouve um problema')
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.btn-submit {
  margin-top: 20px;
}
</style>
