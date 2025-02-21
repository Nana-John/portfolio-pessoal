import { combineReducers } from 'redux'
import someReducer from './someReducer' // Caminho correto para o 'someReducer'

const rootReducer = combineReducers({
  someState: someReducer,
})

export default rootReducer
