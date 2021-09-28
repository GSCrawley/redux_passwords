import { combineReducers } from 'redux'

import passwordReducer from './password-reducer'

export default combineReducers({
    passwords: passwordReducer
})