import { CircularProgress, CssBaseline, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import routes from "./routes";
import actions from "./store/actions";

export default function App() {
  const [loading, setLoading] = useState(false);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts) {
      setLoading(true);
      dispatch(actions.getPosts()).finally(() => setLoading(false));
    }
  }, [posts, dispatch]);

  return (
    <div>
      <CssBaseline />
      <Typography variant="h4">Tada! Welcome to this Blog!</Typography>
      <Link to="/home">Go Home</Link>
      {loading ? (
        <CircularProgress color="primary" height={24} width={24} />
      ) : (
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
          <Route render={() => <Redirect to="/home" />} />
        </Switch>
      )}
    </div>
  );
}
