import {callApi} from "./services";
const service = "/User";

export const userManagementServices = {
    getById,
    createUser,
    deleteUser,
  };

/**
 * Obtiene todos los usuarios
 * 
 */
async function getById() {
    return callApi(`${service}/Users`, "GET");
}

/**
 * Crea un usuario
 * @param {*} data
 */
async function createUser(data) {
    return callApi(service, "POST", data);
}

async function deleteUser(data) {
    return callApi(service, "Delete", data);
}