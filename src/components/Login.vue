<template>
  <div class="container">
    <div class="formulario">
      <form action="#">
        <h2>TOKEN</h2>
        <label for="id_usuario">Usuario: </label>
        <input v-model="user" id="id_usuario" type="text" />
        <label for="id_password">Contraseña: </label>
        <input v-model="password" id="id_password" type="password" />
        <label for="id_rol">Rol: </label>
        <textarea v-if="role" v-model="role" id="id_rol">{{
          this.role
        }}</textarea>
        <label for="id_token">Token: </label>
        <textarea v-if="token" v-model="token" id="id_token">{{
          this.token
        }}</textarea>
      </form>
    </div>
    <button @click="generarToken(user, password)">Generar</button>
  </div>
</template>

<script>
import { tokenFachada } from "../clients/AuthClient";
import { roleFachada } from "../clients/AuthClient";
export default {
  data() {
    return {
      user: "",
      password: "",
      role: "",
      token: "",
    };
  },
  methods: {
    async generarToken(user, password) {
      const token = await tokenFachada(user, password);
      const role = await roleFachada(user, password);
      this.role = role;
      return (this.token = token);
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.formulario,
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  text-align: left;
  padding: 20px;
}

form {
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>