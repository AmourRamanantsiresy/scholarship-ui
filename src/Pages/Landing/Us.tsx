import React, { FC, useContext } from "react";
import { Card, Col, Row } from "antd";
import { Typography, Layout, Space } from "antd";
import image from "../../assets/bg2.jpg";
import { APP_CONTEXT } from "../../Provider/context";

const { Title, Text } = Typography;
const { Content } = Layout;
const { Meta, Grid } = Card;

const Us: FC = () => {
  //get Context
  const context = useContext(APP_CONTEXT);
  const $ = (className: string) =>
    context.scrollHandling[0] === 1 ? className : "op-0";

  return (
    <Row
      id="second-page"
      justify="space-around"
      className="bg-light full flex-center"
    >
      <Col span={12}>
        <img src={image} className="half-inline" alt="" />
      </Col>
      <Col span={11}>
        <Row align="middle" className="flex-column" justify="space-around">
          <Title className={$("toLeft")}>
            We are .........................
          </Title>
          <Text className={$("toLeft wait-4")}>
            We are an association that help students to find their ideal
            scholarship!
          </Text>
        </Row>
      </Col>
    </Row>
  );
};

export default Us;
