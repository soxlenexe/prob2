<template>
    <div class="container-c shadow bg-white">
				<Toolbar class="p-mb-1 bg-white toolbar">
                    <template v-slot:left>
                        <div class="">
                            <h3>Proveedores</h3>
                        </div>
                    </template>
                    <template v-slot:right>
                        <span class="p-input-icon-right center">
                                <i class="pi pi-search" />
                                <InputText v-model="filter" size="60" placeholder="Buscar..." />
                        </span>
                        <span @click="undo" class="undo-icon shadow-sm"> <i class="pi pi-undo"></i></span>
                        <Button label="Nuevo proveedor" icon="pi pi-plus" class="p-button-success p-mr-2 ml-5 orange" @click="new_proveedor=true"  />
                    </template>
				</Toolbar>
<!-- :value="proveedores_list" -->
                <DataTable :value="filtrados"
                            :scrollable="true"
                            scrollHeight="600px"

                            scrollDirection="both"
                            stripedRows
                            editMode="cell"
                            class="editable-cells-table mt-5"
                            showGridlines>

                    <Column field="Nombre" header="Nombre" footer="Nombre"  style="width:300px;padding-left:15px; font-size:0.9em" frozen>
                        <template #body="{data}">
                            {{data.Nombre}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="12"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data.Nombre
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="RespIva" header="RespIva" footer="RespIva"  style="width:210px;padding-left:15px">
                        <template #body="{data}">
                            {{data.RespIva}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="18"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="Cuit" header="Cuit" footer="Cuit"  style="width:170px;padding-left:15px">
                        <template #body="{data}">
                            {{data.Cuit}}
                        </template>
                        <template #editor="slotProps">
                            <InputMask v-model="slotProps.data[slotProps.column.props.field]" size="12"  mask="99-99999999-9"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputMask>
                        </template>
                    </Column>
                    <Column field="telefonos" header="Telefonos" footer="Telefonos"  style="width:180px;padding-left:15px">
                        <template #body="{data}">
                            {{data.telefonos}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="12"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>

                    <Column field="Direccion" header="Direccion" footer="Direccion"  style="width:190px;padding-left:15px">
                        <template #body="{data}">
                            {{data.Direccion}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="16"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="Localidad" header="Localidad" footer="Localidad"  style="width:190px;padding-left:15px">
                        <template #body="{data}">
                            {{data.Localidad}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="16"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="Email" header="Email" footer="Email"  style="width:190px;padding-left:15px">
                        <template #body="{data}">
                            {{data.Email}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="16"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="Contacto" header="Contacto" footer="Contacto"  style="width:180px;padding-left:15px">
                        <template #body="{data}">
                            {{data.Contacto}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="15"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="provincia" header="Provincia" footer="Provincia"  style="width:170px;padding-left:15px">
                        <template #body="{data}">
                            {{data.provincia}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="12"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="saldo" header="Saldo" footer="Saldo"  style="width:140px;padding-left:15px">
                        <template #body="{data}">
                            {{data.saldo}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="10"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="idprov" header="Id Prov" footer="Id Prov"  style="width:100px;padding-left:15px">
                        <template #body="{data}">
                            {{data.idprov}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="4"
                                @change="editField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>

                </DataTable >
                <!-- DIALOG  -->

                <Dialog v-model:visible="new_proveedor" header="Nuevo proveedor">
                    <div class="row">
                        <div class="col-6">
                             <div class="p-dialog-content">
                                <label for="">Nombre</label> <br>
                                <InputText v-model="proveedor.nombre" :class="{'p-invalid': submitted && !proveedor.nombre}">
                                </InputText><br>
                                <small class="p-invalid" v-if="submitted && !proveedor.nombre">Este campo es  obligatorio.</small>
                            </div>
                        </div>
                        <div class="col-4">
                             <div class="p-dialog-content">
                                <label for="">Contacto</label> <br>
                                <InputText v-model="proveedor.contacto" :class="{'p-invalid': submitted && !proveedor.contacto}">
                                </InputText><br>
                                <small class="p-invalid" v-if="submitted && !proveedor.contacto">Este campo es  obligatorio.</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                             <div class="p-dialog-content">
                                <label for="">Resp Iva</label> <br>
                                <Dropdown :options="resp_iva_list" optionLabel="descripcion" optionValue="descripcion" v-model="proveedor.resp_iva" size="15" :class="{'p-invalid': submitted && !proveedor.resp_iva}">
                                </Dropdown><br>
                                <small class="p-invalid" v-if="submitted && !proveedor.resp_iva">Este campo es  obligatorio.</small>
                            </div>
                        </div>
                        <div class="col-6">
                             <div class="p-dialog-content">
                                <label for="">Cuit</label> <br>
                                <InputMask v-model="proveedor.cuit"  mask="99-99999999-9" modelValue="00-00000000-0" :class="{'p-invalid': submitted && validate_iva}">
                                </InputMask><br>
                                <small class="p-invalid" v-if="submitted && validate_iva">Este campo es  obligatorio.</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                             <div class="p-dialog-content">
                                <label for="">Telefono</label> <br>
                                <InputText v-model="proveedor.telefono">
                                </InputText><br>
                            </div>
                        </div>
                        <div class="col-4">
                             <div class="p-dialog-content">
                                <label for="">Dirección</label> <br>
                                <InputText v-model="proveedor.direccion" :class="{'p-invalid': submitted && !proveedor.direccion}">
                                </InputText><br>
                                <small class="p-invalid" v-if="submitted && !proveedor.direccion">Este campo es  obligatorio.</small>
                            </div>
                        </div>
                        <div class="col-4">
                             <div class="p-dialog-content">
                                <label for="">Localidad</label> <br>
                                <InputText v-model="proveedor.localidad" :class="{'p-invalid': submitted && !proveedor.localidad}">
                                </InputText><br>
                                <small class="p-invalid" v-if="submitted && !proveedor.localidad">Este campo es  obligatorio.</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                             <div class="p-dialog-content">
                                <label for="">Email</label> <br>
                                <InputText v-model="proveedor.email" :class="{'p-invalid': submitted && !proveedor.email}">
                                </InputText><br>
                                <small class="p-invalid" v-if="submitted && !proveedor.email">Este campo es  obligatorio.</small>
                            </div>
                        </div>
                        <div class="col-4">
                             <div class="p-dialog-content">
                                <label for="">Provincia</label> <br>
                                <InputText v-model="proveedor.provincia" :class="{'p-invalid': submitted && !proveedor.provincia}">
                                </InputText><br>
                                <small class="p-invalid" v-if="submitted && !proveedor.provincia">Este campo es  obligatorio.</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                             <div class="p-dialog-content">
                                <label for="">Saldo</label> <br>
                                <InputNumber v-model="proveedor.saldo" locale="es-ES" :minFractionDigits="2">
                                </InputNumber><br>
                            </div>
                        </div>
                        <div class="col-4">
                             <div class="p-dialog-content">
                                <label for="">Id Provincia</label> <br>
                                <InputNumber v-model="proveedor.id_prov">
                                </InputNumber><br>

                            </div>
                        </div>
                    </div>
                    <template #footer>
						<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="new_proveedor = false;submitted=false"/>
						<Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="storeProveedor" />
					</template>

                </Dialog>

    </div>
</template>

<script>
import RollbackService from './../../service/RollbackService';
import ProveedorService from './../../service/ProveedorService'
export default {
    props:['dns'],
    proveedorService:null,
    rollbackService:null,
    data(){
        return {
            submitted:false,
            filter: "",
            proveedores_list:[],
            proveedor:{},
            new_proveedor:false,
            resp_iva_list:[],
            validate_iva:false
        }
    },
    created(){

        this.proveedorService = new ProveedorService();
        this.rollbackService = new RollbackService();
    },
    mounted(){
        this.proveedorService.getProveedoresList(this.dns)
            .then(res => {this.proveedores_list = res})

        this.proveedorService.getRespIva()
            .then(res => {this.resp_iva_list = res});
    },
    methods:{
        storeProveedor(){

            this.submitted = true;
            if (    this.ivaValidator()
                    &&  this.proveedor.resp_iva
                    &&  this.proveedor.direccion
                    &&  this.proveedor.localidad
                    &&  this.proveedor.provincia
                    &&  this.proveedor.contacto
                    &&  this.proveedor.email
                    &&  this.proveedor.nombre
                    ) {
                        this.proveedorService.storeNewProveedor(this.proveedor)
                            .then(res => {
                                    this.$toast.add({severity:'success', summary:"Exito!", detail:"Proveedor guardado con éxito", life:3000})
                                    this.new_proveedor = false;
                                    this.proveedores_list.push(res.nuevo_prov)
                                    this.proveedor = {}
                                }).catch(res =>
                                this.$toast.add({severity:'error', summary:'Error', detail:'Los cambios no fueron guardados !', life:1500}));

            }

        },
        editField(id, field, newValue){
            this.proveedorService.updateProveedor({id, field,newValue})
                .then(res => {
                    console.log(res)
                    if (res.status) {
                        this.$toast.add({severity:'success', summary:'Exito', detail:'Los cambios fueron guardados con éxito!', life:1500})
                    }
                })
                .catch(res => this.$toast.add({severity:'error', summary:'Error', detail:'Los cambios no fueron guardados !', life:1500}));
        },

        ivaValidator(){
            switch (this.proveedor.resp_iva) {
                case 'RESPONSABLE_INSCRIPTO':
                case 'MONOTRIBUTO':
                case 'MONOTRIBUTO_SOCIAL':
                case 'RESPONSABLE_EXENTO':
                case 'NO_RESPONSABLE':
                case 'RESPONSABLE_NO_INSCRIPTO':
                    this.validate_iva = true
                    if (this.proveedor.cuit) {
                        return true
                    }
                    return false;
                    break;
                default:
                    this.validate_iva = false
                    return true
                    break;
            }
        },
        undo(){
        this.rollbackService.undoEvent()
            .then(res => this.$toast.add({severity:'warn', summary:'Deshacer', detail:'Los cambios fueron  deshechos con éxito!', life:5000}));
    }
    },
    computed:{
         filtrados(){

             return this.proveedores_list.filter(c =>{
                 if ( typeof(c.Nombre) == 'string') {
                    return c.Nombre.toLowerCase().includes(this.filter.toLowerCase())
                 }else{
                       return c
                 }

             })
        }
    }

}
</script>
<style scoped lang="scss">
::v-deep(tr:nth-child(1n) >td:nth-child(1)){
      background-color: rgb(255, 255, 228) !important;
}
::v-deep(tr:nth-child(even) >td:nth-child(1)){
      background-color: rgb(225, 225, 197) !important;
}
</style>
