import { initializeApp } from 'firebase';

const config = {
  apiKey: 'AIzaSyAYx5FF9Srg2AD9h3FK4y-95Y1Y4TVIUW8',
  authDomain: 'vendas-estoque.firebaseapp.com',
  databaseURL: 'https://vendas-estoque.firebaseio.com',
  projectId: 'vendas-estoque',
  storageBucket: 'vendas-estoque.appspot.com',
  messagingSenderId: '95591095931',
};

const fireApp = initializeApp(config);

const AUTH = fireApp.auth();

fireApp.firestore().settings({ timestampsInSnapshots: true });
const DB = fireApp.firestore();

const STORAGE = fireApp.storage();

export default ({ Vue }) => {
  Vue.prototype.$auth = AUTH;
  Vue.prototype.$firestore = DB;
  Vue.prototype.$storage = STORAGE;
};
