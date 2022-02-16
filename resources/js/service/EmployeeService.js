import axios from 'axios';

const config = require('../config');

export default class EmployeeService{


    storeEmployee(data){
        return axios.post(`${config.APP_URL}/employee`, data).then(res => res.data);
    }
    editEmployee(data){

        return axios.put(`${config.APP_URL}/employee`, data).then(res => res.data);
    }

}
