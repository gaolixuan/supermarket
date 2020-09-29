import {request}  from './request.js';


export function getHomeMutidata() {
    return request({
        url:'/home/multidata'
    })
}