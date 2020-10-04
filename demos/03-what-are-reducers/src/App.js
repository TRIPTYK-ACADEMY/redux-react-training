// let a = [1, 2, 3, 4, 5]
// let sum = a.reduce(function (total, item) {
//   return total + item
// }, 0)

// console.log(sum)

// let actions = [
//   { type: 'ADD', value: 1 },
//   { type: 'ADD', value: 2 },
//   { type: 'ADD', value: 3 },
//   { type: 'ADD', value: 4 },
//   { type: 'ADD', value: 5 },
// ]

// function reducer(state, action) {
//   switch (action.type) {
//     case 'ADD':
//       return state + action.value
//     default:
//       return state
//   }
// }

// let finalState = actions.reduce(reducer, 0)
// console.log(finalState)

/* STEP1 */
// import { createStore } from 'redux'
// const initialState = {
//   light: false,
//   switchA: false,
//   switchB: false,
// }

// function lightReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'A_ON':
//       return {
//         swithA: true,
//         switchB: state.switchB,
//         light: true,
//       }
//     case 'A_OFF':
//       return {
//         swithA: false,
//         switchB: state.switchB,
//         light: state.switchB,
//       }
//     case 'B_ON':
//       return {
//         swithB: true,
//         switchA: state.switchB,
//         light: true,
//       }
//     case 'B_OFF':
//       return {
//         swithB: false,
//         switchA: state.switchB,
//         light: state.switchA,
//       }
//     default:
//       return state
//   }
// }
// const store = createStore(lightReducer)
// console.log('initial', store.getState())

/* STEP2 */

import { createStore } from 'redux'
const initialState = {
  light: false,
  switchA: false,
  switchB: false,
}

function lightReducer(state = initialState, action) {
  switch (action.type) {
    case 'A_ON':
      return {
        ...state,
        switchA: true,
        light: true,
      }
    case 'A_OFF':
      return {
        ...state,
        switchA: false,
        light: state.switchB,
      }
    case 'B_ON':
      return {
        ...state,
        switchB: true,
        light: true,
      }
    case 'B_OFF':
      return {
        ...state,
        switchB: false,
        light: state.switchA,
      }
    default:
      return state
  }
}
const store = createStore(lightReducer)
console.log('initial', store.getState())
store.dispatch({ type: 'A_ON' })
console.log('store', store.getState())
store.dispatch({ type: 'A_OFF' })
console.log('store', store.getState())
