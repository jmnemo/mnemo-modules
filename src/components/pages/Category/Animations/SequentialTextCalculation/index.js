import React from 'react';

import Examples from './Examples/Examples';
import Sandbox from "./Sandbox/Sandbox";
import Usage from "./Usage/Usage";
import Api from "./Api/Api";
import Code from "./Code/Code";
import styles from './index.module.scss';

export default function SequentialTextCalculationPage() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className='moduleTitle'>Examples</h2>
        <div className='commonLine'/>
        <Examples />
      </div>
      <div>
        <h2 className='moduleTitle'>Sandbox</h2>
        <div className='commonLine'/>
        <Sandbox />
      </div>
      <div>
        <h2 className='moduleTitle'>Usage examples</h2>
        <div className='commonLine'/>
        <Usage />
      </div>
      <div>
        <h2 className='moduleTitle'>API</h2>
        <div className='commonLine'/>
        <Api />
      </div>
      <div>
        <h2 className='moduleTitle'>Code</h2>
        <div className='commonLine'/>
        <Code />
      </div>
    </div>
  );
}
