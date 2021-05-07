import React, { Component } from 'react';
import styles from './center.scss';
import Pie from '../../components/charts/Pie';

export default class Home extends Component {
  render() {
    return (
      <div id="centerChart" className={styles.container}>
        <Pie />
      </div>
    );
  }
}
