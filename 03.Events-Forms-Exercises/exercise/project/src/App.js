import React, {Component} from 'react'
import './App.css'

import SingUpForm from './components/form/SingUpForm'
import {SignInForm} from "./components/form/SignInForm";
import {Pokemon} from "./components/form/Pokemon";

class App extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            token: ''
        }
    }

    render() {
        return (
            <div>
                <SingUpForm/>
                <SignInForm/>
                <Pokemon/>
            </div>
        )
    }
}

export default App
