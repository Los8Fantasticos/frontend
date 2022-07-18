import {callApi} from "./services";
const service = "/UserManagement";

export const userManagementServices = {
    getAllUsers,
    createUser,
    deletePrivilege,
    getAllPrivileges,
  };

/**
 * Obtiene todos los usuarios
 * 
 */
async function getAllUsers() {
    return callApi(`${service}/Users`, "GET");
}

async function getAllPrivileges() {
    return callApi(`${service}/Privileges`, "GET");
}

/**
 * Crea un usuario
 * @param {*} data
 */
async function createUser(data) {
    return callApi(service, "POST", data);
}

async function deletePrivilege(data) {
    return callApi(service, "DELETE", data);
}