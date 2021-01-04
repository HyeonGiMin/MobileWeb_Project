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
                                <label>에버리지</label>
                                <base-input name="average" v-model="average" v-validate="'required'"
                                            type="number"
                                            addon-left-icon="fas fa-bowling-ball">
                                </base-input>
                                <label>목표 에버리지</label>
                                <base-input name="goal" v-model="goal" v-validate="'required'"
                                            type="number"
                                            addon-left-icon="fas fa-flag">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary"   v-on:click="onSubmit" class="my-4">수정하기</base-button>
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
import axios from 'axios'

    export default {
        name: 'Update',
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

                this.$validator.validateAll()
                if (!this.errors.any()) {
                    try {

                            axios.put('/api/user/update', {
                                params: {
                                    'uid': this.uid,
                                    'name':this.name,
                                    'average':this.average,
                                    'goal':this.goal
                                }
                            }).then((response)=>{

                                if(response.data.status==200){
                                    this.goToPages()
                                }else{
                                    alert("사용자 수정 오류!!");
                                }
                            })

                    } catch (err) {
                        console.error(err)
                    }
                } else {
                    console.log('validate err')
                }
            },
            goToPages () {
                alert("사용자 수정 성공 메인 페이지로 이동합니다")
                this.$router.push('/')
            },
        },
        created(){
            this.uid=this.$store.state.email
            axios.get('/api/user/info', {
                params: {
                    'uid':this.$store.state.email
                }
            }).then((response)=>{
                if(response.data.status==200){
                    this.password=response.data.password;
                    this.name=response.data.name;
                    this.average=response.data.average;
                    this.goal=response.data.goal;
                }else{
                    alert("사용자 수정 오류!!");
                }
            })
        },
    }
</script>
<style>
</style>
