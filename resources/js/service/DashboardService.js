import axios from 'axios'
import config from './../config'

export default class DashboardService{
    getVentasDia(sucursal_id){
        return axios.get(`${config.APP_URL}/dashdata/ventasdia`, sucursal_id).then(res => res.data);
    }
    // ------------------------------------

    getVentasTotales(dns){
        return axios.get(`${config.APP_URL}/consolidados/total_ventas/${dns}`).then(res => res.data);
    }
    getVentasTotalesAnterior(dns){
        return axios.get(`${config.APP_URL}/consolidados/total_ventas_anterior/${dns}`).then(res => res.data);
    }

    getVentasPorOperador(dns){
        return axios.get(`${config.APP_URL}/consolidados/venta_operador/${dns}`).then(res => res.data);

    }
    getVentasDia(dns){
        return axios.get(`${config.APP_URL}/consolidados/venta_dia/${dns}`).then(res => res.data);
    }
    getEvolucionVentas(dns){
        return axios.get(`${config.APP_URL}/consolidados/evolucion_ventas/${dns}`).then(res => res.data);
    }

    getVentaPorMedios(dns){
        return axios.get(`${config.APP_URL}/consolidados/formas_de_pago/${dns}`).then(res => res.data);
    }

    getMasVendidos(dns){
        return axios.get(`${config.APP_URL}/consolidados/mas_vendidos/${dns}`).then(res => res.data);
    }

    getVentaHoraria(dns){
        return axios.get(`${config.APP_URL}/consolidados/venta_horaria/${dns}`).then(res => res.data);
    }


}
