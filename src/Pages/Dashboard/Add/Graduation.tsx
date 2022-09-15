import { Button, Col, Input, message, Row, Space, Typography } from "antd";
import React, { ChangeEvent, useState } from "react";
import httpClient from "../../../Utils/httpClient";

const { Text } = Typography;

const messages = {
  success: () => {
    message.success("Added successfully", 3);
  },
  warnBlank: () => {
    message.warning("The input can't be blank", 3);
  },
  warnError: () => {
    message.warning("There is an error", 3);
  },
};

export const Graduation = () => {
  const [graduation, setGraduation] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGraduation(e.target.value || "");
  };

  const onSubmit = () => {
    if (graduation.length > 0) {
      httpClient
        .put("/graduation", [{ name: graduation }])
        .then((res) => {
          messages.success();
          setGraduation("");
        })
        .catch((err) => {
          messages.warnError();
        });
    } else {
      messages.warnBlank();
    }
  };

  return (
    <Row
      align="middle"
      justify="center"
      style={{ width: "100%", height: "100%" }}
    >
      <Col span={15}>
        <Space direction="vertical" size="large">
          <Text>Graduation</Text>
          <Input
            value={graduation || ""}
            onChange={handleChange}
            placeholder="Graduation"
          />
          <Button onClick={onSubmit}>Add</Button>
        </Space>
      </Col>
    </Row>
  );
};
