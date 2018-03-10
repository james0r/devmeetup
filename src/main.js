import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import Moment from 'moment'
import DateFilter from './filters/date'
// app.js

Vue.use(Vuetify, {
  theme: {
    primary: '#860D0D',
    secondary: '#424243',
    accent: '#AF9C87',
    error: '#ff0000'
  }
})

Vue.filter('date', DateFilter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Moment,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyAo7m3LZyKLL4TZ7WDcxl1V0CnYA3XCKb4",
    authDomain: "devmeetup-vue-vuetify.firebaseapp.com",
    databaseURL: "https://devmeetup-vue-vuetify.firebaseio.com",
    projectId: "devmeetup-vue-vuetify",
    storageBucket: "devmeetup-vue-vuetify.appspot.com"
    })
  }
})
