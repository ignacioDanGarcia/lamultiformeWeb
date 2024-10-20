<template >
    <div class="section__container classes__container" id="classes">
        
        <div class="agenda">
            <h1 class="agenda-text">Clases</h1>
        </div>
        <h2 class="section__header">Elegí la que quieras!</h2>
        <div class="classes__grid">
            <div class="classes__image">
                <img src="../assets/pilates.jpg" alt="classes" />
                <div class="classes__content">
                <button class="btn classes__btn">Pilates</button>
                </div>
            </div>
            <div class="classes__image">
                <img src="../assets/pilatesrestaurativo.jpeg" alt="classes" />
                <div class="classes__content">
                <button class="btn classes__btn">Pilates restaurativo</button>
                </div>
            </div>
            <div class="classes__image">
                <img src="../assets/yogadinamico.jpeg" alt="classes" />
                <div class="classes__content">
                <button class="btn classes__btn">Hatha Dinámico Yoga</button>
                </div>
            </div>
            <div class="classes__image">
                <img src="../assets/yogaintegral.jpeg" alt="classes" />
                <div class="classes__content">
                <button class="btn classes__btn">Yoga Integral</button>
                </div>
            </div>
            <div class="classes__image">
                <img src="../assets/yogarestaurativo.jpeg" alt="classes" />
                <div class="classes__content">
                <button class="btn classes__btn">Hatha Yoga Restaurativo</button>
                </div>
            </div>
            <div class="classes__image">
                <img src="../assets/vermas.jpeg" alt="classes" />
                <div class="classes__content">
                <button class="btn classes__btn">Ver más</button>
                </div>
            </div>
        </div>
    </div>
  </template>

<style scoped>
.agenda {
    text-align: center;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.agenda-text{
    color: white;
    background-color: #5761b2;
    padding: 10px; 
    border-radius: 20px 20px 0 20px;
    width: 300px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
}
.agenda-text:hover {
  background-color: rgba(87, 97, 178, 0.8); /* Ajusta el canal alfa según tus preferencias */
}
.section__container {
  max-width: var(--max-width);
  margin: auto;
  padding: 5rem 1rem;
}

.section__header {
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  color: var(--text-dark);
}

.section__subheader {
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: var(--text-light);
  letter-spacing: 2px;
}

.btn {
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  color: var(--white);
  background-color: var(--primary-color);
  border-radius: 5rem;
  cursor: pointer;
}

img {
  width: 100%;
  display: flex;
}

html,
body {
  scroll-behavior: smooth;
}

.link a {
  padding: 5px;
  color: var(--text-light);
}

.link a:hover {
  color: var(--primary-color);
}

.classes__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
    margin: 0 auto;
    max-width: 1300px;
}


.classes__image {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 250px;
    background-color: #f0f0f0;
}


.classes__image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* La imagen se adapta al tamaño del contenedor sin deformarse */
    transition: transform 0.3s ease; /* Transición suave para el efecto de zoom */
    transform: scale(1.1);
}
.classes__image:hover img {
    transform: scale(1); /* Reducir el tamaño de la imagen al pasar el mouse */
}

.classes__content {
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


.classes__image:hover .classes__content {
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
@media (max-width: 768px) {
    .classes__grid {
        grid-template-columns: repeat(2, 1fr); /* Dos columnas para pantallas menores a 768px */
    }
}
@media (max-width: 743px) {
    .section__header {
      font-size: 2rem;
    }
  }
  @media (max-width: 400px) {
    .section__header {
      font-size: 1.3rem;
    }
  }
</style>