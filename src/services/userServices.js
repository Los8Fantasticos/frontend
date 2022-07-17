import {callApi} from "./services";
const service = "/UserManagement";

export const userServices = {
    getAll,
    createUser,
  };

/**
 * Obtiene todos los usuarios
 * 
 */
async function getAll() {
    return callApi(`${service}/Users`, "GET");
}

/**
 * Crea un usuario
 * @param {*} data
 */
async function createUser(data) {
    return callApi(service, "POST", data);
}