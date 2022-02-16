<template>
    <div class="container-c shadow bg-white">


				<!-- <Toast position="bottom-right" /> -->

				<Toolbar class="p-mb-1 bg-white toolbar">
                    <template v-slot:left>
                        <div class="">
                            <h3>Marcas</h3>
                        </div>
                    </template>
                    <template v-slot:right>
                        <span class="p-input-icon-right center">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global']" size="60" placeholder="Buscar..." />
                        </span>
                        <Button label="Nueva Marca" icon="pi pi-plus" class="p-button-success p-mr-2 ml-5 orange" @click="new_marca=true" />
                    </template>
				</Toolbar>

                <DataTable :value="marcas_list"
                            stripedRows
                            editMode="cell"
                            class="editable-cells-table mt-5 custom"
                            showGridlines

                            >

                    <Column field="id" header="Id Marca" footer="Id Marca"  style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            {{data.id}}
                        </template>
                    </Column>

                    <Column field="marca" header="Marca" footer="Marca"  style="width:120px;padding-left:15px">
                        <template #body="{data}" >
                            {{data.marca}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="20"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateMarca(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>

                    </Column>
                    <!-- <Column field="idmarca" header="Id Marca" footer="Id Marca"  style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            {{data.idmarca}}
                        </template>
                    </Column> -->
                </DataTable >
                <!-- DIALOG  -->

                <Dialog v-model:visible="new_marca" header="Nueva Marca">
                    <div class="p-dialog-content">
                        <label for="">Nombre</label> <br>
                        <InputText v-model="marca.marca" :class="{'p-invalid': submitted && !marca.marca}">
                        </InputText><br>
                        <small class="p-invalid" v-if="submitted && !marca.marca">Este campo es  obligatorio.</small>
                    </div>
                    <div class="p-dialog-content">
                        <label for="">Id Marca</label> <br>
                        <InputNumber v-model="marca.idmarca" :class="{'p-invalid': submitted && !marca.idmarca}">
                        </InputNumber><br>
                        <small class="p-invalid" v-if="submitted && !marca.idmarca">Este campo es  obligatorio.</small>
                    </div>

                    <template #footer>
						<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="new_marca = false"/>
						<Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="storeMarca" />
					</template>

                </Dialog>

    </div>
</template>

<script>
import MarcaService from './../../service/MarcaService'
export default {
    props:['dns'],
    marcaService:null,
    data(){
        return{
            submitted:false,
            filters:[],
            new_marca:false,
            marca:{},
            marcas_list:[],
            memory:null
        }
    },
    created(){
        this.marcaService = new MarcaService();
    },
    mounted(){
        this.marcaService.getMarcas(this.dns)
            .then(res =>  this.marcas_list = res)
    },
    methods:{
        storeMarca(){
            this.submitted = true
            if (this.marca.idmarca != null && this.marca.marca) {
                this.marcaService.storeMarca(this.marca, this.dns)
                    .then(res => {
                        this.new_marca = false;
                        this.marcas_list.push(this.marca)
                        this.$toast.add({severity:'success', summary: 'Éxito !', detail: 'Nueva marca guardada con éxito!', life: 3000})
                    });
            }
        },
        updateMarca(id, field, value){
            this.marcaService.updateField({identifier: 'id', id:id, field: field, new_value: value,old:this.memory}, this.dns)
                .then(res => {
                    this.$toast.add({severity:'success', summary: 'Éxito !', detail: 'Cambios Guardados.', life:1500})
                })
                .catch(res => {this.$toast.add({severity:'error', summary: 'ERROR !', detail: 'Cambios no guardados..', life:1500})});

        },
        storeOld(data){
            this.memory = data
        }
    }
}
</script>

<style scoped>
.custom{
    width: 40%;
}
</style>
