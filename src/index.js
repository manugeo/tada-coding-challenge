import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import App from "./App";
import store from "./store/store.js";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={createTheme()}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  </Provider>,
  document.getElementById("app")
);
