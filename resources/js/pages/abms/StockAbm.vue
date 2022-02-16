<template>
     <div class="container-c shadow bg-white">
		<div class="">
            <h3>Stock</h3>
        </div>

				<Toast position="bottom-right" />

				<Toolbar class="p-mb-1 bg-white toolbar">

                    <template v-slot:right>
                        <span class="p-input-icon-right center">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global']" size="60" placeholder="Buscar..." />
                        </span>
                        <Button label="Nuevo Grupo" icon="pi pi-plus" class="p-button-success p-mr-2 ml-5 orange" @click="new_group=true" />
                    </template>
				</Toolbar>

                <!-- <DataTable :value="grupos_list"
                            stripedRows
                            editMode="cell"
                            class="editable-cells-table mt-5"
                            showGridlines>

                    <Column field="id" header="ID" footer="ID"  style="width:50px;padding-left:15px">
                        <template #body="{data}">
                            {{data.id}}
                        </template>
                    </Column>

                    <Column field="descripcion" header="Descripcion" footer="Descripcion"  style="width:120px;padding-left:15px">
                        <template #body="{data}">
                            {{data.descripcion}}
                        </template>
                        <template #editor="slotProps">
                            <InputText v-model="slotProps.data[slotProps.column.props.field]" size="20"
                                @change="updateGrupo(
                                    slotProps.data.id,
                                    slotProps.data.descripcion
                                )">
                            </InputText>
                        </template>
                    </Column>
                </DataTable > -->
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
import ClientService from './../../service/ClientService'
export default {

    data(){
        return{
            filters:[]
        }
    }

}
</script>
