const BASE_URL = 'http://localhost:3000/pet';

const getAllPetsUrl = `${BASE_URL}/all`;
const editPetUrl = `${BASE_URL}/edit/`;
const newPetUrl = `${BASE_URL}/new`;
const filteredPetUrl = `${BASE_URL}/filter`;
const deletePetUrl = `${BASE_URL}/delete/`;
const profilePetUrl = `${BASE_URL}/`;

export const getAllPets = async() => {
    const req = await fetch(getAllPetsUrl, {
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

export const editPet = async(id, form) => {
    const req = await fetch(`${editPetUrl}${id}`, {
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

export const newPet = async(form) => {
    const req = await fetch(newPetUrl, {
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

export const filteredPet = async(form) => {
    const req = await fetch(filteredPetUrl, {
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

export const deletePet = async(id) => {
    const req = await fetch(`${deletePetUrl}${id}`, {
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

export const profilePet = async(id) => {
    const req = await fetch(`${profilePetUrl}${id}`, {
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