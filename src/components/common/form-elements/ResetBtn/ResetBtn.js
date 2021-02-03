import React from 'react';
import cx from 'classnames';

import { ReactComponent as ResetIcon } from './img/reset.svg';
import styles from './ResetBtn.module.scss';

function ResetBtn(props) {
  const btnOnClick = () => {
    if (props.isDisable) return;

    if (props.onClickCallback) {
      props.onClickCallback();
    }
  };

  return (
    <button type='button'
            className={cx(
              styles.btn,
              {[styles.disabled]: props.isDisable}
            )}
            onClick={() => btnOnClick()}
    >
      <span className={styles.iconWrap}>
        <ResetIcon className={styles.resetIcon}
                   style={{transform: `rotate(${props.resetCounter * 360}deg)`}}
        />
      </span>
      <span className={styles.label}>Reset</span>
    </button>
  );
}

export default ResetBtn;
