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
                                <small>Or sign up with credentials</small>
                            </div>
                            <form role="form">
                                <label>이름</label>
                                <base-input name="name"  v-model="name" v-validate="'required'"
                                            class="mb-3"
                                            addon-left-icon="ni ni-single-02">
                                </base-input>
                                <label>아이디(E-mail)</label>
                                <base-input name="uid"  v-model="uid" v-validate="'required'"
                                            class="mb-3"
                                            type="email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <label>비밀번호</label>
                                <base-input name="password" v-model="password" v-validate="'required'"
                                            type="password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <label>비밀번호 확인</label>
                                <base-input name="passwordRe"  v-model="passwordRe"
                                            type="password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <label>에버리지</label>
                                <base-input name="average" v-model="average" v-validate="'required'"
                                            type="number"
                                            addon-left-icon="fas fa-bowling-ball">
                                </base-input>
                                <label>목표 에버리지</label>
                                <base-input name="goal" v-model="goal" v-validate="'required'"
                                            type="number"
                                            addon-left-icon="fas fa-bowling-ball">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary"   v-on:click="onSubmit" class="my-4">Create account</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>


    export default {
        name: 'TestLogin',
        data: () => ({
            test:null,
            uid: '',
            password: '',
            passwordRe: '',
            name:'',
            average:0,
            goal:0
        }),
        methods: {

            async onSubmit () {
                alert("!!")
                this.$validator.validateAll()
                if (!this.errors.any()) {
                    try {
                        alert("!!")
                        console.log(this.uid)
                        if(this.password===this.passwordRe){
                            alert("!!!")
                            this.axios.post('/api/user/reg', {
                                params: {
                                    'uid': this.uid,
                                    'password': this.password,
                                    'name':this.name,
                                    'average':this.average,
                                    'goal':this.goal
                                }
                            }).then((response)=>{
                                alert("!!!!!")
                                if(response.data.status==200){
                                    this.goToPages()
                                }else{
                                    alert("사용자 등록 오류!!");
                                }
                            })

                        }else{
                            alert("비밀번호가 같지 않습니다.")
                        }

                    } catch (err) {
                        console.error(err)
                    }
                } else {
                    console.log('validate err')
                }
            },
            setUserInfo : async (uid,password,name,average) => {
                alert(uid+":"+password+":"+name+":"+average)
                return
            },

            goToPages () {
                alert("사용자 등록 성공 로그인 페이지로 이동합니다")
                this.$router.push('/login')
            },
        },
        computed: {
        },
        mounted() {
            this.test=this.$store.state

        }
    }
</script>
<style>
</style>
