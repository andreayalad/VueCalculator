<template>
  <div class="h-screen w-full bg-gray-50 flex">
    <side-menu v-on:cambio="test"></side-menu>
    <div class="w-full">
      <div class="p-2.5 text-white text-center bg-gray-500 " id="nav">
        <router-link to="/">Calculadora</router-link>
      </div>
      <router-view :symbol= "symbol"/>
    </div>
  </div>
</template>

<script>
import SideMenu from "./views/SideMenu.vue";
export default {
  data(){
    return{
      symbol: " "
    }
  },
  components: { SideMenu},
  methods:{
    test(e){
      this.symbol= e
    }
  }
};
</script>


