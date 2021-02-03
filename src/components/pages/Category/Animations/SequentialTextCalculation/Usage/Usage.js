import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";

import SEQUENTIAL_TEXT_CALCULATION_USAGE_CODE from './SequentialTextCalculationUsageCode.js';
import styles from './Usage.module.scss';

class Usage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <SyntaxHighlighter language="jsx" style={prism}>
          {SEQUENTIAL_TEXT_CALCULATION_USAGE_CODE}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Usage;
