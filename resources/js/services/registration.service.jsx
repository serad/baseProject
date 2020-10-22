import config from 'Config';
import { getCsrf } from '../helpers/csrf-token';
import { handleResponse } from '../helpers/handle-response';

export const registrationService = {
    register,
};

function register(email, password) {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getCsrf() },
        body: JSON.stringify({ email, password })
    };
    return fetch(`${config.serverUrl}/user/register`, requestOptions)
        .then( handleResponse )
        .then( response => {
            return response;
        });
}