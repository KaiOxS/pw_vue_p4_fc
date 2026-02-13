import axios from "axios";

const URL = "http://localhost:8081/examen/api/v1.0/vehiculo";

const crearVehiculo = async (body) => {
	return await axios.post(`${URL}`, body).then(r => r.data);
}

export const crearVehiculoFachada = async (body) => {
	return await crearVehiculo(body);
}
