<template>
      <div class="p-col-12 col-md-8 mt-0">
        <div class="user-card card">
            <div class="user-card-content p-3" style="height:45vh">

            <h3>Venta por horas</h3>
            <Chart type="bar" :option="options" :data="dataChart" :width="800" :height="250"/>
        </div>
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
            dataChart:{},
            options:[],
            horas:[],
            datos:[]
        }
    },
    created() {
        this.dashService = new DashboardService();
    },
    mounted() {
        if (localStorage.getItem('sales_hours') && (JSON.parse(localStorage.getItem('ult_actualizacion') ).date + 43200000) >= Date.now()) {
            try {
                this.dataChart = JSON.parse(localStorage.getItem('sales_hours')).data
            } catch (error) {
                localStorage.removeItem('sales_hours')
            }
        }else{
        JSON.parse(this.sucursales).forEach(suc => {
            this.dashService.getVentaHoraria(suc.dns)
                .then(res => {
                    Object.keys(res.ventas_facturas).forEach(hora => {
                        if (!this.horas.includes(hora) ) {
                            this.horas.push(hora)
                            this.datos.push({hora: hora, valor:res.ventas_facturas[hora]})
                        }else{
                            this.datos.map( (objArt) =>{
                                if (objArt.hora == hora) {
                                    objArt.valor += res.ventas_facturas[hora]
                                }
                            })
                        }
                    });
                    Object.keys(res.ventas_remitos).forEach(hora => {
                        if (!this.horas.includes(hora) ) {
                            this.horas.push(hora)
                            this.datos.push({hora: hora, valor:res.ventas_remitos[hora]})
                        }else{
                            this.datos.map( (objArt) =>{
                                if (objArt.hora == hora) {
                                    objArt.valor += res.ventas_remitos[hora]
                                }
                            })
                        }
                    });
                    console.log(res)

                    this.displayData()
                    localStorage.setItem('sales_hours', JSON.stringify({data: this.dataChart}))
                })//promise
        });//foreach
      }//else
    },
    methods: {
        displayData(){
            let dataLabels = []
            let dataValues = [];
            this.datos.forEach(element => {
                dataLabels.push(element.hora)
                dataValues.push(parseInt(element.valor))
            });
            this.dataChart = {

                labels: dataLabels,
                datasets:[
                    {
                        label:'Ventas',
                        backgroundColor: '#42A5F5',
                        data: dataValues
                    }
                    ]
            }

        }
    },
}
</script>
<style scoped lang="scss">
.cont {
    width: 96%;
    margin: auto;
}
.p-col-12 {
    margin-top: 1em !important;
}
.signature {
    margin: 0;
}
.welcome {
    background: rgb(195, 20, 50); /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to top left,
        #124472,
        #ed3655
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to top left,
        #171272,
        #ed3655
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.comprobantes {
    background-color: #80214b;
}
.ticket {
    background-color: #f0724a;
}
.icon-max {
    font-size: 1.4em;
    margin-right: 5px;
}
.overview-subinfo {
    font-size: 1.2rem !important;
    padding-top: 4px !important;
    margin-top: 3.5px !important;
    min-height: 1.2rem !important;
}

.chart-wrapper {
    background-color: #fff;
    padding: 0.5em;
    height: 60vh;
}
.chart-wrapper-dona {
    background-color: #fff;
    padding: 1em;
    height: 60vh;
}
.chart-custom {
    margin-top: 3em;
}

.left-side,
.right-side {
    display: inline-block;
    padding: 0.9em;
}
.left-side {
    width: 24%;
    background-color: #fff;
    margin-right: 1em;
    vertical-align: top;
    color: rgb(100, 100, 100);
    p {
        font-size: 1.1em;
        margin-top: 8px;
        display: block;
        padding-top: 8px;

        span {
            background-color: rgb(195, 20, 50);
            color: #fff;
            padding: 12px 2px 2px 2px;
        }
    }
}
.left-side p {
}
.right-side {
    width: 74%;
    background-color: #fff;
}
.height-400 {
    height: 32.5vh !important;
}
#sucursal_select {
    background-color: #691574;
    color: #fff;
}
#sucursal_select:focus {
    border: 0;
    box-shadow: none;
}
#sucursal_select:focus-visible option {
    border: 0;
    box-shadow: none;
}
.product-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.3px;

    &.status-instock {
        background: #c8e6c9;
        color: #256029;
    }

    &.status-outofstock {
        background: #ffcdd2;
        color: #c63737;
    }

    &.status-lowstock {
        background: #feedaf;
        color: #8a5340;
    }
}

@media   (max-width:1500px){
    .chart-wrapper {
        background-color: #fff;
        padding: 0.5em;
        height: 43vh;
    }
    .chart-wrapper-dona {
        background-color: #fff;
        padding: 1em;
        height: 43vh;
    }
}

@media screen and (max-width:1368px){
    .right-side {
        width: 72%;
        background-color: rgb(255, 255, 255);
    }
    canvas{
        height: 220px;
    }
    .chart-wrapper, .chart-wrapper-dona, .user-card{
        height: 320px;
    }
    .chart-custom {
        width: 76%;
    }
}

@media screen and (max-width: 960px) {
    ::v-deep(.fc-header-toolbar) {
        display: flex;
        flex-wrap: wrap;
    }
}
@media screen and (max-width:640px){
    .right-side {
        width: 72%;
        background-color: rgb(255, 255, 255);
    }
    canvas{
        height: 220px;
    }
    .chart-wrapper, .chart-wrapper-dona, .user-card{
        height: 370px;
    }
}

</style>
