<template>
   <div class="profile-page">
      <section class="section-profile-cover section-shaped my-0">
         <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </section>
      <section class="section section-skew">
         <div class="container">
            <card shadow class="card-profile mt--300" no-body>
               <div class="px-4">
                  <!--TODO : 프로필 웹버전에 맞춰서 그리드 레이아웃-->
                  <!--TODO : 라우터 링크 정리-->
                  <!--TODO : 소개 내용 및 디자인-->
                  <div class="row justify-content-center">
                     <div class="col-lg-4 order-lg-1">

                     </div>
                  </div>
                  <div class="text-center mt-5">
                     <ProFile></ProFile>
                  </div>
                  <div class="mt-5 py-5 border-top text-center">
                     <AverList></AverList>
                  </div>
               </div>
            </card>
         </div>
      </section>
   </div>

</template>
<script>
   //TODO : 에러시 npm audit fix --force 사용
    import Profile from '../components/Profile.vue'
    import AVERlist from '../components/Average.vue'
   import store from '../store'
   import router from '../router'

   export default {
    name: 'Profile',
    components: {
        ProFile:Profile,
       AverList:AVERlist
    },
   mounted(){
      this.requireAuth()
   },
   updated(){
      this.requireAuth()
   },
   methods:{
      requireAuth : (next) => {

         if (store.getters.getIsAuth||store.state.isAuth==true) {

         }
         else{
            alert("로그인 시 이용 가능합니다")
            router.push('/') // isAuth === false면 다시 로그인 화면으로 이동
         }


      }
   }
};
</script>
<style>
</style>
