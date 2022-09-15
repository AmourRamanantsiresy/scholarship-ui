import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { verifyLocalCredentials } from "../../Utils/handleCredentials";
import { useNavigate, useParams } from "react-router-dom";

const SpinIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const Loading = () => {
  const navigate = useNavigate();
  const { message, code } = useParams<{ message?: string; code?: string }>();
  useEffect(() => {
    setTimeout(() => {
      if (message !== undefined) {
        navigate("/error/message=" + message + "&code=" + code);
      } else if (verifyLocalCredentials()) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    }, 1000);
  }, []);

  return (
    <div className="full flex-center">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
