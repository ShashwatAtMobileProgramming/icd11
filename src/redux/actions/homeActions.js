import { GET_TOKEN } from "../../config/urls";
import { apiPost,apiGet } from "../../utils/Utils";

export function mainlistingdiseases(){
    return new Promise((resolve,reject)=>{
        apiPost(GET_TOKEN,data).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
        })
}