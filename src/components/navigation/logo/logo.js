import React, { Component } from 'react'
import logoimg from './theater-masks.svg';

export default class logo extends Component {
  render() {
    return (
      <div>
        <img src={logoimg} width="150"></img>
      </div>
    )
  }
}
