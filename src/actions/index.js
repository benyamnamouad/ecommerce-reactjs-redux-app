import axios from 'axios';
import fetch from 'cross-fetch'
import Favorite from "../views/Favorite";


export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_BANNERS = 'FETCH_BANNERS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_SAVED_PRODUCTS = 'FETCH_SAVED_PRODUCTS';
export const FETCH_CART_LIST='FETCH_CART_LIST';
export const FETCH_CART_LIST_COUNT = 'FETCH_CART_LIST_COUNT';
export const FETCH_ORDERS='FETCH_ORDERS';
export const FETCH_INVOICES='FETCH_INVOICES';


//const ROOT_URL='http://192.168.1.39/b2b_ecom/b2b-api/index.php/api/';
// const ROOT_URL='http://192.168.1.200:8000/api/';
const ROOT_URL='http://127.0.0.1:8000/api/';

export const token ='r2sshsFnIJPYm6fvzMGlD3DxBt_NsOYg';




export function fetchProducts () {



    return function(dispatch)
    {

        // const api = axios.create({
        //     mode: 'no-cors',
        //     credentials:'include',
        //     redirect: 'follow',
        //     headers: {
        //         'Authorisation':'Bearer '+ token,
        //         'Content-Type': 'application/json',
        //     }
        // });

        axios.get(`${ROOT_URL}products`).then(function(response)
        {
            dispatch({type:FETCH_PRODUCTS,payload:response});
            return true;

        }).catch(function(error)
        {
            return error;
        });

    } ;

    //
    // const request = axios.get(`${ROOT_URL}products`);
    // console.log(request);
    // return {
    //     type:FETCH_PRODUCTS,
    //     payload:request
    // }
}


export function fetchCategories() {
    return function(dispatch) {

        axios.get(`${ROOT_URL}categories`).then(function (response) {
            dispatch({type: FETCH_CATEGORIES, payload: response});
            return true;

        }).catch(function (error) {
            return error;
        });
    }
}

export function fetchBanners() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}banners`).then(function (response) {
            dispatch({type: FETCH_BANNERS, payload: response});
            return true;

        }).catch(function (error) {
            return error;
        });
    }
}

export function fetchProduct(id) {
    return function(dispatch) {
        axios.get(`${ROOT_URL}products/${id}`).then(function (response) {
            dispatch({type: FETCH_PRODUCT, payload: response});
            return true;

        }).catch(function (error) {
            return error;
        });
    }
}

export function fetchSavedProducts() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}savedProducts`).then(function (response) {
            dispatch({type: FETCH_SAVED_PRODUCTS, payload: response});
            return true;
        }).catch(function (error) {
            return error;
        });
    }

}

export function fetchCartList() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}cartList`).then(function (response) {
            dispatch({type: FETCH_CART_LIST, payload: response});
            return true;
        }).catch(function (error) {
            return error;
        });
    }

}


export function saveProductToFavorite(id) {
    return function(dispatch) {
        axios.get(`${ROOT_URL}saveItem/${id}`).then(function () {

            return true;
        }).catch(function (error) {
            return error;
        });
    }

}


export function unsaveProductToFavorite(id) {
    return function(dispatch) {
        axios.get(`${ROOT_URL}unsaveItem/${id}`).then(function () {

            return true;
        }).catch(function (error) {
            return error;
        });
    }

}


export function fetchCartListCount() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}cartListCount`).then(function (response) {
            dispatch({type: FETCH_CART_LIST_COUNT, payload: response});
            return true;

        }).catch(function (error) {
            return error;
        });
    }
}


export function fetchOrders() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}orders`).then(function (response) {
            dispatch({type: FETCH_ORDERS, payload: response});
            return true;

        }).catch(function (error) {
            return error;
        });
    }
}




export function fetchInvoices() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}invoices`).then(function (response) {
            dispatch({type: FETCH_INVOICES, payload: response});
            return true;

        }).catch(function (error) {
            return error;
        });
    }
}



export function addToCart(productId,quantity,price) {
    return function(dispatch) {
        axios.get(`${ROOT_URL}addToCart/${productId}/${quantity}/${price}`).then(function () {
            return true;
        }).catch(function (error) {
            return error;
        });
    }
}

export function removeFromCart(id) {
    return function(dispatch) {
        axios.get(`${ROOT_URL}removeItemCart/${id}`).then(function () {
            return true;
        }).catch(function (error) {
            return error;
        });
    }
    
}