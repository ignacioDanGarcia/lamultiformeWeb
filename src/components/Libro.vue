<template>
    <div :class="['book-item', { 'reverse': reverseOrder }]">
      <div class="book-text">
        <h2 class="book-title">{{ title }}</h2>
        <p class="book-summary" v-html="summary"></p>
      </div>
      <div class="book-image">
        <img :src="image" alt="Book Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      summary: String,
      image: String,
      reverseOrder: Boolean
    }
  }
  </script>
  
  <style scoped>
  .book-item {
    display: flex;
    align-items: center;
    margin: 40px 200px;
    
  }
  
  .book-item.reverse {
    flex-direction: row-reverse;
  }
  
  .book-text {
    flex: 1;
    padding: 10px;
  }
  
  .book-title {
    color: #fff;
    font-size: 34px;
    margin: 0;
  }
  
  .book-summary {
    color: #bbb;
    font-size: 16px;
    
  }
  
  .book-image {
    flex: 1;
    display: flex;
    justify-content: center;
    border: 4px solid #fff; /* Borde blanco de 2 píxeles */
    border-radius: 10px; /* Esquinas redondeadas */
    overflow: hidden; /* Recorta la imagen para que siga la forma redondeada */
  }
  
  .book-image img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    .book-item {
        flex-direction: column; /* Cambia a disposición en columna */
        margin: 20px; /* Reduce los márgenes para pantallas pequeñas */
        align-items: center; /* Centra los elementos */
    }

    .book-item.reverse {
        flex-direction: column; /* Mantiene la misma disposición en columna para la versión invertida */
    }

    .book-text {
        text-align: center; /* Centra el texto para una mejor visualización en pantallas pequeñas */
    }

    .book-image {
        margin-top: 10px; /* Añade espacio entre el texto y la imagen */
    }
  }
  </style>