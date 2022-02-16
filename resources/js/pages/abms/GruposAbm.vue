<template>
    <div class="container-c shadow bg-white">
				<!-- <Toast position="bottom-right" /> -->

				<Toolbar class="p-mb-1 bg-white toolbar">
                    <template v-slot:left>
                        <div class="">
                            <h3>Grupos</h3>
                        </div>
                    </template>

                    <template v-slot:right>
                        <span class="p-input-icon-right center">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global']" size="60" placeholder="Buscar..." />
                        </span>
                        <Button label="Nuevo Grupo" icon="pi pi-plus" class="p-button-success p-mr-2 ml-5 orange" @click="new_group=true" />
                    </template>
				</Toolbar>

                <DataTable :value="grupos_list"
                            stripedRows
                            editMode="cell"
                            class="editable-cells-table mt-5 custom"
                            showGridlines

                            >

                    <!-- <Column field="id" header="ID" footer="ID"  style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            {{data.id}}
                        </template>
                    </Column> -->

                    <Column field="descripcion" header="Descripcion" footer="Descripcion"  style="width:120px;padding-left:15px">
                        <template #body="{data}">
                            {{data.descripcion}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="30" class="inputext"
                                @change="updateGrupo(
                                    slotProps.data.id,
                                    slotProps.data.descripcion
                                )">
                            </InputText>
                        </template>
                    </Column>
                </DataTable >
                <!-- DIALOG  -->
                <Dialog v-model:visible="new_group" header="Nuevo grupo">
                    <div class="p-dialog-content">
                        <label for="">Descripción</label> <br>
                        <InputText v-model="grupo.descripcion" :class="{'p-invalid': submitted && !grupo.descripcion}"  >
                        </InputText><br>
                        <small class="p-invalid" v-if="submitted && !grupo.descripcion">Este campo es  obligatorio.</small>
                    </div>
                    <template #footer>
						<Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="new_group = false"/>
						<Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="storeGrupo" />
					</template>
                </Dialog>

    </div>
</template>

<script>
import GrupoService from './../../service/GrupoService';
export default {
    props:['dns'],
    data(){
        return{
            filters:[],
            grupos_list:[],
            grupo:{},
            submitted:false,
            new_group:false
        }
    },
    created(){
        this.grupoService = new GrupoService;
    },
    mounted(){
        this.grupoService.getGroupList(this.dns)
            .then(res => {this.grupos_list = res; console.log(this.dns)})
    },
    methods:{
        updateGrupo(id, descripcion){
            console.log(id, descripcion)
            this.grupoService.updateGroup({id:id, descripcion:descripcion})
                .then(res => {
                    if (res.status) {
                        this.$toast.add({severity:'success', summary: 'Éxito !', detail: 'Los cambios se guardaron exitosamente', life: 1500})
                    }else{
                        this.$toast.add({severity:'error', summary: 'Error', detail: 'Los cambios no se guardaron', life: 1500})
                    }
                })

        },
        storeGrupo(){
            this.submitted = true;
            if (this.grupo.descripcion) {
                this.grupoService.storeGroup(this.grupo, this.dns)
                    .then(res => {
                        console.log('guardado')
                        this.$toast.add({severity:'success', summary: 'Éxito !', detail: 'Nuevo grupo guardado con éxito!', life: 3000})
                        this.new_group = false
                        this.grupos_list.push({id:res.id, descripcion:this.grupo.descripcion})
                    }).catch(res => this.$toast.add({severity:'error', summary: 'Error', detail: 'Los cambios no se guardaron', life: 1500}))
            }

        }
    }
}
</script>
<style scoped>
.inputext{
    padding: 0;

}
.custom{
    width: 40%;
}

</style>
