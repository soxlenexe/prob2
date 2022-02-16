<template>
    <div class="p-col-12 col-md-4 mt-0">
        <div class="user-card card">
            <div class="user-card-content p-3" style="height:45vh">
                <h3>Venta formas de pago</h3>
                <div >
                    <Chart
                        type="pie"
                        :data="data"
                        :options="options"
                        :width="250"
                        class="chart-custom"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardService from './../service/DashboardService'
export default {
    dashService:null,
    props:['sucursales'],
    data(){
        return{
            data:{},
            values:[],
            options:{
                width: 1000,
                plugins: {
                    legend: {
                        labels: {
                            color: "#495057"
                        }
                    }
                }
            }
        }
    },
    created() {
        this.dashService = new DashboardService();
    },
    mounted() {
        ///console.log((JSON.parse(localStorage.getItem('ult_actualizacion') ).date + 43200000) >= Date.now())
        if (localStorage.getItem('sales_mdp') && (JSON.parse(localStorage.getItem('ult_actualizacion') ).date + 43200000) >= Date.now()) {
            ///
            try {
                this.data = JSON.parse(localStorage.getItem('sales_mdp')).data
            } catch (error) {
                localStorage.removeItem('sales_mdp')
            }

        }else{

        JSON.parse(this.sucursales).forEach(suc => {

            this.dashService.getVentaPorMedios(suc.dns)
                .then(res => {
                this.data = {
                        labels:Object.keys(res.medios),//medios_de_pago,
                        datasets: [
                            {
                                data: Object.values(res.medios),//data_mdp,
                                backgroundColor: [

                                   "#FF6384","#36A2EB","#FFCE56", "#fca456", "#663399",
                                    "#02eb5a",
                                    "#0812b4",
                                    '#fcba03',
                                    '#0324fc',
                                    '#f403fc'

                                ],
                                hoverBackgroundColor: [

                                    "#FF6384","#36A2EB","#FFCE56", "#fca456", "#663399",
                                    "#02eb5a",
                                    "#0812b4",
                                    '#fcba03',
                                    '#0324fc',
                                    '#f403fc'
                                ]
                            }
                        ]
                    }

                localStorage.setItem('sales_mdp', JSON.stringify({data:this.data}))
                }).catch(console.log);//promise

        });//foreach
        }//else

        // let medios_de_pago = Object.keys(res.medios)
        // let data_mdp = []
        // medios_de_pago.forEach((e,index) => {
        //     data_mdp.push(res.medios[e].length)
        // });

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
