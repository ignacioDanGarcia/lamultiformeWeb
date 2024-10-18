<template>
<section class="questions-container" id="contact">
    <div class="container">
      <div class="title-container">
        <div class="title">Querés consultarnos algo?</div>
            <div class="subTitle">
                Nos importa saber lo que no se entiende y conocer tu situación. ¡Escribinos! Estamos aquí para ayudarte a aclarar tus dudas. Hace click abajo para poder escribirnos por whatsapp.
            </div>
            <div class="boton-contacto">
            <button><a class="boton-contacto-text" href="https://wa.me/5491126825124">  Contactanos acá!</a></button>
            </div>
        </div>
      <div class="image"><img src="../assets/lamultiforme-32.jpeg" alt="" /></div>
    </div>
  </section>
</template>


<style scoped>
.boton-contacto{
    text-align: center;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.boton-contacto-text{
    text-decoration: none;
    color: black;
    font-size: 17px;
    background-color: #ffa44e;
    padding: 20px; 
    border-radius: 20px 20px 0 20px;
    width: auto;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
}
.questions-container {
  margin: 6rem;
}

.questions-container .container {
  display: grid;
}

.questions-container .container .title-container {
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.questions-container .container .title-container .title {
  font-size: 3rem;
  font-weight: bolder;
  text-align: start;
  color: #5761b2;
}

.questions-container .container .title-container .subTitle {
  font-size: 1.5rem;
  width: 90%;
  color: #272727;
}

.questions-container .container .image img {
  padding: 10px;
  height: 30rem;
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  .questions-container {
    margin: 2rem;
  }
  .questions-container .container {
    -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
  }
  .questions-container .container .title-container .title {
    font-size: 2rem;
  }
  .questions-container .container .title-container .subTitle {
    font-size: 1.2rem;
    width: 100%;
  }
  .questions-container .container .image img {
    height: 13rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .questions-container .container {
    gap: 5rem;
  }
  .questions-container .container .image img {
    height: 20rem;
  }
}
@media screen and (min-width: 200px) and (max-width: 480px) {
  .questions-container {
    margin: 1rem;
  }
  .questions-container .container {
    -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
  }
  .questions-container .container .title-container .title {
    font-size: 1.3rem;
  }
  .questions-container .container .title-container .subTitle {
    font-size: 1.0rem;
    width: 90%;
  }
  .questions-container .container .image img {
    height: 10rem;
  }
}
</style>