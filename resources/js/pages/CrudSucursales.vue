<template>
    <div class="container-c shadow bg-white">
        <div class="">
            <h3 class="font-weight-bold mt-2">Sucursales</h3>
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
                    label="Nuevo"
                    icon="pi pi-plus"
                    class="p-button-success p-mr-2 ml-5 orange"
                    @click="openNew"
                />
            </template>
        </Toolbar>
        <!-- ******************* -->
        <DataTable
            class="table-striped mt-5"
            ref="dt"
            :value="filtrado"
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
                    <span class="p-column-title">Category</span>
                    {{ slotProps.data.creado }}
                </template>
            </Column>
            <Column field="activo " header="Estado" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Activo</span>
                    <Chip
                        label="Inactiva"
                        class="bg-danger text-white"
                        v-show="!slotProps.data.activo"
                    />
                    <Chip
                        label="Activa"
                        class="bg-success text-white"
                        v-show="slotProps.data.activo"
                    />
                </template>
            </Column>
            <Column header="Servidor">
                <template #body="slotProps">
                    <server-status-button
                        :url="slotProps.data.dns"
                    ></server-status-button>
                </template>
            </Column>

            <Column>
                <template #body="slotProps">
                    <Button
                        icon="pi pi-pencil"
                        class="p-button-rounded p-button-secondary p-mr-2"
                        @click="editarSucursal(slotProps.data)"
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
                    @click="hideDialog"
                />
                <Button
                    label="Guardar"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="saveSucursal"
                />
            </template>
        </Dialog>
        <!-- ---------------------------------------------------------------------- -->
        <!-- MODAL INFORMATIVA UNA VEZ CREADA LA SUCURSAL -->
        <Dialog v-model:visible="infoDialog" position="center" modal="true">
            <template #header>
                <h2>Aviso</h2>
            </template>
            <h5>
                Por favor comunique a Digital Crams para que habiliten la
                sucursal creada.
            </h5>
            <template #footer>
                <Button label="Aceptar" @click="reload" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import RadioButtonSlide from "../components/widgets/RadioButtonSlide.vue";
import ServerStatusButton from "../components/widgets/ServerStatusButton.vue";
import SucursalStatusButton from "../components/SucursalStatusButton.vue";
import SucursalesService from "../service/SucursalesService";

export default {
    components: { RadioButtonSlide, SucursalStatusButton, ServerStatusButton },
    data() {
        return {
            sucursalDialog: false,
            sucursales: [],
            sucursal: {},
            filter: "",
            submitted: false,
            infoDialog: false
        };
    },

    sucursalesService: null,
    created() {
        this.sucursalesService = new SucursalesService();
    },
    mounted() {
        this.sucursalesService.getSucursalList().then(data => {
            this.sucursales = data;
        });
    },
    methods: {
        openNew() {
            this.sucursal = {};
            this.submitted = false;
            this.sucursalDialog = true;
        },
        hideDialog() {
            this.sucursalDialog = false;
            this.submitted = false;
            this.sucursal = {};
        },
        saveSucursal() {
            this.submitted = true;
            if (!this.sucursal.id) {
                if (this.sucursal.sucursal_descripcion.trim()) {
                    this.sucursal.cliente_id = localStorage.cid;

                    this.sucursalesService
                        .storeSucursal(this.sucursal)
                        .then(res => {
                            if (res.error == "suc_limit_reached") {
                                this.$toast.add({
                                    severity: "error",
                                    summary: "Error !",
                                    detail:
                                        "Ha alcanzado las sucursales permitidas en su plan.",
                                    life: 3000
                                });
                                return;
                            }

                            this.submitted = true;
                            this.$toast.add({
                                severity: "success",
                                summary: "Éxito !",
                                detail: "Sucursal guardada",
                                life: 3000
                            });
                            this.infoDialog = true;
                            // this.filtrado.push(this.sucursal);
                            // this.sucursal = {};


                        })
                        .catch(() => {
                            this.$toast.add({
                                severity: "error",
                                summary: "Error !",
                                detail: "Sucursal no guardada",
                                life: 3000
                            });
                        });
                }
            } else {

                this.sucursalesService
                    .editSucursal(this.sucursal, this.sucursal.id)
                    .then(res => {
                        this.$toast.add({
                            severity: "success",
                            summary: "Cambios guardados",
                            detail: "Los cambios se guardaron con éxito!",
                            life: 3000
                        });
                        window.location.reload();
                    });
            }

            this.sucursalDialog = false;
            this.sucursal = {};
        },
        editarSucursal(sucursal) {
            this.sucursal = { ...sucursal };
            this.sucursalDialog = true;
        },
        reload(){
            this.infoDialog = false
            window.location.reload()

        }
    },
    computed: {
        filtrado() {
            return this.sucursales.filter(s =>
                s.sucursal_descripcion
                    .toLowerCase()
                    .includes(this.filter.toLowerCase())
            );
        }
    }
};
</script>

<style scoped>
tr:nth-of-type(odd) {
    background: rgba(0, 0, 0, 1) !important;
}

.table-header {
    display: flex;
    justify-content: space-between;
}
.p-toolbar {
    padding: 0;
    margin-bottom: 15px;
}
</style>
