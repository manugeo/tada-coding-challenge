import {
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Post({ match }) {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(null);

  const id = parseInt(match.params.id, 10);
  const post = useSelector(
    (state) => state.posts && state.posts.find((p) => p.id === id)
  );

  return (
    <div>
      {post ? (
        <div>
          <Paper sx={{ m: 1 }}>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="h6">By {post.author}</Typography>
            <Divider sx={{ mb: 1 }} />
            <Typography>{post.text}</Typography>
          </Paper>
          <Paper sx={{ m: 1 }}>
            {loading ? (
              <CircularProgress color="secondary" height={24} width={24} />
            ) : (
              <List>
                <Typography variant="subtitle2">Comments</Typography>
                {comments &&
                  comments.map((c) => (
                    <ListItem key={c.id}>
                      <ListItemText
                        primary={c.text}
                        secondary={c.author || "Anonymous"}
                      />
                    </ListItem>
                  ))}
              </List>
            )}
          </Paper>
        </div>
      ) : (
        <span>Post not found...</span>
      )}
    </div>
  );
}
