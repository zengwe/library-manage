import React, { Component } from 'react';
import './head.css';
import { Row, Col, Icon } from 'antd';
export class HeaderComponent extends Component {
  render() {
    return (
      <Row className="header-container">
        <Col span={5} className="web-logo"><Icon type="book" />&nbsp;图书管理系统</Col>
        <Col span={14}></Col>
        <Col span={5}>col-12</Col>
      </Row>
    );
  }
}