import axios from 'axios'
import config from './../config'

export default class TiposFacturaService{

    getTiposFactura(dns = '0'){
        return axios.get(`${config.APP_URL}/tipos_factura/${dns}`).then(res => res.data);
    }
}
