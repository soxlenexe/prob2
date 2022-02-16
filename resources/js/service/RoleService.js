import axios from 'axios'
import config from './../config'

export default class RoleService{

    getNiveles(){
        return axios.get(`${config.APP_URL}/permissions/niveles`).then(res => res.data);
    }
}
