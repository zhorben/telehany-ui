import { Record } from 'immutable'
import { arrToImmutableMap } from '../utils'
import {
  DesignersRequest, DesignersFailure, DesignersSuccess,
  DesignerByIdRequest, DesignerByIdFailure, DesignerByIdSuccess
} from '../constants'

const DesignerRecord = Record({
  id: null,
  title: '',
  fullTitle: '',
  description: '',
  processing: false
})

const ReducerRecord = Record({
  entities: arrToImmutableMap([], DesignerRecord),
  processing: false,
  loaded: false,
  error: null
})

export default (state = new ReducerRecord(), action) => {
  switch (action.type) {
    case DesignersRequest:
      return state.set('processing', true)

    case DesignersSuccess:
      return state
        .set('entities', arrToImmutableMap(action.designers, DesignerRecord))
        .set('processing', false)
        .set('loaded', true)
        
    case DesignersFailure:
      return state
        .set('processing', false)
        .set('error', action.error)

    case DesignerByIdRequest:
      return state.setIn(['entities', action.id, 'processing'], true)

    case DesignerByIdSuccess:
      return state
        .update('entities', entities =>
          entities.merge(arrToImmutableMap(action.designers, DesignerRecord))
        )

    case DesignerByIdFailure:
      return state
        .setIn(['entities', action.id, 'processing'], false)
        .set('error', action.error)

    default:
      return state
  }
}