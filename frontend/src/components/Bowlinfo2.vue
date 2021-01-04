<template>
    <section class="section-hero section-shaped my-0">
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
                <div class="col-lg-5 mb-5 mb-lg-0 pa-2 mt-2">
                    <h1 class="text-white font-weight-light">볼링의 효과</h1>
                    <div class="row ma-2">
                        <div class="lead text-white mr-2 ml-2">
                        <span class="h3 text-white"> 1.다이어트 효과</span>
                            <div>
                                볼링은 수영이나 조깅보다 부담스럽지 않으며<br> 에너지를 소모할 수 있습니다.
                            </div>
                            <br><br>
                            <span class="h3 text-white">2.스트레스 해소</span><br>
                            볼을 던져 10개의 핀을 한번에 다 쓰러트리는 스트라이크르 냈을 때의 기쁨은 <br>스트레스 해소에 도움이되며 생활에<br> 활력을 불어넣어준다.
                        </div>
                    </div>

                </div>
                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/theme/1.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/2.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/3.png"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

    export default {
        name: "bowlInfo2",
    }
</script>

<style scoped>
.has-cards{
    overflow: hidden;
    padding-top: 500px;
    margin-top: -420px;
    position: relative;
    background: transparent;
    pointer-events: none;
}
</style>