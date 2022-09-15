import React, { FC, useState } from 'react';
import { Button, Col, Layout, Row, Space, Table, Typography } from 'antd';
import { gold } from '@ant-design/colors';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { clearCredentials } from '../../Utils/handleCredentials';
import { DashboardMenu, TDashboardMenu } from './types';
import { handleMenu } from './utils';
import { ButtonMenu } from './ButtonMenu';
import { Add } from './Add';
import { ScholarshipTable } from './View/ScholarshipTable';

const { Header, Sider, Content, Footer } = Layout;
const { Title, Text } = Typography;

export const Dashboard: FC = () => {
  const navigation = useNavigate();
  const [menu, setMenu] = useState<TDashboardMenu>({
    status: false,
    currentMenu: DashboardMenu.ADD,
  });
  const { toggleMenu, switchMenu } = handleMenu(setMenu);
  const logout = () => {
    clearCredentials();
    navigation('/');
  };

  return (
    <Layout>
      <Header>
        <Row justify="space-between" align="middle">
          <Col span={1}>
            <MenuOutlined style={{color: gold[5], fontSize: "1.5rem" }}/>
          </Col>
          <Col span={20} style={{ justifySelf: 'start' }}>
            <Title
              style={{
                color: gold[5],
                transform: 'translateY(20%)',
                fontSize: '30px',
              }}
            >
              M-Scholarship
            </Title>
          </Col>
          <Col span={1}>
            <Button
              onClick={logout}
              style={{
                backgroundColor: gold[5],
                borderColor: gold[5],
                color: 'black',
                fontWeight: 400,
              }}
            >
              Logout
            </Button>
          </Col>
        </Row>
      </Header>
      <Layout style={{ minHeight: 'max-content' }}>
        <Sider hidden={menu.status} style={{ minHeight: 'max-content' }}>
          <Row justify="center" className="mt-3">
            <Space direction="vertical" size="large">
              <ButtonMenu label="CANDIDATE" onClick={() => switchMenu(DashboardMenu.CANDIDATE)} />
              <ButtonMenu label="SCHOLARSHIP" onClick={() => switchMenu(DashboardMenu.SCHOLARSHIP)} />
              <ButtonMenu label="ADD" onClick={() => switchMenu(DashboardMenu.ADD)} />
            </Space>
          </Row>
        </Sider>
        <Content style={{ height: '89.8vh' }}>
          {menu.currentMenu === DashboardMenu.ADD ? (
            <Add />
          ) : menu.currentMenu === DashboardMenu.SCHOLARSHIP ? (
            <ScholarshipTable />
          ) : (
            <Table></Table>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};
