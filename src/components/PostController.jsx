import { ListItem, ListItemText } from "@mui/material";
import React from "react";

export default function PostController({ post, onClick }) {
  return (
    <ListItem button sx={{ border: "1px solid #e0e0e0" }} onClick={onClick}>
      <ListItemText
        primary={`Title: ${post.title}`}
        secondary={`Author: ${post.author}`}
      />
    </ListItem>
  );
}
