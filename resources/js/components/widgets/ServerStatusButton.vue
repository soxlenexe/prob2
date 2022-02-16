<template>
  <button class="btn  btn-sm"
        :class="{'btn-outline-success'
        :isOnline, 'btn-outline-danger'
        :isOffline}" @click="checkState" >
       <span v-if="msg != null">{{msg}}</span>
       <span v-else><i class="pi pi-spin pi-spinner" style="fontSize: 1.1rem; color: #007bff"></i></span>
    </button>
</template>

<script>
import axios from 'axios';
import config from './../../config'
export default {
    props:['url'],
    name: 'ServerStatusButton',
    data(){
        return{
            isOnline:null,
            isOffline:null,
            msg:null
        }
    },
    mounted(){
        this.checkState()
    },
    methods:{
        checkState(){
            console.log('pressed')
            this.isOffline = null;
            this.isOffline = null;
            this.msg = null;
            axios.get(`${config.APP_API_URL}/pingserver/${this.url}`).
                then(res => {
                if (res.data) {
                    this.msg = "Online";
                    this.isOnline = true;
                    this.isOffline=false;
                }else{
                    this.msg = "Offline";
                    this.isOffline=true
                    this.isOnline = false;
                }
            }).catch(res => {

            });
        }
    }

}
</script>

<style>

</style>
