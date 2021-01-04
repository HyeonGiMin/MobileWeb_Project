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
      if(this.$session.exists('uid')){
          this.$store.state.uid=this.$session.get('uid');
          this.$store.state.isAuth=true
          this.$store.state.email=this.$session.get('email')
          this.$store.state.jwt=this.$session.get('jwt');
      }
    },
    methods:{
    },
};
</script>
