import axios from 'axios';
import config from './../config';

export default class BackupService{

    articulosBackup(dns){
        return axios.get(`${config.APP_URL}/articulos/backup/${dns}`).then(res => res.data);
    }

    getArticulosBackups(dns){
        return axios.get(`${config.APP_URL}/articulos/backup/available/${dns}`).then(res => res.data);
    }

    restore(data){
        return axios.post(`${config.APP_URL}/articulos/backup/restore`, data).then(res => res.data);
    }
}
