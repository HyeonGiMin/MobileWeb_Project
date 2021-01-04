<template>
    <section class="">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container py-0 pb-lg shape-container d-flex align-items-center">

            <div class="row justify-content-between align-items-center">
                <div class="col-lg-12 mb-5 mb-lg-0 mt-5">
                    <h1 class="text-black font-weight-light text-center">점수 계산법</h1>
                    <div class="row">
                        <div class="col-12 col-md-5 text-md-right text-center">
                            <img src="img/score/1.png" style="width: 60%">
                        </div>
                        <div class="col-12 col-md-7">
                            <div class="mt-2">
                                <h3 class="text-center">1.기본 점수 계산법</h3>
                                한 프레임당 두번 공을 굴려 두번의 점수를 합산해서 계산한다.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-5 text-md-right text-center">
                            <img src="img/score/2.png" style="width: 60%">
                        </div>
                        <div class="col-12 col-md-7">
                            <div class="mt-2">
                                <h3 class="text-center">2.스페어</h3>
                                한 프레임에서 두번째 시도에 남은 핀을 모두 쓰러트린 경우를 말한다.
                                스페어처리를 한 경우 다음 프레임의 초구에서 쓰러트린 핀의 수가 이전 프레임에 합산된다.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-5 text-center text-md-right">
                            <img src="img/score/3.png" style="width: 60%">
                        </div>
                        <div class="col-12 col-md-7">
                            <div class="mt-2">
                                <h3 class="text-center">3.스트라이크</h3>
                                한 프레임에서 첫번째 시도에 10개의 핀을 모두 쓰러트린 경우를 말한다.
                                스트리이크를 한 경우 다음 프레임에서 쓰러트린 핀의 수가 이전 프레임에 합산된다
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-10 text-center" style="color:blue">
                            <div class="row">
                                <div class="col-12">
                                    <i class="fas fa-info"></i>
                                </div>
                                <div class="col-12">
                                    <p>
                                        스페어와 스트라이크의 차이는 스페어는 다음프레임의 초구만 보너스점수로 반영이 되지만<br>
                                        스트라이크의 경우 다음프레임의 2구까지 보너스 점수로 반영이 된다.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-1"></div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-5 text-md-right text-center">
                            <img src="img/score/4.png" style="width: 70%">
                        </div>
                        <div class="col-12 col-md-7">
                            <div class="mt-2 ">
                                <h3 class="text-center">4.더블</h3>
                                <p>볼링은 스트라이크를 2번이상 쳤을때 점수가 높아지는 경기입니다.
                                    스트라이크를 2번 연속으로 치게되면 보너스 점수는 다다음 프레임까지 반영이 된다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

    export default {
        name: "bowlInfo4",
    }
</script>

<style scoped>
    .has-cards {
        overflow: hidden;
        padding-top: 500px;
        margin-top: -420px;
        position: relative;
        background: transparent;
        pointer-events: none;
    }
</style>