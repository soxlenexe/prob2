
<template>
 <div>
     <Menubar :model="items"></Menubar>
 </div>
    <!-- <Menu :model="items" v-if="toggle"></Menu>
    <img src="assets/layout/images/avatar.png" alt=""> -->
    <!-- <ul :class="topbarItemsClass"> -->

			<!-- <li >
				<button class="p-link" @click="show = !show">
				 <img alt="Foto perfil" src="assets/layout/images/avatar.png" class="profile-img"/>
				</button>

				<transition name="layout-submenu-container">
					<ul class="fadeInDown" v-show="show">
						<li class="menuitem">
							<button class="p-link" @click="logout">
                                <span> Salir </span>
								<i class="pi pi-sign-out"></i>

							</button>
						</li>

				</ul>
				</transition>
			</li> -->
		<!-- </ul> -->

</template>

<script>
import axios from 'axios';
import config from '../config';
import Button from 'primevue/button';
import MenuBar from 'primevue/menubar';
export default {
    components:{
        MenuBar, Button
    },
    data(){
        return{
            toggle: false,
            show: false,
            items:[
                {label:"Cerrar sesion"}
            ]
        }
    },
    created(){

    },
    methods:{
        logout(){
            axios.post(`${config.APP_URL}/logout`).then(() =>
                window.location.href = `${config.APP_URL}`
            );
        }
    }

}
</script>
<style scoped lang="scss">
.p-menubar{
    background-color: rgb(33, 29, 29);
    color: rgb(201, 199, 199);
    padding: 0;
    border: 0;
}

li .p-menuitem-link a .menuitem-link{
    color: red !important;
}
.pi{
    color: wheat;

}
</style>
