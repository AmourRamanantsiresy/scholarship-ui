import { Layout, Row, Typography } from "antd";
import React, { FC, useContext, useEffect } from "react";
import Banner from "./Banner";
import Us from "./Us";

const { Content } = Layout;
const { Title, Text } = Typography;

const Landing: FC = () => {
  return (
    <Layout>
      <Content>
        <Banner />
        <Us />
      </Content>
    </Layout>
  );
};

export default Landing;
