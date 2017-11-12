import {INCREMENT, CLEAR, DECREMENT, MathActions} from "../actions/math.actions"

const initialState = {
    counter: 0
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT: {
            return Object.assign({}, state, {counter: state.counter + 1})
        }
        case DECREMENT: {
            return Object.assign({}, state, {counter: state.counter - 1})
        }
        case CLEAR: {
            return Object.assign({}, state, {counter: state.counter = 0})
        }
        default: {
            return state
        }
    }
}