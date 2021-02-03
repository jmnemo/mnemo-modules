import React, { Component } from 'react';
import styles from './SequentialTextCalculation.module.scss';

class SequentialTextCalculation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itr: 1,
      resultText: ['']
    }
  }

  componentDidMount() {
    if (this.props.isAnimationActive) {
      this.nextStepAnimation();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      isAnimationActive,
      animationResetTrigger
    } = this.props;

    if (animationResetTrigger !== prevProps.animationResetTrigger) {
      this.resetAnimation();

      return;
    }

    if (isAnimationActive && (isAnimationActive !== prevProps.isAnimationActive)) {
      this.nextStepAnimation();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.animationTimerId);
  }

  resetAnimation = () => {
    clearTimeout(this.animationTimerId);

    this.setState(
      {
        itr: 1,
        resultText: ['']
      },
      () => {
        this.nextStepAnimation();
      }
    )
  }

  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandomValues = (remainingLength, result = '') => {
    if (!remainingLength || remainingLength < 0) return result;

    const {
      minCharCode = 65,
      maxCharCode = 91
    } = this.props;

    if (remainingLength === 1) {
      return result + String.fromCharCode(this.getRandomNumber(minCharCode, maxCharCode + 1));
    }

    return this.getRandomValues(
      remainingLength - 1,
      result + String.fromCharCode(this.getRandomNumber(minCharCode, maxCharCode + 1))
    );
  }

  getLengthOfRandomValues = (itr, step, strLength) => {
    if (itr < step) {
      if (itr > strLength) {
        return strLength;
      }

      return itr;
    }

    if (itr >= strLength) {
      return (strLength + step) - itr;
    }

    return step;
  }

  animationEnd = () => {
    const { animationEndCallback } = this.props;

    this.setState({
      itr: 1
    });

    if (animationEndCallback) {
      animationEndCallback();
    }
  }

  getTheGreatestLength = (strArr) => {
    let greatestLength = 0;

    strArr.forEach(currElem => {
      if (currElem.length > greatestLength) {
        greatestLength = currElem.length
      }
    });

    return greatestLength;
  }

  nextStepAnimation = () => {
    const {
      itr
    } = this.state;

    const {
      strArr = [''],
      step = 0,
      isAnimationActive,
      decodingWhenAnimationIsPaused
    } = this.props;

    if (itr > this.getTheGreatestLength(strArr) + step) {
      this.animationEnd();

      return;
    }

    const resultText = strArr.map((currStr, index) => {
      const trueTextPart = !isAnimationActive && decodingWhenAnimationIsPaused
                             ? strArr[index].substring(0, itr)
                             : strArr[index].substring(0, itr - step);
      const lengthOfRandomValues = this.getLengthOfRandomValues(itr, step, strArr[index].length);
      const randomTextPart = this.getRandomValues(lengthOfRandomValues);

      return !isAnimationActive && decodingWhenAnimationIsPaused
               ? trueTextPart
               : (trueTextPart + randomTextPart);
    });

    this.setState(
      prevState => ({
        itr: prevState.itr + 1,
        resultText: resultText
      }),
      () => {
        if (!isAnimationActive) return;

        this.nextStepAnimationWithDelay();
      }
    );
  }

  nextStepAnimationWithDelay = () => {
    this.animationTimerId = setTimeout(() => {
      this.nextStepAnimation();
    }, this.props.delay || 0);
  }

  renderResultText = () => {
    const {
      resultText
    } = this.state;

    return resultText.map((currStr, index) => (
      <div key={index}>
        {currStr}
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderResultText()}
      </div>
    )
  }
}

export default SequentialTextCalculation;
