import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Math from "./components/Math";
import User from "./components/User";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Math/>
                <br/>
                <User/>
            </div>
        );
    }
}

export default App;
