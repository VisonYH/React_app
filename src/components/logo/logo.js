import React from 'react'
import LOGO from './job.png'
export default class Logo extends React.Component{
  render() {
    return (
      <img src={LOGO} style={{margin: "50px auto", display: "block"}} alt="logo"/>
    )
  }
}