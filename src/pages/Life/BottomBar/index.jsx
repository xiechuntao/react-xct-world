import React, { Component } from 'react';
import { DownSquareOutlined } from '@ant-design/icons';

import styles from './index.scss';
import Grid1 from './grid-1';
import Grid2 from './grid-1';
import Grid3 from './grid-1';
import Grid4 from './grid-1';

const arrowSty = {
  position: 'absolute',
  left: '50%',
  transform: 'translate(-14px, 0%)',
};

export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  toggleBar() {
    // this.arrowSty = { height: 20 };
    // this.arrow.current.style.color = 'orange';
  }

  render() {
    return (
      <div className="container" className={styles.container}>
        <span ref={this.arrow} style={arrowSty} onClick={this.toggleBar}>
          <DownSquareOutlined style={{ fontSize: '28px', color: '#08c' }} />
        </span>
        <div className="grids">
          <div>
            <Grid1 />
          </div>
          <div>
            <Grid2 />
          </div>
          <div>
            <Grid3 />
          </div>
          <div>
            <Grid4 />
          </div>
        </div>
      </div>
    );
  }
}
