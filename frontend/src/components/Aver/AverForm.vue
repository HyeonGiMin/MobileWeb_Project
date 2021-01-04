<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm6>
      <v-text-field
        v-model="score"
        label="점수등독"
        required
        v-on:keyup.enter="joinSubmit"
      ></v-text-field>
      <div class="text-xs-center">
        <v-btn @click="joinSubmit" round color="primary" dark>등록</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'AverForm',
  data() {
    return {
      user:'',
      score:null,
      test:null
    };
  },
  mounted(){
    this.user=this.$store.state.uid
  },
  methods: {
    joinSubmit() {
      this.axios.post('/api/score/insert',{params:{
          name:this.user,
          score:this.score
        }})
              .then((data)=>{
                this.test=data;
                alert("등록되었습니다");
                this.$router.replace('/aver');
              })
    },
  },
};
</script>


