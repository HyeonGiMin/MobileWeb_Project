import Vue from 'vue'
import Vuex from 'vuex'
import socket from './modules/socket';
import getters from './Auth/getter';
import actions from './Auth/actions';
import mutations from'./Auth/mutations'


Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';

const state={
  uid:'',
  errorState:'',
  isAuth:false,
  email:'',
  jwt:''
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    socket,
  },
  strict: false,

})
