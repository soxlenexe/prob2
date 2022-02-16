<template>
    <div class="container-c shadow bg-white">
        <div class="">
            <h3 class="font-weight-bold mt-2">Usuarios <i style="color:orange"> {{cliente_name_json.cliente_descripcion}}</i></h3>
        </div>
        <Toast position="bottom-right" />
        <Toolbar class="p-mb-1  bg-white toolbar">
            <template v-slot:right>
                <span class="p-input-icon-right center">
                    <InputText
                        v-model="filter"
                        placeholder="Buscar..."
                        size="60"
                    />
                    <i class="pi pi-search" />
                </span>
                <Button
                    label="Nuevo"
                    icon="pi pi-plus"
                    class="p-button-success p-mr-2 ml-5 orange"
                    @click="openNewEmployeeDialog()"
                />
            </template>
        </Toolbar>
        <DataTable
            class="table-striped mt-5"
            ref="dt"
            :value="filtrado"
            v-model:selection="selectedUsers"
            dataKey="id"
            :paginator="true"
            :rows="25"
            :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[10, 25, 50, 100]"
            currentPageReportTemplate="Mostrando del {first} al {last} de {totalRecords} registros"
            responsiveLayout="scroll"
        >
            <!-- <Column selectionMode="multiple" headerStyle="width: 3rem"></Column> -->

            <Column field="name" header="Operador" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">operador</span>
                    <a href="">{{ slotProps.data.name }}</a>
                </template>
            </Column>
            <Column field="sucursal_id" header="Sucursal" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Sucursal</span>
                    {{ slotProps.data.sucursal_name }}
                </template>
            </Column>
            <Column field="creado " header="Creado" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Creado</span>
                    {{ slotProps.data.creado }}
                </template>
            </Column>
            <Column field="role " header="Nivel" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Nivel</span>
                    {{ slotProps.data.role }}
                </template>
            </Column>
            <Column field="email " header="Email" :sortable="true">
                <template #body="slotProps">
                    <span class="p-column-title">Email</span>
                    {{ slotProps.data.email }}
                </template>
            </Column>
            <Column field=" " header="" >
                <template #body="slotProps">
                   <i class="pi pi-pencil" @click="editEmployee(slotProps.data)"> </i>
                   <span class="ml-4 text-danger"><i class="pi pi-trash" @click="deleteEmployee(slotProps.data)"> </i></span>
                </template>
            </Column>
        </DataTable>
        <!-- -----------------------------------------------DIALOG NEW empleado   -->
        <Dialog
            v-model:visible="newEmployeeDialog"
            :style="{ width: '450px' }"
            header="Nuevo usuario"
            :modal="true"
            class="p-fluid"
        >
            <div>
                <label for="sucursal">Sucursal</label>
                <Dropdown
                    v-model="empleado.sucursal"
                    :class="{ 'p-invalid': submitted && !empleado.sucursal }"
                    :options="sucursalesList"
                    optionLabel="id"
                    placeholder="Seleccione una sucursal"
                    required="true"
                    @change="getShowOperador"
                />
                <small class="p-invalid" v-if="submitted && !empleado.sucursal"
                    >Debe asignar una sucursal.</small
                >
                <br />
            </div>
            <div class="p-field">
                <div v-show="show_operador">
                    <label for="role">Operador</label>
                    <Dropdown
                        v-model="empleado.role"
                        :class="{ 'p-invalid': submitted && !empleado.role }"
                        :options="operadorList"
                        optionLabel="Operador"
                        placeholder="Seleccione un operador"
                        required="true"
                    />
                    <small class="p-invalid" v-if="submitted && !empleado.role"
                        >Debe asignar un rol.</small
                    >
                </div>
                <!-- <InputText :class="{'p-invalid': submitted && !empleado.name}" v-model="empleado.name" required="true" /> -->
                <!-- <small class="p-invalid" v-if="submitted && !empleado.name">El campo nombre no puede estar vacío.</small> -->
            </div>
            <div class="p-field">
                <label for="email">Email</label><br />
                <InputText
                    :class="{ 'p-invalid': submitted && !empleado.email }"
                    v-model="empleado.email"
                    required="true"
                />
                <small class="p-invalid" v-if="submitted && !empleado.email"
                    >Ingrese un Email válido.</small
                >
            </div>
            <template #footer>
                <Button
                    label="Cancelar"
                    icon="pi pi-times"
                    class="p-button-text"
                    @click="newEmployeeDialog = false"
                />
                <Button
                    label="Guardar"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="saveEmployee"
                />
            </template>
        </Dialog>
        <!-- dialog edit empleado -->

        <Dialog
            v-model:visible="editEmployeeDialog"
            :style="{ width: '450px' }"
            header="Editar empleado"
            :modal="true"
            class="p-fluid"
        >
            <!-- <div class="p-field">
                <label for="name">Nombre</label><br />

                <InputText
                    :class="{ 'p-invalid': submitted && !empleado.name }"
                    v-model="empleado.name"
                    required="true"
                />
                <small class="p-invalid" v-if="submitted && !empleado.name"
                    >El campo nombre no puede estar vacío.</small
                >
            </div> -->
            <div class="p-field">
                <label for="email">Email</label><br />
                <InputText
                    :class="{ 'p-invalid': submitted && !empleado.email }"
                    v-model="empleado.email"
                    required="true"
                />
                <small class="p-invalid" v-if="submitted && !empleado.email"
                    >Ingrese Un email válido.</small
                >
            </div>
            <!-- <div>
                <label for="role">Rol</label>
                <Dropdown
                    v-model="empleado.role"
                    :class="{ 'p-invalid': submitted && !empleado.role }"
                    :options="rolesList"
                    optionLabel="nombre"
                    placeholder="Seleccione un rol"
                    required="true"
                />
                <small class="p-invalid" v-if="submitted && !empleado.role"
                    >Debe asignar un rol.</small
                >
            </div>
            <br />
            <div>
                <label for="sucursal">Sucursal</label>
                <Dropdown
                    v-model="empleado.sucursal"
                    :class="{ 'p-invalid': submitted && !empleado.sucursal }"
                    :options="sucursalesList"
                    optionLabel="id"
                    placeholder="Seleccione una sucursal"
                    required="true"
                />
                <small class="p-invalid" v-if="submitted && !empleado.sucursal"
                    >Debe asignar una sucursal.</small
                >
            </div> -->

            <template #footer>
                <Button
                    label="Cancelar"
                    icon="pi pi-times"
                    class="p-button-text"
                    @click="editEmployeeDialog = false"
                />
                <Button
                    label="Guardar"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="storeEdittedEmployee"
                />
            </template>
        </Dialog>
          <!-- ************************************************** -->
           <!-- *** DIALOG DELETE EMPLOYEE *********** -->
           <!-- ************************************************** -->
        <Dialog
            v-model:visible="deleteEmployeeDialog"
            :style="{ width: '450px' }"
            header="Eliminar Usuario"
            :modal="true"
            class="p-fluid">

            <div class="p-field">

                <h5 for="email" class="m-3 text-dark">Usted está a punto de eliminar al usuario <br> <span class="text-danger m-2"> {{empleado.name}} </span><br>
                Esta acción es irreversible, desea continuar?</h5><br />

             </div>


            <template #footer>
                <Button
                    label="Cancelar"
                    icon="pi pi-times"
                    class="p-button-text"
                    @click="{deleteEmployeeDialog = false; empleado={}}"
                />
                <Button
                    label="Continuar"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="goDeleteEmployee"
                />
            </template>
        </Dialog>
    </div>
