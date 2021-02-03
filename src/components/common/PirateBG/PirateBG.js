import React, { Component } from 'react';

import { ReactComponent as PirateIcon } from './img/pirate.svg';
import { ReactComponent as SwordsIcon } from './img/swords.svg';

class PirateBG extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgIndex: this.getRandomNumber(0, 2)
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(
      () => {
        this.setState({imgIndex: this.getRandomNumber(0, 2)});
      },
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  renderBG = () => {
    return [
      <PirateIcon />,
      <SwordsIcon />
    ][this.state.imgIndex];
  }

  render() {
    return (
      <>
        {this.renderBG()}
      </>
    );
  }
}

export default PirateBG;
