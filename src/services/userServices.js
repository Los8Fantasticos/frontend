import {callApi} from "./services";
const service = "/Users";

export const userServices = {
    getById,
    createUser,
    deleteUser,
    editUser
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

/**
 * Elimina logicamente a un usuario
 * @param {*} data
 */
async function deleteUser(data) {
    return callApi(service, "DELETE", data);
}

/**
 * Edita un usuario
 * @param {*} data
 */
 async function editUser(data) {
    return callApi(service, "PUT", data);
}