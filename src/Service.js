import axios from "axios"



// const end_point1 = "https://agent-microserv.herokuapp.com/api_agent/";
// const end_point2 = "https://backoffice-microserv.herokuapp.com/api_backoffice/";

const end_point1 = "http://localhost:8081/api_agent/";
const end_point2 = "http://localhost:8083/api_backoffice/";


axios.interceptors.request.use(
    function(config) {
        let id;
        let token;
        if(localStorage.getItem('token')) token = localStorage.getItem('token');
        if(localStorage.getItem('id')) id = localStorage.getItem('id');
        if (token) {
            config.headers["Authorization"] = "Bearer "+ token;
            config.headers["id"] = id;
           
        }
       
        config.headers["Content-Type"] = "application/json";
        config.headers["withCredentials"] = true;

        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

     
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        console.log("401");
        localStorage.clear();
        window.location.href="/";
    }
    return Promise.reject(error);
});



////////////////////////////////////////////////////
////Signin
////////////////////////////////////////////////////
export const login = async(data) => {
    return await axios.post(end_point1+'login',data);
} 
export const loginb = async(data) => {
    return await axios.post(end_point2+'login',data);
} 
export const createT = async(data) => {
    return await axios.post(end_point1+'createTransfer',data);
} 
export const ottp = async(otp,num) => {
    return await axios.post(end_point1+'MultiTransfer/client/otp?otp='+otp+'&phone_number='+num);
} 
export const transferList = async() => {
    return await axios.get(end_point1+'Multitransfers/all');
} 
export const transferListB = async() => {
    return await axios.get(end_point2+'Multitransfers/all');
} 
export const getTransfer = async(data)  => {
    return await axios.get(end_point1+'UniqueTransfer/'+data);
} 
export const block = async(data)  => {
    return await axios.put(end_point2+'UniqueTransfer/bloque/'+data+'?motif=bloquer');
} 
export const unlock = async(data)  => {
    return await axios.put(end_point2+'UniqueTransfer/unlock/'+data+'?motif=debloquer');
} 
export const extourner = async(data,motif)  => {
    return await axios.put(end_point1+'UniqueTransfer/extort/'+data+'?motif='+motif);
} 
export const serve = async(data)  => {
    return await axios.put(end_point1+'UniqueTransfer/serve/'+data);
} 
 export const search = async(data)  => {
     return await axios.get(end_point1+'client/cin/'+data);
 } 
 export const searchB = async(data)  => {
     return await axios.get(end_point1+'client/recipients/'+data);
 } 


