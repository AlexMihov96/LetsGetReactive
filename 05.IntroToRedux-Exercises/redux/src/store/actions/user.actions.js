export const STORE_INPUT = "STORE_INPUT"
export const GET_ALL = "GET_ALL"
export const EDIT_INPUT = "EDIT_INPUT"

export class UserActions {
    store(input) {
        return {
            type: STORE_INPUT,
            input: input
        }
    }

    getAll() {
        return {
            type: GET_ALL
        }
    }

    editInput(input) {
        return {
            type: EDIT_INPUT,
            input: input
        }
    }
}
