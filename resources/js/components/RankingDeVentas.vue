<template>
    <div class="col-md-4 mt-0" >
        <div class="user-card card">
            <div class="user-card-content p-3" style="height:44vh;margin-top:0;">
                 <h3>Articulos mas vendidos</h3>
                <div >

                     <Chart type="doughnut" :data="chartData" :options="lightOptions" :width="250" />

                </div>
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
            articulos:[],
            names:[],
            articulosSorted:[],
            chartData:{},
            lightOptions:{},
            values:[]
        }
    },
    created() {
        this.dashService = new DashboardService();
    },
    mounted() {

        if (localStorage.getItem('sales_rank') && (JSON.parse(localStorage.getItem('ult_actualizacion') ).date + 43200000) >= Date.now()) {
                this.chartData = JSON.parse(localStorage.getItem('sales_rank')).data
        }else{
        JSON.parse(this.sucursales).forEach(suc => {
            this.dashService.getMasVendidos(suc.dns)
                .then(res => {
                    // console.log(res)
                    // console.log(Object.keys(res.facturas))
                    // console.log(Object.keys(res.remitos))
                    Object.keys(res.facturas).forEach(art => {
                        if (!this.names.includes(art) ) {
                            this.names.push(art)
                            this.articulos.push({nombre: art, cantidad:parseInt(res.facturas[art])})
                        }else{
                            this.articulos.map( (objArt) =>{
                                if (objArt.nombre == art) {
                                    objArt.cantidad += parseInt(res.facturas[art])
                                }
                            })
                        }
                    });
                    Object.keys(res.remitos).forEach(art => {
                        if (!this.names.includes(art) ) {
                            this.names.push(art)
                            this.articulos.push({nombre: art, cantidad:parseInt(res.remitos[art])})
                        }else{
                            this.articulos.map( (objArt) =>{
                                if (objArt.nombre == art) {
                                    objArt.cantidad += parseInt(res.remitos[art])
                                }
                            })
                        }
                    });

                    this.sortArt()

                    if (this.articulosSorted.length < 5) {
                        for (let index = this.articulosSorted.length; index < 5; index++) {
                             this.articulosSorted.push({nombre: 'sin nombre', cantidad:0})
                             this.names.push('Sin datos')
                        }


                    }


                    this.chartData = {
                        labels:this.names.splice(0,5),
                        datasets:[
                            {
                                data:[this.articulosSorted[0].cantidad,this.articulosSorted[1].cantidad,this.articulosSorted[2].cantidad,this.articulosSorted[3].cantidad,this.articulosSorted[4].cantidad],
                                backgroundColor: ["#FF6384","#36A2EB","#FFCE56", "#fca456", "#663399"],
                                hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56", "#fca456", "#663399"]
                            }
                        ]
                    }
                    localStorage.setItem('sales_rank', JSON.stringify({data: this.chartData}))

                })//promise
        });//foreach
        }   //else

    },
    methods: {
        sortArt(){
            this.articulosSorted = []
            this.articulosSorted = this.articulos.sort((a,b)=>{
                return b.cantidad - a.cantidad
            });

        }
    },
}
</script>

<style scoped lang="scss">

.p-col-12 {
    margin-top: 0 !important;
    padding: 0 !important;
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
