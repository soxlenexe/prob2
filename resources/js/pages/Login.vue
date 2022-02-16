<template>
	<div class="login-view">

		<div class=""></div>
        <Toast />
		<Dialog  header="Digital Crams" v-model:visible="display" :style="{width: '50vw'}">

			<div class="card">

                <div class="card-body">


                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Nombre</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name"  required autocomplete="name" autofocus v-model="newUser.name">


                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-mail</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email"  required autocomplete="email" v-model="newUser.email">


                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Contraseña</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required autocomplete="new-password" v-model="newUser.password">


                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirmar contraseña</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" v-model="newUser.password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button  class="btn btn-primary" @click="register">
                                    Registrarse
                                </button>
                            </div>
                        </div>

            </div>
			</div>
		</Dialog>
 <!-- pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?" -->
	    <div class="cont">

            <div>
                <img src="assets/layout/images/LOGO-FINAL.png" alt="babylon-layout"  class="main-logo" />
            </div>

		    <h1>INGRES0 AL SISTEMA</h1>
			<p>Bienvenido, ingresa tus datos por favor</p>


			<div class="text-wrap">
                <span class=" p-input-icon-right">
				    <InputText placeholder="Usuario"
                        size="30"
                        class="input"
                        v-model="username"
                        :class="{'p-invalid':isInvalid}"
                        @change="isInvalid = false"
                        />
					<i class="pi pi-user"></i>
                </span>
				</div>
			<div class="text-wrap">
                <span class=" p-input-icon-right">
                    <InputText type="password"
                        size="30"
                        class="input"
                        placeholder="Contraseña" v-model="password"
                        :class="{'p-invalid':isInvalid}"
                        @change="isInvalid = false"
                        @keyup.enter="loginAttempt"
                         />
				    <i class="pi pi-lock"></i>
                </span>

			</div>
            <div class="text-wrap">
                <button  @click="loginAttempt" class=" btn login-button">Ingresar</button>
            </div>

				<br><br>
				 <p>No tienes una cuenta?. <span @click="showRegister" class="reg-button"> Regístrate</span><br>
                 <a href="/password/reset" class="forgot-pass">¿Olvidaste tu contraseña?</a>
                 </p>


		</div>

	</div>
</template>

<script>
import axios from 'axios';
const config = require('../config');

	export default {

		data(){
			return{
				display: false,
				newUser:{},
                isInvalid:false,
                username: null,
                password: null,
                csrf: null,
			}
		},
        mounted(){
            this.username = localStorage.username
        },
		methods: {
			loginAttempt(){
				this.csrf = document.head.querySelector('meta[name="csrf-token"]').content;
                localStorage.username = this.username
				axios.post('/vuelogin',{username:this.username, password:this.password,headers: {'x-csrf-token':this.csrf}}).then( res => {
                    console.log(res);
					if (res.data.status == 'success') {
						this.username = null;
						this.password = null;
						this.csrf = null;
						window.location.href = '/'
					}else{
						this.isInvalid = true
                        this.password = ''
                        this.$toast.add({severity:'error', summary: 'Datos incorrectos', detail: 'El usuario o la contraseña son incorrectos.', life:3000})

					}
				}
					).catch(console.log);
			},
			showRegister(){
				this.display = true
			},
			register(){

                this.display = false;
				axios.post(`${config.APP_URL}/register`,this.newUser).then( res => {
				}).then(res => {

                        this.$toast.add({

                        severity:"success",
                        summary:"Has sido registrado.",
                        detail: `Se ha enviado un correo a ${this.newUser.email}. Por favor verifique su email para acceder al sistema.`});
                        setTimeout(()=>{
                            window.location.href = config.APP_URL;
                        }, 5000)

				})
                .catch(res => {
                     if(res.response.data.errors){
                         try {
                             this.$toast.add({severity:"error", summary:"No se pudo registrar",detail: res.response.data.errors.email[0]});
                             return
                         } catch (error) {
                             console.log('pass')
                         }


                    }
                    if (res.response.data.errors){
                        this.$toast.add({severity:"error", summary:"No se pudo registrar",detail: res.response.data.errors.password[0]});
                        return
                    }
                    this.$toast.add({
                        severity:"error",
                        summary:"No se pudo registrar",
                        detail:
                        "El email ingresado no fue cargado previamente al sistema por una instancia superior. Comuniquese con su empleador o en caso de ser administrador comuniquese con DCrams"});
                    this.display=false;







                   });
			}

		}
	}
</script>

<style scoped>
.cont{
    width: 90%;
    margin: auto;
}

.text-wrap{
    width: 75% !important;
    padding: 10px 0px;;
}

/* -------------- */

.main-logo{
    margin-bottom: 30px  !important;
    margin-top: 7% !important;
    width: 30%;
}
.reg-button{
	color: orange;
	cursor: pointer;
}

.login-panel{
    background-color: rgba(0, 0, 0, 0.0);
}
.login-button{
    background-color: orange;
    font-size: 1.5rem;
    padding: 0;
    border-radius: 2px;
    border: 0;
    font-style: italic;
    color: papayawhip;
    width: 24%;
}

.login-button:hover{
    background-color: rgb(255, 159, 42);
}
h1, p{
    color: rgb(236, 236, 236)  !important;
    font-style: italic;
}
h1{
    font-size: 24px  !important;
}
p{
    font-size: 14px;
}
.forgot-pass{
    font-size: .8rem;
    color: rgb(255, 159, 42)
}
@media screen and (min-width: 1500px) {
    .login-button{
        background-color: orange;
        font-size: 1.5rem;
        padding: 0;
        border-radius: 2px;
        border: 0;
        font-style: italic;
        color: papayawhip;
        width: 18%;
    }
    .main-logo{
        margin-bottom: 30px  !important;
        margin-top: 7% !important;
        width: 25%;
    }
}
@media (max-width: 1024px) {
    h1{
        font-size: 20px !important;
    }
    .text-wrap{
        width: 50% !important;
        padding: 5px 0px;;
    }
    .login-button{
        background-color: orange;
        font-size: 1.5rem;
        padding: 5;
        border-radius: 2px;
        border: 0;
        font-style: italic;
        color: papayawhip;
    }
    .main-logo{
        margin-bottom: 30px  !important;
        margin-top: 7% !important;
        width: 25%;
    }
    .input{
        padding: 2px;
    }

}
</style>
