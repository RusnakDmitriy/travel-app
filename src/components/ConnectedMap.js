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
    }

    componentWillReceiveProps(nextProps){
        const {lat, lng, zoom, places}=nextProps;
        const position={lat:lat, lng:lng};
        const map=new this.props.google.maps.Map(this.refs.map, {
            center: position,
            zoom: zoom
        })
        new this.props.google.maps.Marker({
            map: map,
            position: position,
            title: 'Current hotel location'
        });

        if(!places.length)
            return;
        places.forEach((item)=>{
            const {lat, lng}=item.location;
            const plposition={lat:lat, lng:lng};
            const {name, perex}=item;
            let text;
            perex!==null ? text=`-${perex}` : text='';
            new this.props.google.maps.Marker({
                map: map,
                position: plposition,
                title: `${name} ${text}`
            })
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
        zoom: state.getHotelLocation.zoom,
        places: state.getPlacesLocation.places
    }
};

export const ConnectedMap=connect(mapStateToProps)(Map)