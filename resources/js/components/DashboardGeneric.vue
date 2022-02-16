<template>
    <div class="container pt-5">

       <div class="wrapper">
           <h2 class="text-white">Bienvenido de nuevo !</h2>
           <div>
                <img src="assets/layout/images/LOGO-FINAL.png" alt="babylon-layout"  class="main-logo"  width="500"/>
           </div>

                <div class="client-msg text-white mt-4 p-3 " v-show="msg">
                    Cuando registres puntos de venta aqui podrás ver información útil.
                </div>
           <div>

           </div>


           <span>Version 0.6</span>
        </div>
    </div>
</template>

<script>

export default {
    props:['role'],
    data(){
        return{
            msg:false
        }
    },
    mounted(){
        if (this.role == "client") {
            this.msg = true
        }
    }

}
</script>
<style scoped>

.wrapper{
    background-color: rgb(38, 37, 37);
    padding: 3em;
    border-radius: 5px;
}
.wrapper span{
    color: #fff;
    float: right;
}
h2{
    font-style: italic;
}
img{
    margin-top: 20px;
    display: inline-block;
}
</style>
