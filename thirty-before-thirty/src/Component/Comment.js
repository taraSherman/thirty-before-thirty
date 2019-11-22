import React from 'react';

const Comment = props => {
  console.log(props, 'Comment.js, line 4');

  return (
    <div>
      <li><strong>{props.comment.created_by}</strong></li>
      <li>{props.comment.content}</li>
    </div>
  );
};

export default Comment;