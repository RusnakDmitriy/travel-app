import React, {Component} from 'react';
import {connect} from 'react-redux';

class Map extends Component {
    componentDidMount(){
        const {lat, lng, zoom}=this.props;
        const position={lat:lat, lng:lng};
        const map=new this.props.google.maps.Map(this.refs.map, {
            center: position,
            zoom: zoom
        })
        /*new this.props.google.maps.Marker({
            map: map,
            position: position
        })*/
    }

    componentWillReceiveProps(nextProps){
        if(this.props.lat===nextProps.lat || this.props.lng===nextProps.lng)
            return;
        const {lat, lng, zoom}=nextProps;
        const position={lat:lat, lng:lng};
        const map=new this.props.google.maps.Map(this.refs.map, {
            center: position,
            zoom: zoom
        })
        new this.props.google.maps.Marker({
            map: map,
            position: position
        })
    }

    render() {
        const style={width: '100%', height: '100vh'};
        return (
            <div ref="map" style={style}></div>
        )
    }
};

const mapStateToProps=(state)=>{
    return {
        lat: state.getHotelLocation.lat,
        lng: state.getHotelLocation.lng,
        zoom: state.getHotelLocation.zoom
    }
};

export const ConnectedMap=connect(mapStateToProps)(Map)