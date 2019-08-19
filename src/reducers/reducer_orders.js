import {FETCH_ORDERS} from "../actions";

const  INITIAL_STATE = {all:[]};


export default function (state=INITIAL_STATE,action) {

    switch (action.type) {
        case FETCH_ORDERS:
            return {...state, all:action.payload.data };
        default :
            return state;
    }

}