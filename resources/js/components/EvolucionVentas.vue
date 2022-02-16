<template>
    <div class="col-12 col-md-8">
        <div class="chart-wrapper">
            <div class="left-side">
                <h4 class="text-dark mb-4">Evolución de ventas</h4>
                <p>
                    Este mes <br />
                    $ {{parseInt(ventas_mes)}}
                </p>
                <p>
                    <span>{{porcentaje}}%</span> del periodo anterior</p>
                <p>
                    Mes anterior <br />
                    $ {{parseInt(ventas_mes_anterior)}}
                </p>
            </div>
            <div class="right-side">
                <Chart
                    type="line"
                    :data="chartData"
                    :options="chartOptions"
                />
            </div>
        </div>
    </div>
</template>

<script>
import DashboardService from './../service/DashboardService'
export default {
    props:['ventas_mes', 'ventas_mes_anterior', 'labels', 'sucursales'],
    dashService:null,
    data(){
        return{
            chartData: [],
            chartOptions: [],
            total_mes_anterior: 0,
            total_este_mes:0,
            diferencia_meses:0,
            months:[],
            month_values:[],
            porcentaje:0,
            memmory:null
        }
    },
    created() {
        this.dashService = new DashboardService();
    },
    mounted() {

        if (localStorage.getItem('sales_evolution') && (JSON.parse(localStorage.getItem('ult_actualizacion') ).date + 43200000) >= Date.now()) {
            try {
                this.memmory = JSON.parse(localStorage.getItem('sales_evolution'))
                this.chartOptions= {
                    responsive: true,
                    hover: {
                        mode: "index"
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Meses"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Pesos"
                                }
                            }
                        ]
                    }
                }

                this.chartData= {
                    labels: this.memmory.months,
                    datasets: [
                        {
                            label: "Ventas",
                            data:this.memmory.values,//total_months_value
                            backgroundColor: ["rgba(195, 20, 50,0.1)"],
                            borderColor: ["#c31432"],
                            borderWidth: 1,
                            fill: false
                        }
                    ]
                };

            } catch (e) {
                localStorage.removeItem('sales_evolution')
            }

        }else{


        JSON.parse(this.sucursales).forEach(sucursal => {
            this.dashService.getEvolucionVentas(sucursal.dns)
                .then(res => {
                    let [value_r, value_f ]= [null,null];
                    Object.keys(res.evolucion_facturas).forEach((key, index) => {
                        if (! this.months.includes(key)) {
                            this.months.push(key)
                        }


                        if (res.evolucion_remitos[key] == undefined) {
                            value_r = 0;
                        }else{
                            value_r = res.evolucion_remitos[key]
                        }

                        if (res.evolucion_facturas[key] == undefined) {

                        } else {
                            value_f = res.evolucion_facturas[key]
                        }

                        if (this.month_values[index]) {
                            this.month_values[index] += parseInt(value_f + value_r)

                        }else{
                            this.month_values[index] = parseInt(value_f + value_r)

                        }
                    });

                this.chartOptions= {
                    responsive: true,
                    hover: {
                        mode: "index"
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Meses"
                                }
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Pesos"
                                }
                            }
                        ]
                    }
                }

                this.chartData= {
                    labels: this.months,
                    datasets: [
                        {
                            label: "Ventas",
                            data:this.month_values,//total_months_value
                            backgroundColor: ["rgba(195, 20, 50,0.1)"],
                            borderColor: ["#c31432"],
                            borderWidth: 1,
                            fill: false
                        }
                    ]
                };
                this.porcentaje = (100 / (this.ventas_mes_anterior / this.ventas_mes) - 100).toFixed(2)
                if (isNaN(this.porcentaje) ) {
                    this.porcentaje = 0
                }
                localStorage.setItem('sales_evolution', JSON.stringify({months:this.months, values:this.month_values, date: Date.now()}))
            })//promise
        });//foreach
            localStorage.removeItem('ult_actualizacion')
            localStorage.setItem('ult_actualizacion', JSON.stringify({date: Date.now()}))
        //console.log(this.memmory)
        }//else
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
