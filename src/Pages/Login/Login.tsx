import React from 'react';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Layout, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { whoami } from "../../Provider/authProvider";
import { TCredentials } from "../../Utils/types";

const { Item } = Form;

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values: TCredentials) => {
    whoami(values)
      .then((res) => {
        if (res.roles?.includes("admin")) {
          navigate("/dashboard");
        } else {
          navigate("/home");
        }
      })
      .catch((e) => {
        navigate("/error?message=user_not_fo und&code=404");
      });
  };

  return (
    <Layout>
      <Layout.Content className="full flex-center">
        <Form
          style={{
            width: "400px",
            borderRadius: "0.5rem",
            height: "60vh",
            paddingBottom: "2rem",
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
          <Item
            name="username"
            rules={[{ required: true, message: `Please input your username!` }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Item>
          <Item
            name="password"
            rules={[{ required: true, message: `Please input your password!` }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Item>

          <Item className="mt-2">
            <Button
              style={{ width: "100%", marginBottom: '1rem' }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <Button
              style={{ width: "100%",  marginBottom: '1rem' }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign Up
            </Button>
          </Item>
        </Form>
      </Layout.Content>
    </Layout>
  );
};

export default Login;
