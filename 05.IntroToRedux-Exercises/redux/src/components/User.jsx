import React, {Component} from 'react';
import {reducer} from "../store/reducers/user.reducer"
import {createStore} from "redux"
import {UserActions} from "../store/actions/user.actions";

let store = createStore(reducer)

export default class User extends Component {
    constructor() {
        super()
        this.state = {name: "", input: []}

        store.subscribe(() => {
            this.setState({input: store.getState().input})
        })

        this.addInput = this.addInput.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    addInput() {
        let sentence = this.state.name

        store.dispatch(new UserActions().store(sentence))
    }

    onChange(e) {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} value={this.state.name}/>
                <input type="button" onClick={this.addInput} value="Add input"/>
                <div>
                    {this.state.input.map((el, i) => (
                        <div>
                            <input type="text" key={i} value={el}/>
                            <br/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}