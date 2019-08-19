import {FETCH_CART_LIST,FETCH_CART_LIST_COUNT} from "../actions";

const  INITIAL_STATE = {all:[],cartListCount:0};


export default function (state=INITIAL_STATE,action) {

    switch (action.type) {
        case FETCH_CART_LIST_COUNT:

            return {...state, cartListCount:action.payload.data };

        case FETCH_CART_LIST:
            return {...state, all:action.payload.data };
        default :
            return state;
    }

}