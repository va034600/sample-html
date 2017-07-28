import {WebParams} from "../WebParams";
import {WebUrlParams} from "../WebUrlParams";

export default class BaseAPI {
    static post<T>(apiUrl:string, params:WebParams = null){
        let body = params ? params.data : null;
        return this.send<T>(apiUrl, {
            credentials: 'include',
            method: "POST",
            body: body
        })
    }

    static get<T>(apiUrl:string, params:WebUrlParams = null){
        var url = apiUrl;
        if(params){
            url += "?" + params.data;
        }
        return this.send<T>(url, {
            credentials: 'include'
        })
    }

    private static send<T>(apiUrl, config){
        return new Promise<T>((resolve, reject) => {
            fetch(apiUrl, config).then(res => {
                res.json().then(json => {
                    if(res.status >= 400 && res.status < 500){
                        reject(res)
                        return
                    }

                    resolve(json);
                });
            }).catch(e => {
                reject(e)
            });
        });
    }
}
