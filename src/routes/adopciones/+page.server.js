// src/routes/adopciones/+page.server.js

const API_KEY = '1KuRc2f92eG6ZtiQUY7tXloNPVlW74uOpoQjLLKP8YXtX5nh29';
const API_SECRET = 'FOLUKc5ksR3HE7KOoRdQrIms9bXwXDYliPQZVwkR';

export async function load() {
    try {
        // 1. Obtener el token de acceso
        const tokenResponse = await fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: API_KEY,
                client_secret: API_SECRET
            })
        });

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // 2. Usar el token para obtener mascotas adoptables
        const petsResponse = await fetch('https://api.petfinder.com/v2/animals?status=adoptable&limit=10', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const petsData = await petsResponse.json();

        return {
            pets: petsData.animals
        };
    } catch (error) {
        console.error('Error al obtener datos de Petfinder:', error);
        return {
            pets: []
        };
    }
}
