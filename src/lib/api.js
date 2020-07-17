import axios from 'axios';

export function getAPOD(date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=C0Y3elTE0WfdYIeri3LcRgsjwrLSsFgmR44aMZvP&date=${date}`);
}