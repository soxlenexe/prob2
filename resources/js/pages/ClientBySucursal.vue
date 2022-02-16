<template>
    <div class="container-c shadow bg-white">
        <div class="">
            <h3>
                Sucursales <i style="color:orange">{{ cliente_name }}</i>
            </h3>
        </div>
        <Toast position="bottom-right" />
        <Toolbar class="p-mb-1 bg-white toolbar">
            <template v-slot:right>
                <span class="p-input-icon-right center">
                    <i class="pi pi-search" />
                    <InputText
                        v-model="filter"
                        size="60"
                        placeholder="Buscar..."
                    />
                </span>
                <Button
                    label="Nueva sucursal"
                    icon="pi pi-plus"
                    class="p-button-success p-mr-2 ml-5 orange"
                    @click="sucursalDialog = true"
                />
            </template>
        </Toolbar>
        <DataTable
            class="table-striped mt-5"
            ref="dt"
            :value="filtrados"
            dataKey="id"
            :paginator="true"
            :rows="25"
            :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[10, 25, 50, 100]"
            currentPageReportTemplate="Mostrando del {first} al {last} de {totalRecords} registros"
            responsiveLayout="scroll"
        >
            <Column field="dns" header="Dns" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Dns</span>
                    {{ slotProps.data.dns }}
                </template>
            </Column>
            <Column
                field="sucursal_descripcion"
                header="Descripcion"
                :sortable="true"
            >
                <template #body="slotProps">
                    <span class="p-column-title">Category</span>
                    {{ slotProps.data.sucursal_descripcion }}
                </template>
            </Column>
            <Column field="creado " header="Creado" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Creado</span>
                    {{ slotProps.data.creado }}
                </template>
            </Column>
            <Column field="activo " header="Estado" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Activo</span>
                    <!-- {{slotProps.data.activo}} -->
                    <sucursal-status-button
                        :sucursal_id="slotProps.data.id"
                        :sucursal_status="slotProps.data.activo"
                    ></sucursal-status-button>
                </template>
            </Column>
            <!-- <Column header="Servidor">
                <template #body="slotProps">
                    <server-status-button
                        :url="slotProps.data.dns"
                    ></server-status-button>
                </template>
            </Column> -->
            <Column field="" header="">
            <template #body="slotProps">


                <Button
                    label="Adminstrar empleados"
                    icon="pi pi-users"
                    class="p-button-success orange"
                    @click="gotToUserAdmin"
                />
                </template>
            </Column>

            <Column>
                <template #body="slotProps">
                    <Button
                        icon="pi pi-pencil"
                        class="p-button-rounded p-button-secondary "
                        @click="editSucursal(slotProps.data)"
                    />
                </template>
            </Column>
        </DataTable>
        <!-- -----------------------------------------------DIALOG NEW SUCURSAL   -->
        <Dialog
            v-model:visible="sucursalDialog"
            :style="{ width: '450px' }"
            header="Detalle Sucursal"
            :modal="true"
            class="p-fluid"
        >
            <div class="p-field">
                <label for="dns">Dns</label>
                <InputText
                    id="dns"
                    v-model.trim="sucursal.dns"
                    required="true"
                    autofocus

                />

            </div>
            <div class="p-field">
                <label for="sucursal_descripcion">Descripción</label><br />
                <Textarea
                    id="sucursal_descripcion"
                    v-model="sucursal.sucursal_descripcion"
                    required="true"
                    rows="3"
                    cols="20"
                    class="form-control"
                    :class="{
                        'p-invalid': submitted && !sucursal.sucursal_descripcion
                    }"
                />
                <small class="p-invalid" v-if="submitted && !sucursal.dns"
                    >La descripción no puede estar vacía.</small
                >
            </div>
            <template #footer>
                <Button
                    label="Cancelar"
                    icon="pi pi-times"
                    class="p-button-text"
                    @click="sucursalDialog = false"
                />
                <Button
                    label="Guardar"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="saveSucursal"
                />
            </template>
        </Dialog>
        <!--------------- ducursal edit dialog ------------------------------------>
        <Dialog
            v-model:visible="sucursalEditDialog"
            :style="{ width: '450px' }"
            header="Detalle Sucursal"
            :modal="true"
            class="p-fluid"
        >
            <div class="p-field">
                <label for="dns">Dns</label>
                <InputText
                    id="dns"
                    v-model.trim="sucursal.dns"
                    required="true"
                    autofocus
                />
            </div>
            <div class="p-field">
                <label for="sucursal_descripcion">Descripción</label><br />
                <Textarea
                    id="sucursal_descripcion"
                    v-model="sucursal.sucursal_descripcion"
                    required="true"
                    rows="3"
                    cols="20"
                    class="form-control"
                    :class="{
                        'p-invalid': submitted && !sucursal.sucursal_descripcion
                    }"
                />
                <small class="p-invalid" v-if="submitted && !sucursal.dns"
                    >La descripción no puede estar vacía.</small
                >
            </div>
            <template #footer>
                <Button
                    label="Cancelar"
                    icon="pi pi-times"
                    class="p-button-text"
                    @click="hideEditDialog"
                />
                <Button
                    label="Guardar"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="saveEditSucursal"
                />
            </template>
        </Dialog>
        <!-- ------------------------------EDIT SUCURSAL ---------------------------------------- -->
    </div>
