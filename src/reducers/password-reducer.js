import { ADD_PASSWORD, DELETE_PASSWORD, EDIT_PASSWORD } from "../actions";

const passwordReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_PASSWORD:
            const { name, password } = action.payload
            return [...state, { name, password }]
        case DELETE_PASSWORD: 
            const { index } = action.payload
            return [...state.slice(0,index), ...state.slice(index + 1)]
        case EDIT_PASSWORD:
            return state.map((item,index) => {
                if (index !== action.payload.index) {
                    return item
                }
                return { ...item, ...action.payload }
            })
        default:
            return state
    }
}

export default passwordReducer