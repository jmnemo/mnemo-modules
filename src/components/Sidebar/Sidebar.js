import React, { Component } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import cx from 'classnames';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import LINKS from "./links";
import styles from './Sidebar.module.scss';
import PirateBG from "../common/PirateBG/PirateBG";

class Sidebar extends Component {
  renderNav = (currCategory) => {
    return (
      <nav className={styles.nav}>
        { LINKS[currCategory].map((currElem, index) => (
          <NavLink
            key={currElem.path + index}
            to={currElem.path}
            activeClassName={styles.active}
            className={cx(
              { [styles.componentsNav]: currCategory === 'components',
                [styles.animationsNav]: currCategory === 'animations',
                [styles.utilsNav]: currCategory === 'utils'
              }
            )}
          >
            {currElem.name}
          </NavLink>
        ))}
      </nav>
    );
  }

  renderCategories = (routeProps) => {
    const currCategory = routeProps.match.path.substring(1);
    const currPath = routeProps.location.pathname;

    return (
      <>
        <Header category={currCategory} path={currPath} />
        {this.renderNav(currCategory)}
        <Footer category={currCategory} />
      </>
    );
  }

  renderMainMenu = () => {
    return (
      <div className={styles.categories}>
        <Link className={cx(styles.category, styles.components)} to='/components'>
          Components
        </Link>
        <Link className={cx(styles.category, styles.animations)} to='/animations'>
          Animations
        </Link>
        <Link className={cx(styles.category, styles.utils)} to='/utils'>
          Utilities
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route path={["/components", "/animations", "/utils"]}
                 render={this.renderCategories}
          />
          <Route path="*">
            <Header />
            {this.renderMainMenu()}
            <Footer />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Sidebar);
