import { combineReducers } from "redux";

const posts = (state = null, action) => {
  const { payload } = action;
  switch (action.type) {
    case "fetched_posts":
      return payload.posts;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ posts });
