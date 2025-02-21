// src/styles/index.ts
import { combineReducers } from 'redux'
import someReducer from '../reducers/someReducer'
const rootReducer = combineReducers({
  someState: someReducer,
})

export default rootReducer
