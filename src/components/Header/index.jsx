import React, { Component } from 'react';
import axios from 'axios';
import styles from './index.scss';
const BASE_URL = URL.BASE_URL;

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      // userInfoUrl: 'lorem',
      name: '',
    };
  }

  componentDidMount() {
    const URL = `${BASE_URL}/user/getMe`;
    axios
      .get(URL)
      .then(res => {
        this.setState({
          userInfoUrl: URL,
          name: res.data.data.nick_name,
        });
      })
      .catch(error => {
        console.log(error);
        thissetState({
          isLoaded: false,
          error: error,
        });
      });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="name">{BASE_URL + ' ' + this.state.userInfoUrl}</div>
        <div className="avatar">{this.state.name}</div>
      </div>
    );
  }
}
