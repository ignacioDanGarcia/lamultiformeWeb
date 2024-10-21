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
    margin: 40px 200px;
    border-radius: 10px;
    padding: 30px 40px;
    border: 2px solid #c4bfb9;
    background: transparent;
    backdrop-filter: blur(30px);
    box-shadow: 0 0 10px rgb(146, 146, 146);
  }
  .profe-contenido{
    display: flex;
    align-items: center;
    margin: 40px 160px;
    gap: 50px;
  }
  .profe-contenido.reverse {
    flex-direction: row-reverse;
  }
  .profe-texto {
    flex: 1;
    padding: 10px;
  }
  
  .profe-nombre {
    color: #fff;
    font-size: 34px;
    margin: 0;
    text-align: center;
    border-bottom: 2px solid #ffa44e;
    padding-bottom: 5px;
  }
  
  .profe-resumen {
    color: #bbb;
    font-size: 16px;
    
  }
  
  .profe-imagen {
    flex: 1;
    display: flex;
    justify-content: center;
    border: 4px solid #fff; /* Borde blanco de 2 píxeles */
    border-radius: 10px; /* Esquinas redondeadas */
    overflow: hidden; /* Recorta la imagen para que siga la forma redondeada */
  }
  
  .profe-imagen img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    .profe-item {
        flex-direction: column; /* Cambia a disposición en columna */
        margin: 20px; /* Reduce los márgenes para pantallas pequeñas */
        align-items: center; /* Centra los elementos */
    }

    .profe-item.reverse {
        flex-direction: column; /* Mantiene la misma disposición en columna para la versión invertida */
    }

    .profe-texto {
        text-align: center; /* Centra el texto para una mejor visualización en pantallas pequeñas */
    }

    .profe-imagen {
        margin-top: 10px; /* Añade espacio entre el texto y la imagen */
    }
  }
  </style>