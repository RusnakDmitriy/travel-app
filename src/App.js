import React, { Component } from 'react';
import InfoSide from './components/InfoSide';
import MapSide from './components/MapSide';

class App extends Component {
    render() {
        return (
            <div className="mainScreen">
                <InfoSide />
                <MapSide />
            </div>
        );
    }
}

export default App;
