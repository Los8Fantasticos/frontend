import {callApi} from "./services";
const service = "/Auth";

export const loginService = {
    login,
  };

  async function login(data) {
    return callApi(`${service}/Login`, "POST", data);
}
