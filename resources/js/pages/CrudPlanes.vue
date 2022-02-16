<template>
	<div class="container-c shadow bg-white">
		<div class="">
            <h3>Planes</h3>
        </div>

				<Toast position="bottom-right" />
				<Toolbar class="p-mb-1 bg-white toolbar">

                    <template v-slot:right>
                        <span class="p-input-icon-right center">
                                <i class="pi pi-search" />
                                <InputText v-model="filter" size="60" placeholder="Buscar..." />
                        </span>
                        <Button label="Nuevo" icon="pi pi-plus" class="p-button-success p-mr-2 ml-5 orange" @click="nuevoPlan = true" />
                    </template>
				</Toolbar>
            <DataTable
            class="table-striped mt-5"
            ref="dt"
            :value="filtered"
            dataKey="id"
            :paginator="true"
            :rows="25"
            editMode="cell"
            :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[10, 25, 50, 100]"
            currentPageReportTemplate="Mostrando del {first} al {last} de {totalRecords} registros"
            responsiveLayout="scroll"
        >
            <Column field="name"
                    header="Nombre"
                    style="width:100px;padding-left:3px">
                        <template #body="slotProps">
                            {{slotProps.data.name}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="8"
                                @change="updateField(
                                    slotProps.data.id,
                                    slotProps.data.name,
                                    slotProps.column.props.field
                                )">
                            </InputText>
                        </template>
                    </Column>
            <Column field="suc_qty" header="Suc." :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Sucursales</span>
                    {{ slotProps.data.suc_qty }}
                </template>

            </Column>
            <Column field="pcs" header="Pc's" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Pc's</span>
                    {{ slotProps.data.pcs }}
                </template>
                <template #editor="slotProps">
                    <InputNumber v-model="slotProps.data[slotProps.column.props.field]" size="2"
                     v-bind:change="updateField(
                                    slotProps.data.id,
                                    slotProps.data.pcs,
                                    slotProps.column.props.field
                                )">
                    </InputNumber>
                </template>
            </Column>
            <Column field="month_price" header="$ Mensual" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Mensual</span>
                    $ {{ slotProps.data.month_price }}
                </template>
                <template #editor="slotProps">
                    <InputNumber v-model="slotProps.data[slotProps.column.props.field]" size="2"
                     v-bind:change="updateField(
                                    slotProps.data.id,
                                    slotProps.data.month_price,
                                slotProps.column.props.field
                                )">
                    </InputNumber>
                </template>
            </Column>
            <Column field="anual_price" header="$ Anual" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Anual</span>
                    $ {{ slotProps.data.anual_price }}
                </template>
                <template #editor="slotProps">
                    <InputNumber v-model="slotProps.data[slotProps.column.props.field]" size="2"
                     v-bind:change="updateField(
                                    slotProps.data.id,
                                    slotProps.data.anual_price,
                                    slotProps.column.props.field
                                )">
                    </InputNumber>
                </template>
            </Column>
            <Column field="duration_months" header="Duracion " :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">duracion</span>
                    {{ slotProps.data.duration_months }}
                </template>
                <template #editor="slotProps">
                    <InputNumber v-model="slotProps.data[slotProps.column.props.field]" size="2"
                     v-bind:change="updateField(
                                    slotProps.data.id,
                                    slotProps.data.duration_months,
                                    slotProps.column.props.field
                                )">
                    </InputNumber>
                </template>
            </Column>
            <Column field="active" header="Activo" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">Category</span>
                            <InputSwitch v-model="slotProps.data.active" ></InputSwitch>
						</template>
					</Column>

            </DataTable>

            <!-- DIALOGO DE CREACION DE PLAN -->

            <Dialog
            v-model:visible="nuevoPlan"
            :style="{ width: '400px' }"
            header="Crear nuevo Plan"
            :modal="true"
            class="p-fluid"
        >
            <div class="p-field">
                <label> Nombre del plan</label>
                <InputText v-model="plan.name" :class="{'p-invalid': submitted && !plan.name}" >
                </InputText>
                <small class="p-invalid" v-if="submitted && !plan.name">Este campo es obligatorio.</small>
            </div>
            <div class="p-field">
                <label> Cantidad Sucursales</label>
                <InputNumber v-model="plan.suc_qty" :class="{'p-invalid': submitted && !plan.suc_qty}">
                </InputNumber>
                <small class="p-invalid" v-if="submitted && !plan.suc_qty">Este campo es obligatorio.</small>
            </div>
            <div class="p-field">
                <label> Cantidad de Pc's</label>
                <InputNumber v-model="plan.pcs" :class="{'p-invalid': submitted && !plan.pcs}">
                </InputNumber>
                 <small class="p-invalid" v-if="submitted && !plan.pcs">Este campo es obligatorio.</small>
            </div>
            <div class="p-field">
                <label> Precio mensual</label>
                <InputNumber v-model="plan.month_price">
                </InputNumber>
            </div>
            <div class="p-field">
                <label> Precio Anual</label>
                <InputNumber v-model="plan.anual_price">
                </InputNumber>
            </div>
            <div class="p-field">
                <label> Duracion en meses</label>
                <InputNumber v-model="plan.duration_months">
                </InputNumber>
            </div>
            <template #footer>
                <Button
                    label="Cancelar"
                    icon="pi pi-times"
                    class="p-button-text"
                    @click="hideDialog"
                />
                <Button
                    label="Guardar"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="savePlan"
                />
            </template>
        </Dialog>



    </div>
</template>

<script>
import ClientService from './../service/ClientService'
import PlanesService from './../service/PlanesService'
export default {
    clientService:null,
    planesService:null,
    data(){
        return{
            filter:"",
            plan_list:[],
            checked:true,
            nuevoPlan:false,
            plan:{},
            submitted:false
        }
    },
    created(){
        this.clientService = new ClientService();
        this.planesService = new PlanesService();

    },
    mounted(){
        this.clientService.getPlansList()
            .then(res => {this.plan_list = res});
    },
    methods: {
        hideDialog(){
            this.nuevoPlan = false
            this.plan = {}
        },
        savePlan(){
            this.submitted = true
            if (this.plan.name != null && this.plan.pcs) {
                this.nuevoPlan = false
                this.planesService.savePlan(this.plan)
                    .then(res => {
                        this.plan_list.push(this.plan)
                        this.plan = {}
                        this.$toast.add({summary:'Guardado !', severity:'success', detail:"Plan guardado con éxito !", life:3000})
                    })

            }
        },
        updateField(identifier, new_value, field){
            this.planesService.updateField({identifier, new_value, field})
                .then(res => {
                    if (res == 1) {
                        this.$toast.add({summary:'Guardado !', severity:'success', detail:"Los datos fueron actualizados!", life:3000})
                    }

                })
        },

    },
    computed:{
            filtered(){
                return this.plan_list.filter(p => p.name.toLowerCase().includes(this.filter.toLowerCase()))
            }
        }
}
</script>
