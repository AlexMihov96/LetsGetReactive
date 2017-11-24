export const host = 'http://localhost:5000/'

async function register(name, email, password) {
    const response = await fetch(host + 'auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })

    return await response.json()
}

async function login(email, password) {
    const response = await fetch(host + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    return await response.json()
}

export { register, login }