<template>
    <div class="bg-box mt-5">
       <h3 class="title">Hola mundo</h3>
    </div>
</template>

<script>

export default {
    props:['data'],
    mounted(){
        let json_data = JSON.parse(this.data)
        console.log(typeof(json_data))
    }
}
</script>

<style scoped>
.title{
    color: #fff;
}

.bg-box{
    background-color: orange;
}
</style>
