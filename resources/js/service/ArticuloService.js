import axios from 'axios';
import config from './../config';

export default class ArticuloService{

    updateArticulo(data){
        return axios.put(`${config.APP_URL}/abm/articulos/`, data).then(res => res.data);
    }

    getMaxId(){
        return axios.get(`${config.APP_URL}/service/articulos/max_id`).then(res => res.data);
    }

    getMarcas(){
        return axios.get(`${config.APP_URL}/service/articulos/marcas`).then(res => res.data);
    }

    storeArticulo(data){
        return axios.post(`${config.APP_URL}/abm/articulos`, data). then(res => res.data);
    }

    getTiposIva(dns = null){
        return axios.get(`${config.APP_URL}/service/ivas/${dns}`).then(res => res.data);
    }


    getPresets(id){
        return axios.get(`${config.APP_URL}/service/get_presets/${id}`).then(res  => res.data);
    }

    // storePreset(id,data){
    //     return axios.post(`${config.APP_URL}/service/get_presets/${id}`,data).then(res => res.data);
    // }

    updatePreset(id,data){
        return axios.put(`${config.APP_URL}/service/get_presets/${id}`,data).then(res => res.data);
    }

    //acciones masivas

    masiveActionLista(data){
        return axios.post(`${config.APP_URL}/massive/lista`,data).then(res => res.data);
    }
    masiveActionListaFiltered(data){
        return axios.post(`${config.APP_URL}/massive/lista/filtered`,data).then(res => res.data);
    }

    getArticulosCount(dns = null){
        return axios.get(`${config.APP_URL}/massive/count/${dns}`).then(res  => res.data);
    }

    getArticulosCountFilter(dns = null, data){
        return axios.post(`${config.APP_URL}/massive/count/filter/${dns}`, data).then(res  => res.data);
    }
    massiveRounded(data){
        return axios.post(`${config.APP_URL}/massive/round`, data).then(res  => res.data);
    }

}
