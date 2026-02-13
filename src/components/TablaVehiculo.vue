<template>
  <div class="tabla-vehiculo">
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Marca</th>
          <th>Chasis</th>
          <th>Fecha de Fabricación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ vehiculo.id }}</td>
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.chasis }}</td>
          <td>{{ vehiculo.fechaFabricacion }}</td>
          <td>
            <button @click="editarVehiculo(vehiculo)">Editar</button>
            <button @click="eliminarVehiculo(vehiculo.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="vehiculos.length === 0">
      No hay vehículos registrados
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaVehiculo",
  methods: {
    editarVehiculo(vehiculo) {
      this.$emit("editar", vehiculo);
    },
    eliminarVehiculo(id) {
      this.$emit("eliminar", id);
    },
  },
};
</script>

<style scoped>
.tabla-vehiculo {
  margin-top: 20px;
}

.table {
  margin-bottom: 0;
}

.btn {
  margin: 0 2px;
}
</style>