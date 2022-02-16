<template>
  <div class="container">
      <div class="select-type">
          <div class="row">
              <div class="col-md-4 mb-4">
                   <div class="rb-wrapper"><RadioButton name="city"  value="con" v-model="filter_choice" /></div>
                   <div class="rb-text-wrapper"><span>Con filtros</span></div>
              </div>
              <div class="col-md-4 mb-4">
                   <div class="rb-wrapper"><RadioButton name="city"  value="sin" v-model="filter_choice" /></div>
                   <div class="rb-text-wrapper"><span>Sin filtros</span></div>
              </div>
          </div>
          <div class="row  seccion">
              <div class="col-md-4">
                   <h4>Venta de productos</h4>
              </div>
              <div class="col-md-5">
                  <ul>
                      <li @click="actionDialog('medios')"><span class="item-card">Por forma de pago (Medios de Pago)</span> </li>
                      <li @click="actionDialog('fecha y operador')"><span class="item-card">Por fecha, operador y grupo </span></li>
                      <li @click="actionDialog('fecha y grupo')"><span class="item-card">Por fecha y grupo</span> </li>
                      <li @click="actionDialog('caja y operador')"><span class="item-card">Por operador</span></li>
                      <li @click="actionDialog('hora')"><span class="item-card">Por hora</span></li>
                      <li @click="actionDialog('ranking ventas')"><span class="item-card">Ranking de ventas de artículos</span> </li>
                  </ul>
              </div>
          </div>
          <div class="row  seccion">
              <div class="col-md-4">
                   <h4>Remitos</h4>
              </div>
              <div class="col-md-5">
                  <ul>
                      <li @click="actionDialog('remitos')"><span class="item-card">Por fecha y grupo</span> </li>
                  </ul>
              </div>
          </div>
          <div class="row seccion">
              <div class="col-md-4">
                   <h4>Reporte de Caja</h4>
              </div>
              <div class="col-md-5">
                  <ul>
                      <li @click="actionDialog('por fecha')"> <span class="item-card"> Por Fecha</span>  </li>

                  </ul>
              </div>
          </div>
          <div class="row seccion">
              <div class="col-md-4">
                <h4>Stock Valorizado</h4>
              </div>
              <div class="col-md-5">
                  <ul>
                      <li @click="actionDialog('por rubro y proveedor')"><span class="item-card">Por rubro y proveedor </span></li>
                      <li @click="actionDialog('por rubro')"><span class="item-card">Por rubro </span></li>
                  </ul>
              </div>
          </div>
          <div class="row seccion">
              <div class="col-md-4">
                  <h4>Movimientos de Stock</h4>
              </div>
              <div class="col-md-5">
                  <ul>
                      <li @click="actionDialog('mov_stock')"><span class="item-card">Por sucursal </span></li>

                  </ul>
              </div>
          </div>
          <div class="row seccion">
              <div class="col-md-4">
                  <h4> IVA Ventas</h4>
              </div>
              <div class="col-md-5">
                  <ul>
                      <li @click="actionDialog('venta_iva')"><span class="item-card">Iva Ventas </span></li>
                </ul>
              </div>
          </div>
      </div>
      <!-- DIALOGO PARA FILTROS -->
      <Dialog v-model:visible="filter_dialog" header="Filtros" :style="{width: '350px'}" :modal="true" class="p-fluid"
            :closeOnEscape="false" :closable="false">
          <div class="p-field" v-show="con_sucursal">
              <label for="">Sucursal</label>
            <Dropdown v-model="query.sucursal" :options="sucursales_list" optionLabel="name" placeholder="Seleccione sucursal" optionValue="value" :class="{'p-invalid': submitted && !query.sucursal}">

              </Dropdown>
              <small class="p-invalid" v-if="submitted && !query.sucursal">Debe seleccionar una sucursal.</small>
          </div>
          <div class="p-field" v-show="con_desde">
              <label for="">Fecha Desde</label>
              <Calendar :showIcon="true" v-model="query.desde" dateFormat="dd/mm/yy" modelValue='dd/mm/yy' :locale="es">
              </Calendar>
          </div>
          <div class="p-field" v-show="con_hasta">
              <label for="">Fecha Hasta</label>
              <Calendar :showIcon="true" v-model="query.hasta" dateFormat="dd/mm/yy" :maxDate="new Date()" :locale="es">
              </Calendar>
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
				<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="{filter_dialog=false;resetDialog();submitted=false}"/>
				<Button label="Generar reporte" icon="pi pi-check" class="p-button-text" @click="getQueryReport" />
			</template>
      </Dialog>
      <!-- SPINNER -->
      <Dialog v-model:visible="spinner"  header="Generando reporte" :modal="true" :closable="false">
           <div style="padding-left:75px; width: 250px; height: 200px" >
            <ProgressSpinner />
            </div>
      </Dialog>
  </div>
