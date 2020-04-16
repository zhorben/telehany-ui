import client from '../../network'

import {
  LoginRequest, LoginSuccess, LoginFailure,
  RegisterRequest, RegisterSuccess, RegisterFailure,
  ConfirmRequest, ConfirmSuccess, ConfirmFailure
} from '../constants'

export const login = ({ email, password }) => (dispatch) => {
  dispatch({ type: LoginRequest })

  client.post('/api/login', { email, password })
    .then(response =>
      dispatch({ type: LoginSuccess, token: response.data.token })
    ).catch(error =>
      dispatch({ type: LoginFailure, error: error.response.data.error })
    )
}

export const register = ({ email, displayName, password }) => (dispatch) => {
  dispatch({ type: RegisterRequest })
  
  client.post('/api/register', { email, displayName, password })
    .then(response =>
      dispatch({ type: RegisterSuccess })
    ).catch(error =>
      dispatch({ type: RegisterFailure, errors: error.response.data.errors })
    )
}

export const confirm = ({ verificationToken }) => (dispatch) => {
  dispatch({ type: ConfirmRequest })
  
  client.post('/api/confirm', { verificationToken })
    .then(response => {
      return dispatch({ type: ConfirmSuccess, token: response.data.token })
    }).catch(error => {
      dispatch({ type: ConfirmFailure, error: error.response.data.error })
    })
}