<template>
  <BreadCrumb :home="home" :model="items">
  <!-- @click="gohome" -->

  </BreadCrumb>
</template>


<script>

import Breadcrumb from 'primevue/breadcrumb';

export default {
    components:{
        Breadcrumb
    },
    data(){
        return{
            home: {icon: 'pi pi-home'},
            items: [
                // {label: 'ABM-Clientes', url:'/abm-clientes'},
                // {label: 'ABM-Sucursales', url:'/abm-sucursales'}
                ]
        }
    },
    mounted(){
        console.log(window.location.pathname)
        this.items.push({label: window.location.pathname})
    },

    methods:{
        gohome(){
            window.location.href = '/';
            console.log('home');
        }
    }

}
</script>

<style scoped>
.p-breadcrumb{
    padding: 5px 5px 5px 15px;
}
.p-menuitem-icon{
    font-size: 1.rem;
}

</style>
