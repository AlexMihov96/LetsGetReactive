export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const CLEAR = "CLEAR"

export class MathActions {
    increment() {
        return {
            type: INCREMENT
        }
    }

    decrement() {
        return {
            type: DECREMENT
        }
    }

    clear() {
        return {
            type: CLEAR
        }
    }
}
