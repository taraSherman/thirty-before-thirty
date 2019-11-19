import React from 'react';

const Comment = props => {
  return (
    <div>
      <span>
        <strong>
          {props.comment.id}
        </strong>
      </span>
        {props.comment.text}
    </div>
  )
}