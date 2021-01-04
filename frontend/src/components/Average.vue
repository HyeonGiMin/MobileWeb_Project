<template>


    <div>
        <div>
            <h3>최근 10경기 점수</h3><br>

            <div v-auto-bottom="datas">
                <div><h5 class="uhead col-3 pl-xl-5 pl-1 text-xl-center">점수</h5>
                    <h5 class="uhead col-5 pl-xl-5 text-xl-center">등록 시간</h5>
                    <h5 class="uhead col-4 pl-3 text-xl-center">삭제</h5></div>
                <div class="row border" v-for="(data,index) in datas" v-bind:key="index">

                    <div class="col-3 col-xl-3">
                        <div class="row">
                            <div class="col-xl-1"></div>
                            <div class="col-xl-2"></div>
                            <div class="col-xl-2"></div>
                            <div class="col-xl-3">
                                <p class="mt-3">{{data.score}}</p>
                            </div>
                            <div class="col-xl-4"></div>
                        </div>
                    </div>

                    <div class="col-5 col-xl-5">
                        <div class="row mt-3">
                            <div class="col-xl-2"></div>
                            <div class="col-xl-3 col-12">
                                <p class="text-lg-center text-lg-right">{{data.year}}</p>
                            </div>
                            <div class="col-xl-3 col-12">
                                <p>{{data.date}}</p>
                            </div>
                            <div class="col-xl-4 col-12">
                                <p class="text-lg-center text-lg-left">{{data.time}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 col-xl-4">
                        <div class="row">
                            <div class="col-xl-1"></div>
                            <div class="col-xl-2"></div>
                            <div class="col-xl-1"></div>
                            <div class="col-xl-3">
                                <base-button type="danger" class="mr-4 mt-3" size="sm"
                                             v-on:click="checking" v-bind:id="data.id">기록삭제
                                </base-button>
                            </div>
                            <div class="col-xl-5"></div>
                        </div>
                    </div>
                    <br>
                    <v-divider></v-divider>
                </div>

            </div>
        </div>

    </div>


</template>

<script>

    export default {
        name: 'Average',

        data: () => ({
            user: '',
            average: 0,
            flag:false,
            datas: null,

        }),
        created() {

            this.user = this.$store.state.uid

        },
        mounted() {

            this.getAver();
            this.getList();
        },
        //현재 컴포넌트 reload
        updated(){
            if(this.flag){
                this.getAver();
                this.getList();
                this.flag=false
            }

        },
        methods: {
            getAver: function () {

                this.axios.get('/api/score/userScore', {
                    params: {
                        name: this.user
                    }
                }).then((data) => {
                    this.average = data.data.average;
                })

            },
            getList: function () {
                this.axios.get('/api/score/info', {
                    params: {
                        name: this.user
                    }
                }).then((response) => {
                    this.datas = response.data;
                    this.test = response
                })
            },
            checking: function chekcing(e) {
                let sel = confirm("해당 기록을 삭제하시겠습니까??\n(기록을 삭제해도 에버리지는 변하지 않습니다)");
                if (sel == true) {

                    this.axios.delete('/api/score/delscore', {
                        params: {
                            id: e.path[0].id
                        }
                    }).then((response) => {

                        if (response.data.status == 200) {
                            alert("삭제되었습니다")
                            //현재 컴포넌트를 reload 하기 위해서 값 변경
                            this.flag=true;
                            this.$forceUpdate();
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
    .uhead {
        display: inline-block;
    }


</style>