import React, { useReducer } from 'react';
import { initialState, postReducer } from '../reducers/PostReducer';

const PostProvider = ({children}) => {
    const [state,dispatch]=useReducer(postReducer,initialState)
    return (
      <PostContext.PostProvider value={{ state, dispatch }}>
        {children}
      </PostContext.PostProvider>
    );
};

export default PostProvider;