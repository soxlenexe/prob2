import axios from 'axios';
import config from './../config';

export default class MarcaService{

    getMarcas(dns){
        return axios.get(`${config.APP_URL}/service/articulos/marcas/${dns}`).then(res => res.data);
    }

    storeMarca(data, dns){
        data.dns = dns;
        return axios.post(`${config.APP_URL}/marcas`, data).then(res => res.data);
    }

    updateField(data, dns){
        data.dns = dns;
        return axios.put(`${config.APP_URL}/marcas`, data).then(res => res.data);
    }

}
