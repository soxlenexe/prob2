<template>
    <div class="container-c mt-3 p-3 shadow">
        <h3 class="font-weight-bold mt-2">Reportes</h3>
        <p>Los reportes sin filtros muestran la información de los últimos 30 dias.</p>
        <br>
        <hr>
        <!-- SELECCION DE SUCURSAL -->
        <label for=""><strong>Sucursal:</strong>  </label> <span> &nbsp; &nbsp;</span>
        <Dropdown v-model="selected_sucursal"
                    :options="sucursales_list"
                    optionLabel="name"
                    placeholder="Seleccione sucursal"

                    :class="{'p-invalid':alert_sucursal}"
                    @change="enableButtons()"
                    >
        </Dropdown>
        <InlineMessage class="p-invalid" v-show="alert_sucursal"> Antes debe seleccionar una sucursal</InLineMessage>
        <!-- SELECCION DE FILTROS -->
        <hr>
        <span  v-bind:class="{ 'check-filter': isChecked,  'uncheck-filter': !isChecked}">
            </span> <span class="font-weight-bold bt" @click="isChecked = !isChecked">Sin filtros</span>  -
            <span  v-bind:class="{ 'check-filter': !isChecked,  'uncheck-filter': isChecked}">
            </span> <span class=" bt font-weight-bold" @click="isChecked = !isChecked">Con filtros</span>
        <!-- TARJETAS DE REPORTES -->
        <div class="fiter-container mt-3">
            <h5 class="font-weight-bold">Venta de productos</h5>
            <hr>
            <div class="row">
                <div class="col-md-3 mb-1   p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Ventas por forma de pago (Medios de Pago)</p>
                            <span class="btn btn-warning btn-custom float-right " v-tooltip.bottom="'Antes debe seleccionar una sucursal'"  v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('medios') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2"   v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('medios') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-1  p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Ventas por fecha, operador y grupo</p>

                            <span class="btn btn-warning btn-custom float-right" v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('fecha y operador') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2 "   v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('fecha y operador') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-1 p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Ventas por fecha y grupo</p>
                            <span class="btn btn-warning btn-custom float-right"  v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('fecha y grupo') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2 "   v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('fecha y grupo') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-1  p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Ventas por Operador</p>
                            <span class="btn btn-warning btn-custom float-right"  v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('caja y operador') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2"   v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('caja y operador') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-1  p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Ventas por horas.</p>
                            <span class="btn btn-warning btn-custom float-right" v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('hora') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2 "   v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('hora') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-1  p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Ranking de ventas de artículos</p>
                            <span class="btn btn-warning btn-custom float-right" v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('ranking ventas') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2"  v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('ranking ventas') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
            </div> <!-- row-->

            <h5 class="font-weight-bold mt-2">Remitos</h5>
            <hr>
            <div class="row">
                <div class="col-md-3 mb-1  p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Ventas por fecha y grupo</p>
                            <span class="btn btn-warning btn-custom float-right"  v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('remitos') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2 "   v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('remitos') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
            </div> <!-- row-->

            <h5 class="font-weight-bold mt-2">Reporte de caja</h5>
            <hr>
            <div class="row">
                <div class="col-md-3 mb-1 p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Reporte de Caja por fecha</p>
                            <span class="btn btn-warning btn-custom float-right" v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('por fecha') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2 "   v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('por fecha') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
            </div> <!-- row-->
            <h5 class="font-weight-bold mt-2">Stock Valorizado</h5>
            <hr>
            <div class="row">
                <div class="col-md-3 mb-1  p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Stock por rubro y proveedor</p>
                            <span class="btn btn-warning btn-custom float-right" v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('por rubro y proveedor') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2"  v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('por rubro y proveedor') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-1  p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Stock por rubro</p>
                            <span class="btn btn-warning btn-custom float-right" v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('por rubro') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2"  v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('por rubro') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
            </div> <!-- row-->

            <h5 class="font-weight-bold mt-2">Movimientos de stock</h5>
            <hr>
            <div class="row">
                <div class="col-md-3 mb-1  p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive }">Por sucursal</p>
                            <span class="btn btn-warning btn-custom float-right" v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('mov_stock') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2 "   v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('mov_stock') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
            </div> <!-- row-->

            <h5 class="font-weight-bold mt-2">IVA Ventas</h5>
            <hr>
            <div class="row">
                <div class="col-md-3 mb-1  p-1">
                    <div class="card bg-dark w-border" v-bind:class="{ light: isActive }">
                        <div class="card-body p-1 ">
                            <p class="title mb-4 " v-bind:class="{ 'text-white': !isActive}">Iva ventas</p>
                            <span class="btn btn-warning btn-custom float-right" v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? actionDialog('venta_iva') : alerta()">Ver reporte</span>
                            <button class="btn btn-warning btn-custom2 float-right mr-2"  v-bind:class="{'disabled': !is_sucursal}" @click="is_sucursal  ? getPdf('venta_iva') : alerta()">PDF <i class="pi pi-download"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--  -->
        <!-- DIALOGO PARA FILTROS -->
      <Dialog v-model:visible="filter_dialog" header="Filtros" :style="{width: '750px'}" :modal="true" class="p-fluid" position="top"
            :closeOnEscape="false" :closable="false">
            <div class="p-field" >
              <h4>{{selected_sucursal.name}}</h4>
          </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="p-field" v-show="con_desde">
                        <label for="">Fecha Desde</label>
                        <Calendar :showIcon="true" v-model="query.desde" dateFormat="dd/mm/yy" modelValue='dd/mm/yy' :maxDate="new Date()" style="z-index:9999">
                        </Calendar>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-field" v-show="con_hasta">
                        <label for="">Fecha Hasta</label>
                        <Calendar :showIcon="true" v-model="query.hasta" dateFormat="dd/mm/yy" :maxDate="new Date()">
                        </Calendar>
                    </div>
                </div>
            </div>



          <div class="p-field" v-show="con_stock">
              <label for="">Con stock</label>
              <Dropdown v-model="query.stock" :options="con_stock_list" optionLabel="name"  placeholder="Seleccione si o no" optionValue="value" :class="{'p-invalid': submitted && !query.stock}">

              </Dropdown>
               <small class="p-invalid" v-if="submitted && !query.stock">Debe seleccionar si desea stock.</small>
          </div>
          <div class="p-field" v-show="con_proveedor">
              <label for="">Proveedor</label>
              <Dropdown v-model="query.proveedor" :options="proveedors_list" optionLabel="Nombre" placeholder="Seleccione Proveedor" optionValue="Nombre" :class="{'p-invalid': submitted && !query.proveedor}">

              </Dropdown>
               <small class="p-invalid" v-if="submitted && !query.proveedor">Debe seleccionar un proveedor.</small>
          </div>
          <div class="p-field" v-show="con_grupo">
              <label for="">Grupo</label>
              <Dropdown v-model="query.grupo" :options="grupos_list" optionLabel="descripcion" placeholder="Seleccione grupo" optionValue="id" :class="{'p-invalid': submitted && !query.grupo}">

              </Dropdown>
              <small class="p-invalid" v-if="submitted && !query.grupo">Debe seleccionar un grupo.</small>
          </div>
          <div class="p-field" v-show="con_caja">
              <label for="">Caja</label>
              <Dropdown v-model="query.caja"  :default="caja_list[0]" :options="caja_list"  optionLabel="Caja" optionValue="Caja" :class="{'p-invalid': submitted && !query.caja}" placeholder="Seleccione caja" :required="true">
              </Dropdown>
              <small class="p-invalid" v-if="submitted && !query.caja">Debe seleccionar una caja.</small>
          </div>
          <div class="p-field" v-show="con_tipo">
              <label for="">Tipo</label>
              <Dropdown v-model="query.tipo" :options="tipo_list" optionLabel="Tipo"   placeholder="Seleccione tipo" :class="{'p-invalid': submitted && !query.tipo}" optionValue="Tipo">

              </Dropdown>
               <small class="p-invalid" v-if="submitted && !query.tipo">Debe seleccionar un tipo de factura.</small>
          </div>
          <div class="p-field" v-show="con_medio">
              <label for="">Medio de pago</label>
              <Dropdown v-model="query.medio" :options="medio_list" optionLabel="descripcion" optionValue="descripcion" placeholder="Seleccione medio de pago" :class="{'p-invalid': submitted && !query.medio}">

              </Dropdown>
               <small class="p-invalid" v-if="submitted && !query.medio">Debe seleccionar un medio de pago.</small>
          </div>
          <div class="p-field" v-show="con_operador">
              <label for="">Operador</label>
              <Dropdown v-model="query.operador" :options="operador_list"  placeholder="Seleccione operador" optionLabel="Operador" optionValue="Operador" :class="{'p-invalid': submitted && !query.operador}">

              </Dropdown>
               <small class="p-invalid" v-if="submitted && !query.operador">Debe seleccionar un operador.</small>
          </div>
            <template #footer>
				<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="{filter_dialog=false;resetDialog();submitted=false;isActive=false}"/>
				<Button label="Generar reporte" icon="pi pi-check" class="p-button-text" @click="getQueryReport" />
			</template>
      </Dialog>
      <!-- SPINNER -->
      <!-- <Dialog v-model:visible="spinner"  header="Generando reporte" :modal="true" :closable="false">
           <div style="padding-left:75px; width: 250px; height: 200px" >
            <ProgressSpinner />
            </div>
      </Dialog> -->
    <!-- DIALOGO DE SELECCIOND E SUCURSAL PARA CLIENTES SUPERUSER -->
      <!-- <Dialog v-model:visible="sucursal_dialog" header="Sucursal" :modal="true" :closable="false">
            <div class="row">
                <div class="col">
                     <br>
                    <Dropdown v-model="query.sucursal"
                    :options="sucursales_list"
                    optionLabel="name"
                    placeholder="Seleccione sucursal"
                    optionValue="dns"
                    :class="{'p-invalid': submitted && !query.sucursal}"
                    @change="goAhead()"
                    >

                    </Dropdown>
                    <br><br><br>
                </div>

            </div>
            <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="{sucursal_dialog=false;}"/>
			<Button label="Continuar" icon="pi pi-check" class="p-button-text" @click="goAhead()" />
      </Dialog> -->

    </div>
