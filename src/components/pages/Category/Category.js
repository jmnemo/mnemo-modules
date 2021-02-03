import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Components from './Components/Components';
import Animations from './Animations/Animations';
import Utils from './Utils/Utils';
import NotFound from 'components/pages/NotFound/NotFound';
import routes from './routes';
import styles from './Category.module.scss';

class Category extends Component {
  render() {
    const category = this.props.match.path.substring(1);

    if (this.props.match.isExact) {
      return ({
        components: <Components />,
        animations: <Animations />,
        utils: <Utils />
      }[category]);
    }

    return (
      <div className={styles.container}>
        <Switch>
          {
            routes[category].map((currRoute, index) => (
              <Route exact key={index} path={`/${category}/${currRoute.path}`}>
                <currRoute.component />
              </Route>
            ))
          }
          <Route path='*'>
            <NotFound category={category} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Category;
