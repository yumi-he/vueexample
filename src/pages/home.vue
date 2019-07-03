<template>
  <div>
      <propsComnent :init-count="message"></propsComnent>
      <emitComponent @increas="handadd"></emitComponent>
      <modelComponent1 v-model="value"></modelComponent1>
      <modelComponent2 v-model="value"></modelComponent2>
      <button @click="handerReduce">reduce</button>
      <button @click="goToUser">user</button>
  </div>
</template>

<script>
import propsComnent from "../components/propsComnent"
import emitComponent from "../components/emitComponent"
import modelComponent1 from "../components/modelComponent1"
import modelComponent2 from "../components/modelComponent2"
export default {
  name: 'Home',
  data(){
      return{
        message:22222222222222,
        value:1
      }
  },
  components:{
     propsComnent,emitComponent,modelComponent1,modelComponent2
  },
  methods:{
   handadd (val){
      console.log(val)
   },
   handerReduce() {
     this.value--;
   },
   goToUser () {
     this.$router.push({path:'/user/123'})
   }
  }
}
</script>

<style>

</style>
