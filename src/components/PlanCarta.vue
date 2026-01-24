<template>
  <div>
    <div class="plan-card">
                  <img :src="plan.image" :alt="plan.title" />
                  <div class="plans__content">
                  <button class="btn classes__btn">Ver más</button>
                  </div>
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
.plan-card img {
  width: 100%;
  display: block;
}

.title {
  margin-top: 10px;
  color: #555;
}
.plan-card {
    position: relative;
    overflow: hidden;
    width: 100%;
    background-color: #f0f0f0;
}
.plan-card img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* La imagen se adapta al tamaño del contenedor sin deformarse */
    transition: transform 0.3s ease; /* Transición suave para el efecto de zoom */
    transform: scale(1);
}
.plan-card:hover img {
    transform: scale(1.1); /* Reducir el tamaño de la imagen al pasar el mouse */
}

.plans__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(75, 87, 141, 0.6);
    opacity: 0;
    transition: opacity 0.3s ease;
}


.plan-card:hover .plans__content {
    opacity: 1;
}


.classes__btn {
    background-color: #ffa44e;
    color: #333;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.classes__btn:hover {
    background-color: #fff;
    color: #ffa44e;
}
@media (max-width: 858px){
    .plans__content {
        opacity: 1;
        background-color: transparent;
    }
    .plans__content:hover {
        background-color: rgba(75, 87, 141, 0.6);
    }
}
</style>
