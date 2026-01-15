<template>
  <div class="turnos-presenciales">
    <h2>Turnos presenciales</h2>

    <p class="texto">
      Para revisar y administrar tus turnos presenciales, por favor iniciá sesión en
      <strong>SigueFit</strong>.
    </p>

    <a
      href="https://www.siguefit.com"
      target="_blank"
      rel="noopener noreferrer"
      class="link-siguefit"
    >
      Ir a SigueFit
    </a>
  </div>
</template>

<script>
export default {
  name: 'TurnosPresenciales'
}
</script>

<style scoped>
.turnos-presenciales {
  padding: 16px;
}

.texto {
  margin: 16px 0;
  font-size: 16px;
}

.link-siguefit {
  display: inline-block;
  margin-top: 8px;
  color: #1976D2;
  font-weight: 500;
  text-decoration: none;
}

.link-siguefit:hover {
  text-decoration: underline;
}
</style>
