<template>
    <div class="container-c shadow bg-white">
		<div>
            <h3>Articulos </h3>
        </div>
				<Toast position="bottom-right" />

				<Toolbar class="p-mb-1 bg-white toolbar">
                    <template v-slot:left>
                       <RadioButton name="preset" value="general" v-model="selectedPreset" class="ml-2 mr-2 aro" @change="changePreset"/> General -
                       <RadioButton name="preset" value="preset1" v-model="selectedPreset"  class="ml-2 aro" @change="changePreset"/>
                        <MultiSelect
                            :modelValue="selectedColumns"
                            :options="columns"
                            optionLabel="label"
                            placeholder="Preset 1"
                            @update:modelValue="onToggle"
                            class="ml-2 mr-2" /> -
                        <RadioButton name="preset" value="preset2" v-model="selectedPreset" class="ml-2 mr-2 aro" @change="changePreset" />
                        <MultiSelect
                            :modelValue="selectedColumns2"
                            :options="columns"
                            optionLabel="label"
                            placeholder="Preset 2"
                            @update:modelValue="onToggle2"
                            class="ml-2 mr-2" />


                    </template>
                    <template v-slot:right>
                        <Button @click="massive1 = true" label="Masivo" class="p-button-success p-mr-2 ml-5 orange" />

                        <span class="p-input-icon-right center">
                                <i class="pi pi-search" />
                                <InputText v-model="filter" size="60" placeholder="Buscar..." />
                        </span>
                        <span @click="undo" class="undo-icon shadow-sm"> <i class="pi pi-undo"></i></span>
                        <Button label="Nuevo articulo" icon="pi pi-plus" class="p-button-success p-mr-2 ml-5 orange" @click="openNew" />
                    </template>
				</Toolbar>

                <!--   DATATABLE :loading="loading"  -->

                <DataTable  :value="filtrados"
                            :scrollable="true"
                            scrollHeight="600px"
                            scrollDirection="both"
                            editMode="cell"
                            showGridlines
                            stripedRows
                            class="p-mt-3"
                            :paginator="true"
                            :rows="25"
                            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                            :rowsPerPageOptions="[10,20,50,100, 500, 1000]" responsiveLayout="scroll"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"

                            >


                    <Column field="Descripcion"
                            header="Descripcion"

                            style="flex-growl:1; flex-basis:300px;font-size:.9em "
                            :sortable="true"
                            frozen
                            class="custom"
                            >

                        <template #body="{data}" >
                            {{data.Descripcion}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="30" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="codigo"
                        header="Codigo"
                        style="flex-growl:1; flex-basis:120px;" frozen>
                        <template #body="{data}">
                            {{data.Codigo}}
                        </template>
                    </Column>

                    <Column field="modificado"
                        header="Modificado"

                        id="modificado"
                        style="flex-growl:1; flex-basis:170px;" :style="{display:displays.modificado}">
                        <template #body="{data}">
                          <!-- {{  data.modificado}} -->
                            {{dateFormat(data.modificado)}}
                        </template>

                    </Column>

                    <Column field="Costo" header="Costo"  style="width:100px;"  :style="{display:displays.costo}" class="text-right pr-2">

                        <template #body="{data}" >
                            $ {{parseFloat(data.Costo).toFixed(2)}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="6" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="rentabilidad" header="Rentabilidad"
                          style="width:100px" :style="{display:displays.rentabilidad}" class="text-right pr-2">

                        <template #body="{data}" >
                             {{parseFloat(data.rentabilidad).toFixed(2)}} %
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="4" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                     <Column field="L1" header="L1"  style="width:100px;"  :style="{display:displays.l1}" class="text-right pr-2">

                         <template #body="{data}" >
                            $ {{parseFloat(data.L1).toFixed(2)}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="6" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                     </Column>
                     <Column field="L2" header="L2"  style="width:100px;" :style="{display:displays.l2}" class="text-right pr-2">

                         <template #body="{data}" >
                            $ {{parseFloat(data.L2).toFixed(2)}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="6" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                     </Column>
                     <Column field="L3" header="L3"  style="width:100px;" :style="{display:displays.l3}" class="text-right pr-2">

                         <template #body="{data}" >
                            $ {{parseFloat(data.L3).toFixed(2)}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="6" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                     </Column>
                    <Column field="Grupo" header="Grupo"  style="width:200px;" :sortable="true" :style="{display:displays.grupo}">
                        <template #body="{data}">
                            {{data.descripcion.trim()}}
                        </template>
                        <template #editor="slotProps">
                            <Dropdown  :options="grupo_list" optionLabel="descripcion"  size="4" :placeholder="slotProps.data.descripcion"

                            v-model="slotProps.data[slotProps.column.props.field]"
                             class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]['id'],
                                    slotProps.data
                                )">
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="PtoPed" header="PtoPed"   style="width:100px" :style="{display:displays.ptoped}" class="text-right pr-2">
                         <template #body="{data}" >
                            {{data.PtoPed}}
                        </template>
                        <template #editor="slotProps" >
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="4" class="inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputText>
                        </template>
                    </Column>
                    <Column field="Nombre" header="Proveedor"   style="width:300px;font-size:.9em" :style="{display:displays.proveedor}">
                        <template #body="{data}">
                            {{data.Nombre}}
                            <!-- SIN PROVEEDOR -->
                        </template>
                        <template #editor="slotProps">
                            <Dropdown  :options="proveedor_list"
                                optionLabel="Nombre"
                                size="8"
                                optionValue="id"
                                :placeholder="slotProps.data.Nombre"
                                v-model="slotProps.data.Nombre"
                                @click="storeOld(slotProps.data['IdProveedor'])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    'IdProveedor',
                                    slotProps.data[slotProps.column.props.field]

                                )">
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="marcas" header="Marcas"  style="width:200px;" :style="{display:displays.marcas}">
                        <template #body="{data}">
                            {{data.marcas}}
                        </template>
                        <template #editor="slotProps">
                            <Dropdown  :options="marcas_list"
                                optionLabel="marca"
                                size="8"
                                optionValue="marca"
                                :placeholder="slotProps.data.marcas"
                                v-model="slotProps.data[slotProps.column.props.field]"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="cantpack" header="Cantpack" style="width:80px;" :style="{display:displays.cantpack}" class="text-right pr-2">

                         <template #body="{data}" >
                             {{parseFloat(data.cantpack).toFixed(2)}}
                        </template>
                        <template #editor="slotProps" >
                            <input v-model="slotProps.data[slotProps.column.props.field]" class="form-control inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )" />

                        </template>
                    </Column>
                    <Column field="Stock" header="Stock"  style="width:80px;" :style="{display:displays.cstock}" class="text-right pr-2">
                        <template #body="{data}">
                            {{parseFloat(data.Stock).toFixed(2)}}
                        </template>
                    </Column>
                    <Column field="Iva" header="Iva"  style="width:100px" :style="{display:displays.iva}" class="text-right pr-2">
                        <template #body="{data}">
                           {{data.Porcentaje}}
                        </template>
                        <template #editor="slotProps">
                            <Dropdown  :options="iva_list" optionLabel="Porcentaje" size="4" optionValue="numero" :placeholder="slotProps.data[slotProps.column.props.field]" v-model="slotProps.data[slotProps.column.props.field]"
                               @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </Dropdown>
                        </template>
                    </Column>
                    <Column field="UltCompra"
                            header="UltCompra"

                            style="width:100px;"
                            :style="{display:displays.ultcompra}"
                            class="text-right pr-2">

                         <template #body="{data}" >
                            $ {{parseFloat(data.UltCompra).toFixed(2)}}
                        </template>

                    </Column>
                    <Column field="CantMax" header="CantMax"  style="width:80px;" :style="{display:displays.cantmax}" class="text-right pr-2">

                        <template #body="{data}" >
                             {{parseFloat(data.CantMax).toFixed(2)}}
                        </template>
                        <template #editor="slotProps" >
                            <input type="number" v-model="slotProps.data[slotProps.column.props.field]" size="4" class="inputext form-control"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )"/>

                        </template>
                    </Column>
                    <Column field="ImpInt" header="ImpInt"  style="width:80px;" :style="{display:displays.impint}" class="text-right pr-2">

                        <template #body="{data}" >
                             {{parseFloat(data.ImpInt).toFixed(2)}}
                        </template>
                        <template #editor="slotProps" >
                            <input type="number" v-model="slotProps.data[slotProps.column.props.field]" class="form-control inputext"
                                @click="storeOld(slotProps.data[slotProps.column.props.field])"
                                @change="updateCell(
                                    slotProps.data.Codigo,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )" />

                        </template>

                    </Column>
                    <!-- <template #paginatorLeft>
                        <Button type="button" icon="pi pi-refresh" class="p-button-text" />
                    </template>
                    <template #paginatorRight>
                        <Button type="button" icon="pi pi-cloud" class="p-button-text" />
                    </template> -->
                </DataTable>



                <!-- END DATATABLE -->

                <Dialog v-model:visible="newArticulo" :style="{width: '850px'}" header="Nuevo articulo" :modal="true" class="p-fluid">
                    <div class="p-dialog-content">
                        <!-- ***************************** -->
                    <div class="row">
                        <div class="col-3">
                            <div class="p-field">
                                <label for="" class="pr-5">Código</label><span style="cursor:pointer"><Tag @click="generateCode">  Auto  </Tag></span>
                                <InputText v-model="articulo.codigo" :class="{'p-invalid': submitted && !articulo.codigo}" />
                                <small class="p-invalid" v-if="submitted && !articulo.codigo">Debe asignar un código.</small>
                            </div>
                        </div>
                        <!-- ******************************* -->
                        <div class="col-9">
                            <div class="p-field">
                                <label for="">Descripción</label>
                                <InputText v-model="articulo.descripcion" :class="{'p-invalid': submitted && !articulo.descripcion}" />
                                <small class="p-invalid" v-if="submitted && !articulo.descripcion">Debe asignar una descripción.</small>
                            </div>
                        </div>
                        <!-- *************************** -->
                    </div>
                    <div class="row ">
                        <div class="col-2">
                            <label for="">Costo $ </label>
                            <InputNumber v-model="articulo.costo" mode="decimal" :minFractionDigits="2"  />
                        </div>
                        <!-- **************************** -->
                        <div class="col-2">
                            <label for="">Renta % </label>
                            <InputNumber v-model="articulo.renta" mode="decimal"  :minFractionDigits="2" />
                        </div>
                        <div class="col-2">
                            <label for="">Lista 1 </label>
                            <InputNumber v-model="articulo.l1" mode="decimal"  :minFractionDigits="2" />
                        </div>
                        <div class="col-2">
                            <label for="">Lista 2 </label>
                            <InputNumber v-model="articulo.l2" mode="decimal" :minFractionDigits="2"  />
                        </div>
                        <div class="col-2">
                            <label for="">Lista 3 </label>
                            <InputNumber v-model="articulo.l3" mode="decimal"  :minFractionDigits="2" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="">Grupo</label>
                            <Dropdown v-model="articulo.grupo" :options="grupo_list" optionLabel="descripcion" placeholder="Seleccione grupo" :class="{'p-invalid': submitted && !articulo.grupo}" />
                            <small class="p-invalid" v-if="submitted && !articulo.grupo">Debe asignar un grupo.</small>
                        </div>
                        <div class="col-2">
                            <label for="">Pto. Pedido</label>
                            <InputNumber v-model="articulo.pto_pedido" mode="decimal" />
                        </div>
                        <div class="col-2">
                            <label for=""> Cant. Max </label>
                            <InputNumber v-model="articulo.cant_max" mode="decimal" />
                        </div>
                        <div class="col-4">
                            <label for="">Marca</label>
                            <Dropdown v-model="articulo.marca" :options="marcas_list" optionLabel="marca"  optionValue="idmarca"  placeholder="Seleccione marca"  :class="{'p-invalid': submitted && !articulo.marca}" >
                                <template #value>
                                    {{marcas_list[0].marca}}
                                </template>
                            </Dropdown>
                            <small class="p-invalid" v-if="submitted && !articulo.marca">Debe asignar una marca.</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="">Proveedor</label>
                            <Dropdown v-model="articulo.proveedor" :options="proveedor_list"  placeholder="Seleccione proveedor" optionLabel="Nombre" optionValue="Nombre" :class="{'p-invalid': submitted && !articulo.proveedor}" >
                                <!-- <template #value>
                                    {{proveedor_list[0].marca}}
                                </template> -->
                            </Dropdown>
                            <small class="p-invalid" v-if="submitted && !articulo.proveedor">Debe asignar un proveedor.</small>
                        </div>
                        <div class="col-2">
                            <label for="">Iva %</label>
                            <Dropdown v-model="articulo.iva" :options="iva_list" optionLabel="Porcentaje" optionValue="numero" placeholder="Iva" :class="{'p-invalid': submitted && !articulo.iva}" />
                            <small class="p-invalid" v-if="submitted && !articulo.iva">Iva es requerido.</small>
                        </div>
                        <div class="col-2">
                            <label for="">Tiene envase</label>
                            <div class="text-center pt-1">
                               <Checkbox v-model="articulo.tiene_envase" :binary="true" />
                            </div>

                        </div>
                        <div class="col-2">
                            <label for="">Es envase</label>
                            <div class="text-center pt-1">
                                <Checkbox v-model="articulo.es_envase" :binary="true" />
                            </div>
                        </div>
                        <div class="col-2">
                            <label for="">Es paquete</label>
                            <div class="text-center pt-1">
                                <Checkbox v-model="articulo.es_paquete" :binary="true" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <label for="">Stock</label>
                            <div class="text-center pt-1">
                                <Checkbox v-model="articulo.con_stock" :binary="true" />
                            </div>

                        </div>
                        <div class="col-4">
                                <label for="">Cantidad</label>
                                <InputNumber  mode="decimal" v-model="articulo.stock"/>
                        </div>
                        <div class="col-4">
                                <label for="">Imp Interno %</label>
                                <InputNumber  mode="decimal" v-model="articulo.imp_int"/>
                        </div>
                    </div>
                    <br>
                    <h4 class="ml-3">Etiqueta</h4>
                    <div class="row pt-1">

                        <div class="col-4">
                            <label for="">Cantidad</label>
                            <InputNumber v-model="articulo.cantidad" mode="decimal" />
                        </div>
                        <div class="col-4">
                            <label for="">Unidad</label>
                            <Dropdown v-model="articulo.unidad" :options="unidades_list" optionValue="unidad" optionLabel="unidad" />
                        </div>
                        <div class="col-4">
                            <label for="">------</label>
                             <InputNumber  mode="decimal" v-model="articulo.contenido"/>
                        </div>
                    </div>

                    </div>

                    <template #footer>
						<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="newArticulo = false"/>
						<Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="saveArticulo" />
					</template>
                </Dialog>
                <!-- MASSIVE 1 DIALOG -->
                <Dialog
                    :modal="true"
                    v-model:visible="massive1"
                    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
                    :style="{ width: '65vw', height:'70vh'}"
                >
                    <template #header>
                        <h3>Acciones masivas</h3>
                    </template>
                <articulos-edicion-masiva :dns ="dns" :grupos="grupo_list" @restored="getResponseChild"/>

                <template #footer>
                    <Button
                        label="Cerrar"
                        icon="pi pi-times"
                        class="p-button-text"
                        @click="massive1 = false"
                    />
                    <!-- <Button
                        label="Aceptar"
                        icon="pi pi-check"
                        class="p-button-text"
                        @click="goMassive1"
                    /> -->
                </template>
                </Dialog>

    </div>
