import React, { Component } from 'react';
import { PageContentComponent } from '../../../components/page-content.component/page-content.component';
import { ContentHeaderComponent } from '../../../components/content-header/content-header.component';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
export class HomeComponentForm extends Component<any, any, any> {
    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(this.props.form)
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    formItem = [
        {
            lableName: '图书名称',
            name: 'bookName',
            errorMsg: '必填',
            type: 'input'
        },
        {
            lableName: '图书编号',
            name: 'bookNum',
            errorMsg: '必填',
            type: 'input'
        },
        {
            lableName: '作者',
            name: 'authoer',
            errorMsg: '必填',
            type: 'input'
        }, {
            lableName: '出版社名称',
            name: 'publishName',
            errorMsg: '必填',
            type: 'input'
        },
        {
            lableName: '出版日期',
            name: 'publishDate',
            errorMsg: '必填',
            type: 'input'
        },
        {
            lableName: '图书类别',
            name: 'bookType',
            errorMsg: '必填',
            type: 'input'
        },
        {
            lableName: '库存',
            name: 'bookCount',
            errorMsg: '必填',
            type: 'input'
        },
        {
            lableName: '可用天数',
            name: 'avlidateDate',
            errorMsg: '必填',
            type: 'input'
        }
    ];
    createFormItem() {
        let resDomObjs = [];
        for (let item of this.formItem) {
            if (item.type == 'input') {
                resDomObjs.push(this.createInputFormItem(item));
            }
        }
        return resDomObjs;
    }
    createInputFormItem(item: any) {
        return (
            <Form.Item label={item.lableName} key={item.lableName}>
                {this.props.form.getFieldDecorator(item.name, {
                    rules: [, {
                        required: true, message: item.errorMsg,
                    }],
                })(
                    <Input autoComplete="off"/>
                )}
            </Form.Item>
        );
    }
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 8 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 12 },
                sm: { span: 9 },
            },
        };
        return (
            <div className="admin-home">
                <ContentHeaderComponent title="首页"></ContentHeaderComponent>
                <Form onSubmit={this.handleSubmit} {...formItemLayout} className="login-form">
                    {this.createFormItem()}
                    <Button type="primary" htmlType="submit" style={{width: '70xp', margin: '0px auto', display: 'block'}}>提交</Button>
                </Form>
            </div>
        );
    }
}
export const HomeComponent = Form.create({ name: 'normal_login' })(HomeComponentForm);