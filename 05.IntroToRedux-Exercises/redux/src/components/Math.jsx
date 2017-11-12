import React, {Component} from 'react';
import {reducer} from "../store/reducers/math.reducer"
import {createStore} from "redux"
import {MathActions} from "../store/actions/math.actions";

let store = createStore(reducer)

export default class Math extends Component {
    constructor() {
        super()

        this.state = {value: 0}

        store.subscribe(() => {
            this.setState({value: Number(store.getState().counter)})
        })
    }

    increment() {
        store.dispatch(new MathActions().increment())
    }

    decrement() {
        store.dispatch(new MathActions().decrement())
    }

    clear() {
        store.dispatch(new MathActions().clear())
    }

    render() {
        return (
            <div>
                <input type="button" value="Increment" onClick={this.increment}/>
                <input type="button" value="Decrement" onClick={this.decrement}/>
                <input type="text" value={this.state.value}></input>
                <input type="button" value="Clear" onClick={this.clear}/>
            </div>
        )
    }
}