import React, {Component} from 'react'
import pokemonValidation from "../../utils/pokemonValidaton";
import Input from './formFields/Input'

export class Pokemon extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            image: '',
            info: '',
            pokemons: []
        }

        this.createClicked = this.createClicked.bind(this)
    }

    createClicked(e) {
        e.preventDefault()

        let payload = {
            pokemonName: this.state.name,
            pokemonImage: this.state.image,
            pokemonInfo: this.state.info
        }

        this.createPokemon(payload)
    }

    createPokemon(model) {
        fetch("http://localhost:5000/pokedex/create", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        })
    }

    componentDidMount() {
        fetch("http://localhost:5000/pokedex/pokedex", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(parsed => {
            return this.setState({pokemons: parsed.pokemonColection})
        })
    }

    render() {
        let validObj = pokemonValidation(
            this.state.name,
            this.state.image,
            this.state.info,
        )

        return (
            <div>
                <form onSubmit={this.createClicked}>
                    <fieldset className='App'>
                        <div style={{display: 'inline-grid'}}>
                            <h2>Create Pokemon</h2>
                            <Input
                                type='text'
                                name='Pokemon Name'
                                data="name"
                                func={e => {
                                    this.setState({name: e.target.value})
                                }}
                                valid={validObj.validName}
                            />
                            <Input
                                type='text'
                                name='Pokemon Image'
                                data="image"
                                func={e => {
                                    this.setState({image: e.target.value})
                                }}
                                valid={validObj.validImage}
                            />
                            <Input
                                type='text'
                                name='Pokemon Info'
                                data="info"
                                func={e => {
                                    this.setState({info: e.target.value})
                                }}
                                valid={validObj.validInfo}
                            />
                            <input
                                style={({"display": (validObj.validName && validObj.validImage && validObj.validInfo) === true ? '' : 'none'})}
                                type='submit'
                                value='Create'
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            {
                                this.state.pokemons.map((el, i) => (
                                    <div key={i}>
                                        <h1>{el.pokemonName}</h1>
                                        <img alt="pokemon" src={el.pokemonImage}/>
                                        <p>{el.pokemonInfo}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}