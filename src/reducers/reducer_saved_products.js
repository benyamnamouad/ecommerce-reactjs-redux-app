import {FETCH_SAVED_PRODUCTS} from "../actions/index";

const  INITIAL_STATE = {all:[]};


export default function (state=INITIAL_STATE,action) {

    switch (action.type) {
        case FETCH_SAVED_PRODUCTS:
            return {...state, all:action.payload.data };
        default :
            return state;
    }

}