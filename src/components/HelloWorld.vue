<template>
    <div class="hello" :class="type">
        <div class="img" v-for="item in 5" :key="item"> 
             <img alt="Vue logo" :src="require(`../assets/images/avatar/Shinnosuke${item}.png`)">   
        </div>
        <div>
            <p>{{ title}}</p>
            <p>{{ msg }}</p>
            <button>搶票摟</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
        title: String,
        type: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img {
    width: 8rem;
    height: 8rem;
    // background-color: #ddd;
    img {
        width: 100%;
    }
}
.hello {
    width: 100%;
    display: inline-flex;
    margin: 1rem;
}
.pic {
    background-color: red;
}
</style>
