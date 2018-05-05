import React, {Component} from 'react';
import {Router, Route, Switch, NavLink} from 'react-router-dom';
import history from '../../history';
import Sightseeing from './Sightseeing';
import Shopping from './Shopping';
import Restaurant from './Restaurant';
import Relaxing from './Relaxing';

export default class MainRouter extends Component {
    render(){
        return (
            <Router history={history}>
                <div className="inputLable">
                    <div>
                        <h5>Please, choose the endpoint</h5>
                        <span className="inputItemMenu"><NavLink activeStyle={{color:'red'}} to="/sightseeing">sightseeing</NavLink></span>
                        <span className="inputItemMenu"><NavLink activeStyle={{color:'red'}} to="/shopping">shopping</NavLink></span>
                        <span className="inputItemMenu"><NavLink activeStyle={{color:'red'}} to="/restaurant">restaurant/cafe</NavLink></span>
                        <span className="inputItemMenu"><NavLink activeStyle={{color:'red'}} to="/relaxing">relaxing</NavLink></span>
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