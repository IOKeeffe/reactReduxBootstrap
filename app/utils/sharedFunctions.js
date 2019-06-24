export async function httpRequest(method, url) {
    return fetch(url, {
        method: method,
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(resp => resp.json());
}