<template>
    <div class="fondo-clases">
      <div :class="['clase-item', { 'reverse': reverseOrder }]">
        <div class="clase-text">
          <h2 class="clase-titulo">{{ titulo }}</h2>
          <p class="clase-resumen" v-html="resumen"></p>
        </div>
        <div class="clase-grid-imagen">
          <div class="clase-imagen" v-for="(img, index) in imagenes" :key="index">
            <img :key="index" :src="img" alt="clase imagen" />
          </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      titulo: String,
      resumen: String,
      imagenes: Array,
      reverseOrder: Boolean
    }
  }
  </script>
  
  <style scoped>
  .fondo-clases{
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url('../assets/simbolo_om_violeta.png') no-repeat center center fixed;
    background-size: cover; 
  }
  .clase-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px auto;
    max-width: 1200px;
  }
  
  .clase-item.reverse {
    flex-direction: row-reverse;
  }
  
  .clase-text {
    flex: 1;
    padding: 10px;
  }
  
  .clase-titulo {
    color: #fff;
    font-size: 34px;
    margin: 0;
  }
  
  .clase-resumen {
    color: #bbb;
    font-size: 16px;
  }
  
  .clase-grid-imagen {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 50%;
    justify-content: flex-end;
    margin: 20px;
  }
  
  .clase-grid-imagen img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  .clase-imagen {
    position: relative;
    overflow: hidden;
    width: 100%;
    height:20rem;
    background-color: #f0f0f0;
    border-radius: 8px;
  }
  .clase-imagen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
  }
  @media (max-width: 768px) {
    .clase-item {
        flex-direction: column;
        margin: 20px;
        align-items: center;
    }

    .clase-item.reverse {
        flex-direction: column;
    }

    .clase-text {
      max-width: 100%;
      text-align: center;
    }
    .clase-imagen {
      height:10rem;
    }
    .clase-grid-imagen {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 10px;
    }
  }
  @media (max-width: 480px) {
    .clase-grid-imagen {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 10px;
      margin: 10px 0;
    }
    .clase-imagen {
      width: 120%;
      height:9rem;
    }
  }
  </style>