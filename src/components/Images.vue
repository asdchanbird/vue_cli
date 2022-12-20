<template>
    <div class="img">
        <img :src="link" alt="">
    </div>
</template>

<script>

export default {
  props: {
    link: String,
  }
}
</script>

<style lang="scss">
.img {
    width: 100vw;
    height: 10rem;
    // background-color: royalblue;
}
</style>

