import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { ADD_ACTION, CLEAR_ACTION } from './ListReducer';
const ListForm = () => {
    const dispatch = useDispatch();
    const itemInputRef = useRef('')
    return (
        <div>
            <label
                htmlFor="item"
                className="block text-sm font-medium leading-5 text-gray-700"
            >
                Item to buy
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    id="item"
                    ref={itemInputRef}
                    className="form-input block w-2/3 sm:text-sm sm:leading-5"
                    placeholder="you@example.com"
                />
            </div>
            <span className="inline-flex rounded-md shadow-sm">
                <button
                    onClick={() => dispatch({ type: ADD_ACTION, payload: { name: itemInputRef.current.value } })}
                    type="button"
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                    Add Item
              </button>
            </span>
            <span className="inline-flex rounded-md shadow-sm">
                <button
                    onClick={() => dispatch({ type: CLEAR_ACTION })}
                    type="button"
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                    clear List
              </button>
            </span>
        </div>
    )
}
export default ListForm;