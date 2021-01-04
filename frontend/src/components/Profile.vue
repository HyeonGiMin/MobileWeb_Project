<template>
    <div>
        <div class="row">
            <div class="card-profile-stats d-flex justify-content-center col-12">
                <div class="text-center mt-5">
                    <h1>{{this.user}}님
                        <span class="font-weight-light"></span>
                    </h1>
                    <div class="h6 font-weight-300"></div>
                    <div class="h5 mt-4">목표 애버리지까지 <span class="h3" style="color:blue">{{this.diff}}점</span> 남았습니다!!</div>

                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-12 col-xl-6">
                <div class="card-profile-actions py-4 mt-lg-0">
                    <div style="display: inline-block" class="mr-3">
                        <div>
                            <span class="h5">{{this.goal}}</span>
                        </div>
                        <div>
                            <span class="h5">목표 애버리지</span>
                        </div>

                    </div>
                    <div style="display: inline-block">
                        <div>
                            <span class="h5">{{this.average}}</span>
                        </div>
                       <div>
                           <span class="h5">애버리지</span>
                       </div>

                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-6">
                <div class="card-profile-actions py-4 mt-lg-0">
                    <base-button type="primary" size="sm" class="mr-4" v-on:click="goToUpdate">회원수정
                    </base-button>
                    <base-button type="danger" v-on:click="deleteUser" size="sm">회원삭제
                    </base-button>
                </div>
            </div>
            <b-modal ref="my-modal" hide-footer title="축하합니다!!">
                <div class="d-block text-center">
                    <h3>목표 애버리지에 도달했습니다!!!</h3>
                </div>
                <b-button class="mt-3" variant="outline-danger" block @click="hideModal">창닫기</b-button>
                <b-button class="mt-2" variant="outline-warning" block @click="goToUpdate">점수 수정하러가기</b-button>
            </b-modal>
        </div>
    </div>


</template>

<script>
    import {EventBus} from "../Service/eventBus";

    export default {
        name: "Profile.vue",
        data() {
            return {
                user: '',
                average: 0,
                goal: 0,
                diff: 0
            }
        },
        created() {
            console.log("CREATE");
            this.user = this.$store.state.uid
            console.log(this.$store.state.uid)
            console.log(this.user);
        },
        mounted() {
            console.log("MOUNTE");
            this.getAver();

        },
        methods: {
            getAver: function () {
                console.log("Get")
                console.log(this.user);
                this.axios.get('/api/score/userScore', {
                    params: {
                        name: this.user
                    }
                }).then((response) => {
                    console.log(response)
                    if (response.data.average == 0) {
                        this.average = 0;
                    } else {
                        this.average = Number(response.data.average);
                    }
                    if (response.data.goal == null) {
                        this.goal = 0;
                    } else {
                        this.goal = Number(response.data.goal);
                    }
                    this.diff = this.goal - this.average
                    console.log(this.diff)

                    console.log(response);
                    console.log(this.goal)
                    console.log(this.average);
                    if (this.goal <= this.average) {
                        this.showModal();
                    }
                })
            },
            showModal() {
                this.$refs['my-modal'].show()
            },
            hideModal() {
                this.$refs['my-modal'].hide()
            },
            goToUpdate() {
                this.$router.push('/update');
            },
            deleteUser() {
                let sel = confirm("회원탈퇴를 하시겠습니까??");
                if (sel == true) {
                    console.log(this.$store.state.email);

                    this.axios.delete('/api/user/delete', {
                        params: {
                            email: this.$store.state.email
                        }
                    }).then((response) => {

                        console.log(response)
                        if (response.data.status == 200) {
                            this.$store.state.uid = ''
                            this.$store.state.email = ""
                            this.$store.state.isAuth = false
                            this.$store.state.errorState = ''
                            this.$store.state.jwt = ''
                            this.$session.clear();
                            this.$session.destroy();
                            EventBus.$emit('Logout')
                            alert("이용해주셔서 감사합니다")
                            this.$router.push('/');

                        } else {
                            alert("삭제 오류")
                        }
                    })
                }

            }

        }
    }
</script>

<style scoped>

</style>
