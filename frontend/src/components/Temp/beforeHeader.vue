<template>

    <v-app-bar
            app
            color="indigo"
            dark
    >
        <router-link to="/"><v-toolbar-title>Strike AnyWhere</v-toolbar-title></router-link>
        <v-spacer />

        <div class="text-center">
            <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
        <v-btn class="ma-2 menu" outlined color="indigo">
           <router-link to="/aver">점수관리</router-link>
        </v-btn>
        <v-btn class="ma-2 menu" outlined color="indigo">
          <router-link to="/login">채팅</router-link>
        </v-btn>
            <v-btn class="ma-2 menu" outlined color="indigo">
                <router-link to="/map">인근 볼링장 검색</router-link>
            </v-btn>
        </div>

         <div class="my-2">
             <v-btn small color="error" @click="Auth()" v-bind="this.loginname">{{this.loginname}}</v-btn>
        </div>

    </v-app-bar>


</template>

<script>
    export default {
        name:'boforeHeader',
        props: {
            source: String,
        },
        mounted(){
            this.checkAuth()
        },
        data: () => ({
            return:{
                loginname:"로그인",
                link:'/login',
                auth:"login"
            }
        }),
        mehtods:{
            Auth(){
                if(this.auth!=null){
                    this.$router.replace('/login');
                }else{
                    this.$rouet.replace('/logout');
                }

            },
            checkAuth(){
                if(this.auth!=null){
                    this.status="login"
                    this.link="/logout"
                }
            }
        }
    }
</script>
<style>
    .menu{
        margin-right:30%;
    }
    .bg{
        background-color:blue;
    }

</style>
