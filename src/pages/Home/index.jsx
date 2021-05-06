import React, { Component } from 'react';
import './index.scss';
import Center from './center';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="center">
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
