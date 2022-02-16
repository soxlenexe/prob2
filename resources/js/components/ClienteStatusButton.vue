<template>
<span>
  <InputSwitch v-model="checked" @change="changeStatus"></InputSwitch>

  <!-- DIALOG    -->

    <Dialog  v-model:visible="display" header="Desactivar Cliente">
        <div class="p-field">
            <label for="">Motivo de la baja</label><br>
            <Textarea v-model="text" rows="3" cols="50" required="true" :class="{'p-invalid': submitted && !text}" /><br>
            <small class="text-danger" v-if="submitted && !text">Este campo no puede estar vacío.</small>
        </div>
        <template #footer>

            	<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="display=false; submitted=false;this.checked=true"/>
				<Button label="Comfirmar" icon="pi pi-check" class="p-button-text" @click="saveStatus" />
        </template>

    </Dialog>
    <!-- Dialogo para activar cliente -->
    <Dialog  v-model:visible="activar" header="Reactivar Cliente">
        <div class="p-field">
            <label for="">Motivo de la baja</label><br>
            <Textarea v-model="motivo_baja" rows="3" cols="50"  /><br>
        </div>
        <template #footer>
            	<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="activar=false; submitted=false; this.checked=false"/>
				<Button label="Comfirmar" icon="pi pi-check" class="p-button-text" @click="setStatusActive" />
        </template>

    </Dialog>

</span>

</template>

<script>
import ClientService from './../service/ClientService';
export default {
    props:['data'],
    name: 'ClienteStatusButton',
    data(){
        return{
            checked:true,
            display:false,
            text:null,
            submitted:false,
            activar:false,
            motivo_baja:null
        }
    },
    clientService:null,
    created(){
        this.clientService = new ClientService();
    },
    mounted(){
        this.checked = this.data.activo

    },
    methods:{
        changeStatus(){
           if (this.checked) {
               this.motivo_baja = this.data.motivo_baja_desc;
               this.activar=true
            } else {

                this.showDialog()
            }
        },
        showDialog(){
            this.display = true

        },
        saveStatus(){
                this.submitted=true
                if (this.text!=null) {
                    this.data.motivo_baja_desc = this.text;
                    this.clientService.editClient(this.data).then(re => {
                        this.clientService.setClientStatusInactive(this.data.id).then(res => {
                            this.$toast.add({severity:'error', summary: 'Cliente status', detail: 'Cliente Desactivado', life: 3000});
                            this.display=false
                            this.text=null
                            this.submitted = false
                            }
                            );
                    })
                }


        },
        setStatusActive(){
                    this.data.motivo_baja_desc = this.motivo_baja;
                    this.clientService.editClient(this.data).then(re => {
                        this.clientService.setClientStatusActive(this.data.id).then(res => {
                            this.$toast.add({severity:'success', summary: 'Cliente status', detail: 'Cliente Activado', life: 3000});
                            this.motivo_baja = null
                            this.activar = false
                            });

                            }
                        );

        }
    }

}

</script>

<style>
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider{
    background-color: rgb(64, 96, 185);
}

</style>
