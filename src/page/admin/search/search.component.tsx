import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Checkbox, Row, Col, Table, Modal, Select
} from 'antd';
import { ContentHeaderComponent } from '../../../components/content-header/content-header.component';
export class SearchComponent extends Component<any, any, any> {
  columns = [
    {
      title: '书名',
      dataIndex: 'bookName',
      key: 'bookName',
      render: (text: any) => text
    },
    {
      title: '种类',
      dataIndex: 'type',
      key: 'type',
      render: (text: any) => text
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
      render: (text: any) => text
    },
    {
      title: '出版社',
      dataIndex: 'press',
      key: 'press',
      render: (text: any) => text
    }, {
      title: '操作',
      key: 'operate',
      render: (text: any, record: any) => {
        return (
          <div>
            <span onClick={() => this.editClick(record.id)} style={{ cursor: 'pointer' }}>编辑</span>&nbsp;|&nbsp;
            <span onClick={() => this.deleteClick(record.id)} style={{ cursor: 'pointer' }}>删除</span>
          </div>
        );
      }
    }
  ];
  listData = [
    {
      id: 1,
      bookName: '人月神话',
      author: 'zengwe',
      press: '北京出版社',
      type: '计算机',
      key: '1'
    }
  ];
  editClick(id: number) {
    console.log(id);
  }
  deleteClick(id: number) {
    Modal.confirm({
      title: '确认删除这本书吗？',
      content: '请谨慎操作',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk: () => {

      }
    });
  }
  handleChange() {

  }
  render() {
    return (
      <div>
        <ContentHeaderComponent title={'查询'}></ContentHeaderComponent>
        <div style={{padding: '20px 20px 20px 20px'}}>
          <Form>
            <Row>
              <Col span={6}>
                <Row>
                  <Col span={8} style={{ lineHeight: '36px', textAlign: 'right' }}>类别：</Col>
                  <Col span={16}>
                    <Select
                      style={{ width: 200 }}
                      placeholder="Select a person"
                      optionFilterProp="children"
                      onChange={this.handleChange}
                    >
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">Lucy</Select.Option>
                      <Select.Option value="tom">Tom</Select.Option>
                    </Select>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                <Row>
                  <Col span={6} style={{ lineHeight: '36px', textAlign: 'right' }}>类别2：</Col>
                  <Col span={16}>
                    <Input></Input>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="book-list" style={{padding: '20px 20px 20px 20px'}}>
          <Table columns={this.columns} dataSource={this.listData} />
        </div>
      </div>
    );
  }
}