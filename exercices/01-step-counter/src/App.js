import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import StepCounter from './StepCounter'
export const ADD_STEP = 'ADD_STEP'
export const RESET_COUNTER = 'RESET_COUNTER'
export const addStep = () => ({
  type: ADD_STEP,
})

export const resetCounter = () => ({
  type: RESET_COUNTER,
})

function reducer(state, action) {
  switch (action.type) {
    case ADD_STEP:
      return {
        steps: state.steps + 1,
      }
    case RESET_COUNTER:
      return {
        steps: 0,
      }
    default:
      return state
  }
}
const store = createStore(
  reducer,
  { steps: 0 },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
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
              <StepCounter />
            </Provider>
          </div>
        </div>
      </div>
    </main>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
