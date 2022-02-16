import axios from 'axios';

const config = require('./../config');

export default class NivelesService{

    getNiveles(dns = null){
        return axios.get(`${config.APP_URL}/niveles/get/${dns}`).then(res => res.data);
    }

    updateNivel(data){
        return axios.put(`${config.APP_URL}/niveles`, data).then(res => res.data);
    }

    getPermisos(lvl){
        return axios.get(`${config.APP_URL}/niveles/${lvl}`).then(res => res.data);
    }

    setPermission(data){
        return axios.put(`${config.APP_URL}/niveles/permission`, data).then(res => res.data);
    }

}
