<template>
    <div class="about">
        <h1>This is an about page</h1>
        <Button type="primary">Primary</Button>
        <hr>
        <div class="slider">
            <Carousel v-model="value" loop>
                <CarouselItem v-for="item in 5" :key="item">
                     <img alt="Vue logo" :src="require(`../assets/images/avatar/Shinnosuke${item}.png`)">   
                    <!-- <div class="demo-carousel">1</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">2</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">3</div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">4</div> -->
                </CarouselItem>
            </Carousel>
        </div>
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
    .slider {
        // height: 3rem;
        img {
            width: 20%;
        }
    }
</style>