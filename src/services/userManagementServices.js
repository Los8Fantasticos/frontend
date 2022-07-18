import {callApi} from "./services";
const service = "/UserManagement";
const authService = "/Auth";

export const userManagementServices = {
    getAllUsers,
    createUser,
    deletePrivilege,
    getAllPrivileges,
    editPrivilege,
    getUserPrivileges,
    assignRolesToUser,
    createPrivilege
  };

/**
 * Obtiene todos los usuarios
 * 
 */
async function getAllUsers() {
    return callApi(`${service}/Users`, "GET");
}

/**
 * Obtiene todos los privilegios
 * 
 */
async function getAllPrivileges() {
    return callApi(`${service}/Privileges`, "GET");
}

/**
 * Crea un usuario
 * @param {*} data
 */
async function createUser(data) {
    return callApi(`${authService}/Register`, "POST", data);
}

/**
 * elimita un privilegio
 * @param {*} data
 */
async function deletePrivilege(data) {
    return callApi(service, "DELETE", data);
}

/**
 * Crea un usuario
 * @param {*} data
 */
async function editPrivilege(data) {
    return callApi(`${service}/Privileges`, "PUT", data);
}

/**
 * Obtiene privilegios de usuario
 * 
 */
 async function getUserPrivileges(data) {
    return callApi(`${service}/UserPrivileges/${data}`, "GET");
}

/**
 * Asigna roles al usuario
 * @param {*} id
 * @param {*} data
 */
 async function assignRolesToUser(id, data) {
    return callApi(`${service}/AssignPrivilegesToUser/${id}`, "PUT", data);
}

/**
 * Crea un privilegio
 * @param {*} data
 */
 async function createPrivilege(data) {
    return callApi(service, "POST", data);
}

