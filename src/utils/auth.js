export const login = (username, password) => {
    return localStorage.getItem(username) === password
        ? username
        : null;
}

export const createUser = (username, password) => {
    if (localStorage.getItem(username)) {
        throw new Error(`User ${username} already exists.`);
    }

    localStorage.setItem(username, password);
}