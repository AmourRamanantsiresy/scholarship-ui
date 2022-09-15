import { TCredentials } from "./types";

export const handleCredentials = () => ({
  username: localStorage.getItem("username") || "",
  password: localStorage.getItem("password") || "",
});

export const verifyLocalCredentials = () =>
  handleCredentials().password.length > 0;

export const setCredential = ({ username, password }: TCredentials): void => {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
};

export const getCredentials = (): TCredentials => {
  return {
    password: localStorage.getItem("password") || "",
    username: localStorage.getItem("username") || "",
  };
};

export const clearCredentials = () => {
  localStorage.clear();
};
