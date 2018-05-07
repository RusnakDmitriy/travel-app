import React, {Component} from 'react';
import {Router, Route, Switch, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import history from '../../history';
import Sightseeing from './Sightseeing';
import Shopping from './Shopping';
import Restaurant from './Restaurant';
import Relaxing from './Relaxing';

class MainRouter extends Component {
    render(){
        const {loading, loaded}=this.props;
        let loadText;
        if(loading){
            loadText= <div className="placesLable">Loading...</div>
        } else if(loaded){
            loadText= <div className="placesLable">See the map what we recomend for you</div>
        } else {
            loadText=<div></div>
        }

        return (
            <Router history={history}>
                <div className="inputLable">
                    <div>
                        <h5>Please, choose the endpoint</h5>
                        <span className="inputItemMenu"><NavLink activeStyle={{color:'red'}} to="/sightseeing">sightseeing</NavLink></span>
                        <span className="inputItemMenu"><NavLink activeStyle={{color:'red'}} to="/shopping">shopping</NavLink></span>
                        <span className="inputItemMenu"><NavLink activeStyle={{color:'red'}} to="/restaurant">restaurant/cafe</NavLink></span>
                        <span className="inputItemMenu"><NavLink activeStyle={{color:'red'}} to="/relaxing">relaxing</NavLink></span>
                        {loadText}
                    </div>
                    <Switch>
                        <Route path="/sightseeing" component={Sightseeing} />
                        <Route path="/shopping" component={Shopping} />
                        <Route path="/restaurant" component={Restaurant} />
                        <Route path="/relaxing" component={Relaxing} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        loading: state.getPlacesLocation.loading,
        loaded: state.getPlacesLocation.loaded
    }
}

export default connect(mapStateToProps)(MainRouter)