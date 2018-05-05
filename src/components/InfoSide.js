import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getHotelLocation} from '../AC';
import  MainRouter from './routers/MainRouter';

class InfoSide extends Component{
    constructor(props){
        super(props);
        this.state={
            hotel:''
        }
    }

    handleInputHotel=(ev)=>{
        let target=ev.target;
        this.setState({hotel:target.value})
    }

    submitRequest=(ev)=>{
        let code=ev.keyCode;
        const {getHotelLocation}=this.props;
        if(code!==13)
            return;
        getHotelLocation(this.state.hotel);
        this.setState({hotel:''})
    }

    render(){
        const {hotel}=this.state;
        const {loading, loaded}=this.props;
        //const loadingIcon=loading ? (<div>Loading...</div>) : (<MainRouter />);
        let loadingIcon=null;
        if(loading){
            loadingIcon= <div className="inputLable">Loading...</div>
        } else if(loaded){
            loadingIcon= <MainRouter className="inputLable" />
        } else {
            loadingIcon=<div></div>
        }
        return(
            <div className="infoSide">
                <input type='text' value={hotel} onChange={this.handleInputHotel} onKeyDown={this.submitRequest} />
                {loadingIcon}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        loaded: state.getHotelLocation.loaded,
        loading: state.getHotelLocation.loading
    }
};

export default connect(mapStateToProps, {getHotelLocation})(InfoSide)