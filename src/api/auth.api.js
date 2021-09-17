const BASE_URL = 'http://localhost:3000/auth';

const userRegisterUrl = `${BASE_URL}/user/register`;
const userLoginUrl = `${BASE_URL}/user/login`;
const shelterRegisterUrl = `${BASE_URL}/shelter/register`;
const shelterLoginUrl = `${BASE_URL}/shelter/login`;
const logoutUrl = `${BASE_URL}/logout`;
const checkSessionUrl = `${BASE_URL}/check-session`;

export const userRegisterFetch = async(form) => {
    const req = await fetch(userRegisterUrl, {
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

export const shelterRegister = async(form) => {
    const req = await fetch(shelterRegisterUrl, {
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


export const userLogin = async(form) => {
    const req = await fetch(userLoginUrl, {
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

export const shelterLogin = async(form) => {
    const req = await fetch(shelterLoginUrl, {
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

export const logout = async() => {
    const req = await fetch(logoutUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
    });

    const response = await req.json();

    if (!req.ok) {
        throw new Error(req.message);
    }

    return response;
};

export const checkSession = async() => {
    const req = await fetch(checkSessionUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
    });

    const response = await req.json();

    return response;
};