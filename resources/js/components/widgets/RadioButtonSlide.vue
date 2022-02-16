<template>
    <input type="checkbox" id="switch" hidden v-model="check" @change="changeStatus">
    <label for="switch" class="lbl"></label>
</template>
<script>
export default {
    props:['id','status', 'url'],
    data(){
        return {
            success:'bg-success',
            danger:'bg-danger',
            check: 0
        }
    },
    mounted(){
        if (this.status == 1) {
            this.check = 1
            console.log(this.status);
        }
    },
    computed:{

    },
    methods:{
        changeStatus(){
         return ""
        }
    }


}
</script>

<style scoped>
.lbl{
   display: inline-block;
   width:32px;
   height: 18px;
   background-color: #f75454;
   border-radius:100px;
   cursor: pointer;
   position: relative;
   transition: .25s;

}
.lbl::after{
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background: #eee;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left:2px;
    transition: .25s;

}

#switch:checked + .lbl::after{
    left: 15px;
}
#switch:checked + .lbl{
    background: rgb(21, 145, 17);
}
.card-header{
    transition: .3s;
}

</style>
