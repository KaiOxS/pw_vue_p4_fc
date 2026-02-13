<template>
  <div class="container">
    <div class="formulario">
      <form action="#">
        <h2>Guardar Vehiculo</h2>
        <label for="id_token">Token: </label>
        <textarea v-if="token" v-model="token" name="token" id="id_token">{{
          this.token
        }}</textarea>
        <label for="id_marca">Marca: </label>
        <input v-model="marca" id="id_marca" type="text" />
        <label for="id_modelo">Modelo: </label>
        <input v-model="modelo" id="id_modelo" type="text" />
        <label for="id_chasis">Chasis: </label>
        <input v-model="chasis" id="id_chasis" type="text" />
        <label for="id_fechaFab">Fecha Fabricación: </label>
        <input v-model="fechaFabricacion" id="id_fechaFab" type="date" />
        <label for="id_fechaMat">Fecha de Matricula: </label>
        <input v-model="fechaMatricula" id="id_fechaMat" type="date" />
      </form>
    </div>
    <button @click="generarToken('user', 'password')">Guardar</button>
    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script>
import { tokenFachada } from "@/clients/AuthClient";
export default {
  data() {
    return {
      user: "usuario1",
      password: "123456",
      token: "",
      marca: "",
      modelo: "",
      chasis: "",
      fechaFabricacion: "",
      fechaMatricula: "",
      mensaje: "",
    };
  },
  methods: {
    async generarToken(user, password) {
      const token = await tokenFachada(this.user, this.password);
      return (this.token = token);
    },
    async crearVehiculo() {
      const vehiculo = {
        marca: this.marca,
        modelo: this.modelo,
        chasis: this.chasis,
        fechaFabricacion: this.fechaFabricacion,
        fechaMatricula: this.fechaMatricula,
      };
      try {
        const response = await fetch("http://localhost:8080/vehiculos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
          body: JSON.stringify(vehiculo),
        });
        if (response.ok) {
          this.mensaje = "Vehículo guardado exitosamente";
        } else {
          this.mensaje = "Error al guardar el vehículo";
        }
      } catch (error) {
        console.error("Error:", error);
        this.mensaje = "Error de red al guardar el vehículo";
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.formulario {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
form {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>