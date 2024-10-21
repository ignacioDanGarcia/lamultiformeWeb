<template>
    <div class="profe-item">
        <h2 class="profe-nombre">{{ nombre }}</h2>
        <div :class="['profe-contenido', { 'reverse': reverseOrder }]">
            <div class="profe-texto">
                <p class="profe-resumen" v-html="resumen"></p>
            </div>
            <div class="profe-imagen">
                <img :src="imagen" alt="profe Image" />
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nombre: String,
      resumen: String,
      imagen: String,
      reverseOrder: Boolean
    }
  }
  </script>
  
  <style scoped>
  .profe-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
}

.profe-nombre {
  color: #5761b2;
  font-size: 34px;
  margin: 0 0 20px 0;
  text-align: center;
  border-bottom: 2px solid #ffa44e; 
  padding-bottom: 5px;
}


.profe-contenido {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
}


.profe-contenido.reverse {
  flex-direction: row-reverse;
}


.profe-texto {
  flex: 1;
  padding: 10px;
  color: #5761b2;
  font-size: 18px;
}

.profe-imagen {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
}

.profe-imagen img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 1500px) {
  .profe-texto {
    font-size: 16px;
  }
  .profe-imagen {
    max-width: 70%;
  }
}
@media (max-width: 1400px) {
  .profe-texto {
    font-size: 13px;
  }
  .profe-imagen {
    max-width: 50%;
  }
}
@media (max-width: 1000px) {
  .profe-texto {
    font-size: 10px;
  }
  .profe-imagen {
    max-width: 250px;
  }
}
@media (max-width: 854px) {
  .profe-texto {
    font-size: 7px;
  }
  .profe-imagen {
    max-width: 200px;
  }
}
@media (max-width: 480px) {
  .profe-contenido {
    flex-direction: column;
    text-align: center;
  }
  .profe-item{
    margin: 0 15px;
    padding: 0 0;
  }
  .profe-nombre {
    font-size: 28px;
  }
  .profe-texto {
    font-size: 8px;
  }
  .profe-imagen {
    max-width: 200px;
  }
}
  </style>