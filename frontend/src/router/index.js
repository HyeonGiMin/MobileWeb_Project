import Vue from "vue";
import Router from "vue-router";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import store from '../store'
import AboutBowl from '../views/AboutBowl.vue'
import Main from '../views/mainview.vue'
import Update from "../views/Update.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Map from "../views/Map.vue";
import ChatService from '../views/ChatService.vue'
import LoginPage from '../views/Login.vue'
import ScoreRegistService from '../views/SocreRegister.vue'


Vue.use(Router);



const checkAuth = () => (from, to, next) => {
  if (store.getters.getIsAuth) {
  next('/profile') // isAuth === true면 페이지 이동
  }
  else{
    return next() // isAuth === false면 다시 로그인 화면으로 이동
  }


}


export default new Router({
  mode: 'history',
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Main,
        footer: AppFooter
      },
      beforeEnter: checkAuth()
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: AboutBowl,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "Login",
      components: {
        header: AppHeader,
        default: LoginPage,
        footer: AppFooter
      },

    },
    {
      path: '/averReg',
      name: 'averForm',
      components: {
        header:AppHeader,
        default:ScoreRegistService,
        footer: AppFooter
      },

    },

    {
      path: '/chat',
      name: 'Chat',
      components: {
        header:AppHeader,
        default:ChatService,
        footer: AppFooter
      },

    },

    {
      path: "/map",
      name: "map",
      components: {
        header: AppHeader,
        default: Map,
        footer: AppFooter
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/update",
      name: "update",
      components: {
        header: AppHeader,
        default: Update,
        footer: AppFooter,
      },

    },


    {
      path: "/profile",
      name: "Profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      },

    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  store,
});
