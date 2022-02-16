<template>

        <TabView v-model:activeIndex="active_tab">
            <TabPanel header="Lista basada en lista">
                <div class="row m-3">
                    <div class="col-md-6 box-left">
                        <div class="masivas-dropdown-wrapper">
                            <label>Basado en Lista</label><br />
                            <Dropdown
                                :options="lista_columnas"
                                optionLabel="name"
                                v-model="selected_lista1"
                                optionValue="value"
                                placeholder="Seleccione Lista"
                                :class="{'p-invalid': submitted && selected_lista1 == null}"
                            />
                            <br>
                            <small class="p-invalid" v-if="submitted && selected_lista1 == null">Campo requerido.</small>
                        </div>
                        <div class="masivas-selector-wrapper">
                            <input
                                type="radio"
                                name="selector-aumento"
                                v-model="aumentar_disminuir"
                                value="aumentar"
                                checked
                            />
                            Aumentar <br />
                            <input
                                type="radio"
                                name="selector-aumento"
                                v-model="aumentar_disminuir"
                                value="disminuir"
                            />
                            Disminuir
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="masivas-dropdown-wrapper">
                            <label>Modificar Lista</label><br />
                            <Dropdown
                                :options="lista_columnas"
                                optionLabel="name"
                                v-model="selected_lista2"
                                optionValue="value"
                                placeholder="Seleccione Lista"
                                :class="{'p-invalid': submitted && selected_lista2 == null}"
                            />
                            <br>
                            <small class="p-invalid" v-if="submitted && selected_lista2 == null">Campo requerido.</small>
                        </div>
                        <div class="masivas-selector-wrapper">
                            <input
                                type="radio"
                                v-model="selected_porcentaje_radio"
                                name="selector-monto"
                                value="porcentaje"
                                checked
                            />
                            Porcentaje <br />
                            <input
                                type="radio"
                                v-model="selected_porcentaje_radio"
                                name="selector-monto"
                                value="monto"

                            />
                            Monto <br />
                            <input
                                type="number"
                                size="4"
                                class="form-control"
                                v-model="porcentaje_monto_value"
                                :class="{'invalid': submitted && porcentaje_monto_value == 0}"
                            />
                             <br>
                            <small class="p-invalid" v-if="submitted && porcentaje_monto_value == 0">Campo requerido.</small>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-8 ">
						<Button :label="msg1" icon="pi pi-cloud-download" :disabled="disable1" class="p-button-text" @click="restorationCreate" />
                        <label for="" v-show="label1">{{restore_date}}</label>
                        <Button label="Restaurar" icon="pi pi-exclamation-circle" v-show="restaurar_btn" class="ml-2 p-button-text p-button-danger" @click="restorationCreate" />
                        <ProgressSpinner v-if="spinner1" style="width:22px;height:22px;margin-left:10px" strokeWidth="3" fill="#EEEEEE" animationDuration=".5s" />
                        <br>
                        <Button label="Puntos de restauración anteriores" icon="pi pi-download"  class="p-button-text" @click="active_tab = 3 " />

                    </div>
                    <div class="col-md-2 offset-2">

						<Button label="Aplicar" :icon="aplicarIcon"  :disabled="disable2" class="p-button-text" @click="aplicar1" />
                    </div>
                </div>
            </TabPanel>
            <TabPanel header="Parcial de lista de precio">
                <div class="row m-3">
                    <div class="col-md-5">
                       <label for="">Primer filtro</label> <br>
                       <select name="" id="" class="form-control"
                        @change="selectedFilter"
                        v-model="selected_filter_type"
                        :class="{'invalid' : submitted2 && selected_filter_type == ''}"
                        style="width:60%">
                           <option value="" selected disabled>Seleccione filtro</option>
                           <option value="articulo">Articulo</option>
                           <option value="marca">Marca</option>
                           <option value="proveedor">Proveedor</option>
                           <option value="grupo">Grupo</option>
                       </select>
                    </div>
                    <div class="col-md-5" v-show="articulofilter">
                       <label for="">Orden de articulos</label><br>
                       <select name="" id="" v-model="orden_articulos" class="form-control" style="width:50%">
                           <option value="Codigo">Código</option>
                            <option value="Descripcion" selected>Descripcion</option>
                       </select>
                    </div>
                </div>
                <div class="row m-3">

                    <!--  -->
                    <div class="col-md-3">
                        <div v-show="articulofilter">
                            <label for="">Desde </label>
                            <input type="text"  class="form-control" v-model="desde_articulo" :class="{'invalid': submitted2 && desde_articulo == ''}">
                            <br>
                            <label for="">Hasta </label>
                            <input type="text"  class="form-control" v-model="hasta_articulo" :class="{'invalid': submitted2 && hasta_articulo == ''}">
                        </div>
                        <div v-show="marcafilter">
                            <label for="">Marca</label><br>
                            <Dropdown
                                :options="lista_marcas"
                                optionLabel="marca"
                                v-model="selected_marca"
                                optionValue="marca"
                                placeholder="Seleccione Marca"
                                :class="{'p-invalid': submitted2 && !selected_marca}"
                            /> <br>
                            <small class="p-invalid" v-if="submitted2 && selected_marca == null">Campo requerido.</small>
                        </div>
                        <div v-show="proveedorfilter">
                            <label for="">Proveedor</label><br>
                            <Dropdown
                                :options="lista_proveedores"
                                optionLabel="Nombre"
                                v-model="selected_proveedor"
                                optionValue="id"
                                placeholder="Seleccione Proveedor"
                                :class="{'p-invalid': submitted2 && !selected_proveedor}"
                            /> <br>
                            <small class="p-invalid" v-if="submitted2 && selected_proveedor == null">Campo requerido.</small>
                        </div>
                        <div v-show="grupofilter">
                            <label for="">Grupo</label><br>
                            <Dropdown
                                :options="grupos"
                                optionLabel="descripcion"
                                v-model="selected_grupo"
                                optionValue="id"
                                placeholder="Seleccione Grupo"
                                :class="{'p-invalid': submitted2 && !selected_grupo}"
                            /> <br>
                            <small class="p-invalid" v-if="submitted2 && selected_grupo == null">Campo requerido.</small>
                        </div>

                    </div>
                    <!--  -->

                    <div class="col-md-3">
                        <label for="">Modificar lista</label><br>
                       <Dropdown
                                :options="lista_columnas"
                                optionLabel="name"
                                v-model="selected_lista2"
                                optionValue="value"
                                placeholder="Seleccione Lista"
                                :class="{'p-invalid': submitted2 && !selected_lista2}"
                            />
                        <small class="p-invalid" v-if="submitted2 && selected_lista2 == null">Campo requerido.</small>
                    </div>
                    <div class="col-md-3">
                        <div class="masivas-selector-wrapper">
                            <input
                                type="radio"
                                name="selector-aumento2"
                                v-model="aumentar_disminuir2"
                                value="aumentar"
                                checked
                            />
                            Aumentar <br />
                            <input
                                type="radio"
                                name="selector-aumento2"
                                v-model="aumentar_disminuir2"
                                value="disminuir"
                            />
                            Disminuir
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="masivas-selector-wrapper">
                            <input
                                type="radio"
                                v-model="selected_porcentaje_radio2"
                                name="selector-monto2"
                                value="porcentaje"
                                checked
                            />
                            Porcentaje <br />
                            <input
                                type="radio"
                                v-model="selected_porcentaje_radio2"
                                name="selector-monto2"
                                value="monto"
                            />
                            Monto <br />
                            <input
                                type="number"
                                min="0"
                                size="4"
                                class="form-control"
                                v-model="porcentaje_monto_value2"
                                :class="{'invalid' : submitted2  && porcentaje_monto_value2 <= 0}"
                            />
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-8 ">
						<Button :label="msg1" icon="pi pi-cloud-download" :disabled="disable1" class="p-button-text" @click="restorationCreate" />
                        <label for="" v-show="label1">{{restore_date}}</label>
                        <Button label="Restaurar" icon="pi pi-exclamation-circle" v-show="restaurar_btn" class="ml-2 p-button-text p-button-danger" @click="restorationCreate" />
                        <ProgressSpinner v-if="spinner1" style="width:22px;height:22px;margin-left:10px" strokeWidth="3" fill="#EEEEEE" animationDuration=".5s" />
                        <br>
                        <Button label="Puntos de restauración anteriores" icon="pi pi-download"  class="p-button-text" @click="active_tab = 3 " />

                    </div>
                    <div class="col-md-2 offset-2">
						<Button label="Aplicar" icon="pi pi-check" class="p-button-text" @click="aplicar2" />
                    </div>
                </div>

            </TabPanel>
            <TabPanel header="Redondeo de lista">
                <div class="row m-3">
                    <div class="col-md-5">
                       <label for="">Primer filtro</label> <br>
                       <select name="" id="" class="form-control"
                       v-show="filter_visible"
                        @change="selectedFilter"
                        v-model="selected_filter_type"
                        :class="{'invalid' : submitted2 && selected_filter_type == ''}"
                        style="width:60%">
                           <option value="" selected disabled>Seleccione filtro</option>
                           <option value="articulo">Articulo</option>
                           <option value="marca">Marca</option>
                           <option value="proveedor">Proveedor</option>
                           <option value="grupo">Grupo</option>
                       </select>
                    </div>
                    <div class="col-md-5" v-show="articulofilter">
                       <label for="">Orden de articulos</label><br>
                       <select name="" id="" v-model="orden_articulos" class="form-control" style="width:50%">
                           <option value="Codigo">Código</option>
                            <option value="Descripcion" selected>Descripcion</option>
                       </select>
                    </div>

                </div>
                <div class="row m-3">

                    <!--  -->
                    <div class="col-md-3">
                        <div v-show="articulofilter">
                            <label for="">Desde </label>
                            <input type="text"  class="form-control" v-model="desde_articulo" :class="{'invalid': submitted2 && desde_articulo == ''}">
                            <br>
                            <label for="">Hasta </label>
                            <input type="text"  class="form-control" v-model="hasta_articulo" :class="{'invalid': submitted2 && hasta_articulo == ''}">
                        </div>
                        <div v-show="marcafilter">
                            <label for="">Marca</label><br>
                            <Dropdown
                                :options="lista_marcas"
                                optionLabel="marca"
                                v-model="selected_marca"
                                optionValue="marca"
                                placeholder="Seleccione Marca"
                                :class="{'p-invalid': submitted2 && !selected_marca}"
                            /> <br>
                            <small class="p-invalid" v-if="submitted2 && selected_marca == null">Campo requerido.</small>
                        </div>
                        <div v-show="proveedorfilter">
                            <label for="">Proveedor</label><br>
                            <Dropdown
                                :options="lista_proveedores"
                                optionLabel="Nombre"
                                v-model="selected_proveedor"
                                optionValue="id"
                                placeholder="Seleccione Proveedor"
                                :class="{'p-invalid': submitted2 && !selected_proveedor}"
                            /> <br>
                            <small class="p-invalid" v-if="submitted2 && selected_proveedor == null">Campo requerido.</small>
                        </div>
                        <div v-show="grupofilter">
                            <label for="">Grupo</label><br>
                            <Dropdown
                                :options="grupos"
                                optionLabel="descripcion"
                                v-model="selected_grupo"
                                optionValue="id"
                                placeholder="Seleccione Grupo"
                                :class="{'p-invalid': submitted2 && !selected_grupo}"
                            /> <br>
                            <small class="p-invalid" v-if="submitted2 && selected_grupo == null">Campo requerido.</small>
                        </div>

                    </div>
                    <!--  -->

                    <div class="col-md-3">
                        <label for="">Modificar lista</label><br>
                       <Dropdown
                                :options="lista_columnas"
                                optionLabel="name"
                                v-model="selected_lista2"
                                optionValue="value"
                                placeholder="Seleccione Lista"
                                :class="{'p-invalid': submitted2 && !selected_lista2}"
                            />
                        <small class="p-invalid" v-if="submitted2 && selected_lista2 == null">Campo requerido.</small>
                    </div>
                    <div class="col-md-3">

                        <label for="">Redondear a: </label><br>
                        <select name="" id="" class="form-control" v-model="round_value">
                            <option value="1">10  cent.</option>
                            <option value="0">1   peso</option>
                        </select>

                    </div>
                    <div class="col-md-3">
                        <label for="">Completa</label><br>
                        <span> &nbsp; &nbsp; &nbsp;</span><Checkbox v-model="input_completa" :binary="true" @change="listaCompleta" />
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-6 offset-6" v-show="input_completa">
                        <span  class="text-danger"> <i class="pi pi-exclamation-triangle"></i> Se modificaran los datos de todos los articulos</span>
                    </div>

                    <div class="col-md-2 offset-10">
						<Button label="Aplicar" icon="pi pi-check" class="p-button-text" @click="aplicar3" />
                    </div>
                </div>
            </TabPanel>

            <TabPanel header="Restaurar datos">
                <div class="row m-1">
                    <span class="actualizar-lista ml-3" @click="getBackups"><u>Actualizar lista</u></span>
                </div>
                <div class="row m-2">
                    <div class="col">
                        <DataTable :value="backup_list" responsiveLayout="scroll">
                            <Column field="id" header="Id" >
                                <template #body="slotProps">
                                {{slotProps.data.id}}
                                </template>
                            </Column>
                            <Column field="created_at" header="Creado" >
                                <template #body="slotProps">
                                {{slotProps.data.created_at}}
                                </template>
                            </Column>
                            <Column field="acciones" header="Acción" >
                                <template #body="slotProps">

                                <Button label="Restaurar" icon="pi pi-download" class="p-button-text" @click="restaurar(slotProps.data.id)"/>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
            </TabPanel>
        </TabView>

