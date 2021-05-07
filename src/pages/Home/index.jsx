import React, { Component } from 'react';
import styles from './index.scss';
import Center from './center';
import Grid1 from './grid-1';
import Grid2 from './grid-2';
import Grid3 from './grid-3';
import Grid4 from './grid-4';
import Grid5 from './grid-5';
import { Button } from 'antd';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.center}>
          <Center />
        </div>
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
        <div className="gird-5">
          <Grid5 />
        </div>
        <div>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <br />
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
          <Button type="text" danger>
            Text
          </Button>
        </div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
