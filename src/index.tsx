import React, { createElement } from "react";
import { render } from "react-dom";
import { setup } from "goober";
import { shouldForwardProp } from "goober/should-forward-prop";
// order important
import App from "./App";
import "@/assets/icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "@/componets/ErrorBoundary";
import { GlobalStyles } from "@/styles/base";

setup(
  createElement,
  undefined,
  undefined,
  shouldForwardProp(prop => !prop.startsWith("$")),
);

render(
  <ErrorBoundary>
    <Router>
      <Switch>
        <Route path={"/"}>
          <GlobalStyles />
          <App />
        </Route>
      </Switch>
    </Router>
  </ErrorBoundary>,
  document.getElementById("root"),
);
