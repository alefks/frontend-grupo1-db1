import {JwtHandler} from '../local-storage/jwt-handler'

const Api = {
    baseUrl: "http://localhost:3000",
    getAll: (tableName, auth) => fetch(Api.baseUrl + `/${tableName}`, getRequest(auth)),
    getById: (tableName, id, auth) => fetch(Api.baseUrl + `/${tableName}/${id}`, getRequest(auth)),
    post: (tableName, body, auth) => fetch(Api.baseUrl + `/${tableName}`, postRequest(body, auth)),
    patch: (tableName, body, auth) => fetch(Api.baseUrl + `/${tableName}`, patchRequest(body, auth)),
    delete: (tableName, id, auth) => fetch(Api.baseUrl + `/${tableName}/${id}`, deleteRequest(auth)),

    authHeader: () => ({
        Authorization: "Bearer " + JwtHandler.getJwt()
    })
}

const getRequest = auth => ({
    method: "GET",
    headers: auth ? new Headers() : undefined,
})

const postRequest = (body, auth) => ({
    method: "POST",
    headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {})
    }),
    body: JSON.stringify(body)
})

const patchRequest = (body, auth) => ({
    method: "PATCH",
    headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {})
    }),
    body: JSON.stringify(body)
})

const deleteRequest = (auth) => ({
    method: "DELETE",
    headers: auth ? new Headers() : undefined,
})

export default Api;