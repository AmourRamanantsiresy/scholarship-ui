import { Button, Col, Row, Space, Layout, Typography } from "antd";
import React, { FC, useContext, useEffect, useState } from "react";
import { Divisor } from "../../Common/Shape";
import { bg } from "../../Utils/styles";
import { scrollTo } from "../../Utils/Hooks/useScroll";
import image from "../../assets/bg1.jpg";
import { APP_CONTEXT } from "../../Provider/context";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title, Text } = Typography;

const Banner: FC = () => {
  // get context
  const nav = useNavigate();
  const context = useContext(APP_CONTEXT);
  const $ = (className: string) =>
    context.scrollHandling[0] === 0 ? className : "op-0";

  return (
    <>
      <Row className="full bg-light" align="middle">
        <Col span={3}></Col>
        <Col span={8} className="front">
          <Space direction="vertical" size="large">
            <Content>
              <Row align="middle">
                <Title className={"fs-title " + $("toRight")}>
                  Scholarship
                </Title>
                <Divisor className={"wait-1 " + $("toBottom")} />
                <Text className={"wait-1 " + $("toLeft")}>for everyone</Text>
              </Row>
              <Text className={"wait-3 " + $("toTop")}>
                Do you wanna study in another country?
              </Text>
            </Content>
            <Space size="large" className="mt-3">
              <Button
                style={bg.yellow}
                className={"btn-home op-0 " + $("toRight wait-4")}
                type="primary"
                size="large"
                shape="round"
                onClick={()=> {nav("/loading")}}
              >
                Get Started
              </Button>
              <Button
                onClick={() => scrollTo(1)}
                className={"btn-home op-0 " + $("wait-5 toRight")}
                type="primary"
                size="large"
                shape="round"
              >
                More about us
              </Button>
            </Space>
          </Space>
        </Col>
        <Col>
          <img
            className={"wait-2 half-inline " + $("toLeft")}
            src={image}
            alt=""
          />
        </Col>
      </Row>
    </>
  );
};

export default Banner;
