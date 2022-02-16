<template>
     <div class="container-c shadow bg-white">
				<!-- <Toast position="bottom-right" /> -->
				<Toolbar class="p-mb-1 bg-white toolbar">
                     <template v-slot:left>
                         <div class="">
                            <h3>Clientes</h3>
                        </div>
                     </template>
                    <template v-slot:right>
                        <span class="p-input-icon-right center">
                                <i class="pi pi-search" />
                                <InputText v-model="filter" size="60" placeholder="Buscar..." />
                        </span>
                        <Button label="Nuevo Cliente" icon="pi pi-plus" class="p-button-success p-mr-2 ml-5 orange" @click="new_client=true" />
                    </template>
				</Toolbar>

                <DataTable :value="filtrados"

                            editMode="cell"
                             :scrollable="true"
                             scrollDirection="both"
                            class="table-striped mt-5"
                            showGridlines>

                    <Column field="Nombre" header="Nombre"   style="width:180px;padding-left:15px;font-size:0.9em" frozen>
                        <template #body="{data}">
                            {{data.Nombre}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="20" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="RespIva" header="RespIva"   style="width:180px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.RespIva}}
                        </template>
                        <template #editor="slotProps">
                            <Dropdown  :options="iva_list" optionLabel="descripcion" size="4" optionValue="descripcion" class="inputext"
                            v-model="slotProps.data.RespIva"
                                @click="storeOld(slotProps.data.RespIva)"
                                @change="updateCell(
                                    slotProps.data.id,
                                    'RespIva',
                                    slotProps.data.RespIva
                                )">
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="Cuit" header="Cuit"   style="width:120px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.Cuit}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="12" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="Telefonos" header="Telefonos"   style="width:140px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.Telefonos}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="14" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="Direccion" header="Direccion"   style="width:200px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.Direccion}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="20" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="Localidad" header="Localidad"   style="width:140px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.Localidad}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="15" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="Email" header="Email"   style="width:150px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.Email}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="14" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="DNI" header="DNI"   style="width:100px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.DNI}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="6" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="Saldo" header="Saldo"   style="width:80px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.Saldo}}
                        </template>
                        <template #editor="slotProps" >
                            <input type="number" v-model="slotProps.data[slotProps.column.props.field]" size="6" class="inputext form-control"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )" />

                        </template>
                    </Column>
                    <Column field="CtaCte" header="CtaCte"   style="width:80px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                           <input type="checkbox" v-if="data.CtaCte == 1" checked/>
                           <input type="checkbox" v-else />
                        </template>
                        <template #editor="slotProps" >
                            <input type="checkbox" v-model="slotProps.data[slotProps.column.props.field]" size="6" class="inputext "
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )" />

                        </template>

                    </Column>
                    <Column field="lista" header="Lista"   style="width:60px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.lista}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="4" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="procesado" header="Procesado"   style="width:100px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                           <input type="checkbox" v-if="data.procesado == 1" checked/>
                           <input type="checkbox" v-else />
                        </template>
                        <template #editor="slotProps" >
                            <input type="checkbox" v-model="slotProps.data[slotProps.column.props.field]" size="6" class="inputext "
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )" />

                        </template>
                    </Column>
                    <Column field="idcliente" header="Id Cliente"   style="width:100px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.idcliente}}
                        </template>
                    </Column>
                    <Column field="Nacimiento" header="Nacimiento"   style="width:120px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.Nacimiento}}
                        </template>
                         <template #editor="slotProps" >
                            <input type="date" v-model="slotProps.data[slotProps.column.props.field]" size="10" class="inputext form-control"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">

                        </template>
                    </Column>
                    <Column field="Notas" header="Notas"   style="width:160px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.Notas}}
                        </template>
                         <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="14" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="provincia" header="Provincia"   style="width:160px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.provincia}}
                        </template>
                         <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="16" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="idvendedor" header="Id Vendedor"   style="width:120px;padding-left:15px;font-size:0.9em">
                        <template #body="{data}">
                            {{data.idvendedor}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="4" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>

                </DataTable >
                <!-- DIALOG  -->

                <Dialog v-model:visible="new_client" header="Nuevo Cliente" style="width:50%">
                    <div class="row ">
                        <div class="col-md-6">
                            <label for="">Nombre</label> <br>
                            <InputText v-model="cliente.nombre" :class="{'p-invalid': submitted && !cliente.nombre}" class="form-control">
                            </InputText>
                            <small class="p-invalid" v-if="submitted && !cliente.nombre">Este campo es  obligatorio.</small>
                        </div>
                        <div class="col-md-6">
                            <label for="">Resp Iva</label> <br>
                            <Dropdown  :options="iva_list" optionLabel="descripcion" optionValue="descripcion" :class="{'p-invalid': submitted && !cliente.RespIva}"
                            v-model="cliente.RespIva">
                            </Dropdown>
                            <small class="p-invalid" v-if="submitted && !cliente.RespIva">Este campo es  obligatorio.</small>
                        </div>
                        <div class="col-md-6">
                            <label for="">Cuit</label> <br>
                            <InputText v-model="cliente.cuit" :class="{'p-invalid': submitted && !cliente.cuit}" class="form-control">
                            </InputText>
                            <small class="p-invalid" v-if="submitted && !cliente.cuit">Este campo es  obligatorio.</small>
                        </div>
                        <div class="col-md-6">
                            <label for="">Telefonos</label> <br>
                            <InputText v-model="cliente.telefonos"  class="form-control">
                            </InputText>
                        </div>
                        <div class="col-md-6">
                            <label for="">Direccion</label> <br>
                            <InputText v-model="cliente.direccion" :class="{'p-invalid': submitted && !cliente.direccion}" class="form-control">
                            </InputText>
                            <small class="p-invalid" v-if="submitted && !cliente.direccion">Este campo es  obligatorio.</small>
                        </div>
                        <div class="col-md-6">
                            <label for="">Localidad</label> <br>
                            <InputText v-model="cliente.localidad" :class="{'p-invalid': submitted && !cliente.localidad}" class="form-control">
                            </InputText>
                            <small class="p-invalid" v-if="submitted && !cliente.localidad">Este campo es  obligatorio.</small>
                        </div>
                        <div class="col-md-6">
                            <label for="">Email</label> <br>
                            <InputText v-model="cliente.email" class="form-control">
                            </InputText>
                        </div>
                        <div class="col-md-6">
                            <label for="">Provincia</label> <br>
                            <InputText v-model="cliente.provincia" class="form-control">
                            </InputText>
                        </div>
                        <div class="col-md-3">
                            <label for="">Dni</label> <br>
                            <InputText v-model="cliente.dni" class="form-control">
                            </InputText>
                        </div>
                        <div class="col-md-3">
                            <label for="">Nacimiento</label> <br>
                            <InputText v-model="cliente.nacimiento" class="form-control">
                            </InputText>
                        </div>

                        <div class="col-md-3">
                            <label for="">Saldo</label> <br>
                            <InputText v-model="cliente.saldo" class="form-control">
                            </InputText>
                        </div>
                        <div class="col-md-3">
                            <label for="">Lista</label> <br>
                            <InputText v-model="cliente.lista" class="form-control">
                            </InputText>
                        </div>
                         <div class="col-md-2">
                            <label for="">Lista</label> <br>
                            <InputText v-model="cliente.lista" class="form-control">
                            </InputText>
                        </div>
                         <div class="col-md-2">
                            <label for="">Lista</label> <br>
                            <InputText v-model="cliente.lista" class="form-control">
                            </InputText>
                        </div>
                         <div class="col-md-2">
                            <label for="">Lista</label> <br>
                            <InputText v-model="cliente.lista" class="form-control">
                            </InputText>
                        </div>
                         <div class="col-md-2">
                            <label for="">Lista</label> <br>
                            <InputText v-model="cliente.lista" class="form-control">
                            </InputText>
                        </div>
                    </div>


                    <template #footer>
						<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="new_client = false"/>
						<Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="storeClient" />
					</template>

                </Dialog>

    </div>
</template>

<script>
import ClientService from './../../service/ClientRemoteService'
import ProveedorService from './../../service/ProveedorService'
export default {
    props:['data'],
    clienteService:null,
    proveedorService:null,
    data(){
        return{
            filter:'',
            data_json:null,
            memmory:null,
            new_client:false,
            cliente:{},
            submitted:false,
            iva_list:[]
        }
    },
    created(){
        this.data_json = JSON.parse(this.data);
        //console.log(this.data_json)
        this.clienteService = new ClientService();
        this.proveedorService = new ProveedorService();
    },
    mounted() {
        this.proveedorService.getRespIva()
            .then(res => {this.iva_list = res})
    },
    methods: {
        storeOld(old){
            this.memmory = old;
        },
        updateCell(id, field, newValue){
            console.log(this.memmory)

        let data = {identifier: 'id', id:id, field: field, new_value: newValue, old:this.memmory}
        console.log(data)

        this.clienteService.updateField(data)
            .then(res =>{
                console.log(res);
                this.$toast.add({severity:'success', summary: 'Éxito !', detail: 'Los cambios se guardaron exitosamente', life: 1500})
            })
            .catch(res => {
                this.$toast.add({severity:'error', summary: 'Error !', detail: 'Los cambios no se guardaron.', life: 1500})
            })
        },
        storeClient(){
            this.submitted= true
        }
    },
    computed:{
        filtrados(){
            return this.data_json.filter(c =>{
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
.table{
    padding: 0;
}
.inputext{
    padding: 0;

}
.p-inputtext{

}
option{
    padding: 0 !important;
}
.col-md-6, .col-md-4, .col-md-3{
    margin:0 !important;
}
::v-deep(tr:nth-child(even)) {
    background-color: rgb(240, 240, 240) !important;
}
// ::v-deep(tr:nth-child(1n) >td:nth-child(2)){
//       background-color: rgb(255, 255, 228) !important;
// }
::v-deep(tr:nth-child(1n) >td:nth-child(1)){
      background-color: rgb(255, 255, 228) !important;
}
::v-deep(tr:nth-child(even) >td:nth-child(1)){
      background-color: rgb(225, 225, 197) !important;
}
// ::v-deep(tr:nth-child(even) >td:nth-child(2)){
//       background-color: rgb(225, 225, 197) !important;
// }
</style>
