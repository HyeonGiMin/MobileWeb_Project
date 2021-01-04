<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary  ">
                <!-- TODO shape-skew alpha-4-->
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="container shape-container d-flex align-items-center">
                <div class="col px-0 mt-3">
                    <div class="row justify-content-center align-items-center mt-5">
                        <div class="col-lg-7 text-center mt-3 pt-3 ">
                            <img src="img/brand/white.png" style="height:100px;width: 500px;" class="img-fluid">
                            <p class="lead text-white mt-4 mb-5">볼링 기초 다지기</p>
                            <div class="btn-wrapper">

                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center justify-content-around stars-and-coded">
                        <div class="col-sm-4">
                        </div>
                        <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!--TODO : 라우터 링크 정리-->
        <!--TODO : 소개 내용 및 디자인-->

        <Info1></Info1>
        <Info2></Info2>
        <Info3></Info3>
        <Info4></Info4>

        <section class="section section-skew">
            <div class="container">

            </div>
        </section>
    </div>
</template>

<script>
    import bowlInfo2 from '../components/Bowlinfo2.vue'
    import bowlInfo1 from '../components/Bowlinfo1.vue'
    import bowlInfo3 from '../components/Bowlinfo3.vue'
    import bowlInfo4 from '../components/Bowlinfo4.vue'
    export default {
        name: "AboutBowl",
        components:{
            Info1: bowlInfo1,
            Info2:bowlInfo2,
            Info3:bowlInfo3,
            Info4:bowlInfo4
        }
    }
</script>

<style scoped>

</style>