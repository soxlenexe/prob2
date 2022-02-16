<template>
  <span :class="{'vencido-class':vencido}">{{date}}</span>
</template>

<script>
export default {
    props:['date', 'vencido'],
    name:'VencimientoStatus',
    date(){
        return{

        }
    },
    mounted(){

    }

}
</script>

<style>
.vencido-class{
    color: red;
}

</style>
