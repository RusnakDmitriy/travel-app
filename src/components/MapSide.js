import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {ConnectedMap} from './ConnectedMap';

class MapSide extends Component {
    render() {
        const containerStyle={width: '100%', height: '100vh'};

        return (
            /*<Map google={this.props.google}
                 style={style}
                 containerStyle={containerStyle}
                 initialCenter={{
                     lat: lat,
                     lng: lng
                 }}
                 zoom={3}
            >

                <Marker name={'Current location'} />
            </Map>*/
        <div style={containerStyle}>
            <ConnectedMap google={this.props.google} />
        </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDiLiU2DYE0TnXj9mxwaABQ53WR0qzy5G8'
})(MapSide)