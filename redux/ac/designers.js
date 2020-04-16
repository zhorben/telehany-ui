import client from '../../network'

import {
  DesignersRequest, DesignersFailure, DesignersSuccess,
  DesignerByIdRequest, DesignerByIdFailure, DesignerByIdSuccess
} from '../constants'

export const fetchDesigners = () => (dispatch) => {
  dispatch({ type: DesignersRequest })

  client.get('/api/designers')
    .then(response =>
      dispatch({ type: DesignersSuccess, designers: response.data.designers })
    ).catch(error =>
      dispatch({ type: DesignersFailure, error: error.response.data.error })
    )
}

export const designerById = (id) => (dispatch) => {
  dispatch({ type: DesignerByIdRequest, id })

  client.get(`/api/designers/${id}`)
    .then(response =>
      dispatch({ type: DesignerByIdSuccess, designers: [response.data.designer] })
    ).catch(error =>
      dispatch({ type: DesignerByIdFailure, error: error.response.data.error })
    )
}