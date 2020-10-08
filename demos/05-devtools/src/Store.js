import { createStore } from 'redux'
import rootReducer from './Reducer'

const rootStore = createStore(rootReducer)

export default rootStore
