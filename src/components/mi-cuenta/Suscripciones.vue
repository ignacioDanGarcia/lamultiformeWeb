<template>
  <div class="suscripciones">
    <h2>Mis suscripciones On Demand</h2>

    <div v-if="!tieneSuscripciones" class="empty-state">
      <p>Aún no tenés suscripciones activas. Escríbenos por Whatsapp para coordinar la compra de una suscripción y podrás ver tus clases pre-grabadas aquí.</p>
    </div>

    <div v-else class="lista-suscripciones">
      <div
        v-for="suscripcion in suscripciones"
        :key="suscripcion.id"
        class="suscripcion"
      >
        <h3>{{ suscripcion.titulo }}</h3>

        <iframe
          v-if="suscripcion.vimeoUrl"
          :src="suscripcion.vimeoUrl"
          width="100%"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suscripciones',
  data() {
    return {
      suscripciones: []
    }
  },
  computed: {
    tieneSuscripciones() {
      return this.suscripciones.length > 0
    }
  }
}
</script>

<style scoped>
.suscripciones {
  padding: 16px;
}

.empty-state {
  margin-top: 20px;
  font-size: 16px;
  color: #666;
}

.suscripcion {
  margin-top: 24px;
}
</style>
