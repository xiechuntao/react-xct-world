import React, { Component } from 'react';
import styles from './index.scss';
import BottomBar from './BottomBar/index.jsx';

export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.createAMap();
  }

  createAMap() {
    let map = new AMap.Map('map_container', {
      viewMode: '3D',
      pitch: 50,
      zoom: 11,
      center: [120.264253, 30.183805],
    });
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div id="map_container" className={styles.container}></div>
        <BottomBar />
      </div>
    );
  }
}
