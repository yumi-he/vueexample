<template>
    <div>
        <!-- 子向父双向绑定 -->
        {{curentValue}}<button @click="handelclick">add</button>
    </div>
</template>
<script>
export default {
    props:{
        value:{
            type:Number
        }
    },
    data(){
        return{
            curentValue:this.value
        }
    },
    
    methods:{
        handelclick(){
           this.curentValue ++;
           this.$emit('input',this.curentValue); 
        }
    }
}
</script>
<style>

</style>

