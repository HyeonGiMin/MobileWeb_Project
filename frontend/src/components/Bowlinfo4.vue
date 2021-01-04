<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 col-12 col- mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light text-center">볼 선택 방법</h1>
                    <div class="row border mr-1 ml-1">
                        <div class="col-4 border"><h3 class="text-center text-white">파운드</h3> </div>
                        <div class="col-4 border"><h3 class="text-center text-white">KG</h3> </div>
                        <div class="col-4 border"><h3 class="text-center text-white">체중</h3> </div>
                    </div>
                    <div class="row -border-all mr-1 ml-1" v-for="(list,index) in lists" :key="index">
                        <div class="border col-4  text-center"><span class="h4 text-white">{{list.pound}}</span></div>
                        <div class="border col-4 text-center"><span class="h4 text-white ">{{list.kg}}</span></div>
                        <div class="border col-4  text-center"><span class="h4 text-white">{{list.num}}</span></div>
                    </div>
                    <p class="lead text-white mt-4"></p>
                </div>
                <div class="col-lg-6 col-12 mb-lg-auto">
                    <div class="row">
                        <div class="col-12 text-center"><i class="fas fa-exclamation-triangle fa-3x" style="color:red"></i><span class="h2" style="color:red">경고</span> </div>
                        <div><h3 class="mt-2 text-white col-12">자신의 몸무게의 1/10의 볼을 선택하도록 권장하나 표준에 의한 정보뿐 무리해서 표준에 맞출 팔요는 없습니다</h3></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

    export default {
        name: "bowlInfo",
        data(){
            return{
              lists:[
                  {
                      pound:"7",
                      kg:'3.18',
                      num:'32이하'
                  },
                  {
                      pound:"8",
                      kg:'3.63',
                      num:'36~39'
                  },  {
                      pound:"9",
                      kg:'4.08',
                      num:'40~44'
                  }, {
                      pound:"10",
                      kg:'5.54',
                      num:'45~49'
                  },
                  {
                      pound:'11',
                      kg:'4.99',
                      num:'50~54'
                  },  {
                      pound:"12",
                      kg:'5.44',
                      num:'55~59'
                  },{
                      pound:"13",
                      kg:'5.90',
                      num:'60~63'
                  },
                  {
                      pound:'14',
                      kg:'6.35',
                      num:'64~67'
                  },  {
                      pound:"15",
                      kg:'6.80',
                      num:'68~72'
                  },
                  {
                      pound:"16",
                      kg:'5.44',
                      num:'73이상'
                  }
              ]
        }
        }
    }
</script>

<style scoped>

</style>