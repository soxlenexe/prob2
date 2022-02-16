<template>
    <div class="container-c shadow bg-white">
        <Toolbar class="p-mb-1 bg-white toolbar">
            <template v-slot:left>
                <div class="">
                    <h3>Niveles</h3>
                </div>
            </template>
            <template v-slot:right>
                <span class="p-input-icon-right center">
                    <i class="pi pi-search" />
                    <InputText
                        v-model="filters['global']"
                        size="60"
                        placeholder="Buscar..."
                    />
                </span>
                <Button
                    label="Nuevo Nivel"
                    icon="pi pi-plus"
                    class="p-button-success p-mr-2 ml-5 orange"
                    @click="nuevo_medio = true"
                />
            </template>
        </Toolbar>

        <DataTable
            :value="niveles_list"
            stripedRows
            editMode="cell"
            class="editable-cells-table mt-5 custom"
            showGridlines
        >
            <Column
                field="id"
                header="Numero"
                footer="Numero"
                style="width:50px;padding-left:15px"
            >
                <template #body="{data}">
                    {{ data.nivel }}
                </template>
            </Column>

            <Column
                field="nombre"
                header="Descripcion"
                footer="Descripcion"
                style="width:120px;padding-left:15px"
            >
                <template #body="{data}">
                    {{ data.nombre }}
                </template>
                <template #editor="slotProps">
                    <InputText
                        v-model="slotProps.data[slotProps.column.props.field]"
                        size="20"
                        class="inputext"
                        @click="
                            storeOld(
                                slotProps.data[slotProps.column.props.field]
                            )
                        "
                        @change="
                            updateCell(
                                slotProps.data.id,
                                slotProps.column.props.field,
                                slotProps.data[slotProps.column.props.field]
                            )
                        "
                    >
                    </InputText>
                </template>
            </Column>
            <Column
                field="Actions"
                header="Permisos"
                footer="Permisos"
                style="width:120px;padding-left:15px"
            >
                <template #body="{data}">
                    <span
                        class="edit-permisos"
                        @click="editPermisos(data.nivel, data.nombre)"
                        >Editar permisos</span
                    >
                </template>
            </Column>
        </DataTable>
        <!-- DIALOG  -->

        <Dialog
            v-model:visible="ver_permisos"
            :closable="true"
            style="height:60vh"

            :header="`Administrar permisos nivel: ${current_lvl} - ${current_user}`"
        >
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Permiso</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(permiso, index) of permisos_list">
                        <th scope="row">
                            {{ permiso.modulo }}
                        </th>

                        <td>
                            {{ permiso.formulario }}
                        </td>
                        <td>
                            <permission-switch :usuarios="permiso.usuarios" :current="current_lvl" :permission="permiso.modulo"></permission-switch>
                        </td>
                    </tr>
                </tbody>
            </table>

            <template #footer>
                <Button
                    label="Listo"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="ver_permisos = false"
                />
                <!-- <Button
                    label="Guardar"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="storeMedio"
                /> -->
            </template>
        </Dialog>
    </div>
</template>

<script>
import NivelesService from "./../../service/NivelesService";
import PermissionSwitch from './../../components/widgets/PermissionSwitch.vue';
export default {
    props:['dns'],
  components: { PermissionSwitch },
    nivelesService: null,
    data() {
        return {
            filters: [],
            niveles_list: [],
            nivel: {},
            submitted: false,
            memmory: null,
            ver_permisos: false,
            permisos_list: [],
            current_lvl:null,
            current_user: 'Cajero'
        }
    },
    created() {
        this.nivelesService = new NivelesService();
    },
    mounted() {
        this.nivelesService.getNiveles(this.dns).then(res => {
            this.niveles_list = res;
            //console.log(res)
        });
    },
    methods: {
        storeMedio() {
            this.submitted = true;
            this.medio.numero = this.medios_list.length;
            if (this.medio.descripcion != undefined) {
                this.submitted = false;
                this.nuevo_medio = false;
                this.mediosService
                    .storeMedio(this.medio)
                    .then(res => {
                        if (res.status) {
                            this.$toast.add({
                                severity: "success",
                                summary: "Medio de pago Creado",
                                detail:
                                    "El nuevo medio de pago se registró con éxito!",
                                life: 4000
                            });
                            this.medios_list.push(this.medio);
                            this.medio = {};
                        }
                    })
                    .catch(res => console.log(res));
            }
        },
        storeOld(old) {
            this.memmory = old;
        },
        updateCell(id, field, new_value) {
            let data = {
                old: this.memmory,
                id: this.memmory,
                field,
                new_value
            };
            //console.log(data)
            this.nivelesService.updateNivel(data).then(res => {
                this.$toast.add({
                    severity: "success",
                    summary: "Nombre actualizado",
                    detail: "El nombre del nivel se actualizó con éxito!",
                    life: 4000
                });
            });
        },
        editPermisos(lvl, name) {
            this.ver_permisos = true;
            this.current_lvl = lvl
            this.current_user = name
            this.nivelesService.getPermisos(lvl).then(res => {
                this.permisos_list = res.permisos;
            });
        }
    }
};
</script>

<style scoped>
.inputext {
    padding: 0;
}
.edit-permisos {
    color: rgb(21, 120, 250);
    cursor: pointer;
}
.custom{
    width: 60%;
}
</style>
