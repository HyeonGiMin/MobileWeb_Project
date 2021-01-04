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
                <div class="col-lg-8 mb-5 mb-lg-0 mt-5">
                    <h1 class="text-black font-weight-light">볼링 규칙</h1>
                    <p class="lead text-black mt-4">볼링은 10개의 핀을 프레임당 2번의 기회가 주어지며<br>
                        총 10프레임 동안의 점수 합산으로 승부를 보는 아주 간단한 룰이며<br>
                        즉, 핀을 많이 쓰러트리는 사람이 이기는 경기입니다.</p>
                </div>
                <div class="col-lg-4 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">

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