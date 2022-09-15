import { Layout, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Error: FC = () => {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nav('/login');
    }, 3000);
  }, []);

  return (
    <Layout className="full flex-center">
      <Content>
        <Typography.Title>There is an error, you will be redirected to the login page</Typography.Title>
      </Content>
    </Layout>
  );
};
