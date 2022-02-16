<template>
    <div class="cont">
        <div class="layout-dashboard">
            <div class="p-grid">
                <div class="p-col-12 p-lg-6 p-xl-3">
                    <div class="overview-box welcome">
                        <span class="overview-title"
                            >¡Bienvenido de vuelta!</span
                        >
                        <div class="overview-numbers ">
                            <h3 class="signature">Digital Crams</h3>
                        </div>
                        <div class="overview-subinfo active">
                            Sucursal
                            <select name="sucursales" id="sucursal_select" @change="cambiarSucursal">
                                <option
                                    v-bind:value="sucursal.id"
                                    v-for="(sucursal, index) in sucursales_j"
                                    :key="index"
                                    >{{ sucursal.sucursal_descripcion }}</option
                                >
                            </select>
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-lg-6 p-xl-3">
                    <div class="overview-box users">
                        <i class="pi pi-wallet icon-max"></i>
                        <span class="overview-title mb-1">Ventas del día</span>
                        <div class="overview-numbers mb-0 mt-0">
                            <h1 class="signature">$ {{total_dia}}</h1>
                        </div>
                        <div class="overview-subinfo">
                          $ total de ventas de hoy
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-lg-6 p-xl-3">
                    <div class="overview-box ticket">
                        <i class="pi pi-wallet icon-max"></i>
                        <span class="overview-title mb-1">Ticket promedio</span>
                        <div class="overview-numbers mb-0 mt-0">
                            <h1 class="signature">$ {{ticket_promedio}}</h1>
                        </div>
                        <div class="overview-subinfo">
                            $ promedio de los tickets de hoy
                        </div>
                    </div>
                </div>
                <div class="p-col-12 p-lg-6 p-xl-3">
                    <div class="overview-box comprobantes">
                        <i class="pi pi-wallet icon-max"></i>
                        <span class="overview-title mb-1"
                            >Cantidad de comprobantes</span
                        >
                        <div class="overview-numbers mb-0 mt-0">
                            <h1 class="signature">{{cantidad_comprobantes}}</h1>
                        </div>
                        <div class="overview-subinfo">
                           Suma de remitos y facturas
                        </div>
                    </div>
                </div>
<!-- **********************************************************************  -->
                <div class="col-sm-12 col-md-8">
                    <div class="chart-wrapper">
                        <div class="left-side">
                            <h4 class="text-dark mb-4">Evolución de ventas</h4>
                            <p>
                                Este mes <br />
                                $ {{total_este_mes}}
                            </p>
                            <p><span>+{{diferencia_meses}}%</span> del periodo anterior</p>
                            <p>
                                Mes anterior <br />
                                $ {{total_mes_anterior}}
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
                <!-- ------------------- -->
                <div class="col-12 col-md-4">
                    <div class="chart-wrapper-dona">
                        <h4 class="text-dark mb-4">Ventas del dia</h4>

                        <div>
                            <Chart
                                type="doughnut"
                                :data="chartDataDona"
                                :options="lightOptions"
                                class="chart-custom"
                            />
                        </div>
                    </div>
                </div>
<!-- ---------------Grafico barra horizontal------------------------------------------------------------------------- -->

                <div class="p-col-12 col-md-8 mt-0">
                    <div class="user-card card">
                        <div class="user-card-content p-3">
                            <h3>Articulos mas vendidos</h3>
                            <div >
                                <Chart
                                    type="bar"
                                    :data="chartDataRanking"
                                    :options="lightOptionRanking"
                                    class="chart-custom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ---------------Grafico pie------------------------------------------------------------------------- -->
                <div class="p-col-12 col-md-4 mt-0">
                    <div class="user-card card">
                        <div class="user-card-content p-3" style="height:45vh">
                            <h3>Venta formas de pago</h3>
                            <div >
                                <Chart
                                    type="pie"
                                    :data="chartDataPie"
                                    :options="lightOptionsPie"
                                    class="chart-custom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventService from "../service/EventService";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DashboardService from './../service/DashboardService'

