import React, {Component} from 'react'
import '../App.css'
import Details from "./Details";

export default class Image extends Component {
    constructor() {
        super()

        this.state = {
            avatars: [],
            isClicked: false
        }

        this.isClicked = this.isClicked.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster')
            .then(data => {
                return data.json()
            })
            .then(obj => {
                return this.setState({avatars: obj})
            })
    }

    isClicked() {
        this.setState({isClicked: true})
    }

    render() {
        return (
            <div>
                {
                    this.state.avatars.map((avatar) => (
                        <div key={avatar.id}>
                            <h1>{avatar.name}</h1>
                            <img alt="avatar" src={avatar.url} onClick={this.isClicked}/>
                            {this.state.isClicked ? <Details avatar={avatar}/> : null}
                        </div>
                    ))
                }
            </div>
        )
    }
}