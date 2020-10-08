import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import ListForm from './ListForm'
import ListReducer from './ListReducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
const store = createStore(ListReducer, { itemsToBuy: [] }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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
          <Provider store={store}>
            <div className="py-4 border-4 border-dashed border-gray-200 rounded-lg h-96">
              <ListForm />
              <List />

            </div>
          </Provider>
        </div>
      </div>
    </main>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
