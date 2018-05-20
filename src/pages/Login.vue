<template>
  <q-page padding class="docs-input">
    <div style="width: 500px; max-width: 90vw;">
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
        type="submit"
        :loading=loading
        color="primary"
        @click="signIn"
        label="Login"
      />
    </div>
  </q-page>
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
          alert('connected')
        })
        .catch(err => {
          this.loading = false
          alert('erro')
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
