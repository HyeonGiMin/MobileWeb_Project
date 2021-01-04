/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import router from "./router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store'
import './plugins/socketPlugin';
import './assets/_common.scss';
import Directives from './plugins/directives';
import vuetify from './plugins/vuetify';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import VueJWT from 'vuejs-jwt'
import VeeValidate from 'vee-validate';
import VueSessionStorage from 'vue-sessionstorage'
import VueSession from 'vue-session'
import BootstrapVue from 'bootstrap-vue'



Vue.use(VeeValidate);
Vue.use(BootstrapVue)
Vue.use(VueSessionStorage)
Vue.use(VueJWT,{
  signKey:'apple'
})
Vue.use(VueSession,{
  persist:false
})
Vue.config.productionTip = false;
Vue.use(Argon)

Vue.use(VueAxios,axios)
Vue.use(Directives);
Vue.use(VueGoogleMaps, {
  load: {
    key:"AIzaSyBRbzrbbUeRDOywyMVLhayGQm2w0zRm_9M",
    libraries: "places" // necessary for places input
  }
});


new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
