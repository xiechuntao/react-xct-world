import React, { Component } from 'react';
import styles from './index.scss';

export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.createAMap();
  }

  createAMap() {
    let map = new AMap.Map('container', {
      viewMode: '3D',
      pitch: 50,
      zoom: 11,
      center: [120.264253, 30.183805],
    });
  }

  render() {
    return <div id="container" className={styles.container}></div>;
  }
}
