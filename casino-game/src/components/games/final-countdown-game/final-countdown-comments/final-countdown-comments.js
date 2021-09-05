import React, { memo, useCallback } from 'react';
import Comment from './final-countdown-comment';

const FinalCountDownComments = memo((props) => {
    const { comments } = props;

    const renderComments = useCallback((comment) => {
        const randomNumber = Math.floor(Math.random() * 10 / 2);

        const { postId, id, name } = comment[randomNumber];

        return (
            <Comment
                key={id}
                index={postId}
                content={name}
            />
        );
    }, []);

    return (
        <div className="final-countdown-comments-container">
            {comments.map(renderComments)}
        </div>
    );
});

FinalCountDownComments.defaultProps = {
    comments: []
}

export default FinalCountDownComments;
