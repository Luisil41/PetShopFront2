const BASE_URL = 'http://localhost:3000/request';

const newRequestUrl = `${BASE_URL}/new`;
const deleteRequestUrl = `${BASE_URL}/delete/`;
const requestByUserUrl = `${BASE_URL}/find/user/`;
const requestByShelterUrl = `${BASE_URL}/find/shelter/`;
const requestByPetUrl = `${BASE_URL}/find/pet/`;
const getRequestUrl = `${BASE_URL}/`;
const acceptedRequestUrl = `${BASE_URL}/accepted/`;
const deniedRequestUrl = `${BASE_URL}/denied/`;

export const newRequest = async(form) => {
    const req = await fetch(newRequestUrl, {
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

export const deleteRequest = async(id) => {
    const req = await fetch(`${deleteRequestUrl}${id}`, {
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

export const requestByUser = async(id) => {
    const req = await fetch(`${requestByUserUrl}${id}`, {
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

export const requestByShelter = async(id) => {
    const req = await fetch(`${requestByShelterUrl}${id}`, {
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

export const requestByPet = async(id) => {
    const req = await fetch(`${requestByPetUrl}${id}`, {
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

export const getRequest = async(id) => {
    const req = await fetch(`${getRequestUrl}${id}`, {
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

export const acceptedRequest = async(id) => {
    const req = await fetch(`${acceptedRequestUrl}${id}`, {
        method: "PUT",
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

export const deniedRequest = async(id) => {
    const req = await fetch(`${deniedRequestUrl}${id}`, {
        method: "PUT",
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