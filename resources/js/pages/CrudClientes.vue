<template>
	<div class="container-c shadow bg-white">
		<div class="">
            <h3>Clientes</h3>
        </div>

				<Toast position="bottom-right" />
				<Toolbar class="p-mb-1 bg-white toolbar">

                    <template v-slot:right>
                        <span class="p-input-icon-right center">
                                <i class="pi pi-search" />
                                <InputText v-model="filter" size="60" placeholder="Buscar..." />
                        </span>
                        <Button label="Nuevo cliente" icon="pi pi-plus" class="p-button-success p-mr-2 ml-5 orange" @click="openNew" />
                    </template>
				</Toolbar>

				<DataTable class=" table-striped mt-5" ref="dt"
                                :scrollable="true"
                                editMode="cell"
                                :value="filtrados"
                                dataKey="id"
                                :paginator="true" :rows="25" :filters="filters"
							paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25, 50, 100]"
							currentPageReportTemplate="Mostrando {first} al {last} de {totalRecords} registros" responsiveLayout="scroll">

					<Column field="cliente_descripcion" header="Descripcion" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Nombre</span>
							<a :href="'/clientes/'+slotProps.data.id+'/sucursales'">{{slotProps.data.cliente_descripcion}}</a>
						</template>
					</Column>
                    <Column field="plan" header="Plan" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Plan</span>
                            {{slotProps.data.plan}}
						</template>
					</Column>
                    <Column field="pcs" header="Pc's" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Plan</span>
                            {{slotProps.data.pcs}}
						</template>
					</Column>
					<Column field="contacto" header="Contacto" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Contacto</span>
							{{slotProps.data.contacto}}
						</template>
					</Column>
                    <Column field="whatsapp" header="Whatsapp" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Whatsapp</span>
							{{slotProps.data.whatsapp}}
						</template>
					</Column>
                    <Column field="obs" header="Obs." :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Price</span>
							{{slotProps.data.obs}}
						</template>
					</Column>
                    <Column field="ultima_fecha_pago" header="Ult Pago" :sortable="true">
						<template #body="slotProps">
                            {{slotProps.data.ultima_fecha_pago}}
                        </template>
                        <template #editor="slotProps" >
                            <InputMask v-model="slotProps.data[slotProps.column.props.field]" size="8" mask="99-99-9999" slotChar="dd-mm-yyyy"
                                @change="updateField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputMask>
                        </template>
					</Column>
                    <Column field="vencimiento" header="Vencimiento" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Vencimiento</span>
                            <vencimiento-status :date="slotProps.data.vencimiento" :vencido="slotProps.data.vencido"></vencimiento-status>
						</template>
                        <template #editor="slotProps" >
                            <InputMask v-model="slotProps.data[slotProps.column.props.field]" size="8" mask="99-99-9999" slotChar="mm-dd-yyyy"
                                @change="updateField(
                                    slotProps.data.id,
                                    slotProps.column.props.field,
                                    slotProps.data[slotProps.column.props.field]
                                )">
                            </InputMask>
                        </template>

					</Column>
                    <Column field="mensual" header="$ mensual" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Precio mensual</span>

                            <span class="text-blue">$ {{slotProps.data.mensual}}</span>
						</template>
					</Column>
					<Column field="motivo_baja_desc" header="Motivo baja" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Category</span>
							{{slotProps.data.motivo_baja_desc}}
						</template>
					</Column>
					<Column field="admin_email" header=" Email Administrador" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Category</span>
							{{slotProps.data.admin_email}}
						</template>
					</Column>

					<Column>
						<template #body="slotProps">
							<Button icon="pi pi-pencil" class="p-button-rounded p-button-secondary p-mr-2" @click="editClient(slotProps.data)" />

						</template>
					</Column>
				</DataTable>
