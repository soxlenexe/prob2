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
                        <div class="overview-subinfo" @click="actualizar" style="cursor:pointer">
                            {{ company }}
                        </div>
                        <!-- <div class="overview-subinfo active">
                            Sucursal
                            <select name="sucursales" id="sucursal_select" @change="cambiarSucursal">
                                <option
                                    v-bind:value="sucursal.id"
                                    v-for="(sucursal, index) in sucursales_j"
                                    :key="index"
                                    >{{ sucursal.sucursal_descripcion }}</option
                                >
                            </select>
                        </div> -->
                    </div>
                </div>
                <div class="p-col-12 p-lg-6 p-xl-3">
                    <div class="overview-box users">
                        <i class="pi pi-wallet icon-max"></i>
                        <span class="overview-title mb-1">Ventas del día</span>
                        <div class="overview-numbers mb-0 mt-0">
                            <h1 class="signature">
                                $ {{ parseInt(ventas_del_dia) }}
                            </h1>
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
                            <h1 class="signature">
                                $ {{ parseInt(ticket_promedio) }}
                            </h1>
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
                            <h1 class="signature">
                                {{ cantidad_comprobantes }}
                            </h1>
                        </div>
                        <div class="overview-subinfo">
                            Suma de remitos y facturas
                        </div>
                    </div>
                </div>
            </div>
            <!-- //-------------------- -->
            <div class="row">
                <evolucion-ventas
                    :ventas_mes="total_ventas"
                    :ventas_mes_anterior="total_ventas_anterior"
                    :labels="months"
                    :sucursales="sucursales"
                    :key="key"
                />
                <!-- ranking -->
                <ranking-de-ventas :sucursales="sucursales" :key="key"/>
                <!-- ---------- -->
                <medios-de-pago-chart :sucursales="sucursales" :key="key" />
                <!-- horaria -->
                <venta-horaria :sucursales="sucursales" :key="key" />

                <!-- operador -->

                <venta-por-operador :sucursales="sucursales" :key="key" />
            </div>
        </div>

    </div>
</template>
<script>
import EvolucionVentas from "../components/EvolucionVentas.vue";
import MediosDePagoChart from "../components/MediosPagoChart.vue";
import RankingDeVentas from "../components/RankingDeVentas.vue";
import VentaHoraria from "../components/VentaHoraria.vue";
import VentaPorOperador from "../components/VentaPorOperador.vue";
import DashboardService from "./../service/DashboardService";
export default {
    components: {
        EvolucionVentas,
        MediosDePagoChart,
        RankingDeVentas,
        VentaHoraria,
        VentaPorOperador
    },
    props: ["sucursales", "company"],
    dashService: null,

    data() {
        return {
            //tarjetas
            ventas_del_dia: 0,
            cantidad_comprobantes: 0,
            ticket_promedio: 0,
            //
            months: [],
            total_ventas: 0,
            total_ventas_anterior: 0,
            ventas_operadores: [{ operador: "Sin operador", total: 0 }],
            key:0,
            //dialogs

        };
    },
    created() {
        this.dashService = new DashboardService();
        if (!localStorage.getItem('ult_actualizacion')) {
            localStorage.setItem('ult_actualizacion', JSON.stringify({date: Date.now()}))

        //console.log(this.sucursales, this.company)
        }
    },
    mounted() {

        //this.checkBufferedData();
        JSON.parse(this.sucursales).forEach(sucursal => {
            //VENTAS POR OPERADOR
            this.dashService.getVentasPorOperador(sucursal.dns).then(res => {
                res.forEach(suc => {
                    if (suc.operador == "sin operador") {
                        this.ventas_operadores[0].total += parseInt(suc.total);
                    } else {
                        this.ventas_operadores.push(suc);
                    }
                });
            });
            //VENTAS TOTALIZADAS mes
            this.dashService.getVentasTotales(sucursal.dns).then(res => {
                // console.log('ventas_totales', res)
                this.total_ventas += res.total_ventas;
            });
            this.dashService
                .getVentasTotalesAnterior(sucursal.dns)
                .then(res => {
                   // console.log('mes_anterior',res)
                    this.total_ventas_anterior += res.total_ventas_anterior;
                });

            this.dashService.getVentasDia(sucursal.dns).then(res => {
                //console.log(res)
                this.cantidad_comprobantes += res.cant_comprobantes;
                this.ventas_del_dia += res.ventas_dia;
                if (this.ventas_del_dia > 0) {
                    this.ticket_promedio =
                        this.ventas_del_dia / this.cantidad_comprobantes;
                } else {
                    this.ticket_promedio = 0;
                }
            });
        }); //foreach
    },
    methods: {
        checkBufferedData() {
            if (localStorage.getItem("dashdata")) {
                //console.log("hay datos")
            } else {
                localStorage.setItem(
                    "dashdata",
                    JSON.stringify({ date: Date.now() })
                );
            }
        },
        actualizar(){
            localStorage.removeItem('sales_rank')
            localStorage.removeItem('sales_evolution')
            localStorage.removeItem('sales_hours')
            localStorage.removeItem('sales_mdp')
            localStorage.removeItem('sales_operator')
            this.key +=1
        }
    }
};
</script>

<style scoped lang="scss">
.row {
    width: 100%;
}
.cont {
    width: 96%;
    margin: auto;
    background-color: #fff;
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

@media (max-width: 1500px) {
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

@media screen and (max-width: 1368px) {
    .right-side {
        width: 72%;
        background-color: rgb(255, 255, 255);
    }
    canvas {
        height: 220px;
    }
    .chart-wrapper,
    .chart-wrapper-dona,
    .user-card {
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
@media screen and (max-width: 640px) {
    .right-side {
        width: 72%;
        background-color: rgb(255, 255, 255);
    }
    canvas {
        height: 220px;
    }
    .chart-wrapper,
    .chart-wrapper-dona,
    .user-card {
        height: 370px;
    }
}
</style>
