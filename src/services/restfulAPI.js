import axios from 'axios'
import Config from '../config'

const Service = {
    detailPatient(params){
        return axios.post(Config.apiURL+'patient/detail', params)
	},
	updatePatient(params){
		return axios.post(Config.apiURL+'patient/update', params)
	},
    registerPatient(params){
        return axios.post(Config.apiURL+'patient/register', params)
    },
    loadlistPatient(params){
        return axios.post(Config.apiURL+'patient/loadlist-patient', params)
    },
    addChildPatient(params){
        return axios.post(Config.apiURL+'patient/add-child-patient',params)
    },
    loadListChildPatient(params){
        return axios.post(Config.apiURL+'patient/load-child-patient',params)
    },
    updateChildPatient(params){
        return axios.post(Config.apiURL+'patient/update-child-patient',params)
    },
    checkUserAccount(params) {
        return axios.post(Config.apiURL+'user-account/check-user', params)
    },
	uploadFile(params) {
		return axios.post('http://localhost:3005/api/uploadFileWithoutLogin?userUID=2cfeebaf-48c5-4f04-8047-55ae3e680da1&fileType=ProfileImage', params);
	},
	getFile(fileUID, size, type){
        return axios.get('http://localhost:3005/api/downloadFileWithoutLogin/'+size+'/'+fileUID,{
            	responseType: 'arraybuffer',
        })
    },
    getListCountry(){
        return axios.get('http://localhost:3005/api/patient/get-listcountry')
    },
    loadlistCompany(params){
        return axios.post(Config.apiURL+'company/loadlist-company', params);
    },
    linkCompany(params){
        return axios.post(Config.apiURL+'company/link-company', params);
    },
    detailCompany(params){
        return axios.post(Config.apiURL+'company/detail-company', params);
    },
    loadChildCompany(params){
        return axios.post(Config.apiURL+'company/load-child', params);
    },
    getHistoryCompany(params){
        return axios.post(Config.apiURL+'company/get-history', params);
    },

}

export default Service