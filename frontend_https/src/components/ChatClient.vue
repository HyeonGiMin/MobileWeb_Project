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
                <div class="col-lg-7">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>함께하면 더 즐거운 볼링</small>
                            </div>
                            <div>
                                <label>Message</label>
                                <b-form-textarea
                                        auto-bottom
                                        id="textarea"
                                        v-model="textarea"
                                        placeholder="Enter something..."
                                        rows="3"
                                        readonly
                                        max-rows="10"
                                ></b-form-textarea>
                            </div>
                            <div class="mt-2">
                                <label>Your Message</label>
                                <b-form-input  v-model="message" placeholder="메시지를 입력하세요"></b-form-input>
                               <div class="text-right">
                                <base-button class="mt-3" type="primary" @click="sendMessage()">전송</base-button>
                               </div>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapMutations, mapState } from 'vuex';
    import Constant from '../Constant';

    export default {
        name: 'ChatClient',
        created() {
            this.$socket.on('chat', (data)=> {
                this.textarea += data.from.name+":"+data.msg + "\n"
            })
        },
        computed: {
            ...mapState({
                'msgDatas': state => state.socket.msgDatas,
            }),
        },
        mounted() {
            if(this.$store.state.isAuth==true){
                this.getMessage();
                this.username=this.$store.state.uid
            }else{
                alert('로그인을 해주세요')
                this.$router.replace('/')
            }

        },
        data() {
            return {
                username:'',
                textarea: "",
                message: '',
            }
        },
        methods: {
            ...mapMutations({
                'pushMsgData': Constant.PUSH_MSG_DATA,
            }),
            getMessage:function(){
                this.axios.get('/api/user/chatlist').then( (datas)=>{
                    let array=datas.data.reverse()
                    array.forEach( (data)=>{
                        this.textarea +=(data.name+":"+ data.msg+ "\n");
                    } )
                })
            },
            sendMessage() {
                if (this.message.length === 0) return false;
                this.pushMsgData({
                    from: {
                        name: '나',
                    },
                    msg:(this.message),
                });
                this.$sendMessage({
                    name: this.username,
                    msg:(this.message),
                });

                this.$emit('chat',{
                    from:this.name,
                    message: this.message
                });
                this.textarea +=(this.username+":"+ this.message + "\n");
                this.message = ''
            }
        },

    }
</script>

<style scoped>

</style>