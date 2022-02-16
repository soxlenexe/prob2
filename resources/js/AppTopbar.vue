<template>
	<div class="layout-topbar clearfix">
		<!-- <button class="layout-topbar-logo p-link" @click="goDashboard">
			<img id="layout-topbar-logo" alt="babylon-layout" src="assets/layout/images/logo-white.png"/>
		</button> -->
		<button class="layout-menu-button p-link" @click="onMenuButtonClick">
			<i class="pi pi-bars"></i>
		</button>

		<button id="topbar-menu-button" class="p-link" @click="onTopbarMenuButtonClick">
			<i class="pi pi-ellipsis-v"></i>
		</button>
		
		<ul :class="topbarItemsClass">
			
			<li v-if="profileMode === 'popup' || horizontal"
				:class="['user-profile', {'active-topmenuitem': activeTopbarItem === 'profile'}]"
				@click="$emit('topbar-item-click',{originalEvent:$event,item:'profile'})">
				<button class="p-link">
				 <img alt="babylon-layout" src="assets/layout/images/avatar.png"/> 
				</button>			

				<transition name="layout-submenu-container">
					<ul class="fadeInDown" v-show="activeTopbarItem === 'profile'">
						<li role="menuitem">
							<button class="p-link">
								<i class="pi pi-user"></i>
								<span>Perfil</span>
							</button>
						</li>
						<li role="menuitem">
							<button class="p-link">
								<i class="pi pi-cog"></i>
								<span>Ajustes</span>
							</button>
						</li>
						<li role="menuitem">
							<button class="p-link">
								<i class="pi pi-envelope"></i>
								<span>Mensajes</span>
							</button>
						</li>
						<li role="menuitem">
							<button class="p-link">
								<i class="pi pi-bell"></i>
								<span>Notificaciones</span>
							</button>
						</li>
					</ul>
				</transition>
			</li>
		</ul>
		<ul :class="topbarItemsClass">
			<li>
			<transition name="layout-menu-container">
			<div class="layout-menu-container" @click="onMenuClick" v-show="tru">
				<div class="layout-menu-wrapper">
					<div class="menu-scroll-content">
						
						<AppMenu :model="menu" :layoutMode="layoutMode" :active="menuActive" :mobileMenuActive="staticMenuMobileActive" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"></AppMenu>
					</div>
				</div>
			</div>
		</transition>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			topbarMenuActive: Boolean,
			activeTopbarItem: String,
			profileMode: String,
			horizontal: Boolean
		},
		methods: {
			onMenuButtonClick(event) {
				this.$emit('menubutton-click', event);
			},
			onTopbarMenuButtonClick(event) {
				this.$emit('topbar-menubutton-click', event);
			},
			goDashboard(){
				window.location = "/#/"
			}
		},
		computed: {
			topbarItemsClass() {
				return ['topbar-menu fadeInDown', {
					'topbar-menu-visible': this.topbarMenuActive
				}];
			}
		}
	}
</script>
