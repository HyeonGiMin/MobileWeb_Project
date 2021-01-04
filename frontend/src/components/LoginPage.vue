<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default ">
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
                                <small>로그인</small>
                            </div>
                            <form @submit.prevent="onSubmit">
                                <base-input name="uid" placeholder="아이디를 입력하세요" v-model="uid" v-validate="'required'"
                                            class="mb-3"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input name="password" placeholder="비밀번호를 입력하세요" v-model="password" type="password" v-validate="'required'"

                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-checkbox>
                                    아이디 저장하기
                                </base-checkbox>
                                <div class="text-center">

                                    <base-button type="primary"  v-on:click="onSubmit" class="my-4 ml-4">로그인</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small></small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <small></small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import { EventBus } from "../Service/eventBus";

    export default {
        name: 'TestLogin',
        data: () => ({
            test:null,
            uid: '',
            password: ''
        }),
        methods: {
            ...mapActions(['login']),
            async onSubmit () {
                this.$validator.validateAll()
                if (!this.errors.any()) {
                    try {

                        let loginResult = await this.login({ uid: this.uid, password: this.password })

                        if(loginResult==true){
                            this.$session.start();
                            this.$session.set('uid', this.$store.state.uid);
                            this.$session.set('jwt', this.$store.state.jwt);
                            this.$session.set('email', this.$store.state.email);
                            alert(this.$store.state.uid+"님 환영합니다.")
                            EventBus.$emit("Login");
                            if (loginResult) this.goToPages()
                        }else if(loginResult==false){
                            alert("로그인 오류!!!")
                        }


                    } catch (err) {
                        console.error(err)
                    }
                } else {
                    console.log('validate err')
                }
            },
            goToPages () {

                this.$router.push('/');
            }
            ,
            clear () {
                this.name = ''
                this.email = ''
                this.select = null
                this.checkbox = null
                this.$validator.reset()
            },
        },
        computed: {
            ...mapGetters({
                errorState: 'getErrorState'
            })
        },
        mounted() {
            this.test=this.$store.state

        }
    }
</script>
<style scoped>

</style>