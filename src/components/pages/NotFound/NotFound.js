import React, { Component } from 'react';

import styles from './NotFound.module.scss';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>
          NotFound!
        </h2>
      </div>
    );
  }
}

export default NotFound;
