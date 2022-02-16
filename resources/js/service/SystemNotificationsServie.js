import axios from 'axios'
import config from './../config'

export default class SystemNotificationsService{

    getNotifications(id){
        return axios.get(`${config.APP_URL}/system/alert/list/${id}`).then(res => res.data);
    }

    updateNotificationStatus(id){
        return axios.put(`${config.APP_URL}/system/alert/update/${id}`).then(res => res.data);
    }
}