</template>

<script>
import GrupoService from './../service/GrupoService';
import OperatorService from './../service/OperatorService';
import ProveedorService from './../service/ProveedorService';
import MediosDePagoService from './../service/MediosDePagoService';
import TiposFacturaService from './../service/TipoFacturaService';
import CajaService from './../service/CajaService';
export default {
    props:['user_data'],
    grupoService:null,
    operatorService:null,
    proveedorService:null,
    mediosService:null,
    tiposFacturaService:null,
    cajaService:null,
    data(){
        return{
            filter_choice:'con',
            filter_dialog:false,
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
            schema:null
        }
    },
    created(){
        this.grupoService = new GrupoService();
        this.operatorService = new OperatorService();
        this.proveedorService = new ProveedorService();
        this.mediosService = new MediosDePagoService();
        this.tiposFacturaService = new TiposFacturaService();
        this.cajaService = new CajaService();
    },
    mounted(){
        if (this.user_data.sucursales) {
            this.user_data.sucursales.forEach(element => {
                console.log(element.sucursal_descripcion)
            });
        }else{
            if (JSON.parse(this.user_data).data.sucursal_descripcion != undefined) {
                this.sucursales_list = [{name:JSON.parse(this.user_data).data.sucursal_descripcion, value:JSON.parse(this.user_data).data.sucursal_descripcion }]
            }
        }
        //cargar grupos
        this.grupoService.getGroupList()
            .then(res =>{
                this.grupos_list = res,
                this.grupos_list.unshift({id:1000, descripcion:'TODOS'})
                });
        //cargar cajas
        this.cajaService.getCajas()
            .then(res => {
                this.caja_list = res,
                this.caja_list.unshift({Caja: 'TODAS'})
                });
        //cargar operadores
        this.operatorService.getOperadores()
            .then(res => {
                this.operador_list = res;
                this.operador_list.unshift({Operador: 'TODOS'})
                });
        //cargar operadores
        this.proveedorService.getProveedores()
            .then(res => {
                this.proveedors_list = res,
                this.proveedors_list.unshift({Nombre: 'TODOS'})
                });
        //carger medios de pago
        this.mediosService.getMedios()
            .then(res => {
                this.medio_list = res,
                this.medio_list.unshift({descripcion: 'TODOS'})
                });
        //cargar tipos de facturas
        this.tiposFacturaService.getTiposFactura()
            .then(res => {
                this.tipo_list = res,
                this.tipo_list.unshift({Tipo: 'TODOS'})
                });

        this.$primevue.config.locale.dayNamesMin = ["D", "L", "M", "M", "J", "V", "S"]
    },
    methods:{
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
        actionDialog(reporte){
            if (this.filter_choice == 'con') {
                 this.filter_dialog=true
                 switch (reporte) {
                     case 'remitos':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.con_grupo = true;
                        this.url = '/reports/remitos/filtered?';
                        this.schema = ['sucursal', 'grupo']
                        break;
                    case 'medios':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.con_caja = true;
                        this.con_tipo = true;
                        this.con_medio = true;
                        this.url = '/reports/venta_medios_de_pago/filtered?';
                        this.schema = ['sucursal', 'caja', 'tipo', 'medio']
                        break;
                    case 'fecha y operador':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.con_caja = true;
                        this.con_operador = true;
                        this.con_grupo = true;
                        this.url = '/reports/venta_by_operador/filtered?';
                        this.schema = ['sucursal', 'caja', 'operador', 'grupo']
                        break;
                    case 'fecha y grupo':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.con_grupo = true;
                        this.url = '/reports/venta_by_fecha_grupo/filtered?';
                        this.schema = ['sucursal', 'grupo']
                        break;
                    case 'caja y operador':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.con_operador = true;
                        this.url = 'reports/venta_by_caja_operador/filtered?';
                        this.schema = ['sucursal', 'operador']
                        break;
                    case 'hora':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.url = '/reports/venta_by_horas/filtered?';
                        this.schema = ['sucursal']
                        break;
                    case 'ranking ventas':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.url = '/reports/venta_ranking/filtered?';
                        this.schema = ['sucursal']
                        break;
                    case 'por fecha':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.url = '/reports/movimientos_caja/filtered?';
                        this.schema = ['sucursal']
                        break;
                    case 'por rubro y proveedor':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.con_grupo = true;
                        this.con_proveedor = true;
                        this.url = '/reports/stock_by_proveedor/filtered?';
                        this.schema = ['sucursal', 'grupo', 'proveedor'];
                        break;
                    case 'por rubro':
                        this.con_sucursal = true;
                        this.con_grupo = true;
                        this.url = '/reports/stock_by_group/filtered?';
                        this.schema = ['sucursal', 'grupo']
                        break;
                    case 'venta_iva':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.con_caja = true;
                        this.url = '/reports/venta_by_iva/filtered?';
                        this.schema = ['sucursal', 'caja']
                        break;

                    case 'mov_stock':
                        this.con_sucursal = true;
                        this.con_desde = true;
                        this.con_hasta = true;
                        this.schema = ['sucursal'];
                        this.url =  '/reports/movstock/filtered?';
                        break;
                    default:
                        break;
                 }
            }else{

                switch (reporte) {
                     case 'remitos':
                        this.spinner = true
                        window.location.href = '/reports/remitos';
                        break;
                    case 'por rubro':
                        this.spinner = true
                        window.location.href = '/reports/stock_by_group';
                        break;
                    case 'por rubro y proveedor':
                        this.spinner = true
                        window.location.href = '/reports/stock_by_proveedor';
                        break;
                    case 'mov_stock':
                        this.spinner = true
                        window.location.href = '/reports/movstock';
                        break;
                    case 'fecha y operador':
                        this.spinner = true
                        window.location.href = '/reports/venta_by_operador';
                        break;
                    case 'fecha y grupo':
                        this.spinner = true
                        window.location.href = '/reports/venta_by_fecha_grupo';
                        break;
                    case 'caja y operador':
                        this.spinner = true
                        window.location.href = 'reports/venta_by_caja_operador';
                        break;
                    case 'hora':
                        this.spinner = true
                        window.location.href = 'reports/venta_by_horas';
                        break;
                    case 'medios':
                        this.spinner = true
                        window.location.href = '/reports/venta_medios_de_pago';
                        break;
                    case 'por fecha':
                        this.spinner = true
                        window.location.href = '/reports/movimientos_caja';
                        break;
                    case 'ranking ventas':
                        this.spinner = true
                        window.location.href = '/reports/venta_ranking';
                        break;
                    case 'venta_iva':
                        this.spinner = true
                        window.location.href = '/reports/venta_by_iva';
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

                window.location.href = this.url+querystring;

            }
            //this.submitted = false;


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
            return str.join("&");
        }
    }

}
</script>

<style scoped>

.select-type{
    width: 85%;
    margin: auto;
    padding: 15px 10px 40px 10px;
}
ul{
    list-style: none;
}
ul li{
    /*border-bottom: 1px dotted rgb(96, 142, 185);*/
    cursor: pointer;
    margin-bottom: 10px;
}
.seccion{
    border-top: 2px solid rgb(96, 142, 185);
    font-size: 1.3em;
    padding-top: 15px;
}
h4{
    color:rgb(96, 142, 185);
}
.rb-wrapper{
    display: inline-block;
    padding: 10px;
    font-size: 1.5rem;
    /* background-color: royalblue; */
}
.rb-text-wrapper{
    display: inline-block;
    font-size: 1.65rem;
    /* background-color: lightcoral; */
    padding-top: 10px;
    padding-left: 10px;
    vertical-align: middle;
    bottom: 10px;
}
.rb-text-wrapper span{
    margin-top: 15px;
}
.item-card{
    padding-left: 5px;
}
.item-card:hover{
    box-shadow: 1px 1px 3px rgb(55, 64, 145);
    padding: 5px 10px 5px 5px;
    border-radius: 8px;
    transition: all .2s;
    color: rgb(17, 4, 51);
    background-color: rgb(236, 245, 245);
}
</style>
