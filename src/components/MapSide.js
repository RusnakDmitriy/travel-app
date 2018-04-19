import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapSide extends Component {
    render() {
        const style={width: '100%', height: '100vh'};
        const containerStyle={width: '100%', height: '100vh'};
        return (
            <Map google={this.props.google}
                 style={style}
                 containerStyle={containerStyle}
                 initialCenter={{
                     lat: 40.854885,
                     lng: -88.081807
                 }}
                 zoom={3}
            >

                <Marker name={'Current location'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDiLiU2DYE0TnXj9mxwaABQ53WR0qzy5G8'
})(MapSide)