import {FETCH_BANNERS} from "../actions/index";

const  INITIAL_STATE = {all:[]};

export default function (state=INITIAL_STATE,action) {

    switch (action.type) {
        case FETCH_BANNERS:
            return {...state, all:action.payload.data};
        default :
            return state;
    }

}