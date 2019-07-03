<template>
    <div>
        <!-- 父向子双向绑定 -->
        {{curentValues}}<button @click="handelclick">add</button>
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
            curentValues:this.value
        }
    },
    watch:{
        value(val){
            this.curentValues = val;
        }
    },
    methods:{
        handelclick(){
           this.curentValues ++;
           this.$emit('input',this.curentValues); 
        }
    }
}
</script>
<style>

</style>

