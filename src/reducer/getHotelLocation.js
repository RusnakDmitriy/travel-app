import {START, SUCCESS, FAIL, GET_REQUEST} from '../constants';

const defLocationState={
    lat: 40.854885,
    lng: -88.081807,
    zoom: 4,
    coord: {s: 0, w: 0, n: 0, e: 0},
    loaded: false,
    loading: false
}

export default (locationState=defLocationState, action)=>{
    const {type, payload}=action;

    switch(type){
        case(GET_REQUEST+START):
            return Object.assign({}, {...locationState, loading: true});

        case(GET_REQUEST+SUCCESS):
            return Object.assign({}, {lat: payload.response.results[0].geometry.location.lat,
                                      lng: payload.response.results[0].geometry.location.lng,
                                      zoom: 16,
                                      coord: {s: payload.response.results[0].geometry.viewport.southwest.lat,
                                              w: payload.response.results[0].geometry.viewport.southwest.lng,
                                              n: payload.response.results[0].geometry.viewport.northeast.lat,
                                              e: payload.response.results[0].geometry.viewport.northeast.lng},
                                      loaded: true,
                                      loading: false
                                });
    }

    return locationState
}