<!-- -----------------------------------MODAL NEW -------------------- -->
				<Dialog v-model:visible="clientDialog" :style="{width: '60%'}" header="Detalle Cliente" :modal="true" class="p-fluid">
                    <div class="row m-1 p-1">
                        <div class="col-md-6">
                            <div class="p-field">
                                <label for="cliente_descripcion">Descripción</label>
                                <InputText id="cliente_descripcion" v-model.trim="client.cliente_descripcion" required="true" autofocus :class="{'p-invalid': submitted && !client.cliente_descripcion}" />
                                <small class="p-invalid" v-if="submitted && !client.cliente_descripcion">Este campo es obligatorio.</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-field">
                                <label for="contacto">Contacto</label>
                                <InputText id="contacto" v-model.trim="client.contacto" required="true" autofocus :class="{'p-invalid': submitted && !client.cliente_descripcion}" />
                                <small class="p-invalid" v-if="submitted && !client.contacto">Este campo es obligatorio.</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-field">
                                <label for="whatsapp">Whatsapp</label>
                                <InputText id="whatsapp" v-model.trim="client.whatsapp" required="true" autofocus :class="{'p-invalid': submitted && !client.cliente_descripcion}" />
                                <small class="p-invalid" v-if="submitted && !client.whatsapp">Este campo es obligatorio.</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                                <label for="plan">Plan</label>
                                <Dropdown v-model="client.plan_id"
                                            :class="{'p-invalid': submitted && !client.plan_id}"
                                            :options="plans_list" optionLabel="name" optionValue ="id" :placeholder="client.plan" required="true"/>
                                <small class="p-invalid" v-if="submitted && !client.plan_id">Debe asignar una sucursal.</small>
                            </div><br>
                        </div>
                        <div class="col-md-6">
                            <div class="p-field">
                                <label for="date">Último pago</label>
                                <Calendar id="ultima_fecha_pago" v-model="client.ultima_fecha_pago" :showIcon="true" :required="true"  :class="{'p-invalid': submitted && !client.ultima_fecha_pago}" dateFormat="dd/mm/yy"  />
                                <small class="p-invalid" v-if="submitted && !client.ultima_fecha_pago">Este campo es obligatorio.</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                             <div class="p-field">
                                <label for="venc">Vencimiento</label>
                                <Calendar id="vencimiento" v-model="client.vencimiento" :showIcon="true" :required="true" :class="{'p-invalid': submitted && !client.vencimiento}" dateFormat="dd/mm/yy" />
                                <small class="p-invalid" v-if="submitted && !client.vencimiento">Este campo es obligatorio.</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-field">
                                <label for="'admin_email"  >Email de administrador</label>
                                <InputText id="admin_email"  v-model.trim="client.admin_email" required="true" autofocus :class="{'p-invalid': submitted && !client.admin_email}" />
                                <small class="p-invalid" v-if="submitted && !client.admin_email">Debe ingresar un Email válido.</small>
                            </div>
                                <!-- !!!!!!!! -->
                        </div>

                        <div class="col-md-6">
                            <div class="p-field"  >
                                <label for="obs">Observaciones</label>
                                <Textarea id="obs" v-model="client.obs" required="true" rows="3" cols="20" />
                            </div>
                        </div>

                         <div class="col-md-6">
                            <div class="p-field" v-show="edit" >
                                <label for="motivo_baja_desc">Motivo de la baja</label>
                                <Textarea id="motivo_baja_desc" v-model="client.motivo_baja_desc" required="true" rows="3" cols="20" />
                            </div>
                        </div>
                    </div>
					<template #footer>
						<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
						<Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="saveClient" />
					</template>
				</Dialog>
<!-- END MODAL NEW----------------------- -->
	</div>

</template>

<script>
import ClienteStatusButton from '../components/ClienteStatusButton.vue';
import RadioButtonSlide from '../components/widgets/RadioButtonSlide.vue';
import VencimientoStatus from '../components/widgets/VencimientoStatus.vue';
import ClientService from '../service/ClientService';

