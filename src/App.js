import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import HomePoge from "./pages/homepage/homepage";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Switch>
            <Route path="/" component={HomePoge} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
