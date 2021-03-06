// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRangedatePicker from 'vue-rangedate-picker';
Vue.use(require('vue-moment'));

Vue.use(VueAxios, axios);
Vue.use(VueRangedatePicker);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})