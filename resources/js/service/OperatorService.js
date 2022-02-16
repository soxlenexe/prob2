import axios from 'axios';

const config = require('./../config');

export default class OperatorService{

    getOperadores(){
        return axios.get(`${config.APP_URL}/operadores`).then(res => res.data);
    }
    getOperadoresSucursal(sucursal){
        return axios.get(`${config.APP_URL}/operadores/${sucursal}`).then(res => res.data);
    }
    getOperadoresDns(dns = '0'){
        return axios.get(`${config.APP_URL}/operadores/dns/${dns}`).then(res => res.data);
    }
}
