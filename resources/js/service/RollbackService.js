import axios from 'axios';
import config from './../config';

export default class RollbackService{
    undoEvent(){
        return axios.post(`${config.APP_URL}/rollback/undo`, {}).then(res => res.data);
    }
}