</template>

<script>
import ArticuloService from './../service/ArticuloService'
import BackupService from './../service/BackupService';
import MarcaService from './../service/MarcaService'
import ProveedorService from './../service/ProveedorService'
export default {
    props: ['dns', 'grupos'],
    articuloService:null,
    backupService:null,
    data(){
        return{
            //editor masivo
            active_tab:0,
            lista_columnas:[{name:'L1', value:'L1'},{name:'L2', value:'L2'},{name:'L3', value:'L3'},{name:'Costo', value:'Costo'}],//,{name:'Rentabilidad', value:'Rentabilidad'},{name:'Costo D', value:'Costo D'}]
            selected_lista1:null,
            selected_lista2:null,
            selected_porcentaje_radio:'porcentaje',
            selected_porcentaje_radio2:'porcentaje',
            porcentaje_monto_value:0,
            porcentaje_monto_value2:0,
            aumentar_disminuir:'aumentar',
            aumentar_disminuir2:'aumentar',
            backup_list:[],
            total_registros:0,
            submitted:false,
            submitted2:false,
            disable2:false,
            aplicarIcon:'pi pi-check',
            //////
            spinner1:false,
            disable1: false,
            msg1: "Crear nuevo punto de restauracion de seguridad",
            label1:false,
            restaurar_btn:false,
            restore_date:'',

            dialogo_segmento:true,
            //tab 2
            articulofilter:false,
            marcafilter: false,
            proveedorfilter:false,
            grupofilter:false,

            selected_grupo:null,
            lista_proveedores:[],
            filter_visible:true,

            selected_proveedor:null,
            selected_filter_type:'',
            hasta_articulo:'',
            desde_articulo:'',
            orden_articulos:'Descripcion',
            lista_marcas:[],
            selected_marca:null,

            //tab 3
            input_completa:false,
            round_value: '1'

        }
    },
    created() {
        this.articuloService = new ArticuloService();
        this.backupService = new BackupService();
        this.marcaService = new MarcaService();
        this.proveedorService = new ProveedorService();
    },
    mounted() {
        this.getBackups()
        this.marcaService.getMarcas(this.dns)
            .then(res => {
                this.lista_marcas = res
            })
        this.proveedorService.getProveedores(this.dns)
        .then(res => {
            this.lista_proveedores = res
        })
    },
    methods: {
        aplicar1(){
            this.submitted = true
            if (this.selected_lista1 == null || this.selected_lista2 == null || this.porcentaje_monto_value == 0) {
                return
            }
            this.disable2 = true
            this.aplicarIcon='pi pi-spin pi-spinner',
            this.articuloService.getArticulosCount(this.dns).then(res =>{ this.total_registros = res.registros}).then(res=>{
            this.$confirm.require({
                message: `Se harán modficaciones sobre ${this.total_registros} registros ¿Desea continuar?`,
                header: 'Confirmación',
                icon: 'pi pi-exclamation-triangle',
                acceptLabel:'Continuar',
                rejectLabel:'Cancelar',
                accept: () => {
                    this.aplicarIcon = 'pi pi-check'
                    this.disable2 = false
                    this.submitted = true
                    if (this.porcentaje_monto_value != 0 && this.selected_lista1 != null && this.selected_lista2 != null) {
                        this.goMassiveLista()
                    }

                },
                reject: () => {
                    //callback to execute when user rejects the action
                    this.disable2 = false
                    this.aplicarIcon = 'pi pi-check'
                    this.$toast.add({severity:'error',summary:'Cambios No Guardados',detail:`Filas afectadas: 0`, life:6000})
                }
            });
            })
        },
        goMassiveLista(){
            let data = {monto : this.porcentaje_monto_value,
                        tipo_monto:this.selected_porcentaje_radio,
                        selected_base : this.selected_lista1,
                        selected_modificar: this.selected_lista2,
                        operacion: this.aumentar_disminuir,
                        dns: this.dns}
            this.articuloService.masiveActionLista(data)
                .then(res =>{
                    console.log(res)
                    this.$emit('restored', {affected:res.affected, type:"lista"})

                }).catch(console.error)

        },
        restorationCreate(){
            this.spinner1 = true
            this.disable1 = true
            this.msg1 = "Procesando. Espere por favor.."

            this.backupService.articulosBackup(this.dns).then(
                res => {
                    console.log(res)
                this.msg1 = "Punto de restauracion activo."
                this.spinner1 = false
                this.label1 = true
                this.restaurar_btn = true
                this.restore_date = res.date
                }
            ).catch(res =>{
                this.spinner1 = false
                this.msg1 = "No se pudo crear el punto de restauración."
            })

        },
        getBackups(){
            this.backupService.getArticulosBackups(this.dns).then(res => {
               this.backup_list = res.points
            })
        },
        selectedFilter(){

            switch (this.selected_filter_type) {
                case 'articulo':
                    this.articulofilter = true
                    this.marcafilter = false
                    this.proveedorfilter = false
                    this.grupofilter = false

                    break;
                case 'marca':
                    this.articulofilter = false
                    this.marcafilter = true
                    this.proveedorfilter = false
                    this.grupofilter = false

                    break;
                case 'proveedor':
                    this.proveedorfilter = true
                    this.articulofilter = false
                    this.marcafilter = false
                    this.grupofilter = false

                    break;
                case 'grupo':
                    this.proveedorfilter = false
                    this.articulofilter = false
                    this.marcafilter = false
                    this.grupofilter = true

                    break;

                default:
                    break;
            }
        },
        aplicar2(){
            this.submitted2 = true
            if (this.selected_lista2 != null && this.porcentaje_monto_value2 != 0 && this.selected_filter_type != '') {
                let data = {
                    orden:this.orden_articulos,
                    desde: this.desde_articulo,
                    hasta:this.hasta_articulo,
                    type: this.selected_filter_type,
                    lista:this.selected_lista2,
                    monto: this.porcentaje_monto_value2,
                    aumentar_disminuir:this.aumentar_disminuir2,
                    operacion:this.selected_porcentaje_radio2,
                    marca: this.selected_marca,
                    proveedor: this.selected_proveedor,
                    grupo: this.selected_grupo,
                    dns:this.dns
                    }
                switch (this.selected_filter_type) {

                    case 'articulo':
                        if (this.desde_articulo  == '' || this.hasta_articulo == '') {
                            return
                        }
                        break;
                    case 'marca':
                        if (this.selected_marca == null) {
                            return
                        }
                        break;
                    case 'proveedor':
                        if (this.selected_proveedor == null) {
                            return
                        }
                        break;
                    case 'grupo':
                        if (this.selected_grupo == null) {
                            return
                        }
                        break;
                    default:
                        break;
                }
                this.articuloService.getArticulosCountFilter(this.dns, data)
                    .then(res =>{
                        this.$confirm.require({
                        message: `Se harán modficaciones sobre ${res.registros} registros ¿Desea continuar?`,
                        header: 'Confirmación',
                        icon: 'pi pi-exclamation-triangle',
                        acceptLabel:'Continuar',
                        rejectLabel:'Cancelar',
                        accept: () => {
                            this.goMassiveListaFiltered(data)

                        },
                        reject: () => {
                            //callback to execute when user rejects the action

                            this.$toast.add({severity:'error',summary:'Cambios No Guardados',detail:`Filas afectadas: 0`, life:6000})
                        }
                    })

                })
            }
        },
        goMassiveListaFiltered(data){
            this.articuloService.masiveActionListaFiltered(data).then(res =>{
                this.$emit('restored', {affected:res, type:"parcial"})

            }).catch(res => {this.$toast.add({severity:'error',summary:'Cambios No Guardados',detail:`Filas afectadas: 0`, life:6000})})
        },
        aplicar3(){
            if (this.input_completa) {
                this.listaCompleta()
                return
            }
                     //redondeo de lista
            this.submitted2 = true
            console.log(this.selected_lista2)
            console.log(this.selected_filter_type)
            console.log(this.aumentar_disminuir2)
            console.log(this.selected_porcentaje_radio2)
            console.log(this.porcentaje_monto_value)
            console.log(this.desde_articulo)
            console.log(this.hasta_articulo)
            console.log(this.orden_articulos)
            console.log('proveedor', this.selected_proveedor)



            if (this.selected_lista2 != null  && this.selected_filter_type != '') {


                let data = {
                    orden:this.orden_articulos,
                    desde: this.desde_articulo,
                    hasta:this.hasta_articulo,
                    type: this.selected_filter_type,
                    lista:this.selected_lista2,
                    monto: this.porcentaje_monto_value2,
                    aumentar_disminuir:this.aumentar_disminuir2,
                    operacion:this.selected_porcentaje_radio2,
                    marca: this.selected_marca,
                    proveedor: this.selected_proveedor,
                    grupo: this.selected_grupo,
                    dns:this.dns,
                    completa:this.input_completa,
                    value:this.round_value
                    }

                console.log('filtro->',this.selected_filter_type)
                switch (this.selected_filter_type) {

                    case 'articulo':
                        if (this.desde_articulo  == '' || this.hasta_articulo == '') {
                            return
                        }
                        break;
                    case 'marca':
                        if (this.selected_marca == null) {
                            return
                        }
                        break;
                    case 'proveedor':
                        if (this.selected_proveedor == null) {
                            return
                        }
                        break;
                    case 'grupo':
                        if (this.selected_grupo == null) {
                            return
                        }
                        break;
                    default:
                        break;
                }
                this.articuloService.getArticulosCountFilter(this.dns, data)
                    .then(res =>{
                        console.log(res)
                        this.$confirm.require({
                        message: `Se harán modficaciones sobre ${res.registros} registros ¿Desea continuar?`,
                        header: 'Confirmación',
                        icon: 'pi pi-exclamation-triangle',
                        acceptLabel:'Continuar',
                        rejectLabel:'Cancelar',
                        accept: () => {
                            this.aplicarIcon = 'pi pi-check'
                            this.disable2 = false
                            this.submitted = false
                            this.goRedondeoLista(data)

                        },
                        reject: () => {
                            //callback to execute when user rejects the action

                            this.$toast.add({severity:'error',summary:'Cambios No Guardados',detail:`Filas afectadas: 0`, life:6000})
                        }
                    })

                })
            }
        },
        goRedondeoLista(data){
            this.articuloService.massiveRounded(data)
            .then(res => {
                this.$emit('restored', {affected:res, type:"redondeo"})
            }).catch(res => this.$toast.add({severity:'error',summary:'Cambios No Guardados',detail:`Filas afectadas: 0`, life:6000}) )
        },
        restaurar(id){

            let data = {id, dns: this.dns}
            this.backupService.restore(data).then(res =>{
                console.log(res)
                this.$emit('restored', {restored:res, type:"restaurar"})
            }).catch(console.error)
        },
        listaCompleta(){
                this.submitted = true
                this.filter_visible = false
                this.selected_filter_type=''
                this.grupofilter = false
                this.marcafilter=false
                this.proveedorfilter = false
                this.articulofilter = false
            if (!this.input_completa) {
                this.filter_visible = true
            }

            if ( this.selected_lista2 == null || !this.input_completa) {
                    this.grupofilter = false
                    this.marcafilter= false
                    this.proveedorfilter = false
                return
            }

            let data={}
            this.articuloService.getArticulosCount(this.dns).then(res =>{ this.total_registros = res.registros}).then(res=>{
            this.$confirm.require({
                message: `Se harán modficaciones sobre ${this.total_registros} registros ¿Desea continuar?`,
                header: 'Confirmación',
                icon: 'pi pi-exclamation-triangle',
                acceptLabel:'Continuar',
                rejectLabel:'Cancelar',
                accept: () => {
                    this.aplicarIcon = 'pi pi-check'
                    this.disable2 = false
                    this.submitted = false

                    if ( this.selected_lista2 != null) {
                        let data = {completa:this.input_completa, value: this.round_value, lista:this.selected_lista2, dns:this.dns}
                       this.goRedondeoLista(data)
                    }

                },
                reject: () => {
                    //callback to execute when user rejects the action
                    this.disable2 = false
                    this.aplicarIcon = 'pi pi-check'
                    this.$toast.add({severity:'error',summary:'Cambios No Guardados',detail:`Filas afectadas: 0`, life:6000})
                }
            });
            })
        }
    },
};
</script>


<style lang="scss" scoped>
.masivas-dropdown-wrapper{
    display: inline-block;
}
.masivas-selector-wrapper{
    display: inline-block;
    padding: 1em;
    margin-top: 2em;
    margin-left: 1em;
    border: 1px solid #cecece;
    vertical-align: top;
    background-color: rgb(252, 248, 240);
}
.box-left{
    border-right:1px solid #cecece;
}
input[type="number"] {
   width:80px;
   margin-top:0.5em;
}
.invalid{
    border: 1px solid red;
}
.actualizar-lista{
    color: rgb(98, 177, 252);
    cursor: pointer;
}
::v-deep(.aro .p-highlight){
    color: rgb(8, 145, 250) !important;
    border-color: rgb(8, 145, 250) !important;
    background: rgb(8, 145, 250) !important;
}
::v-deep(.p-focus){

    box-shadow: 0 0 0 .2rem rgba(8,145,250, 0.494) !important;
}

::v-deep(.p-multiselect-item .p-highlight ){
    background: rgb(8, 145, 250);//#2196F3
}

</style>
