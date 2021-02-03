import React from 'react';
import cx from 'classnames';

import styles from './CustomInput.module.scss';

function CustomInput(props) {
  const onChange = (ev) => {
    if (props.onChangeCallback) {
      props.onChangeCallback(props.name, ev.target.value, props.elemIndex);
    }
  };

  return (
    <label
      className={cx(
        styles.btn,
        {[styles.disabled]: props.isDisable}
      )}
    >
      <span className={styles.label}>{props.label}</span>
      <input className={styles.input}
             value={props.value}
             placeholder={props.placeholder}
             onChange={onChange}
             name={props.name}
             type={props.type}
             style={props.inputStyles}
      />
    </label>
  );
}

export default CustomInput;
