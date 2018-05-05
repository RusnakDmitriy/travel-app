import {START, SUCCESS, FAIL, GET_REQUEST_PLACES} from '../constants';
import {placesToArr} from '../helpers/placesToArr';

const defPlaces={
    places: [],
    loaded: false,
    loading: false
};

export default (placesState=defPlaces, action)=>{
    const {type, payload}=action;
    switch(type){
        case(GET_REQUEST_PLACES+START):
            return Object.assign({},{...placesState, loading: true});

        case(GET_REQUEST_PLACES+SUCCESS):
            return Object.assign({},{places: placesToArr(payload.response),
                                     loaded: true,
                                     loading: false
                                 })
    }
    return placesState
}