import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import Moment from 'moment'
// app.js

Vue.use(Vuetify, {
  theme: {
    primary: '#860D0D',
    secondary: '#424243',
    accent: '#AF9C87',
    error: '#ff0000'
  }
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Moment,
  render: h => h(App)
})
