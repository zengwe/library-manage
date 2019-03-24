import React, { Component } from "react";
import "./registry.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from 'react-router-dom';
export class RegistryComponent extends Component<any> {
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
          <div className='sub-title'>注册</div>
          <Form className="login-form">
            <Form.Item>
              {getFieldDecorator("code", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                size="large"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="借书证卡号"
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
            <Form.Item>
              {getFieldDecorator("repassword", {
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
                  placeholder="请再次输入密码"
                />
              )}
            </Form.Item>
            <div className="btn-area">
              <Button type="primary" size="large" className="submit-btn">注册</Button>
              <Link className="turn-registry" to="/login/"> 已有账号，去登录> </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export let RegistryComponentForm = Form.create()(RegistryComponent);
