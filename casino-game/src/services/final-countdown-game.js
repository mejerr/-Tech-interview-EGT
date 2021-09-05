import axios from "../axios-game";

export const showComments = ({ commentId }) => {
    return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`);
  };
