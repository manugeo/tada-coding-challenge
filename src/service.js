import db from "./db.js";

const makeAsync = data =>
  new Promise(resolve => setTimeout(() => resolve(data), 2000));

const getPosts = () => makeAsync(db.posts);

const getComments = postId =>
  makeAsync(db.comments.filter(c => c.postId === postId));

export default {
  getPosts,
  getComments
};
