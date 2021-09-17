const BASE_URL = 'http://localhost:3000/shelter';

const allSheltersUrl = `${BASE_URL}/all`;
const editShelterUrl = `${BASE_URL}/edit/`;
const deleteShelterUrl = `${BASE_URL}/delete/`;
const profileShelterUrl = `${BASE_URL}/`;

export const allShelters = async() => {
    const req = await fetch(allSheltersUrl, {
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

export const editShelter = async(id, form) => {
    const req = await fetch(`${editShelterUrl}${id}`, {
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

export const deleteShelter = async(form) => {
    const req = await fetch(deleteShelterUrl, {
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

export const profileShelter = async(id) => {
    const req = await fetch(`${profileShelterUrl}${id}`, {
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