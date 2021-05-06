import React, { Component } from 'react';
import './index.scss';
import Center from './Center';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="center"></div>
        <div>Hello Home Page;</div>
        <div>
          <Center />
        </div>
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
