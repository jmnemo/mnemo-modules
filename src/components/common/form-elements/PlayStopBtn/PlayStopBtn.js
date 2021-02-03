import React from 'react';
import cx from 'classnames';

import { ReactComponent as PlayIcon } from './img/play.svg';
import styles from './PlayStopBtn.module.scss';

function PlayStopBtn(props) {
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
        <PlayIcon className={styles.playIcon} />
        <span className={cx(styles.stopIcon, {[styles.pauseMod]: props.pauseMod})} />
      </span>
      <span className={styles.label}>
        { props.isActive
          ? props.stopText || 'Stop'
          : props.playText || 'Play'
        }
      </span>
    </button>
  );
}

export default PlayStopBtn;