export default {
  components: { RadioButtonSlide, ClienteStatusButton, VencimientoStatus },
	data() {
		return {
			clientDialog: false,
            vencido:false,
			clients: [],
			client: {},
			filter:"",
			submitted: false,
            checked:true,
			date:null,
            edit: false,
            pattern:/^[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?$/ ,
            plans_list:[],
            client_list:[]


		}
	},
	clientService: null,
	created() {
		this.clientService = new ClientService();
	},
	mounted() {

		this.clientService.getClientsList().then(data => {this.clients = data;});
        this.clientService.getPlansList().then(res => {this.plans_list = res;});


	},
	methods: {
		openNew() {
			this.submitted = false;
			this.clientDialog = true;
			this.client = {};
            this.edit=false;
		},
		hideDialog() {
			this.clientDialog = false;
			this.submitted = false;
		},
		saveClient(){

			this.submitted = true;
            if(this.client.cliente_descripcion.trim()){
                if (this.client.id) {
                    //editando
                    this.clientService.editClient(this.client)
                        .then(res => {
                            this.clientDialog = false;
			                this.client = {};
                            this.$toast.add({severity:'success', summary: 'Cliente  actualizado', detail: 'El cliente fue actializado con exito', life: 3000});
                            window.location.reload();
                        });
                }else{
                    //creando
                    this.edit = false;
                    if(!this.pattern.test(this.client.admin_email.trim())){
                        this.client.admin_email =null
                        return
                        }
                    if (this.client.ultima_fecha_pago != null && this.client.vencimiento != null) {
                    this.clientService.storeClient(this.client)
                        .then(res => {

                            this.$toast.add({severity:'success', summary: 'Cliente Guardado', detail: 'El cliente fue creado con éxito', life: 3000});
                            this.clientService.getClientsList()
                                .then(res => this.clients = res)
                        })

                this.clientDialog = false;
			    this.client = {};

                }}

           }
		},
		editClient(client){
            this.edit=true
			this.client = {...client};
			this.clientDialog = true;
        },
        updateField(id, field, value){
            this.clientService.updateField({id, field, value})
            .then(res => window.location.reload())

        }
	},
    computed:{
        filtrados(){
            return this.clients.filter(c =>
                c.cliente_descripcion.toLowerCase().includes(this.filter.toLowerCase())
                || c.admin_email.toLowerCase().includes(this.filter.toLowerCase())
                || c.contacto.toLowerCase().includes(this.filter.toLowerCase())
                )
        }
    }
}
</script>

<style scoped lang="scss">
    .text-blue{
        color:blue;
    }
    .vencido{
        color: red  !important;
    }
	.table-header {
		display: flex;
		justify-content: space-between;
	}
    .p-toolbar{
        padding: 0;
    }




	.confirmation-content {
		display: flex;
		align-items: center;
		justify-content: center;
	}



	/* Responsive */
	.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
		display: none;
	}

	@media screen and (max-width: 960px) {
		::v-deep(.p-datatable) {
			&.p-datatable-customers {
				.p-datatable-thead > tr > th,
				.p-datatable-tfoot > tr > td {
					display: none !important;
				}

				.p-datatable-tbody > tr {
					border-bottom: 1px solid var(--surface-d);

					> td {
						text-align: left;
						display: block;
						border: 0 none !important;
						width: 100% !important;
						float: left;
						clear: left;
						border: 0 none;
						padding: 5px;

						&:last-child {
							text-align: center;
						}

						.p-column-title {
							padding: .4rem;
							min-width: 30%;
							display: inline-block;
							margin: -.4rem 1rem -.4rem -.4rem;
							font-weight: bold;
						}

						.p-progressbar {
							margin-top: .5rem;
						}

						.p-rating {
							display: inline-block;
						}
					}
				}
			}
		}

		::v-deep(.p-toolbar) {
			flex-wrap: wrap;

			.p-button {
				margin-bottom: .25rem;
			}
		}
	}
</style>
