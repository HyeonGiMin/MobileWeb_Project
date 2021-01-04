<template>
    <Score></Score>
</template>

<script>
    import ScoreRegister from '../components/ScoreReg.vue'
    import store from '../store'
    import router from '../router'

    export default {
        name: 'ScoreRegistService',
        components: {
            Score:ScoreRegister
        },
        mounted(){
            this.requireAuth()
        },
        updated(){
            this.requireAuth()
        },
        methods:{
            requireAuth : (next) => {

                if (store.getters.getIsAuth||store.state.isAuth==true) {

                }
                else{
                    alert("로그인 시 이용 가능합니다")
                    router.push('/') // isAuth === false면 다시 로그인 화면으로 이동
                }


            }
        }
    }
</script>

<style scoped>

</style>