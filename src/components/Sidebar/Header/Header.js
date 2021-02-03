import React, { Component } from 'react';
import { Link } from "react-router-dom";
import cx from "classnames";

import LINKS from '../links';
import { CATEGORIES } from 'constants/categories';
import styles from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTitle: '',
      isTitleCollapse: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.checkIsActiveCategoryItem()
    }, 500);

    document.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      clearTimeout(this.timerId);

      if (this.getActiveCategoryItem()) {
        this.setState(
          {isTitleCollapse: true},
          () => {
            this.timerId = setTimeout(
              this.checkIsActiveCategoryItem,
              800
            )
          }
        );
      } else {
        this.setState({
          isTitleCollapse: true
        });
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!this.state.isTitleCollapse && document.documentElement.scrollTop > 30) {
      this.setState({isTitleCollapse: true});
    } else if (this.state.isTitleCollapse && document.documentElement.scrollTop <= 30) {
      this.checkIsActiveCategoryItem();
    }
  }

  checkIsActiveCategoryItem = () => {
    const activeCategoryItem = this.getActiveCategoryItem();

    if (this.props.category && activeCategoryItem) {
      this.setState({
        currentTitle: activeCategoryItem.name,
        isTitleCollapse: false
      });
    }
  }

  getActiveCategoryItem = () => {
    if (!this.props.category) return null;

    return LINKS[this.props.category].find(currElem => currElem.path === this.props.path);
  }

  render() {
    const {
      category = 'main'
    } = this.props;

    const {
      isTitleCollapse,
      currentTitle
    } = this.state;

    return (
      <div className={cx(
        styles.container,
        { [styles.componentsSection]: CATEGORIES.components.key === category,
          [styles.animationsSection]: CATEGORIES.animations.key === category,
          [styles.utilsSection]: CATEGORIES.utils.key === category
        }
      )}>
        <Link className={styles.logo} to='/'>
          <span>Mnemo</span>
          <span>{CATEGORIES[category].name}</span>
        </Link>
        <div
          className={cx(
            styles.titleWrap,
            {[styles.titleWrapCollapse]: isTitleCollapse}
          )}
        >
          <h1 className={cx(styles.title, 'moduleTitle')}>
            {currentTitle}
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
