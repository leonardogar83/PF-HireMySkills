
import axios from 'axios'
import{
    GET_CATEGORIES,
    GET_SUB_CATEGORY,
    GET_PROFESSIONALS,
    GET_SERVICES,
    GET_USER,
    GET_USER_BY_ID,
    SEARCH,
    POST_SERVICES,
    POST_CATEGORIES,
    POST_SUB_CATEGORY,
    POST_PROFESSIONALS,
    POST_USER,
    POST_REVIEWS,
    ORDER_BY_RATING,
    ORDER_BY_NAME,
    ORDER_BY_REVIEWS,
    FILTER_BY_PROVINCE,
    DELETE_SERVICE,
    DELETE_PROFILE,
    DELETE_USER,
    ADD_TO_CART,
    DELETE_TO_CART,
    urlCategory,
    urlProfession,
    urlProfessionals,
    urlUsers,
    urlProducts,
    urlReviews,
    urlShoppingcart
} from '../../utils'
import api from '../../api.json'

export function getCategories(){
    return async function (dispatch){
        axios.get
    }
}

export function getProfessionals(){
    return async function(dispatch){
        axios.get(urlProfessionals)
        .then(res=>
            dispatch({type:GET_PROFESSIONALS, payload:res.data}))
    }
}

export function postProfessional(data){
    return async function(dispatch){
        axios.post(urlProfessionals, data)
        .then(res=>
            dispatch({type:POST_PROFESSIONALS, payload:res.data}))
    }
}

export function deleteProfessional(id){
    return async function(dispatch){
        axios.delete(`${urlProfessionals}/${id}`)
        .then(res=>
            dispatch({type:DELETE_PROFILE, payload: res.data}))
    }
}
export function orderByRating(payload){
    return {
        type: ORDER_BY_RATING,
        payload,
    }
}

export function orderByName(payload){
    return {
        type: ORDER_BY_NAME,
        payload,
    }
}
export function orderByReviews(payload){
    return {
        type: ORDER_BY_REVIEWS,
        payload,
    }
}


export function postReviews(message){
    return async function(dispatch){
        axios.post(urlReviews, message)
        .then(res=>
            dispatch({type:POST_REVIEWS, payload:res.data}))
    }
}

export function addToCart(service){
    return async function(dispatch){
        axios.post(urlShoppingcart, service)
        .then(res=>
            dispatch({type:ADD_TO_CART, payload: res.data}))
    }
}

// export function deleteToCart(service){
//     return async function(dispatch){
//         axios.delete(`${urlShoppingcart}/${service}`)
//         .then(res=>
//         dispatch({type:DELETE_TO_CART, payload:service}))
//     }
// }
export function postService(data){
    return async function(dispatch){
        axios.post(urlProducts, data)
        .then(res=>
            dispatch({type:POST_SERVICES, payload:res.data}))
    }
}
export function getUser(){
    return async function(dispatch){
        axios.get(urlUsers)
        .then(res=>
            dispatch({type:GET_USER, payload:res.data}))
    }
}
export function getUserById(id){
    return async function(dispatch){
        axios.get(`${urlUsers}/${id}`)
        .then(res=>
            dispatch({type:GET_USER_BY_ID, payload:res.data}))
    }
}

export function postUser(data){
    return async function(dispatch){
        axios.post(urlUsers, data)
        .then(res=>
            dispatch({type:POST_USER, payload:res.data}))
    }
}
export function deleteUser(id){
    return async function(dispatch){
        axios.delete(`${urlUsers}/${id}`)
        .then(res=>
            dispatch({type:DELETE_USER, payload: res.data}))
    }
}
