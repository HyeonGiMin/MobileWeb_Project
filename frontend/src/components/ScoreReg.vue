<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>점수를 입력하세요!!</small>
                            </div>
                            <base-input name="score" v-model="score"
                                        type="number"
                                        addon-left-icon="fas fa-bowling-ball">
                            </base-input>
                            <div class="text-right">
                                <base-button @click="joinSubmit" class="primary mt-3" dark>등록</base-button>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'ScoreRegister',
        data() {
            return {
                user:'',
                email:'',
                score:null,
                test:null
            };
        },
        mounted(){
            this.user=this.$store.state.uid
            this.email=this.$store.state.email
        },
        methods: {
            joinSubmit() {
                this.axios.post('/api/score/insert',{params:{
                        name:this.user,
                        score:this.score,
                        email:this.email
                    }})
                    .then((data)=>{
                        this.test=data;
                        alert("등록되었습니다");
                        this.$router.replace('/profile');
                    })
            },
        },
    };
</script>

<style scoped>

</style>