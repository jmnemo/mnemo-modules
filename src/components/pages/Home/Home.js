import React, { Component } from 'react';

import styles from './Home.module.scss';

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>
          Welcome!
        </h2>
      </div>
    );
  }
}

export default Home;
