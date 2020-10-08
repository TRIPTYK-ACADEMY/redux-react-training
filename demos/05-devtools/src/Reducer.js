import gryffindor from './assets/images/gryffindor.png'
import ravenclaw from './assets/images/ravenclaw.png'
import hufflepuff from './assets/images/hufflepuff.png'
import slytherin from './assets/images/slytherin.png'
const initialState = {
  selectedHouse: null,
  houses: {
    0: {
      id: 0,
      name: 'Gryffindor',
      image: gryffindor,
      points: 50,
    },
    1: {
      id: 1,
      name: 'Ravenclaw',
      image: ravenclaw,
      points: 100,
    },
    2: {
      id: 2,
      name: 'Hufflepuff',
      image: hufflepuff,
      points: 50,
    },
    3: {
      id: 3,
      name: 'Slytherin',
      image: slytherin,
      points: 0,
    },
  },
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_HOUSE':
      return { ...state, selectedHouse: action.house.id }
    default:
      return state
  }
}

export default rootReducer
