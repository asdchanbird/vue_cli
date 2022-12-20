<template>
  <div class="news">
    <!-- {{$route.params}} -->
    {{info}}
    {{$store.getters.foodCount}}
      <div>
        {{$store.state.name}}
        <input type="text" v-model="title">
        <input type="text" v-model.number="price">
        {{$store.state.name}}
        <Button type="primary" size="small" style="marign-rigth:5px" @click="createdProduct()">create</Button>
        <button @click="$store.commit('setName', title)">更改name</button>
      </div>
      <Table :columns="columns" :data="data">
      <template #name="{row}">
          <strong>{{row.name}}</strong>
      </template>
      <template #action="{ row,index}">
          <Button type="primary" size="small" @click="updatedProduct(index, row)">create</Button>
          <Button type="error" size="small" @click="deleteProduct(index, row)">create</Button>
      </template>
      
    </Table>

  </div>


</template>



<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Images from '@/components/Images.vue';
import axios from 'axios';
//註冊
export default {
  name: 'NewsView',
  components: {
    HelloWorld,
    Images
  },
  data () {
      return {
        info: {},
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
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data: []
    }
  },
  methods: {
      getTargetProduct(){
        // fetch('https://fakestoreapi.com/products/route.params')
        // .then(res=>res.json())
        // .then(json=>{
        //   this.info = json;
        // })
        axios.get('https://fakestoreapi.com/products')
          .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally( ()=> {
            // always executed
          });
        },
        createdProduct(){
          // fetch('https://fakestoreapi.com/products',{
          // method:"POST",
          // body:JSON.stringify(
          //     {
          //         title: this.title,
          //         price: this.price,
          //         description: 'lorem ipsum set',
          //         image: 'https://i.pravatar.cc',
          //         category: 'electronic'
          //     }
          //   )
          // })
          // .then(res=>res.json())
          // .then(json=>{
          //   this.$Notice.open({
          //     title: '新增成功',
          //     desc: json.id
          //   });
          // })
          axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products',
            responseType: 'stream'
            })
            .then(function (response) {
              response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            });
        },
        updatedProduct(){
          console.log(index);
          console.log(row);
        },
        deleteProduct(){
          console.log(index);
          console.log(row);
        },
        updatedProduct(index,row){
          fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>{console.log(json)})
        },
        deleteProduct(index,row){
          fetch('https://fakestoreapi.com/products/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
        },
  },
  created() {
    this.getTargetProduct();
  }
    
}
</script>
