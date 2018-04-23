import {START, SUCCESS, FAIL, GET_REQUEST} from '../constants';

const defLocationState={
    lat: 40.854885,
    lng: -88.081807,
    zoom: 4,
    loaded: false,
    loading: false
}

export default (locationState=defLocationState, action)=>{
    const {type, payload}=action;

    switch(type){
        case(GET_REQUEST+START):
            return Object.assign({}, {...locationState, loading: true});

        case(GET_REQUEST+SUCCESS):
            return Object.assign({}, {lat: payload.response.results[0].geometry.location.lat, lng: payload.response.results[0].geometry.location.lng, zoom: 16, loaded: true, loading: false});
    }

    return locationState
}