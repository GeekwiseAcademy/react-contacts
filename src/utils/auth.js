export const login = (username, password) => {
    const auth = JSON.parse(localStorage.getItem('auth')) ?? {};
    // Passwords should never be stored in plain text as is done in the code below.
    // This code serves as just a demonstration and is not intended as an example
    // of production ready code.
    return auth[username]?.password === password
}

export const createUser = (username, password) => {
    const auth = JSON.parse(localStorage.getItem('auth')) ?? {};

    if (auth[username]) {
        throw new Error(`User ${username} already exists.`);
    }

    // Passwords should never be stored in plain text as is done in the code below.
    // This code serves as just a demonstration and is not intended as an example
    // of production ready code.
    auth[username] = { password };
    localStorage.setItem('auth', JSON.stringify(auth));
}