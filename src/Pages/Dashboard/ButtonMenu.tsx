import React, { FC } from "react";
import { TButtonMenu } from "./types";
import { gold } from "@ant-design/colors";
import { Button } from "antd";

export const ButtonMenu: FC<TButtonMenu> = ({ onClick, label }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        width: "100%",
        backgroundColor: gold[5],
        borderColor: gold[5],
        color: "black",
        fontWeight: 400,
      }}
    >
      {label}
    </Button>
  );
};
