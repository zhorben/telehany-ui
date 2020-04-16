import { Record } from 'immutable'
import {
  LoginRequest, LoginSuccess, LoginFailure,
  RegisterRequest, RegisterSuccess, RegisterFailure,
  ConfirmRequest, ConfirmSuccess, ConfirmFailure
} from '../constants'

const token = typeof window !== 'undefined'
  ? localStorage.getItem('token') || null
  : null

const ReducerRecord = Record({
  token,
  signin: {
    error: null,
    processing: false,
  },
  signup: {
    errors: null,
    processing: false,
    complete: false,
  },
  confirmation: {
    error: null,
    processing: false,
  }
})

export default (state = new ReducerRecord(), action) => {
  switch (action.type) {
    case LoginRequest:
      return state.setIn(['signin', 'processing'], true)

    case LoginSuccess:
      if (typeof window !== 'undefined')
        localStorage.setItem('token', action.token)
      return state
        .setIn(['signin', 'processing'], false)
        .set('token', action.token)
        
    case LoginFailure:
      return state
        .setIn(['signin', 'processing'], false)
        .setIn(['signin', 'error'], action.error)

    case RegisterRequest:
      return state.setIn(['signup', 'processing'], true)

    case RegisterSuccess:
      return state
        .setIn(['signup', 'processing'], false)
        .setIn(['signup', 'complete'], true)

    case RegisterFailure:
      return state
        .setIn(['signup', 'processing'], false)
        .setIn(['signup', 'error'], action.error)

    case ConfirmRequest:
      return state.setIn(['confirmation', 'processing'], true)

    case ConfirmSuccess:
      if (typeof window !== 'undefined')
        localStorage.setItem('token', action.token)
      return state
        .setIn(['confirmation', 'processing'], false)
        .set('token', action.token)

    case ConfirmFailure:
      return state
        .setIn(['confirmation', 'processing'], false)
        .setIn(['confirmation', 'error'], action.error)

    default:
      return state
  }
}