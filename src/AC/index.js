import React from 'react';
import {START, SUCCESS, FAIL, GET_REQUEST, GET_REQUEST_PLACES} from '../constants';

export function getHotelLocation(name){
    return (dispatch)=>{
        dispatch({
            type: GET_REQUEST+START,
            payload: {name}
        })

        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${name}&key=AIzaSyBFqV65BEtkrSafPws1z_GE_SS4dnzAwjI`, requestOptions)
            .then(res=>res.json())
            .then(response=>dispatch({
                type: GET_REQUEST+SUCCESS,
                payload: {name, response}
            }))
            .catch(error=>dispatch({
                type: GET_REQUEST+FAIL,
                payload: {name, error}
            }))
    }
};

export function getPlacesLocation(coord, category){
    return (dispatch)=>{
        dispatch({
            type: GET_REQUEST_PLACES+START,
            payload: {coord}
        })

        const requestOptions={
            headers: {
                'x-api-key': '8stlcKaR902qnVW7qiHhP6OP3b5sMZwX7JVTVhe6'
            }
        };

        fetch(`https://api.sygictravelapi.com/1.0/en/places/list?bounds=${coord.s},${coord.w},${coord.n},${coord.e}&categories=${category}`, requestOptions)
            .then(res=>res.json())
            .then(response=>dispatch({
                type: GET_REQUEST_PLACES+SUCCESS,
                payload: {coord, response}
            }))
            .catch(error=>dispatch({
                type: GET_REQUEST_PLACES+FAIL,
                payload: {coord, error}
            }))
    }
}