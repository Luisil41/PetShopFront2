const BASE_URL = 'http://localhost:3000/user';

const editUserUrl = `${BASE_URL}/edit/`;
const deleteUserUrl = `${BASE_URL}/delete/`;
const profileUserUrl = `${BASE_URL}/`;

const formCreateUrl = `${BASE_URL}/form/new`;
const formDownloadUrl = `${BASE_URL}/form/download/:id`;
const formDeleteUrl = `${BASE_URL}/form/delete`;
const formEditUrl = `${BASE_URL}/form/edit/:id`;
const formGetUrl = `${BASE_URL}/form/:id`;


export const editUser = async(id, form) => {
    const req = await fetch(`${editUserUrl}${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify(form),
    });

    const response = await req.json();

    if (!req.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const deleteUser = async(id) => {
    const req = await fetch(`${deleteUserUrl}${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
    });

    const response = await req.json();

    if (!req.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const profileUser = async(id) => {
    const req = await fetch(`${profileUserUrl}${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
    });

    const response = await req.json();

    if (!req.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const formCreate = async(form) => {
    const req = await fetch(formCreateUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify(form),
    });

    const response = await req.json();

    if (!req.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const formDownload = async(form) => {
    const req = await fetch(formDownloadUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify(form),
    });

    const response = await req.json();

    if (!req.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const formDelete = async(form) => {
    const req = await fetch(formDeleteUrl, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify(form),
    });

    const response = await req.json();

    if (!req.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const formEdit = async(form) => {
    const req = await fetch(formEditUrl, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify(form),
    });

    const response = await req.json();

    if (!req.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const formGet = async(form) => {
    const req = await fetch(formGetUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify(form),
    });

    const response = await req.json();

    if (!req.ok) {
        throw new Error(response.message);
    }

    return response;
};