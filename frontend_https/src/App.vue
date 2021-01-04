<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  },
    beforeMount() {
      console.log("Chekcing session");
      if(this.$session.exists('uid')){
          console.log("Session 존재");
          this.$store.state.uid=this.$session.get('uid');
          this.$store.state.isAuth=true
          this.$store.state.email=this.$session.get('email')
          this.$store.state.jwt=this.$session.get('jwt');
      }else{
          console.log("Session  없다");
        }
    },
    methods:{
    },
};
</script>
