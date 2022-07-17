import {callApi} from "./services";
const service = "/api/User";

export const userServices = {
    getAll,
    createUser,
  };

/**
 * Obtiene todos los usuarios
 * 
 */
async function getAll() {
    return callApi(service, "GET");
}

/**
 * Crea un usuario
 * @param {*} data
 */
async function createUser(data) {
    return callApi(service, "POST", data);
}