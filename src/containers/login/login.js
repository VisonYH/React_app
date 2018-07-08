import React from 'react';
import Logo from '../../components/logo/logo';
import { InputItem, List, WingBlank, WhiteSpace, Button } from 'antd-mobile'
export default class Login extends React.Component{
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
  }

  register() {
    console.log(this.props)
    this.props.history.push('/register')
  }
  login() {
    this.props.login()
  }
  render() {
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <InputItem>登录</InputItem>
            <WhiteSpace />
          </List>
          <Button type="primary" onClick={this.login}>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary" >注册</Button>
        </WingBlank>
        <InputItem>
          <List></List>
        </InputItem>
      </div>
    )
  }
}