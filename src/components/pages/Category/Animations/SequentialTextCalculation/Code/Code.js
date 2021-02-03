import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";

import SEQUENTIAL_TEXT_CALCULATION_CODE from './SequentialTextCalculationCode.js';
import styles from './Code.module.scss';

class Code extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <SyntaxHighlighter language="jsx" style={prism}>
          {SEQUENTIAL_TEXT_CALCULATION_CODE}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Code;
