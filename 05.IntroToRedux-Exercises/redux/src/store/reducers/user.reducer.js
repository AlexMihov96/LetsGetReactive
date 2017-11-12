import {EDIT_INPUT, GET_ALL, STORE_INPUT} from "../actions/user.actions"

const initialState = {
    input: []
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case STORE_INPUT: {
            let singleInput = action.input
            let newItem = [...state.input, singleInput]

            return Object.assign({}, state, {input: newItem})
        }
        case GET_ALL: {
            debugger

            return Object.assign({}, state, {counter: state.counter - 1})
        }
        case EDIT_INPUT: {
            debugger

            return Object.assign({}, state, {counter: state.counter = 0})
        }
        default: {
            return state
        }
    }
}