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
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign up with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary"  v-on:click="onSubmit" class="my-4">Create account</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'TestReg',
        data: () => ({
            test:null,
            uid: '',
            password: ''
        }),
        methods: {
            ...mapActions(['login']),
            async onSubmit () {
                alert("!!")
                this.$validator.validateAll()
                if (!this.errors.any()) {
                    try {
                        alert("!!")
                        let loginResult = await this.login({ uid: this.uid, password: this.password })
                        if (loginResult) this.goToPages()
                        alert("!!")
                    } catch (err) {
                        console.error(err)
                    }
                } else {
                    console.log('validate err')
                }
            },
            goToPages () {
                this.$session.set('uid', this.$store.state.uid);
                console.log('session');
                console.log(this.$session.get('uid'));
                this.$session.set('jwt', this.$store.jwt);
                //  this.$router.go(-1);
            },
            clear () {
                this.name = ''
                this.email = ''
                this.select = null
                this.checkbox = null
                this.$validator.reset()
            },
        },
        computed: {
            ...mapGetters({
                errorState: 'getErrorState'
            })
        },
        mounted() {
            this.test=this.$store.state

        }
    }
</script>
<style>
</style>
