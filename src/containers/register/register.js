import React from 'react';
import { List, InputItem, WhiteSpace, Button, Radio } from "antd-mobile";
import Logo from '../../components/logo/logo'

const RadioItem = Radio.RadioItem
export default class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatPwd: '',
      type: 'genius',  // or boss
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister() {
    console.log(this.state)
  }
  render() {
    
    return (
      <div>
        <Logo />
        <List>
          <InputItem onChange={(val) => {this.handleChange('user', val)}}>用户名</InputItem>
          <WhiteSpace />
          <InputItem type="password" onChange={(val) => {this.handleChange('pwd', val)}}>密码</InputItem>
          <WhiteSpace />
          <InputItem type="password" onChange={(val) => {this.handleChange('repeatPwd', val)}}>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type === 'genius'} onChange={() => {this.handleChange('type','genius')}}>牛人</RadioItem>
          <RadioItem checked={this.state.type === 'boss'} onChange={(e) => {this.handleChange('type','boss'); console.log(e)}}>BOSS</RadioItem>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleRegister}>注册</Button>
        </List>
      </div>
    )
  }
}