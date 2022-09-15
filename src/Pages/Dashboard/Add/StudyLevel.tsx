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

export const StudyLevel = () => {
  const [studyLevel, setStudyLevel] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudyLevel(e.target.value || "");
  };

  const onSubmit = () => {
    if (studyLevel.length > 0) {
      httpClient
        .put("/study-level", [{ name: studyLevel }])
        .then((res) => {
          messages.success();
          setStudyLevel("");
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
          <Text>StudyLevel</Text>
          <Input
            value={studyLevel || ""}
            onChange={handleChange}
            placeholder="StudyLevel"
          />
          <Button onClick={onSubmit}>Add</Button>
        </Space>
      </Col>
    </Row>
  );
};
