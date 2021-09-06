import React, { memo } from 'react';

const Comment = memo((props) => {
    const { index, content } = props;

    return (
        <div className="comment-container">
            <div className="comment-id">{index}</div>
            <div className="comments-content">{content}</div>
        </div>
    );
});

Comment.defaultProps = {
    index: 0,
    content: ''
}

export default Comment;
