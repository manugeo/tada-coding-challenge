import { List } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PostController from "../components/PostController";

export default function Home({ history }) {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <List>
        {posts &&
          posts.map((post) => (
            <PostController
              key={post.id}
              post={post}
              onClick={() => history.push(`/post/${post.id}`)}
            />
          ))}
      </List>
    </div>
  );
}
