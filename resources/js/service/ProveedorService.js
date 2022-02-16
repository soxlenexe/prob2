import axios from 'axios';
import config from './../config';

export default class ProveederService{

    getProveedores(dns = null){
        return axios.get(`${config.APP_URL}/proveedores/${dns}`).then(res => res.data);
    }

    getProveedoresList(dns = null){
        return axios.get(`${config.APP_URL}/proveedores/list/get/${dns}`).then(res => res.data);
    }

    storeNewProveedor(datos){
        return axios.post(`${config.APP_URL}/abm/proveedores/store`, datos).then(res => res.data);
    }

    updateProveedor(data){
        return axios.put(`${config.APP_URL}/abm/proveedores`, data).then(res => res.data);
    }

    getRespIva(){
        return axios.get(`${config.APP_URL}/service/resp_iva`).then(res => res.data);
    }
}
