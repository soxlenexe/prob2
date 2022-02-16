<template>
    <span>
        <Toast position="bottom-right"></Toast>
        <InputSwitch v-model="checked" @change="setPermission"/>
    </span>
</template>

<script>
import NivelesService from './../../service/NivelesService'
export default {

    props:['usuarios', 'current', 'permission'],
    nivelesService:null,
    data(){
        return{
            checked:false
        }
    },
    created() {
        this.nivelesService = new NivelesService();
        this.evaluate()
    },
    methods: {
        evaluate(){
            try {
                if (this.usuarios.includes(this.current)) {
                    this.checked = true
                }
            } catch (error) {

            }

        },
        setPermission(){
            let new_usuarios = '';
            if (this.checked) {
                new_usuarios = this.usuarios+this.current
                console.log('se activa', new_usuarios)
            }else{
                new_usuarios = this.usuarios.replace(this.current, '')
                console.log('se desactiva', new_usuarios)
            }

            //console.log(this.current, this.usuarios, this.permission)
            this.nivelesService.setPermission({new_usuarios, permiso: this.permission})
                .then(res => console.log(res));
        }
    },
}
</script>
