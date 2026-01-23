<template>
  <div class="plan-card" @click="goToDetail">
    <img :src="plan.image" :alt="plan.title" />

    <div class="overlay">
      <button>Ver más</button>
    </div>

    <p class="title">{{ plan.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'PlanCarta',
  props: {
    plan: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToDetail() {
      this.$router.push(`/clases-grabadas/${this.plan.slug}`);
    },
  },
};
</script>

<style scoped>
.plan-card {
  position: relative;
  cursor: pointer;
}

.plan-card img {
  width: 100%;
  display: block;
}

.title {
  margin-top: 10px;
  color: #555;
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.plan-card:hover .overlay {
  opacity: 1;
}

.overlay button {
  background: #3a5f8f;
  color: white;
  border: none;
  padding: 10px 18px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
