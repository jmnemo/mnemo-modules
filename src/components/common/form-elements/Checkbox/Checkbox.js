import React from 'react';
import cx from 'classnames';

import styles from './Checkbox.module.scss';

function Checkbox(props) {
  const btnOnClick = () => {
    if (props.onClickCallback) {
      props.onClickCallback();
    }
  };

  return (
    <button type='button'
            className={cx(
              styles.btn,
              {[styles.active]: props.isActive}
            )}
            onClick={() => btnOnClick()}
    >
      <span className={styles.iconWrap}>
        <span className={styles.checkIcon} />
      </span>
      <span className={styles.label}>Decode On Pause</span>
    </button>
  );
}

export default Checkbox;
