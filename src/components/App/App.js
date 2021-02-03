import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from 'components/Sidebar/Sidebar';
import Home from 'components/pages/Home/Home';
import Category from 'components/pages/Category/Category';
import NotFound from 'components/pages/NotFound/NotFound';
import styles from './App.module.scss';
import 'styles/_common.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={["/components", "/animations", "/utils"]} component={Category} />
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
