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

export const Language = () => {
  const [language, setLanguage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value || "");
  };

  const onSubmit = () => {
    if (language.length > 0) {
      httpClient
        .put("/language", [{ name: language }])
        .then((res) => {
          messages.success();
          setLanguage("");
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
          <Text>Language</Text>
          <Input
            value={language || ""}
            onChange={handleChange}
            placeholder="Language"
          />
          <Button onClick={onSubmit}>Add</Button>
        </Space>
      </Col>
    </Row>
  );
};
