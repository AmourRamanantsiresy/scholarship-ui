import {
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Space,
  Typography,
} from "antd";
import React, { ChangeEvent, FormEvent, useState } from "react";
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

export const Amount = () => {
  const [amount, setAmount] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value || "");
  };

  const onSubmit = () => {
    if (amount.length > 0 || /\D/.test(amount)) {
      httpClient
        .put("/amount", [{ amount }])
        .then((res) => {
          messages.success();
          setAmount("");
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
          <Text>Amount</Text>
          <Input
            value={amount || ""}
            onChange={handleChange}
            type="number"
            placeholder="Amount"
          />
          <Button onClick={onSubmit}>Add</Button>
        </Space>
      </Col>
    </Row>
  );
};