</template>

<script>
import EmployeeService from "../service/EmployeeService";
import OperatorService from "../service/OperatorService";
import RoleService from "./../service/RoleService";
export default {
    props: ["usuarios", "sucursales", "client_id", "cliente_name"],
    components: {},
    data() {
        return {
            filters:[],
            filter:'',
            usuarios_json: [],
            submitted: false,
            empleado: {},
            newEmployeeDialog: false,
            deleteEmployeeDialog:false,
            selectedRole: null,
            rolesList: [{ name: "algo", value: "otro" }],
            roleService: null,
            employeeService: null,
            sucursalesList: [],
            editEmployeeDialog: false,
            show_operador: false,
            selectedUsers: null,
            sucursales_json: [],
            email_invalid: true,
            operadorService: null,
            operadorList: [],
            cliente_name_json:'',
            pattern: /^[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?$/
        };
    },
    created() {
        this.roleService = new RoleService();
        this.operadorService = new OperatorService();
    },
    mounted() {
        try {
             this.cliente_name_json = JSON.parse(this.cliente_name)
        } catch (error) {

        }


        this.usuarios_json = JSON.parse(this.usuarios);
        this.employeeService = new EmployeeService();
        this.sucursales_json = JSON.parse(this.sucursales);
        this.roleService.getNiveles().then(res => {
            this.rolesList = res;
        });
        this.loadSucursales();
    },
    methods: {
        openNewEmployeeDialog(){
            this.newEmployeeDialog = true;
            this.empleado = {};
            this.submitted = false;
        },
        deleteEmployee(data){
            this.deleteEmployeeDialog = true
            this.empleado = data

        },
        goDeleteEmployee(){
            this.deleteEmployeeDialog = false
            this.empleado.activo = false
            this.storeEdittedEmployee()
        },
        saveEmployee() {
            this.submitted = true;
            if (!this.pattern.test(this.empleado.email.trim())) {
                this.empleado.email = null;
                return;
            }

            if (this.empleado.email.trim()) {
                this.employeeService
                    .storeEmployee({
                        name: this.empleado.role.Operador,
                        email: this.empleado.email,
                        sucursal: this.empleado.sucursal,
                        role: this.empleado.role.Nivel,
                        cliente_id: this.client_id
                    })
                    .then(res => {

                         if (res.status === 'employees_limit_reached') {
                            this.$toast.add({
                            severity: "error",
                            summary: "Usuario no guardado",
                            detail: "Haz alcanzado el limite de cuentas de usuario de tu plan."

                            });
                            this.$toast.add({
                                severity: "info",
                                summary: "Solucion",
                                detail: "Si desea ampliar la cantidad de usuarios de su plan comuníquese con DCrams."

                            });
                        return
                        }
                        this.$toast.add({
                            severity: "success",
                            summary: "Usuario guardado",
                            detail: "EL nuevo usuario fue creado con éxito.",
                            life: 3000
                        });
                        window.location.reload();
                    })
                    .catch(res => {

                        this.$toast.add({
                            severity: "error",
                            summary: "Usuario no guardado",
                            detail: "No se pudo realizar la operación.Es posible que esa cuenta ya haya sido utilizado anteriormente. Intenet con otro Email",
                            life: 8000
                        });
                    });
                this.submitted = false;
                this.newEmployeeDialog = false;
                this.empleado = {};
            }
        },
        editEmployee(data) {
            this.editEmployeeDialog = true;
            this.empleado.name = data.name;
            this.empleado.email = data.email;
            this.empleado.id = data.id;
            this.empleado.role = data.role;
            this.empleado.sucursal = data.sucursal;
            this.empleado.activo = true
        },
        storeEdittedEmployee() {
            console.log('storeattempt')
            this.submitted = true;
            this.employeeService.editEmployee(this.empleado).then(res => {
                // console.log(res)
                // return
                this.editEmployeeDialog = false;
                this.$toast.add({
                    severity: "success",
                    summary: "Usuario Editado",
                    detail: "El usuario fue editado correctamente",
                    life: 3000
                });
                window.location.reload();
            })
            .catch(res => {
                this.editEmployeeDialog = false;
                this.$toast.add({
                    severity: "error",
                    summary: "Usuario No Editado",
                    detail: "El mail que trata de registrar no puede ser utilizado nuevamente.",
                    life: 8000
                });
            })


        },
        loadSucursales() {
            this.sucursales_json.forEach(sucursal => {
                this.sucursalesList.push({
                    id: sucursal.sucursal_descripcion,
                    value: sucursal.id
                });
            });
        },
        getShowOperador() {
            this.show_operador = true;

            this.operadorService
                .getOperadoresSucursal(this.empleado.sucursal.value)
                .then(res => {
                    this.operadorList =  res;
                })
                .catch(res => {
                        this.newEmployeeDialog = false
                        this.$toast.add({
                        severity: "warn",
                        summary: "No se puede realizar la acción",
                        detail: "Aun no cuenta con sucursales activas.",
                        life: 5000
                    });
                });

        }
    },
    computed:{
        filtrado(){
            return this.usuarios_json.filter(u => u.name.toLowerCase().includes(this.filter.toLowerCase()))
        }
    }
};
</script>

<style scoped>
.orange {
    background-color: orange !important;
    border: 1px solid orange !important;
}

</style>
