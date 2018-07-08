import TYPE from '../ActionTypes'

const initState = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  user: '',
  type: ''
}

export function user(state=initState, action){
  switch(action.type) {
    case TYPE.LOAD_DATA:
      return {...state, ...action.payload}

    default:
      return state
  }
}