import axios from 'axios';

const config = require('./../config');

export default class GrupoService{

    getGroupList(dns = ''){
        return axios.get(`${config.APP_URL}/grupos/${dns}`).then(res => res.data);
    }

    updateGroup(data){
        return axios.put(`${config.APP_URL}/abm/grupos`,{ data}).then(res =>res.data);
    }

    storeGroup(data,dns){
        data.dns = dns;
        return axios.post(`${config.APP_URL}/abm/grupos`, data).then(res => res.data);

    }
}
