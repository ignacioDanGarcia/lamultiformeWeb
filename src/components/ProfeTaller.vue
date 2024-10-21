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
    margin: 40px 20px;
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
    border: 4px solid #fff;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .profe-imagen img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 1000px) {
    .profe-contenido {
        flex-direction: column; 
        margin: 20px;
        align-items: center;
    }

    .profe-contenido.reverse {
        flex-direction: column;
    }

    .profe-texto {
        text-align: center;
    }

    .profe-imagen {
        margin-top: 10px;
    }
  }
  @media (max-width: 890px) {
    .profe-item {
        margin: 40px 70px;
        padding: 30px 40px;
        
    }
  }
  @media (max-width: 450px) {
    .profe-item {
        margin: 20px 25px;
        padding: 20px 10px;
        
    }
  }
  </style>