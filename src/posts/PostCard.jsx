import React from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostAction from './PostAction';
import PostComments from './PostComments';

const PostCard = ({post}) => {
    return (
      <article className="card mt-6 lg:mt-8">
        <PostHeader post={post}></PostHeader>
        <PostBody poster={post?.image} content={post?.content}></PostBody>
        <PostAction
          post={post}
          commentCount={post?.comments?.length}
        ></PostAction>
        <PostComments post={post}></PostComments>
      </article>
    );
};

export default PostCard;