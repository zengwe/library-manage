import React, { Component } from "react";
import "./login.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from 'react-router-dom';
export class LoginComponent extends Component<any> {
  handleSubmit = (e: Event) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <div className="login-center">
          <div className='title'>图书管理系统</div>
          <div className='sub-title'>登录</div>
          <Form className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                size="large"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                size="large"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="请输入密码"
                />
              )}
            </Form.Item>
            <div className="btn-area">
              <Button type="primary" size="large" className="submit-btn">登录</Button>
              <Link className="turn-registry" to="/registry/"> 没有账号，去注册> </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export let LoginComponentForm = Form.create()(LoginComponent);
