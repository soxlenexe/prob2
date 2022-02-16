<template>
  <Button label="Cerrar sesión" icon="pi pi-sign-out" class="custom" @click="logout"></Button>
</template>

<script>
import Button from 'primevue/button';
import axios from 'axios';
import config from './../../config';
export default {
components:{Button},

methods: {
         logout(){
            axios.post(`${config.APP_URL}/logout`).then(() =>
                window.location.href = `${config.APP_URL}`
            );
        }
    }
}
</script>

<style scoped>
.custom{
    background-color: rgb(33, 29, 29);
    color: rgb(201, 199, 199);
    padding: 0;
    border: 0;
}
.custom:hover{
     background-color: rgb(33, 29, 29)!important;
}
.p-button-label:hover{
     background-color: rgb(33, 29, 29)!important;
}
span:hover{
    background-color: rgb(33, 29, 29)!important;

}
</style>