export default {
    props: ["sucursales"],
    dashService:null,
    data() {
        return {
            total_dia:0,
            chartDataDona:{},
            cantidad_comprobantes:0,
            ticket_promedio:0,
            sucursales_j: [],
            chartDataPie: {},
            lightOptionsPie:{},
            chartDataRanking:{},
            lightOptionRanking:{},
            chartData:{},
            total_este_mes:0,
            total_mes_anterior:0,
            diferencia_meses:0.0,
            //------------------------------------------
           lightOptions: {
                width: 1000,
                plugins: {
                    legend: {
                        labels: {
                            color: "#495057"
                        }
                    }
                }
            },
            chartOptions: {
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
                                labelString: "Pesos en miles"
                            }
                        }
                    ]
                }
            },
            menuItems: [
                {
                    label: "Save",
                    icon: "pi pi-check"
                },
                {
                    label: "Update",
                    icon: "pi pi-refresh"
                },
                {
                    label: "Delete",
                    icon: "pi pi-trash"
                }
            ],
            tasksCheckbox: [],
            products: null,
            selectedProduct: null,
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultDate: "2023-01-12",
                header: {
                    left: "prev,next",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                },
                editable: true
            },
            events: null
        };
    },
    eventService: null,
    created() {
        this.eventService = new EventService();
        this.dashService = new DashboardService();

    },
    mounted() {
        this.eventService.getEvents().then(data => (this.events = data));
        this.sucursales_j = JSON.parse(this.sucursales);
        this.dashService.getVentasDia(3).then(res => {
            //seis  meses
            let total_months = []
            res.six_months_f.forEach((element, index) => {
                total_months.push({mes:element.month, total:parseInt(element.mensual) + parseInt(res.six_months_r[index].mensual)})
            });
            let total_months_value = []
            total_months.forEach(e=>{
                total_months_value.push(e.total/1000)
            })

            //month labels
            let month_labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio" , "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
            this.chartData= {
                labels: month_labels,
                datasets: [
                    {
                        label: "Ventas",
                        data:total_months_value,// [15787,15488,12548,15487,9485,11054,25988,26999,18958,17598,14895,21054],
                        backgroundColor: ["rgba(195, 20, 50,0.1)"],
                        borderColor: ["#c31432"],
                        borderWidth: 1,
                        fill: false
                    }
                ]
            }


            //----------
            let sortable = [];
            for (let product in res.ranking) {
                sortable.push([product, res.ranking[product]]);
            }

            sortable.sort(function(a, b) {
                return a[1] - b[1];
            });
            let rawDataRanking = sortable.slice(-5).reverse()
            let rankingLabels = []
            let rankingValues = []
            rawDataRanking.forEach(e =>{
                rankingLabels.push(e[0])
                rankingValues.push(e[1])
            })
            rankingValues.push(0)

            let dataRanking = {
                labels: rankingLabels,
                datasets:[
                    {
                        label:'Cantidad',
                        backgroundColor: '#42A5F5',
                        data: rankingValues
                    }
                ]
            }

            let total = 0
            let comprobantes = res.facturas.concat(res.remitos)
        comprobantes.forEach( e=> {
            if (e.pago != null) {
                total += parseFloat(e.pago)
            }
            if (e.Total  != null) {
                total += parseFloat(e.Total)
            }

        });
        this.total_dia = parseInt(total)
        this.cantidad_comprobantes = comprobantes.length
        this.ticket_promedio = parseInt(this.total_dia / this.cantidad_comprobantes)
        //******** CHART DONUT **********/
            this.chartDataDona= {
                labels: ["Facturas", "Remitos"],
                datasets: [
                    {
                        data: [res.facturas.length,res.remitos.length],
                        backgroundColor: ["#f0724a", "#80214b"],
                        hoverBackgroundColor: ["#f0724a", "#80214b"]
                    }
                ]
            }

        //*********  CHART PIE*/

        let medios_de_pago = Object.keys(res.medios)
        let data_mdp = []
        medios_de_pago.forEach((e,index) => {
            data_mdp.push(res.medios[e].length)
        });
        this.chartDataPie = {

            labels: medios_de_pago,
                datasets: [
                    {
                        data: data_mdp,
                        backgroundColor: [
                            "#f0724a",
                            "#80214b",
                            "#FFA726",
                            "#0d7be1",
                            "#02eb5a",
                            "#0812b4"

                        ],
                        hoverBackgroundColor: [
                            "#f0724a",
                            "#80214b",
                            "#FFB74D",
                            "#0d7be1",
                            "#02eb5a",
                            "#0812b4"
                        ]
                    }
                ]
            },
            this.lightOptionsPie= {
                width:1000,
                plugins: {
                    legend: {
                        labels: {
                            color: "#495057"
                        }
                    }
                }
            },
            this.chartDataRanking = dataRanking,
            this.lightOptionRanking={
                indexAxis: 'y'
            }

     ///****************************** */

    });
    },
    methods: {
        cambiarSucursal(e){
            console.log(e.target.value)
        }
    }
};
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
