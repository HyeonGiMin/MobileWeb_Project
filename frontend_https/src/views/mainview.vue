<template>
    <div>
        <MAIN></MAIN>
        <SubMain></SubMain>
    </div>
</template>

<script>
    import main from '../components/Main'
    import main2 from '../components/Main2.vue'

    export default {
        name: "mainview.vue",
        components:{
            MAIN:main,
            SubMain:main2
        }
    }
</script>

<style scoped>

</style>