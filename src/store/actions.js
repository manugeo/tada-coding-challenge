import service from "../service";

const getPosts = () => dispatch =>
  service
    .getPosts()
    .then(posts => {
      dispatch({
        type: "fetched_posts",
        payload: { posts }
      });
      return Promise.resolve();
    })
    .catch(err => Promise.reject(err));

export default {
  getPosts
};
