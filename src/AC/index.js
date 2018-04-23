import React from 'react';
import {START, SUCCESS, FAIL, GET_REQUEST} from '../constants';

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
}