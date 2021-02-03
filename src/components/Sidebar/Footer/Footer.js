import React from 'react';
import cx from 'classnames';

import { ReactComponent as GitHubIcon } from "./img/github.svg";
import { CATEGORIES } from 'constants/categories';
import styles from './Footer.module.scss';

export default function(props) {
  const {
    category = 'main'
  } = props;

  return (
    <a href='https://github.com/jmnemo'
       target='_blank'
       className={cx(
         styles.footer,
         { [styles.componentsSection]: CATEGORIES.components.key === category,
           [styles.animationsSection]: CATEGORIES.animations.key === category,
           [styles.utilsSection]: CATEGORIES.utils.key === category
         }
       )}
    >
      Made with coffee in Odessa<br/>by Yevhen Klymentiev
      <GitHubIcon />
    </a>
  );
}
