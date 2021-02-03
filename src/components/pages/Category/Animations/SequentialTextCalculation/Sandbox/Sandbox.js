import React, { Component } from 'react';
import cx from 'classnames';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PlayStopBtn from 'components/common/form-elements/PlayStopBtn/PlayStopBtn';
import ResetBtn from 'components/common/form-elements/ResetBtn/ResetBtn';
import Checkbox from 'components/common/form-elements/Checkbox/Checkbox';
import CustomInput from 'components/common/form-elements/CustomInput/CustomInput';
import CustomInputsList from 'components/common/form-elements/CustomInputsList/CustomInputsList';
import SequentialTextCalculation from 'components/m-modules/animations/SequentialTextCalculation/SequentialTextCalculation';
import styles from './Sandbox.module.scss';

class Sandbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnimationActive: false,
      resetAnimationCounter: 0,
      animationTexts: [
        'Region: Arctic.',
        'Climate: Cold winters and cool summers.',
        'Animals1: Arctic hare, lemming'
      ],
      isDecodeOnPause: false,
      stepValue: 3,
      delayValue: 40,
      minCharCodeValue: 65,
      maxCharCodeValue: 90,
      viewCode: false
    }
  }

  playStopBtnOnClick = () => {
    this.setState(prevState => ({
      isAnimationActive: !prevState.isAnimationActive
    }));
  }

  resetBtnOnClick = () => {
    this.setState(prevState => ({
      resetAnimationCounter: prevState.resetAnimationCounter + 1,
      isAnimationActive: true
    }));
  }

  decodeOnPauseBtnOnClick = () => {
    this.setState(prevState => ({
      isDecodeOnPause: !prevState.isDecodeOnPause
    }));
  }

  customInputOnChange = (name, value) => {
    this.setState({
      [`${name}Value`]: value
    });
  }

  animationEnd = () => {
    this.setState({isAnimationActive: false});
  }

  viewCodeToggle = () => {
    this.setState(prevState => ({
      viewCode: !prevState.viewCode
    }));
  }

  getCurrPresetCode = () => {
    const {
      animationTexts,
      isDecodeOnPause,
      stepValue,
      delayValue,
      minCharCodeValue,
      maxCharCodeValue
    } = this.state;

    return (
`<SequentialTextCalculation
  strArr={["${animationTexts.join('", "')}"]}
  step={${stepValue}}
  delay={${delayValue}}
  minCharCode={${minCharCodeValue}}
  maxCharCode={${maxCharCodeValue}}
  decodingWhenAnimationIsPaused={${isDecodeOnPause}}
/>`
    );
  }

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.getCurrPresetCode());
  }

  render() {
    const {
      isAnimationActive,
      resetAnimationCounter,
      isDecodeOnPause,
      animationTexts,
      stepValue,
      delayValue,
      minCharCodeValue,
      maxCharCodeValue,
      viewCode
    } = this.state;

    return (
      <>
        <div className={styles.container}>
          <div className={styles.controls}>
            <PlayStopBtn onClickCallback={this.playStopBtnOnClick}
                         isActive={isAnimationActive}
                         pauseMod={true}
            />
            <ResetBtn onClickCallback={this.resetBtnOnClick}
                      resetCounter={resetAnimationCounter}
            />
            <Checkbox onClickCallback={this.decodeOnPauseBtnOnClick}
                      isActive={isDecodeOnPause}
            />
            <CustomInput onChangeCallback={this.customInputOnChange}
                         label='Step'
                         value={stepValue}
                         placeholder='0'
                         name='step'
                         type='text'
                         inputStyles={{width: '60px', textAlign: 'center'}}
            />
            <CustomInput onChangeCallback={this.customInputOnChange}
                         label='Delay'
                         value={delayValue}
                         placeholder='0'
                         name='delay'
                         type='text'
                         inputStyles={{width: '60px', textAlign: 'center'}}
            />
            <CustomInput onChangeCallback={this.customInputOnChange}
                         label='Min Char Code'
                         value={minCharCodeValue}
                         placeholder='65'
                         name='minCharCode'
                         type='text'
                         inputStyles={{width: '60px', textAlign: 'center'}}
            />
            <CustomInput onChangeCallback={this.customInputOnChange}
                         label='Max Char Code'
                         value={maxCharCodeValue}
                         placeholder='90'
                         name='maxCharCode'
                         type='text'
                         inputStyles={{width: '60px', textAlign: 'center'}}
            />
          </div>
          <div className={cx(styles.frame, {[styles.viewCodeActive]: viewCode})}>
            { viewCode
              ? <>
                <div className={styles.viewCodeTitle}>
                  <span>Sandbox Preset:</span>
                  <span>jsx</span>
                </div>
                <SyntaxHighlighter language="jsx" style={prism}>
                  {this.getCurrPresetCode()}
                </SyntaxHighlighter>
                <div className={styles.copyToClipboard} onClick={this.copyToClipboard}>Copy To Clipboard</div>
              </>
              : <SequentialTextCalculation
                  strArr={animationTexts}
                  step={+stepValue}
                  delay={+delayValue}
                  minCharCode={+minCharCodeValue}
                  maxCharCode={+maxCharCodeValue}
                  isAnimationActive={isAnimationActive}
                  animationResetTrigger={resetAnimationCounter}
                  decodingWhenAnimationIsPaused={isDecodeOnPause}
                  animationEndCallback={this.animationEnd}
                />
            }
            <div className={styles.viewCodeBtn} onClick={this.viewCodeToggle}>
              { viewCode
                ? <span>View Sandbox Preset</span>
                : <span>View Usage Code</span>
              }
            </div>
          </div>
        </div>
        <CustomInputsList list={animationTexts} onChangeCallback={this.customInputOnChange} />
      </>
    );
  }
}

export default Sandbox;
