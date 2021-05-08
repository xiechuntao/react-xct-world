import React, { Component } from 'react';

import { Calendar } from 'antd';

let containerStyle = {
  height: '100%',
  overflow: 'auto',
};

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default class Home extends Component {
  render() {
    return (
      <div id="centerChart" style={containerStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    );
  }
}
