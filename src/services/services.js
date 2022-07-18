/**
 * Communication with the API
 * @param {*} url
 * @param {*} method
 * @param {*} body
 * @param {*} contentType
 */
import { get } from "react-query";	

export const callApi = async (url, method, body, headers) => {
var user = JSON.parse(localStorage.getItem("user"));
const options = {
    method: method,
    headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + (user ? user.data.token : ""),
    ...headers,
    },
    body: JSON.stringify(body),
};

return fetch(`${process.env.REACT_APP_API_URL}${url}`, options)
    .then((response) => handleResponse(response, false))
    .catch(handleError);
};

export const callApiFileStorage = async (
url,
method,
body,
isFileResponse = true
) => {
const options = {
    method: method,
    body: body,
};

return fetch(`${process.env.REACT_APP_API_URL}${url}`, options)
    .then((response) => handleResponse(response, isFileResponse))
    .catch(handleError);
};

export const callApiFile = async (
url,
method,
body,
contentType = "application/json"
) => {
const options = {
    method: method,
    headers: {
    "Content-Type": contentType,
    },
    body: JSON.stringify(body),
};

return fetch(`${process.env.REACT_APP_API_URL}${url}`, options)
    .then((response) => handleResponse(response, true))
    .catch(handleError);
};

export const callApiNoBlocking = (url, method, body) =>
callApi(url, method, body, { NoBlocking: true });

const handleResponse = (response, isFileResponse) => {
if (!isFileResponse)
    return response.text().then((text) => {
    let data;

    try {
        data = text && JSON.parse(text);
    } catch (e) {
        data = text;
    }

    if (!response.ok) {
        const error =
        data === ""
            ? { msg: response.statusText }
            : data ?? { msg: response.statusText };
        return Promise.reject(error);
    }

    return data;
    });
else return response.blob();
};

const handleError = (error) => {
console.log("error", error);
if (error.message === "Failed to fetch")
    error.message = "El servicio no se encuentra disponible temporalmente";
return Promise.reject(error);
};