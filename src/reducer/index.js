import React from 'react';
import {combineReducers} from 'redux';
import getHotelLocation from './getHotelLocation';
import getPlacesLocation from './getPlacesLocation';

export default combineReducers({
    getHotelLocation,
    getPlacesLocation
})