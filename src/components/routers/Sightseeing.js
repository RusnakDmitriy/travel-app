import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPlacesLocation} from '../../AC';

class Sightseeing extends Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        const {coord}= this.props;
        this.props.getPlacesLocation(coord, 'sightseeing')
    }

    render(){
        const {coord, places}= this.props;
        console.log(places);
        return(
            <div></div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        coord: {s: state.getHotelLocation.coord.s-0.5,
            w: state.getHotelLocation.coord.w-0.5,
            n: state.getHotelLocation.coord.n+0.5,
            e: state.getHotelLocation.coord.e+0.5},
        places: state.getPlacesLocation.places,
        loaded: state.getPlacesLocation.loaded,
        loading: state.getPlacesLocation.loading
    }
}

export default connect(mapStateToProps, {getPlacesLocation})(Sightseeing)