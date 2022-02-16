<template>
     <div class="container-c shadow bg-white">
		<div class="">
            <h3>Actividad</h3>
        </div>

				<Toast position="bottom-right" />

				<Toolbar class="p-mb-1 bg-white toolbar">

                    <template v-slot:right>
                        <span class="p-input-icon-right center">
                                <i class="pi pi-search" />
                                <InputText v-model="filter" size="60" placeholder="Buscar..." />
                        </span>
                        <Button label="Nuevo" icon="pi pi-plus" class="p-button-success p-mr-2 ml-5 orange" @click="new_group=true" :disabled="true" />
                    </template>
				</Toolbar>

                <DataTable :value="filtrados"
                            stripedRows
                            editMode="cell"
                            class="editable-cells-table mt-5"
                            showGridlines>

                    <Column field="suc_name" header="Sucursal"   style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            {{data.suc_name}}
                        </template>
                    </Column>
                    <Column field="table" header="Tabla"   style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            {{data.table}}
                        </template>
                    </Column>
                    <Column field="operador" header="Operador"   style="width:50px;padding-left:15px">
                        <template #body="{data}" >
                        {{data.operador}}
                        </template>
                    </Column>
                    <Column field="tipo_operacion" header="Tipo"   style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            {{data.tipo_operacion}}
                        </template>
                    </Column>
                    <Column field="created_at" header="Fecha"   style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            {{datetime_format(data.created_at)}}
                        </template>
                    </Column>
                    <Column field="field" header="Columna"   style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            {{data.field}}
                        </template>
                    </Column>
                    <Column field="old_value" header="Anterior"   style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            <span class="c_red">{{data.old_value}}</span>
                        </template>
                    </Column>
                    <Column field="new_value" header="Nuevo"   style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            <span class="c_green">{{data.new_value}}</span>
                        </template>
                    </Column>
                </DataTable >
                <!-- DIALOG  -->

                <!-- <Dialog v-model:visible="new_group" header="Nuevo grupo">
                    <div class="p-dialog-content">
                        <label for="">Descripción</label> <br>
                        <InputText v-model="grupo.descripcion" :class="{'p-invalid': submitted && !grupo.descripcion}">
                        </InputText><br>
                        <small class="p-invalid" v-if="submitted && !grupo.descripcion">Este campo es  obligatorio.</small>
                    </div>

                    <template #footer>
						<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="new_group = false"/>
						<Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="storeGrupo" />
					</template>

                </Dialog> -->

    </div>
</template>

<script>

export default {
    props:['logs'],
    data(){
        return{
            filters:[],
            logs_json: null,
            filter:''
        }
    },
    created(){
        this.logs_json = JSON.parse(this.logs)
    },
    mounted(){
        console.log(this.logs_json)
    },
    methods: {
        datetime_format(date){
        let date_time = new Date(date)
        let dia =  date_time.getDate()
        let mes =  date_time.getMonth()
        let minutos =  date_time.getMinutes()
        let horas =  date_time.getHours()
        let anio = date_time.getFullYear()

            return `${dia}-${mes}-${anio} ${horas}:${minutos}`
        }
    },
    computed:{
        filtrados(){
            return this.logs_json.filter(l =>
                l.operador.toLowerCase().includes(this.filter.toLowerCase()) ||
                l.table.toLowerCase().includes(this.filter.toLowerCase()) ||
                l.suc_name.toLowerCase().includes(this.filter.toLowerCase())
                )
        }
    }

}
</script>
<style scoped>
.c_red{
    color: rgb(253, 93, 93);
}
.c_green{
    color: rgb(13, 138, 31);
}
</style>
