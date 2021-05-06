import React, { Component } from 'react';
import styles from './index.scss';
import Center from './center';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.center}>
          <Center />
        </div>
        <div>Hello Home Page;</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