</template>
<script>
import ArticuloService from './../../service/ArticuloService';
import GrupoService from './../../service/GrupoService';
import ProveedorService from './../../service/ProveedorService';
import RollbackService from './../../service/RollbackService';
import ArticulosEdicionMasiva from './../../components/ArticulosEdicionMasiva'
import MarcaService from './../../service/MarcaService'
export default {
    components:{ArticulosEdicionMasiva},
    props:['data', 'user_id', 'dns'],
    articulosService:null,
    proveedorService:null,
    grupoService:null,
    rollbackService:null,
    data(){
        return{

            fixed:true,

            selectedColumns:null,
            selectedColumns2:null,
            displays:{  costo: 'none',
                        rentabilidad:'none',
                        l1:'none',
                        modificado:'none',
                        grupo:'none',
                        l2:'none',
                        l3:'none',
                        ptoped: 'none',
                        cantpack:'none',
                        cstock:'none',
                        iva:'none',
                        cantmax:'none',
                        impint:'none',
                        ultcompra:'none'
                    },
            columns: null,
            grupo_list:[],
            selectedPreset:'general',
            proveedor_list:[],
            iva_list:[],
            marcas_list:[],
            filter:"",
            unidades_list:[{unidad: 'Gramo'},{unidad: 'CC'},{unidad: 'Cm'},{unidad: 'Docena'},{unidad: 'Gruesa'}, {unidad: 'Pallet'}],
            data_json:null,
            articulo: {},
            editingCellRows: {},
            editingROws: [],
            columns:null,
            newArticulo: false,
            calculo_etiqueta: 0,
            //submit
            submitted:false,
            memmory:null,
            hi:true,
            massive1:false

        }
    },
originalROws:null,

created(){
this.articulosService =  new ArticuloService();
this.grupoService     =  new GrupoService();
this.proveedorService =  new ProveedorService();
this.rollbackService  =  new RollbackService();
this.marcaService = new MarcaService();
this.data_json = JSON.parse(this.data)

this.columns = [
                {label:'Modificado', value:'modificado'},
                {label:'Grupo', value:'grupo'},
                {label: 'Costo', value:'costo'},
                {label:'L1', value:'l1'},
                {label:'L2', value:'l2'},
                {label:'L3', value:'l3'},
                {label:'Rentabilidad', value:'rentabilidad'},
                {label:'PtoPed', value:'ptoped'},
                {label:'Proveedor', value:'proveedor'},
                {label:'Marcas', value:'marcas'},
                {label:'Cant Pack', value:'cantpack'},
                {label: 'C_stock', value: 'cstock'},
                {label: 'Iva', value: 'iva'},
                {label: 'Ult Compra', value: 'ultcompra'},
                {label: 'Cant Max', value: 'cantmax'},
                {label: 'IMp Int', value: 'impint'}
                ];
},
mounted(){

    this.articulosService.getPresets(this.user_id).then(res => {
        this.selectedColumns = res.preset_1;
        this.selectedColumns2 = res.preset_2;
        this.selectedPreset = res.last_selected
        this.showColumns(this.selectedPreset);
    });



    this.grupoService.getGroupList(this.dns)
        .then(res => {this.grupo_list = res;});

    this.proveedorService.getProveedores(this.dns)
        .then(res =>{ this.proveedor_list = res;})

    this.marcaService.getMarcas(this.dns)
        .then(res => {this.marcas_list = res;})

    this.articulosService.getTiposIva(this.dns)
        .then(res => {this.iva_list  = res;});



},
methods:{
        getResponseChild(payload){

            switch (payload.type) {
                case "lista":
                    this.massive1 = false
                    this.$toast.add({severity:'success',summary:'Cambios Guardados',detail:`Filas afectadas: ${payload.affected}`, life:6000})
                    break;

                case 'restaurar':
                    if (payload.restored) {
                        this.massive1 = false
                        this.$toast.add({severity:"success" , detail:"Valores restaurados con éxito", summary:"Éxito !", life:6000});
                    }
                    break;
                case "redondeo":
                    this.massive1 = false
                    this.$toast.add({severity:'success',summary:'Cambios Guardados',detail:`Filas afectadas: ${payload.affected}`, life:6000})
                    break;
                case "parcial":
                    this.massive1 = false
                    this.$toast.add({severity:'success',summary:'Cambios Guardados',detail:`Filas afectadas: ${payload.affected}`, life:6000})
                    break;
                default:
                    break;
            }
        },
        updateCell(id, field, newValue, mass_data){


            let data = {identifier: 'Codigo', id:id, field: field, new_value: newValue, old:this.memmory, dns:this.dns}
console.log(data);

            this.articulosService.updateArticulo(data)
                .then(res =>{

                    if (data.field == 'L1' || data.field == 'Costo' || data.field == 'rentabilidad') {
                        let art = this.filtrados.filter( (a,index) => {
                            if (a.Codigo == data.id) {
                                //a.rentabilidad = res.rentabilidad
                                this.filtrados[index].rentabilidad = res.rentabilidad
                                this.filtrados[index].Costo = res.Costo
                                this.filtrados[index].L1 = res.L1
                                return a
                            }
                        })

                    }
                    if (data.field == 'Grupo' ) {
                       this.filtrados.filter( (a,index) => {
                            if (a.Codigo == data.id) {
                                //a.rentabilidad = res.rentabilidad
                                this.filtrados[index].descripcion = this.filtrados[index].Grupo.descripcion

                                return a
                            }
                        })

                    }
                    if (data.field == 'IdProveedor' ) {
                       this.filtrados.filter( (a,index) => {
                            if (a.Codigo == data.id) {
                                let proveedor = this.proveedor_list.filter(p =>{
                                    if (p.id == newValue) {
                                        return p
                                    }
                                })
                                this.filtrados[index].Nombre = proveedor[0].Nombre;

                                return a
                            }
                        })

                    }
                    if (data.field == 'Iva' ) {
                        console.log(res)
                       this.filtrados.filter( (a,index) => {
                            if (a.Codigo == data.id) {
                                let i = this.iva_list.filter(p =>{
                                    if (p.numero == newValue) {
                                        return p

                                    }
                                })
                                this.filtrados[index].Porcentaje = i[0].Porcentaje;

                                return a
                            }
                        })

                    }
                    this.$toast.add({severity:'success', summary: 'Éxito !', detail: 'Los cambios se guardaron exitosamente', life: 1500})
                })
                .catch(res => {
                    this.$toast.add({severity:'error', summary: 'Error !', detail: 'Los cambios no se guardaron.', life: 1500})
                })
        },
        openNew(){
            this.newArticulo = true

        },
        generateCode(){
            this.articulosService.getMaxId()
                .then(res => this.articulo.codigo = res)
        },
        storeOld(data){
                this.memmory = data
            },
        saveArticulo(){

        this.submitted = true

        if (this.submitted
                && this.articulo.codigo
                && this.articulo.descripcion
                &&this.articulo.iva
                &&this.articulo.grupo
                && this.articulo.marca
                &&this.articulo.proveedor) {

            this.$toast.add({severity:'success', summary: 'Éxito !', detail: 'Artículo guardado exitosamente', life: 3000});
            this.newArticulo = false
        }
        return
        this.articulosService.storeArticulo(this.articulo)
            .then(res => {

                if (res) {
                    this.newArticulo = false;
                    this.articulo = {}
                    this.$toast.add({severity:'success', summary: 'Éxito !', detail: 'Artículo guardado exitosamente', life: 3000});
                }
            });

        },
            undo(){
                this.rollbackService.undoEvent()
                    .then(res => console.log(res));
        },
            onToggle(value = null) {
                if (value != null) {
                   this.selectedColumns = this.columns.filter(col => value.includes(col));
                }
               this.articulosService.updatePreset(this.user_id,{preset1:this.selectedColumns, preset2:this.selectedColumns2, last_selected:this.selectedPreset}).then(res => console.log(res));
                this.showColumns(this.selectedPreset)
        },
           onToggle2(value) {
                this.selectedColumns2 = this.columns.filter(col => value.includes(col));
                 this.articulosService.updatePreset(this.user_id,{preset1:this.selectedColumns, preset2:this.selectedColumns2}).then(res => console.log(res));
                this.showColumns(this.selectedPreset)
        },
            resetDisplay(){
                this.displays.costo = 'none'
                this.displays.rentabilidad = 'none'
                this.displays.l1 = 'none'
                this.displays.grupo = 'none'
                this.displays.modificado = 'none'
                this.displays.l2 = 'none'
                this.displays.l3 = 'none'
                this.displays.ptoped = 'none',
                this.displays.proveedor = 'none',
                this.displays.marcas = 'none',
                this.displays.cantpack = 'none',
                this.displays.cstock = 'none',
                this.displays.iva = 'none',
                this.displays.ultcompra = 'none',
                this.displays.cantmax = 'none',
                this.displays.impint = 'none'

            },
            showColumns(preset){
                let value;
                this.resetDisplay()
                let columnas = null
                if (preset == 'preset1') {
                    columnas = this.selectedColumns ;
                }
                if (preset == 'general') {
                    columnas = this.columns ;
                }
                if (preset == 'preset2') {
                    columnas = this.selectedColumns2 ;
                }

                columnas.forEach(element => {
                    value = element.value
                    this.displays[value] = 'block'
                });
        },
        changePreset(){

            this.showColumns(this.selectedPreset)
            this.onToggle()
        },
        dateFormat(date){
            try {
                let nueva=date.split(" ")[0].split("-").reverse().join("-");
                return nueva+date.substring(10,19);
            } catch (error) {
                return '';
            }


        },



    },
    computed:{
        filtrados(){

             return this.data_json.filter(c =>{
                    return c.Descripcion.toLowerCase().includes(this.filter.toLowerCase())
                //c.Descripcion.toLowerCase().includes(this.filter.toLowerCase())
               || c.Codigo.includes(this.filter.toLowerCase())
               || c.descripcion.toLowerCase().includes(this.filter.toLowerCase())
             })
        }
    }
}
</script>


