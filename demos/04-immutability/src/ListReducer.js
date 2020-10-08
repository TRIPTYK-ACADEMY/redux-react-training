export const ADD_ACTION = "addAction"
export const CLEAR_ACTION = "clearAction"

const initialState = {
    itemsToBuy: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_ACTION:
            let item = {
                id: Math.random(),
                name: payload.name
            }
            return {
                ...state,
                itemsToBuy: [...state.itemsToBuy, item]
            }
        case CLEAR_ACTION:

            return {
                ...state,
                itemsToBuy: []
            }
        default:
            return state
    }
}