</template>

<script>
import RadioButtonSlide from "../components/widgets/RadioButtonSlide.vue";
import SucursalStatusButton from "../components/SucursalStatusButton.vue";
import SucursalesService from "../service/SucursalesService";

export default {
    components: { RadioButtonSlide, SucursalStatusButton },
    props: ["sucursales", "cliente_id", "cliente_name"],
    data() {
        return {
            filter: "",
            sucursalDialog: false,
            submitted: false,
            sucursal: {},
            sucursalEditDialog: false
        };
    },
    created() {
        this.sucursalesService = new SucursalesService();
    },
    mounted() {},
    methods: {
        saveSucursal() {
            //this.cliente_id es el iddel cliente dueño de la suc
            this.submitted = true
            this.sucursal.cliente_id = this.cliente_id;
            if (this.submitted && this.sucursal.sucursal_descripcion != null ) {
                    this.sucursalesService.storeSucursalWeb(this.sucursal).then(res => {
                    this.$toast.add({
                        severity: "success",
                        summary: "Éxito !",
                        detail: "Sucursal guardada",
                        life: 3000
                    });
                    this.sucursalDialog = false;
                    window.location.reload();
                });

            }

        },
        editSucursal(data) {
            this.sucursal = data;
            this.sucursalEditDialog = true;
        },
        hideEditDialog() {
            this.sucursalEditDialog = false;
            this.sucursal = {};
        },
        saveEditSucursal() {
            this.sucursalesService
                .editSucursal(
                    {
                        activo: this.sucursal.activo,
                        dns: this.sucursal.dns,
                        sucursal_descripcion: this.sucursal.sucursal_descripcion
                    },
                    this.sucursal.id
                )
                .then(res => {
                    if (res.status == 'success') {
                        this.$toast.add({
                        severity: "success",
                        summary: "Cambios Guardados",
                        detail: "Los cambios se guardaron con éxito!",
                        life: 3000
                        });
                        this.sucursalEditDialog = false;
                        location.reload();
                    }
                    if (res.status == 'checking') {
                        this.$toast.add({
                        severity: "info",
                        summary: "Verificacion de compatibilidad",
                        detail: "El sistema comprobó que la base de datos  del DNS que trata de ingresar no es compatible con la que trata de eliminar.La operación no puede continuar."
                        });
                        this.sucursalEditDialog = false;
                    }

                })
                .catch(res => {
                    this.$toast.add({
                        severity: "error",
                        summary: "Error al leer los datos",
                        detail: "El DNS ingresado no responde. Verifique que sea correcto y que se encuentre operativo."
                        });
                        this.sucursalEditDialog = false;
                })
                ;
        },
        gotToUserAdmin(){
            window.location.href = `/abm-usuarios/${this.cliente_id}`
        }
    },
    computed: {
        filtrados(){
            return this.sucursales.filter(s => s.sucursal_descripcion.toLowerCase().includes(this.filter.toLowerCase()))
        }
    },
};
</script>

<style>
.p-toolbar {
    padding: 0;
}
</style>