<style scoped lang="scss">
.p-multiselect{
    max-width: 150px;
}
.p-multiselect-item{
    color: red !important;
}
li .p-multiselect-item .p-highlight:focus{
    background: red !important;
}

::v-deep(tr:nth-child(even)) {
    background-color: rgb(240, 240, 240) !important;
}

::v-deep(tr:nth-child(1n) >td:nth-child(-n+2)){
      background-color: rgb(255, 255, 228) !important;
}
::v-deep(tr:nth-child(even) >td:nth-child(-n+2)){
      background-color: rgb(225, 225, 197) !important;
}


::v-deep(.aro .p-highlight){
    color: orangered !important;
    border-color: orangered !important;
    background: orangered !important;
}
::v-deep(.p-focus){

    box-shadow: 0 0 0 .2rem rgba(255, 69, 1, 0.494) !important;
}

::v-deep(.p-multiselect-item .p-highlight ){
    background: orangered;//#2196F3
}
.undo-icon{
    display: inline-block;
    margin-left:20px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1.5rem;
    padding: 1px 10px 3px 10px;
    background-color: orange;
    color: #fff;
    font-weight: bold;
}
.undo-icon:hover{
    background-color: rgb(248, 200, 109);
}
.inputext{
    padding: 0;

}

</style>
