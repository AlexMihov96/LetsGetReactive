import React, {Component} from 'react'
import '../App.css'

export default class Details extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.avatar.name}</h1>
                    <p>{this.props.avatar.bio}</p>
                </div>
            </div>
        )
    }
}