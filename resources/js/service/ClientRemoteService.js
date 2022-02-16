
import axios from 'axios';
const config = require('../config');

export default class ClientRemoteService{

    // getClientsList(){
	// 	return axios.get(`${config.APP_API_URL}/clientes`).then(res => res.data);
	// }
	// storeClient(data){
	// 	return axios.post(`${config.APP_URL}/clientes`, data).then(res => res.data);
	// }
    // editClient(data){

    //     return axios.put(`${config.APP_URL}/clientes`, data).then(res => res.data);

    // }
    // setClientStatusActive(id){
    //     return axios.put(`${config.APP_URL}/clientes/onstatus/${id}`).then(res => res.data);
    // }
    // setClientStatusInactive(id){
    //     return axios.put(`${config.APP_URL}/clientes/offstatus/${id}`).then(res => res.data);
    // }
    // getPlansList(){
    //     return axios.get(`${config.APP_URL}/clientes/plans`).then(res => res.data);
    // }

    updateField(data){
        return axios.put(`${config.APP_URL}/clientes/remoto/field`, data).then(res => res.data);
    }
    getClientList(dns = null){
        return axios.get(`${config.APP_URL}/clientes/remoto/list/${dns}`).then(res => res.data);
    }

}
