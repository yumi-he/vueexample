<template>
    <div>
        <button @click="handadd">+1</button>
    </div>
</template>
<script>

export default {
    name:"add",
    data(){
        return{
            count:0
        }
    },
    methods:{
       handadd(){
          this.count++
          this.$emit('increas',this.count) 
       } 
    }
}
</script>
<style>

</style>


