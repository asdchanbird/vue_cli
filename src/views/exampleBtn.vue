<template>
    <div class="new">
        <img :src="require(`@/assets/logo.png`)" alt="">
        <button v-for="i in 10" :key="i">{{i}}</button>
    </div>
</template>
    
<script>
    export default {
        data () {
            return {
                value: 0
            }
        }
    }
</script>
<style lang="scss">
    
</style>