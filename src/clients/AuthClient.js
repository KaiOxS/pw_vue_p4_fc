import axios from 'axios';

const URL = 'http://localhost:8082/auth/api/v1.0/usuarios/token?';
    
const token = async (user,password) => {
	const data = await axios.get(`${URL}user=${user}&&password=${password}`).then(r => r.data);
	return data.accessToken;
}

const role = async (user,password) => {
    const data = await axios.get(`${URL}user=${user}&&password=${password}`).then(r => r.data);
    return data.role;
}

export const tokenFachada = async (user, password) => {
    return await token(user, password);
}

export const roleFachada = async (user, password) => {
    return await role(user, password);
}