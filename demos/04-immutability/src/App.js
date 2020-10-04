import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
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
          <div className="py-4 border-4 border-dashed border-gray-200 rounded-lg h-96">
            <label
              htmlFor="item"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Item to buy
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="item"
                className="form-input block w-2/3 sm:text-sm sm:leading-5"
                placeholder="you@example.com"
              />
            </div>
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Button text
              </button>
            </span>
            <List />
          </div>
        </div>
      </div>
    </main>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
