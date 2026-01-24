<template>
    <div class="profe-item">
        <h2 class="profe-nombre">¿Quiénes somos?</h2>
        <div class="profe-contenido">
            <p class="profe-texto">Somos una asociación civil sin fines de lucro con el objetivo de traer bienestar y salud a las personas que concurren a nuestro espacio. Dictamos clases de taller literario, yoga, pilates y meditación. En cada clase buscamos avanzar con una planificación especialmente pensada para que estemos en armonía con nuestro cuerpo y mente. </p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nombre: String,
      texto: String,
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
  color: #fff;
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
  max-width: 1000px;  
  gap: 50px;
}


.profe-contenido.reverse {
  flex-direction: row-reverse;
}


.profe-texto {
  flex: 1;
  padding: 10px;
  color: #fff;
  font-size: 18px;
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