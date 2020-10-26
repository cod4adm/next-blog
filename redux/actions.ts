import * as types from './types'
import axios from 'axios';
import {MyPost} from "../interfaces/interfaces";

export const getPosts = () => async (dispatch) => {
  const response = await axios.get('https://simple-blog-api.crew.red/posts');
  const posts: MyPost[] = response.data;
  dispatch({
      type: types.GET_POSTS,
      payload: posts
  })
};

export const removePost = (id: number) => async (dispatch) => {
  const shouldRemove = confirm('Вы уверены, что хотите удалить сообщение?');
  if (shouldRemove) {
    await axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);
    dispatch(getPosts());
  }
};

export const createPost = (title: string, body: string) => async (dispatch) => {
  const content = {
    title,
    body
  };
  try {
    await axios.post('https://simple-blog-api.crew.red/posts', content)
  } catch (e) {
    console.log(e)
  }
  dispatch({ type: types.CREATE_POSTS });
};