</template>

<script>
import GrupoService from './../service/GrupoService';
import OperatorService from './../service/OperatorService';
import ProveedorService from './../service/ProveedorService';
import MediosDePagoService from './../service/MediosDePagoService';
import TiposFacturaService from './../service/TipoFacturaService';
import CajaService from './../service/CajaService';
import SucursalesService from './../service/SucursalesService'
export default {
    props:['user_data'],
    grupoService:null,
    operatorService:null,
    proveedorService:null,
    sucursalesService:null,
    mediosService:null,
    tiposFacturaService:null,
    cajaService:null,
    user_data_json:{},
    data(){
        return{
            filter_choice:'con',
            filter_dialog:false,
            sucursal_dialog:false,
            // datos para las opciones
            proveedors_list:[],
            caja_list:[],
            tipo_list:[],
            medio_list:[],
            operador_list:[],
            con_stock_list:[{name:'Si', value:true}, {name:'No', value:false}],
            sucursales_list:[],
            grupos_list:[],
            //campos a mostrar
            con_grupo:false,
            con_stock:false,
            con_proveedor:false,
            con_operador:false,
            con_caja:false,
            con_tipo:false,
            con_desde:false,
            con_hasta:false,
            con_sucursal:false,
            con_medio:false,
            // query
            query:{hasta: new Date(), desde: new Date()},
            spinner:false,
            submitted:false,
            url:null,
            schema:null,
            //class
            isActive:false,
            isChecked:false,
            selected_sucursal:'',
            reporte:null,
            is_sucursal:false,
            alert_sucursal: false,
            mode: 'view'
        }
    },
    created(){
        this.grupoService = new GrupoService();
        this.operatorService = new OperatorService();
        this.proveedorService = new ProveedorService();
        this.mediosService = new MediosDePagoService();
        this.tiposFacturaService = new TiposFacturaService();
        this.cajaService = new CajaService();
         this.sucursalesService = new SucursalesService();

    },
    mounted(){
        let dns_list=[];
        this.sucursalesService.getSucursalesNamesbyClient(localStorage.getItem('company')).then(res => {
            console.log(localStorage.getItem('company'))
            console.log('report suc', res)
            if (localStorage.getItem('company') !== 'undefined') {
                console.log('if')
                res.forEach(element => {
                    this.sucursales_list.push({name:element.sucursal_descripcion, value:element.sucursal_descripcion, dns: element.dns })
                    dns_list.push(element.dns)
                        })
            }else{
                console.log('else')
                if (JSON.parse(this.user_data).data.sucursal_descripcion != undefined) {
                 this.sucursales_list = [{name:JSON.parse(this.user_data).data.sucursal_descripcion, value:JSON.parse(this.user_data).data.sucursal_descripcion, dns:JSON.parse(this.user_data).data.dns }]
             }
            }
        })
        this.getGeneralData()

        this.user_data_json = JSON.parse(this.user_data)
    },
    methods:{

        getGeneralData(){
            //cargar grupos
            //console.log(this.selected_sucursal, this.sucursales_list)
        this.grupoService.getGroupList(this.selected_sucursal.dns)//---
            .then(res =>{
                this.grupos_list = res,
                this.grupos_list.unshift({id:1000, descripcion:'TODOS'})
                });
        //cargar cajas
        this.cajaService.getCajas(this.selected_sucursal.dns)//---
            .then(res => {
                this.caja_list = res,
                this.caja_list.unshift({Caja: 'TODAS'})
                });
        //cargar operadores
        this.operatorService.getOperadoresDns(this.selected_sucursal.dns)//---
            .then(res => {
                this.operador_list = res;
                this.operador_list.unshift({Operador: 'TODOS'})
                });
        //cargar operadores
        this.proveedorService.getProveedores(this.selected_sucursal.dns)//----
            .then(res => {
                this.proveedors_list = res,
                this.proveedors_list.unshift({Nombre: 'TODOS'})
                });
        //carger medios de pago
        this.mediosService.getMedios(this.selected_sucursal.dns)///-----
            .then(res => {
                this.medio_list = res,
                this.medio_list.unshift({descripcion: 'TODOS'})
                });
        //cargar tipos de facturas
        this.tiposFacturaService.getTiposFactura(this.selected_sucursal.dns)//----
            .then(res => {
                this.tipo_list = res,
                this.tipo_list.unshift({Tipo: 'TODOS'})
                });
        },
        enableButtons(){
            //console.log('enabled')
            this.is_sucursal = true
            this.alert_sucursal = false

            this.getGeneralData()

        },
        alerta(){
           this.alert_sucursal = true
        },
        resetDialog(){
            this.con_grupo = false
            this.con_stock = false
            this.con_proveedor = false
            this.con_operador = false
            this.con_caja = false
            this.con_tipo = false
            this.con_desde = false
            this.con_hasta = false
            this.con_sucursal = false
            this.con_medio = false
        },
        actionDialogSuc(reporte){
            if (this.user_data_json.data.rol == 'client' && !this.isChecked) {
                this.sucursal_dialog = true
                this.reporte = reporte
            }

        },
        goAhead(){
            this.selected_sucursal = this.query.sucursal
            this.sucursal_dialog = false
            this.actionDialog(this.reporte)
        },
        actionDialog(reporte){
            if (this.selected_sucursal == null && !this.isChecked) {
                this.actionDialogSuc(reporte)
                return
            }
            //console.log(this.selected_sucursal)
            //this.selected_sucursal = null;
            //return
                this.isActive = true
                if (this.isChecked) {
                    this.filter_choice = 'con'
                }else{
                    this.filter_choice = 'sin'
                }
                if (this.filter_choice == 'con') {
                    this.filter_dialog=true
                    switch (reporte) {
                        case 'remitos':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.con_grupo = true;
                            this.schema = ['grupo']
                            if (this.mode == 'pdf') {
                                this.url = 'ajax/reports/remitos/filtered?';
                                break;
                            }
                            this.url = '/reports/remitos/filtered?';
                            break;
                        case 'medios':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.con_caja = true;
                            this.con_tipo = true;
                            this.con_medio = true;
                            this.schema = ['caja', 'tipo', 'medio'];
                            if (this.mode == 'pdf') {
                                this.url = 'ajax/reports/venta_medios_de_pago/filtered?';
                                break;
                                }
                            this.url = '/reports/venta_medios_de_pago/filtered?';
                            break;

                        case 'fecha y operador':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.con_caja = true;
                            this.con_operador = true;
                            this.con_grupo = true;
                            this.schema = ['caja', 'operador', 'grupo']
                            if (this.mode == 'pdf') {
                                this.url = 'ajax/reports/venta_by_operador/filtered?';
                                break;
                            }
                            this.url = '/reports/venta_by_operador/filtered?';
                            break;
                        case 'fecha y grupo':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.con_grupo = true;
                            this.schema = [ 'grupo'];
                            if (this.mode == 'pdf') {
                                this.url = 'ajax/reports/venta_by_fecha_grupo/filtered?';
                                break;
                            }
                            this.url = '/reports/venta_by_fecha_grupo/filtered?';
                            break;
                        case 'caja y operador':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.con_operador = true;
                            this.schema = [ 'operador'];
                            if (this.mode == 'pdf') {
                                this.url = 'ajax/reports/venta_by_caja_operador/filtered?';
                                break;
                            }
                             this.url = '/reports/venta_by_caja_operador/filtered?';
                            break;
                        case 'hora':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.schema = []
                            if (this.mode == 'pdf') {
                                this.url = 'ajax/reports/venta_by_horas/filtered?';
                                break;
                            }
                             this.url = '/reports/venta_by_horas/filtered?';
                            break;
                        case 'ranking ventas':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.schema = []
                            if (this.mode == 'pdf') {
                                this.url = 'ajax/reports/venta_ranking/filtered?';
                                break;
                            }
                             this.url = '/reports/venta_ranking/filtered?';
                            break;
                        case 'por fecha':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.schema = []
                            if (this.mode == 'pdf') {
                                this.url = 'ajax/reports/movimientos_caja/filtered?';
                                break;
                            }
                            this.url = '/reports/movimientos_caja/filtered?';
                            break;
                        case 'por rubro y proveedor':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.con_grupo = true;
                            this.con_proveedor = true;
                            this.schema = ['grupo', 'proveedor'];
                            if (this.mode == 'pdf') {
                                this.url = 'ajax/reports/stock_by_proveedor/filtered?';
                                break;
                            }
                            this.url = '/reports/stock_by_proveedor/filtered?';
                            break;
                        case 'por rubro':
                            this.con_grupo = true;
                            this.schema = ['grupo']
                            if (this.mode == 'pdf') {
                                 this.url = 'ajax/reports/stock_by_group/filtered?';
                                 break;
                            }
                            this.url = '/reports/stock_by_group/filtered?';
                            break;
                        case 'venta_iva':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.con_caja = true;
                            this.schema = [ 'caja']
                            if (this.mode == 'pdf') {
                                this.url = 'ajax/reports/venta_by_iva/filtered?';
                                break;
                            }
                            this.url = '/reports/venta_by_iva/filtered?';
                            break;

                        case 'mov_stock':
                            this.con_desde = true;
                            this.con_hasta = true;
                            this.schema = [];
                            if (this.mode == 'pdf') {
                                this.url =  'ajax/reports/movstock/filtered?';
                                break;
                            }
                            this.url =  '/reports/movstock/filtered?';
                            break;
                        default:
                            break;
                    }
                }else{

                    switch (reporte) {
                        case 'remitos':
                            if (this.mode == 'pdf') {
                                this.windowManager('/ajax/reports/plane/remitos/'+this.selected_sucursal.dns+'/'+this.mode)
                                break;
                            }
                            this.windowManager('/reports/remitos/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;

                        case 'por rubro':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/stock_by_group/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/stock_by_group/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        case 'por rubro y proveedor':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/stock_by_proveedor/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/stock_by_proveedor/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        case 'mov_stock':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/movstock/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/movstock/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        case 'fecha y operador':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/venta_by_operador/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/venta_by_operador/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        case 'fecha y grupo':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/venta_by_fecha_grupo/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/venta_by_fecha_grupo/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        case 'caja y operador':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/venta_by_caja_operador/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/venta_by_caja_operador/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        case 'hora':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/venta_by_horas/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/venta_by_horas/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        case 'medios':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/venta_medios_de_pago/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/venta_medios_de_pago/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        case 'por fecha':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/movimientos_caja/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/movimientos_caja/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        case 'ranking ventas':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/venta_ranking/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/venta_ranking/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        case 'venta_iva':
                            if (this.mode == 'pdf') {
                            this.windowManager('/ajax/reports/plane/venta_by_iva/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                            }
                            this.windowManager('/reports/venta_by_iva/'+this.selected_sucursal.dns+'/'+this.mode)
                            break;
                        default:
                            break;
                    }
                }

        },
        getQueryReport(){
            this.submitted = true
            let querystring = this.serializeQuery(this.query);
            if (this.submitted && this.validateFields()) {

                this.filter_dialog=false
                this.spinner = true
                this.resetDialog()

                //window.location.href = this.url+querystring;
                this.windowManager(this.url+querystring)
                    .then(res => this.submitted = false)

            }
            //this.submitted = false;


        },
        async openWindow(url){
                await window.open(url, '_blank');
            },
        windowManager(url){
            this.spinner = true;
            this.openWindow(url)
                .then(res => {
                    this.spinner = false
                    this.isActive = false
                    this.mode = 'view'
                    });

        },
        validateFields(){
            for (const field of this.schema) {
                if (!this.query[field]) {
                    return false;
                }
            }


            this.schema=[]
            return true

        },
        getPdf(report){
            this.mode = 'pdf'
            this.actionDialog(report)


        },
        serializeQuery(query){
            let str = [];
            for (let p  in query){
                if (query.hasOwnProperty(p)) {
                    if (encodeURIComponent(p) == 'desde') {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(query[p]));
                    }else{
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(query[p]));
                    }
                }
            }
            str.push('dns'+'='+this.selected_sucursal.dns)
            str.push('mode'+'='+this.mode)
            return str.join("&");
        }
    }

}
</script>

<style lang="scss" scoped>

.btn-warning{
    background-color: orange !important;
    border: 0;
}
.w-border{
    border-radius: 0px !important;
    background-color: rgb(31, 29, 29) !important;

}
.light{
    border-radius: 0px !important;
    background-color: rgb(232, 232, 232) !important;

}
.btn-custom{
    /*background-color: coral !important;*/
    border-radius: 2px !important;
    color: #fff;
    font-weight: bold;
    padding: 5px 15px 5px 15px !important;
}
.btn-custom2{
    /*background-color: coral !important;*/
    border-radius: 2px !important;
    color: #fff;
    font-weight: bold;
    padding: 5px 15px 5px 15px !important;
    background-color: rgb(255, 102, 0) !important;
}
.title{
    font-size: 1.1rem;
}
hr{
    height: 1px;
    background-color: rgb(95, 93, 93);
}
.row{
    margin-left: .1rem;
    margin-right: .1rem;
}
.card-body{
    padding: .35rem !important;
}

input{
    display: none;
}
.uncheck-filter{
    display: inline-block;
    border: 3px solid orange;
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
}
.check-filter{
    display: inline-block;
    border: 1px solid rgb(100, 97, 94);
    height: .8rem;
    width: .8rem;
    border-radius: 50%;

}
.bt{
    cursor: pointer;
}
.card{
    padding: .5rem .1rem .1rem .5rem !important;
}

.p-button-text{
    color: rgb(39, 39, 38) !important;
}
.p-button{
    color: rgb(39, 39, 38) !important;
}
.p-tooltip-text{
    color: rgb(255, 5, 5) !important;
}
::v-deep(.p-datepicker){
    z-index: 2222;
}
</style>
