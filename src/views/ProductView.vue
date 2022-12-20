<template>
  <div class="news" :style="{backgroundColor: activeColor}">
        <img :src="require(`@/assets/logo.png`)" alt="">
        <button v-for="i in colors" :key="i" 
        :style="{
            backgroundColor: i
        }" 
        :class="{active: activeColor === 1}"
        @click="changeColor(i)">{{i}}</button>
    </div>
    <Table :columns="columns" :data="data">
      <template #name="{row}">
          <strong>{{row.name}}</strong>
      </template>
    </Table>

    <!-- <div v-for=""></div> -->
</template>

<script>
import {colors} from '@/config/setting';
    export default {
        data () {
            return {
              colors: ['#af0','#fa0','#3f9','#333','#444','#555','#666','#777','#888','#999'],
              activeColor:'',
              columns: [
                    {
                        title: '產品名稱',
                        key: 'title'
                    },
                    {
                        title: '產品名稱',
                        key: 'description'
                    },
                    {
                        title: '類型',
                        key: 'category'
                    }
                ],
                data: []

            }
        },
        methods: {
          changeColor(color){
            // console.log(color);
            this.activeColor = color
          },
          getProduct(){
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              this.data = json
            })
          }
        },
        created(){
          this.getProduct()
        }
        
    }
</script>
<style lang="scss">
    .news {
      text-align: center;
      padding: 4rem 2rem;
      background: #ddd;
    }
    button {
      padding: 1rem 1rem;
      cursor: pointer;

      &:active {
        border: 3px solid yellow;
      }
    }
</style>
