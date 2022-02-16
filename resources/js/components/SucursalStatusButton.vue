<template>
  <InputSwitch v-model="checked" @change="changeStatus"></InputSwitch>
</template>

<script>
import SucursalesService from '../service/SucursalesService';
export default {
    props:['sucursal_id', 'sucursal_status'],
    name: 'SucursalStatusButton',
    data(){
        return{
            checked:true
        }
    },
    sucursalesService:null,
    created(){
        this.sucursalesService = new SucursalesService();
    },
    mounted(){
        this.checked = this.sucursal_status
    },
    methods:{
        changeStatus(){
           if (this.checked) {
               this.sucursalesService.setSucursalStatusActive(this.sucursal_id).then(res => {
                    this.$toast.add({severity:'success', summary: 'Sucursal status', detail: 'Sucursal Activada', life: 3000});
               });

            } else {
                this.sucursalesService.setSucursaltStatusInactive(this.sucursal_id).then(res => {
                    this.$toast.add({severity:'error', summary: 'Sucursal status', detail: 'Sucursal Desactivada', life: 3000});
               });

            }
        }
    }

}

</script>

<style>

</style>

