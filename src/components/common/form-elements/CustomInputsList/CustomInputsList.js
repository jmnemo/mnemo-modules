import React, { Component } from 'react';
import cx from 'classnames';

import CustomInput from "components/common/form-elements/CustomInput/CustomInput";
import styles from './CustomInputsList.module.scss';
import { ReactComponent as CloseIcon } from './img/close.svg';
import { ReactComponent as MinusIcon } from './img/minus.svg';

class CustomInputsList extends Component {
  constructor(props) {
    super(props);
  }

  customInputOnChange = (name, value, elemIndex) => {
    const list = this.props.list;

    list[elemIndex] = value;
    this.props.onChangeCallback(name, list);
  }

  addListElement = (index) => {
    const list = this.props.list;

    list.splice(index, 0, '');
    this.props.onChangeCallback('animationText', list);
  }

  removeListElement = (index) => {
    const list = this.props.list;

    list.splice(index, 1);
    this.props.onChangeCallback('animationText', list);
  }

  renderList = () => {
    return this.props.list.map((currElem, index) => (
      <div key={index} className={styles.container}>
        <div className={cx(styles.btn, styles.addBtn)} onClick={() => this.addListElement(index + 1)}>
          <CloseIcon />
        </div>
        <CustomInput onChangeCallback={this.customInputOnChange}
                     label={`Animation Text | Row ${index + 1}`}
                     value={this.props.list[index]}
                     placeholder='Type here ...'
                     name='animationText'
                     elemIndex={index}
                     type='text'
                     inputStyles={{width: 'calc(100% - 232px)'}}
        />
        { index
          ? <div className={cx(styles.btn, styles.removeBtn)} onClick={() => this.removeListElement(index)}>
              <MinusIcon />
            </div>
          : null
        }
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.list}>
        {this.renderList()}
      </div>
    );
  }
}

export default CustomInputsList;
