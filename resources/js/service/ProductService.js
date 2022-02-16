import axios from 'axios';

const config = require('./../config');

export default class ProductService {

	getSucursalList() {
		return axios.get(`${config.APP_API_URL}/sucursales`).then(res => res.data );
	}
	getClientsList(){
		return axios.get(`${config.APP_API_URL}/clientes`).then(res => res.data);
	}
}
