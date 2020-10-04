import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Counter from './Counter'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// functions called actionsCReators
export function increment() {
  return {
    type: INCREMENT,
  }
}
export function decrement() {
  return {
    type: DECREMENT,
  }
}
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}
const store = createStore(
  reducer,
  { count: 0 },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// console.log(store.getState())
const App = () => (
  <div className="py-10">
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Base TPK APP
        </h1>
      </div>
    </header>
    <main>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <Provider store={store}>
              <Counter />
            </Provider>
          </div>
        </div>
      </div>
    </main>
  </div>
)
ReactDOM.render(<App />, document.getElementById('root'))
