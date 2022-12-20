<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HelloWorld title="嘻嘻" msg="1"/>
    <!-- <HelloWorld title="嘿嘿" msg="2"/>
    <HelloWorld title="fqfq" msg="3"/> -->
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
