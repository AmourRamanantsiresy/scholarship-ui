import { message } from "antd";
import { TMessages } from "./types";

export const messages: TMessages = {
  success: async () => {
    await message.success("Successful !", 3);
  },
  blank: async () => {
    await message.error("The input cannot be blank.", 3);
  },
  network: async () => {
    await message.error("Please verify your network.", 3);
  },
  server: async () => {
    await message.error("There is an internal error.", 3);
  },
  confirm: async () => {
    await message.error("Your password are no the same.", 3);
  },
};
