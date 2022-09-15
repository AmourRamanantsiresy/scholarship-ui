import { TCredentials } from "../Utils/types";
import { setCredential } from "../Utils/handleCredentials";
import httpClient from "../Utils/httpClient";

export const whoami = async (credentials: TCredentials) => {
  setCredential(credentials);
  const { data } = await httpClient.get("/whoami");
  return data;
};
