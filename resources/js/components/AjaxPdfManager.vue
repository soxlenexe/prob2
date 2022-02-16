<template>
    <div>
        <br><br><br>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-4 box">
                <div><h3>Generando el reporte PDF</h3> <h5>Esta operación puede tardar varios minutos.</h5><br></div>
               <div class="spinner" v-show="!error"> <ProgressSpinner /></div>
               <div v-show="error" style="color:red"><h3>Hubo un error</h3></div>
               <div class="mensaje"><span >No cierre esta ventana.</span></div>
            </div><br>

        </div>
    </div>
    </div>
</template>

<script>
import config from './../config';
import axios from 'axios';
export default {

    props:['query'],
    data(){
        return{
            error:false
        }
    },
    created(){
        let url = JSON.parse(this.query)
        let desde = url.desde;
        let path = ''
        if (url.filtered) {
            path = `filtered?hasta=${url.hasta}&desde=${desde}&caja=${url.caja}&tipo=${url.tipo}&grupo=${url.grupo}&operador=${url.operador}&medio=${url.medio}&dns=${url.dns}&mode=pdf`
        }else{
            path = `${url.dns}/${url.mode}`

        }
        console.log(`${config.APP_URL}/reports/${url.report}/${path}`)
        axios({
            method: 'GET',
            url:`${config.APP_URL}/reports/${url.report}/${path}`,
            responseType: 'blob',
        })
        .then((response) => {

            let blob = new Blob([response.data], { type: 'application/pdf' })
            let link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = `${JSON.parse(this.query).report}.pdf`
            link.click()
            window.close()
        }).catch(res => this.error = true)
    }
}
</script>

<style lang="scss" scoped>

.spinner{

    margin:auto;
    text-align: center;

}
.mensaje{
    align-self: center;
    margin:auto;
}
.box{
    border: 1px solid orange;
    border-radius: 12px;
    color: #333333;
}

</style>
