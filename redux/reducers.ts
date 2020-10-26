import { combineReducers } from 'redux'
import * as types from './types'

const initialState = {
  posts: [],
  postCreated: false
};

// POSTS REDUCER
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postCreated: false
      };
    case types.CREATE_POSTS:
      return {
        ...state,
        postCreated: true
      };
    default:
      return state
  }
};

// COMBINED REDUCERS
const reducers = {
  posts: postsReducer
};

export default combineReducers(reducers)
