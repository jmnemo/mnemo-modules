import React, { Component } from 'react';
import cx from 'classnames';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import PlayStopBtn from "components/common/form-elements/PlayStopBtn/PlayStopBtn";
import SequentialTextCalculation from 'components/m-modules/animations/SequentialTextCalculation/SequentialTextCalculation';
import PRESETS from './presets';
import styles from './Examples.module.scss';

class Examples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      presets: PRESETS,
      presetsState: PRESETS.map(() => false),
      viewCode: false,
      activePresetIndex: 0
    }
  }

  playStopBtnOnClick = (index) => {
    const presetsState = this.state.presetsState.map(() => false);

    presetsState[index] = !this.state.presetsState[index];

    this.setState({
      presetsState: presetsState,
      activePresetIndex: index
    });
  }

  renderPresetBtns = () => {
    return this.state.presetsState.map((currElem, index) => (
      <div key={index} className={styles.presetBtn}>
        <PlayStopBtn playText={`Preset ${index + 1}`}
                     stopText={`Preset ${index + 1}`}
                     isActive={this.state.presetsState[index]}
                     onClickCallback={() => this.playStopBtnOnClick(index)}
        />
      </div>
    ));
  }

  renderPresetExample = () => {
    return this.state.presets.map((currPreset, index) => (
      <React.Fragment key={index}>
        { this.state.presetsState[index]
          ? <SequentialTextCalculation
              strArr={currPreset.strArr}
              step={currPreset.step}
              delay={currPreset.delay}
              minCharCode={currPreset.minCharCode}
              maxCharCode={currPreset.maxCharCode}
              isAnimationActive={true}
            />
          : null
        }
      </React.Fragment>
    ));
  }

  viewCodeToggle = () => {
    this.setState(prevState => ({
      viewCode: !prevState.viewCode
    }));
  }

  getCurrPresetCode = () => {
    const {
      presets,
      activePresetIndex
    } = this.state;

    const {
      strArr,
      step,
      delay,
      minCharCode,
      maxCharCode,
    } = presets[activePresetIndex];

    return (
`<SequentialTextCalculation
  strArr={["${strArr.join('", "')}"]}
  step={${step}}
  delay={${delay}}
  minCharCode={${minCharCode}}
  maxCharCode={${maxCharCode}}
  isAnimationActive={true}
/>`
    );
  }

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.getCurrPresetCode());
  }

  render() {
    const {
      presetsState,
      activePresetIndex,
      viewCode
    } = this.state;

    return (
      <>
        <div className={styles.presetBtns}>
          {this.renderPresetBtns()}
        </div>
        <div className={cx(styles.presetFrame, {[styles.viewCodeActive]: viewCode})}>
          { viewCode
            ? <div className={styles.codeWrap}>
                <div className={styles.viewCodeTitle}>
                  <span>Preset{activePresetIndex + 1}:</span>
                  <span>jsx</span>
                </div>
                <SyntaxHighlighter language="jsx" style={prism}>
                  {this.getCurrPresetCode()}
                </SyntaxHighlighter>
                <div className={styles.copyToClipboard} onClick={this.copyToClipboard}>Copy To Clipboard</div>
              </div>
            : this.renderPresetExample()
          }
          <div className={styles.viewCodeBtn} onClick={this.viewCodeToggle}>
            { viewCode
              ? <span>View Example Preset</span>
              : <span>View Usage Code</span>
            }
          </div>
        </div>
      </>
    );
  }
}

export default Examples;
