import React, {Component} from 'react';

export default class Posts extends Component {
    constructor(props) {
        super(props)
        debugger
    }

    render() {
        return (
            <div>
            <h1>Posts Hello!</h1>
                <label>{this.props.match.params.post}</label>
        </div>)
    }
}