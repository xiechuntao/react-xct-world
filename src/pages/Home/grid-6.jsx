import React, { Component } from 'react';
import styles from './center.scss';
import LiquidFill from '../../components/charts/LiquidFill';

export default class Home extends Component {
  render() {
    return (
      <div id="centerChart" className={styles.container}>
        <LiquidFill />
      </div>
    );
  }
}
