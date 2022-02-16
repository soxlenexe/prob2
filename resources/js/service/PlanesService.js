import axios from 'axios';
import config from './../config'

export default class PlanesService{

    savePlan(data){
        return axios.post(`${config.APP_URL}/plans`, data).then(res =>res.data);
    }

    updateField(data){
        return axios.put(`${config.APP_URL}/plans`, data).then(res => res.data)
    }
}
