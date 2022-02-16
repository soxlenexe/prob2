import axios from 'axios';
import config from './../config'

export default class MediosDePagoService {

    getMedios(dns=null){
        return axios.get(`${config.APP_URL}/medios/${dns}`).then(res => res.data);
    }

    storeMedio(data){
        return axios.post(`${config.APP_URL}/medios`, data).then(res => res.data);
    }

    updateMedio(data){
        return axios.put(`${config.APP_URL}/medios`, data).then(res => res.data);
    }

}
