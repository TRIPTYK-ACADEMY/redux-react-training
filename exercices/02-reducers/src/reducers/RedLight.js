const RED = 'red'
const ORANGE = 'orange'
const GREEN = 'green'
const initialState = {
  lighState: RED,
}
export const redLightReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RED':
      return {
        ...state,
        lighState: RED,
      }
    case 'SET_GREEN':
      return {
        ...state,
        lighState: GREEN,
      }
    case 'SET_ORANGE':
      return {
        ...state,
        lighState: ORANGE,
      }
    default:
      return state
  }
}
