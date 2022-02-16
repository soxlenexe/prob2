import axios from 'axios';

const config = require('./../config');

export default class SucursalesService{

    getSucursalList() {

		return axios.get(`${config.APP_URL}/sucursales/`).then(res => res.data );
	}

	storeSucursal(data){
		return axios.post(`${config.APP_URL}/sucursales/ajax`,data).then(res => res.data);
	}

    setSucursalStatusActive(sucursal_id){
        return axios.put(`${config.APP_URL}/sucursales/onstatus/${sucursal_id}`).then(res => res.data);
    }

    setSucursaltStatusInactive(sucursal_id){
        return axios.put(`${config.APP_URL}/sucursales/offstatus/${sucursal_id}`).then(res => res.data);
    }

    storeSucursalWeb(data){
        return axios.post(`${config.APP_URL}/sucursales`,data).then(res => res.data);
    }

    getSucursalesNamesbyClient(id){
        return axios.get(`${config.APP_URL}/sucursales/get_names_by_client/${id}`).then(res =>res.data);
    }

    //edit sucursal

    editSucursal(data, id){
        return axios.put(`${config.APP_URL}/sucursales/${id}`, data).then(res => res.data);
    }
}
