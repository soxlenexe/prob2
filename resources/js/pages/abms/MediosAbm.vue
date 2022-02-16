<template>
    <div class="container-c shadow bg-white">
        <Toolbar class="p-mb-1 bg-white toolbar">
            <template v-slot:left>
                <div class="">
                    <h3>Medios</h3>
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
                    label="Nuevo Medio"
                    icon="pi pi-plus"
                    class="p-button-success p-mr-2 ml-5 orange"
                    @click="nuevo_medio = true"
                />
            </template>
        </Toolbar>

        <DataTable
            :value="medios_list"
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
                    {{ data.numero }}
                </template>
            </Column>

            <Column
                field="descripcion"
                header="Descripcion"
                footer="Descripcion"
                style="width:120px;padding-left:15px"
            >
                <template #body="{data}">
                    {{ data.descripcion }}
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
                                slotProps.data.numero,
                                slotProps.column.props.field,
                                slotProps.data[slotProps.column.props.field]
                            )
                        "
                    >
                    </InputText>
                </template>
            </Column>
        </DataTable>
        <!-- DIALOG  -->

        <Dialog v-model:visible="nuevo_medio" header="Nuevo medio">
            <div class="p-dialog-content">
                <label for="">Descripción</label> <br />
                <InputText
                    v-model="medio.descripcion"
                    :class="{ 'p-invalid': submitted && !medio.descripcion }"
                >
                </InputText
                ><br />
                <small class="p-invalid" v-if="submitted && !medio.descripcion"
                    >Este campo es obligatorio.</small
                >
            </div>

            <template #footer>
                <Button
                    label="Cancelar"
                    icon="pi pi-times"
                    class="p-button-text"
                    @click="nuevo_medio = false"
                />
                <Button
                    label="Guardar"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="storeMedio"
                />
            </template>
        </Dialog>
    </div>
</template>

<script>
import MediosDePagoService from "./../../service/MediosDePagoService";
export default {
    props:['dns'],
    mediosService: null,
    data() {
        return {
            filters: [],
            medios_list: [],
            nuevo_medio: false,
            medio: {},
            submitted: false,
            memmory: null
        };
    },
    created() {
        this.mediosService = new MediosDePagoService();
    },
    mounted() {
        this.mediosService.getMedios(this.dns).then(res => {
            this.medios_list = res;
            //console.log(this.medios_list)
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
            let data = { old: this.memmory, id, field, new_value };
            this.mediosService.updateMedio(data).then(res => {
                this.$toast.add({
                    severity: "success",
                    summary: "Medio de pago Actualizado",
                    detail: "El medio de pago se actualizó con éxito!",
                    life: 4000
                });
            });
        }
    }
};
</script>

<style scoped>
.inputext {
    padding: 0;
}
.custom{
    width: 40%;
}
</style>
