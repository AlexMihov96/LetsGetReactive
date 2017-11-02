import React, {Component} from 'react'
import Input from './formFields/Input'
import loginValidation from './../../utils/loginValidation'

export class SignInForm extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }

        this.loginEvent = this.loginEvent.bind(this)
    }

    loginEvent(event) {
        event.preventDefault()

        let credentials = {
            email: this.state.email,
            password: this.state.password
        }

        this.login(credentials)
    }

    login(model) {
        fetch("http://localhost:5000/auth/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        }).then(res => res.json())
            .then(t => {
                localStorage.setItem("token", t.token)
            })
    }

    render() {
        let validObj = loginValidation(
            this.state.email,
            this.state.password,
        )

        return (
            <div>
                <form onSubmit={this.loginEvent}>
                    <fieldset className='App'>
                        <div style={{display: 'inline-grid'}}>
                            <h2>Sign In</h2>
                            <Input
                                type='text'
                                data='email'
                                name='Email'
                                func={e => {
                                    this.setState({email: e.target.value})
                                }}
                                valid={validObj.validMail}
                            />
                            <Input
                                type='password'
                                data='password'
                                name='Password'
                                func={e => {
                                    this.setState({password: e.target.value})
                                }}
                                valid={validObj.validPassword}
                            />
                            <input
                                style={({"display": (validObj.validMail && validObj.validPassword) === true ? '' : 'none'})}
                                type='submit'
                                value='Log In'
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}