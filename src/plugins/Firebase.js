import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAYx5FF9Srg2AD9h3FK4y-95Y1Y4TVIUW8',
  authDomain: 'vendas-estoque.firebaseapp.com',
  databaseURL: 'https://vendas-estoque.firebaseio.com',
  projectId: 'vendas-estoque',
  storageBucket: 'vendas-estoque.appspot.com',
  messagingSenderId: '95591095931'
}

const fireApp = firebase.initializeApp(config)

export const AUTH = fireApp.auth()

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
}
