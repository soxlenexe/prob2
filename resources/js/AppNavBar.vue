<template>
    <MenuBar :model="itemsbar">
        <!-- <template #end>
                <Button>asd</Button>
            </template> -->
    </MenuBar>
    <Toast position="bottom-right" ></Toast>
    <ConfirmDialog></ConfirmDialog>
    <div class="server-off" v-show="alert_server_off"> <i class="pi pi-exclamation-triangle"></i> &nbsp;No se puede conectar con la base de datos. Asegurese que el servidor esta encendido.</div>
</template>

<script>
import Button from 'primevue/button';
import MenuBar from 'primevue/menubar';
import axios from 'axios';
import config from './config'
import SucursalesService from './service/SucursalesService'

export default {
    props:['role', 'user_id', 'company', 'sucursal_active', 'server_on'],
    components:{
        Button,
         MenuBar
    },
    sucursalesService:null,
    data() {
        return {
            messages: [],
            itemsbar:[],
            item_client:[],
            sucursales:[],
            sucursal_empleado_activa: true,
            alert_server_off:false
        }
    },
    created(){
        this.sucursalesService = new SucursalesService();
    },
    mounted(){
        console.log(this.server_on)
        localStorage.cid = this.client_id;
        localStorage.company = this.company;
        this.sucursal_empleado_activa = this.sucursal_active
        if (this.role == 'empleado') {
            let ping = true
            if (!ping) {
                this.alert_server_off = true
                return
            }
        }

        //*************************************************** */
               // CLIENTE
        //***************************************************** */

        if (this.role == 'client') {
            this.sucursalesService.getSucursalesNamesbyClient(this.company)
                .then(res => {
                    console.log('sucursales',res)
                    this.sucursales = res;
                    this.sucursales.forEach(element => {
                        this.item_client.push(
                            {
                                label: element.sucursal_descripcion,
                                items:[
                         {
                            label: "Articulos",
                            command: () =>{
                                window.location.href = `/abm/articulos/${element.dns}`
                            }

                        },
                        {
                            label: "Grupos",
                            command: () =>{
                                window.location.href = `/abm/grupos/${element.dns}`
                            }
                        },
                        {
                            label: "Stock",
                            command: () =>{
                                window.location.href = `/abm/stock/${element.dns}`
                            }
                        },
                        {
                            label: "Clientes",
                            command: () =>{
                                window.location.href = `/abm/clientes/${element.dns}`
                            }
                        },
                        {
                            label:'Marcas',command: () =>{
                                window.location.href = `/abm/marcas/${element.dns}`
                            }
                        },
                        {
                            label: 'M. de Pago',command: () =>{
                                window.location.href = `/abm/medios/${element.dns}`
                            }
                        },
                        {
                            label: 'Cta Cte',command: () =>{
                                window.location.href = `/abm/cta_cte/${element.dns}`
                            }
                        },
                        {
                            label: 'Proveedores',
                            command: () =>{
                                window.location.href = `/abm/proveedores/${element.dns}`
                            }
                        },
                        // {
                        //     label: 'Promociones',
                        //     command: () =>{
                        //         window.location.href = '/abm/promociones'
                        //     }
                        // },
                        {
                            label: 'Niveles',
                            command: () =>{
                                window.location.href = `/abm/niveles/${element.dns}`
                            }
                        }
                    ]
                            }
                        )
                    });
                    //
                    this.itemsbar = [
                {
                    label: 'Home',
                    icon:'pi pi-fw pi-home',
                    command: () =>{
                                window.location.href = '/'
                            },
                    options:{
                        permission: 'admin'
                    }
                },
                {
                    label: 'Sucursales',
                    icon: 'pi pi-fw pi-sitemap',
                    command: () =>{
                        window.location.href = '/abm-sucursales'
                    }

                },
                {
                    label: "ABM's",
                    icon: 'pi pi-fw pi-list',
                    items:this.item_client

                    },

                    {
                        label: 'Reportes',
                        icon: 'pi pi-fw pi-chart-bar',
                        command: () =>{
                                    window.location.href = '/reportes'
                                }

                    },
                    {

                        icon: 'pi pi-fw pi-user-plus',
                        label: 'Usuarios',
                        command: () =>{
                                    window.location.href = '/abm-usuarios'
                                }
                    },
                    {

                        icon: 'pi pi-book',
                        label: 'Actividad',
                        command: () =>{
                                    window.location.href = '/abm-actividad'
                                }
                    }

                ]


                })
        }
         //*************************************************** */
               // ADMIN
        //***************************************************** */
        if (this.role == 'admin') {
            this.itemsbar = [
                {
                    label: 'Home',
                    icon:'pi pi-fw pi-home',
                    command: () =>{
                                window.location.href = '/'
                            },
                    options:{
                        permission: 'admin'
                    }
                },
                {
                    label: 'Clientes',
                    icon: 'pi pi-fw pi-user',
                    command: () =>{
                                window.location.href = '/abm-clientes'
                            }
                },

                {
                    label: 'Planes',
                    icon: 'pi pi-briefcase',
                    command: () =>{
                                window.location.href = '/abm-planes'
                            }

                },
                {
                    label: 'Notificaciones',
                    icon: 'pi pi-bell',
                    command: () =>{
                                window.location.href = '/system/alert/create'
                            }

                }
            ]

        }

         //*************************************************** */
               // EMPLEADO
        //***************************************************** */
        if(this.role == 'empleado' && this.sucursal_empleado_activa && this.server_on){
            this.itemsbar = [
                    {
                    label: "ABM's",
                    icon: 'pi pi-fw pi-list',
                    items:[
                         {
                            label: "Articulos",
                            command: () =>{
                                window.location.href = '/abm/articulos'
                            }
                            // items:[
                            //     {label:"Editar Precios"},
                            //     {label: "Modificar Stocks"},
                            //     {label: "Administrar"}
                            // ]
                        },
                        {
                            label: "Grupos",
                            command: () =>{
                                window.location.href = '/abm/grupos'
                            }
                        },
                        {
                            label: "Stock",
                            command: () =>{
                                window.location.href = '/abm/stock'
                            }
                        },
                        {
                            label: "Clientes",
                            command: () =>{
                                window.location.href = '/abm/clientes'
                            }
                        },
                        {
                            label:'Marcas',command: () =>{
                                window.location.href = '/abm/marcas'
                            }
                        },
                        {
                            label: 'M. de Pago',command: () =>{
                                window.location.href = '/abm/medios'
                            }
                        },
                        {
                            label: 'Cta Cte',command: () =>{
                                window.location.href = '/abm/cta_cte'
                            }
                        }
                        ,
                        {
                            label: 'Proveedores',
                            command: () =>{
                                window.location.href = '/abm/proveedores'
                            }
                        },
                        // {
                        //     label: 'Promociones',
                        //     command: () =>{
                        //         window.location.href = '/abm/promociones'
                        //     }
                        // }
                        //,
                        {
                            label: 'Niveles',
                            command: () =>{
                                window.location.href = '/abm/niveles'
                            }
                        }
                    ]

                },

                {
                    label: 'Reportes',
                    icon: 'pi pi-fw pi-chart-bar',
                    command: () =>{
                                window.location.href = '/reportes'
                            }

                }

            ]
        }else{
            if (this.role == 'empleado') {


                this.$toast.add({
                    severity:"warn",
                    summary:"No se puede conectar",
                    detail: "Su sucursal se encuentra inactiva. Comuniquese con Digital Crams."
                })
            }
        }

    }
}
</script>

<style scoped lang="scss">
.p-menubar {
    background-color: rgb(33, 29, 29);
    color: rgb(201, 199, 199);
    padding: 0;
    border: 0;
}
.p-menubar-root-list {
    padding: 0;
    border: 0;
}
.p-menuitem {
    padding: 0;
    border: 0;
}

li .p-menuitem-link a .menuitem-link {
    color: red !important;
}
.pi {
    color: wheat;
}
.server-off{
    color: orange;
    padding-top:12px;
}
</style>
