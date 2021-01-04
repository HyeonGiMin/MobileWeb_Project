<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" alt="logo"  class="img-fluid">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png"  class="img-fluid">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>


                        <span class="nav-link-inner--text">가이드</span>
                    </a>
                    <div class="dropdown-menu-inner mt-2">
                        <router-link to="/about"  @click.native="close" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-air-baloon"></i>

                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">볼링 즐기기!</h6>
                                <p class="description d-none d-md-inline-block mb-0">   <i class="ni ni-bear-2 d-lg-none"></i>
                                간단한 볼링 규칙과 치는 방식에 대해 알고 치면<br> 재미는 두배!!</p>
                            </div>
                        </router-link>

                        <div v-bind:class="{ hideblock: box}">
                        <router-link to="/register"  @click.native="close"  class="media d-flex align-items-center" >
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">볼링 더 재밌게 즐기기!!</h5>
                                <p class="description d-none d-md-inline-block mb-0">
                                    회원으로 가입하시고 점수를 기록하며<br> 더 재밌게 즐기세요!!
                                </p>
                            </div>
                        </router-link>
                        </div>
                    </div>

                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">메뉴</span>
                    </a>
                    <router-link to="/profile" @click.native="close" class="dropdown-item"><i class="ni ni-circle-08"></i>프로필</router-link>
                    <router-link to="/chat"  @click.native="close"  class="dropdown-item"><i class="ni ni-chat-round"></i>채팅</router-link>
                    <router-link to="/map"  @click.native="close" class="dropdown-item"><i class="ni ni-compass-04"></i>지도</router-link>
                    <router-link to="/averreg"  @click.native="close" class="dropdown-item"><i class="ni ni-archive-2"></i>점수등록</router-link>
                </base-dropdown>
                <li class="nav-item">

                        <span class="nav-link-inner--text d-lg-none" @click.native="close" v-on:click="checking"><i class="mr-1"
                                                                 v-bind:class="{ 'fas fa-sign-in-alt': icon, 'fas fa-sign-out-alt': icon2 }"></i>{{this.state}}</span>

                </li>

                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a  href="javascript:void(0)" v-on:click="checking()" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="mr-1"
                          v-bind:class="{ 'fas fa-sign-in-alt': icon, 'fas fa-sign-out-alt': icon2 }"></i>

                </span>
                        <span class="nav-link-inner--text" >{{this.state}}</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "../components/Temp/BaseNav.vue";
import BaseDropdown from "../components/Temp/BaseDropdown.vue";
import CloseButton from "../components/Temp/CloseButton.vue";
import { EventBus } from "../Service/eventBus";


export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },data(){
      return{
          state:'',
          icon:null,
          icon2:null,
          box:false

      }
    },
    mounted() {
      if(this.$store.state.isAuth==false){
          this.login()


      }else if(this.$store.state.isAuth==true){
            this.logout();

      }
    },
    created(){
      EventBus.$on('Login',()=>{
          console.log(this.$store.state.isAuth==true)
           if(this.$store.state.isAuth==true){
            this.logout();
          }
      })
        EventBus.$on('Logout',()=>{

             this.login();
        })

    },
    methods:{
      close:function(e){
          EventBus.$emit('closeNav',e);
      },
      checking:function(e){
          this.close(e)
          if(this.state=="로그인"&&this.$store.state.isAuth==false){
              this.$router.push('/login');
          }else if(this.state=="로그아웃"&&this.$store.state.isAuth==true){
              this.$store.state.uid=''
              this.$store.state.email=""
              this.$store.state.isAuth=false
              this.$store.state.errorState=''
              this.$store.state.jwt=''
              if(this.$store.state.isAuth==false){
                    this.login()
              }
              this.$session.clear();
              this.$session.destroy();
              alert("로그아웃 되었습니다.")
              this.$router.push('/');
          }
      },
        login:function () {
            this.state="로그인"
            this.icon=true;
            this.icon2=false;
            this.box=false;
        },
        logout:function(){
            this.state="로그아웃"
            this.icon=false;
            this.icon2=true;
            this.box=true
        }
    },


};
</script>
<style>
.hideblock{
  display: none;
}
</style>
