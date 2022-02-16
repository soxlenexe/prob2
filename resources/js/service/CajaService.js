import axios from 'axios'
import config from './../config'

export default class CajaService{

    getCajas(dns = '0'){
        return axios.get(`${config.APP_URL}/cajas/${dns}`).then(res => res.data);
    }
}
