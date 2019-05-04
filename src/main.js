import firebase from 'firebase'
import("firebase/functions");
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'
import Meta from 'vue-meta'

// Vue.use(Meta)
VueClipboard.config.autoSetContainer = true // add this line

Vue.use(VueClipboard)
Vue.use(VueAxios, axios)
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
// import moment from 'vue-moment'
// moment.locale('ja');
Vue.use(VueCookie);

// Vue.use(moment);

Vue.config.productionTip = false

// Initialize Firebase
var config = {
 // ここにFirebaseから取得したconfigをペースト
  apiKey: "AIzaSyDI6zQLz7ZD1SmYROrGxHtlZJ69VREhcBk",
  authDomain: "nuxtchat.firebaseapp.com",
  databaseURL: "https://nuxtchat.firebaseio.com",
  projectId: "nuxtchat",
  storageBucket: "nuxtchat.appspot.com",
  messagingSenderId: "826837649516",
  appId: "1:826837649516:web:2f42dff117fb4e08"
};
firebase.initializeApp(config);
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
