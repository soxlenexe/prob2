<template>
    <div class="col-md-4">
        <div class="card p-3">
            <h3 class="mb-3">Venta por operador</h3>
        <ul  >
            <li v-for="(operador,index) in valores" :key="index">
                <span class="nombre" v-if="operador.operador!='sin operador'">{{operador.operador}}</span>
                <span class="nombre" v-else>Sin Operador</span>
                <span class="sucursal">({{operador.sucursal}})</span>
                <span class="cantidad">{{operador.total}}</span>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import DashboardService from './../service/DashboardService'
export default {
    props:['sucursales'],
    dashService:null,
    data(){
        return{
            operadores:[],
            colores:["#FF6384","#36A2EB","#FFCE56", "#fca456", "#663399"],
            valores:[]
        }
    },
    created() {
        this.dashService = new DashboardService();
    },
    mounted() {
        if (localStorage.getItem('sales_operator') && (JSON.parse(localStorage.getItem('ult_actualizacion') ).date + 43200000) >= Date.now()) {
            try {
                this.valores = JSON.parse(localStorage.getItem('sales_operator')).data
            } catch (error) {
                localStorage.removeItem('sales_operator')
            }
        }else{
        JSON.parse(this.sucursales).forEach(suc =>{
            this.dashService.getVentasPorOperador(suc.dns)
                .then(res => {
                    res.forEach(element => {
                        if (element.total > 0) {
                           this.valores.push({operador: element.operador,sucursal:suc.sucursal_descripcion, total:parseInt(element.total)})
                        }

                    });
                localStorage.setItem('sales_operator', JSON.stringify({data:this.valores}))
                })//promise
        });//foreach
    }//else
    },
}
</script>


<style lang="scss" scoped>

ul{
    list-style: none;
    padding-top: 10px;
    li{
        padding: 8px 10px;
        border-bottom: 1px solid #FF6384;
        border-right: 2px solid #36A2EB;
        margin-bottom: 4px;
        font-size: 1.1rem;
        -webkit-box-shadow: -12px -11px 9px -11px rgba(0,0,0,0.10);
        box-shadow: -12px -11px 9px -11px rgba(0,0,0,0.10);
    }
}
.nombre{
    margin-right: 1rem;

}
.sucursal{
    font-size: .9em;
    color: #cccccc;
}
.cantidad{
    float: right;
    padding-right: 15px;
}

</style>
