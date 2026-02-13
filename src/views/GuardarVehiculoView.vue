<template>
  <div class="guardar">
    <GuardarVehiculo />
  </div>
  <div class="tabla">
    <TablaVehiculo />
  </div>
</template>

<script>
import GuardarVehiculo from "@/components/GuardarVehiculo.vue";
import TablaVehiculo from "@/components/TablaVehiculo.vue";

export default {
  components: {
    GuardarVehiculo,
    TablaVehiculo,
  },
};
</script>

<style>
.guardar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tabla {
  margin-top: 20px;
}
</style>