import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Layout, message, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { TCredentials } from '../../Utils/types';
import httpClient from '../../Utils/httpClient';
import { messages } from '../Dashboard/messages';
import { setCredential } from '../../Utils/handleCredentials';

const { Item } = Form;

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values: { username: string; password: string; confirm: string }) => {
    if(values.password === values.confirm){
        httpClient
      .put('/user', { username: values.username, password: values.password })
      .then((res) => {
        localStorage.setItem('userId', res.data.id);
        setCredential({password: values.password, username: values.username})
        navigate('/candidate');
      })
      .catch((e) => {
        navigate('/error?message=user_not_fo und&code=404');
      });
    }
    else {
      messages.confirm()
    }
  };

  return (
    <Layout>
      <Layout.Content className="full flex-center">
        <Form
          style={{
            width: '400px',
            borderRadius: '0.5rem',
            height: '60vh',
            paddingBottom: '2rem',
          }}
          className="login-form shadow-1 p-3"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Row align="middle" justify="center">
            <Col>
              <Typography.Title>Login</Typography.Title>
            </Col>
          </Row>
          <Item name="username" rules={[{ required: true, message: `Please input your username!` }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Item>
          <Item name="password" rules={[{ required: true, message: `Please input your password!` }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Item>
          <Item name="confirm_password" rules={[{ required: true, message: `Please confirm your password!` }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Item>

          <Item className="mt-2">
            <Button
              style={{ width: '100%', marginBottom: '1rem' }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Create account
            </Button>
            <Button
              style={{ width: '100%', marginBottom: '1rem' }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={() => navigate('/loading')}
            >
              Already have account
            </Button>
          </Item>
        </Form>
      </Layout.Content>
    </Layout>
  );
};

export default Login;
