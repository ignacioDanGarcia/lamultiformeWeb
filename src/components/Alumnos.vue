<template>
    <div class="alumnos-container">
      <h2 class="alumnos-title">¿Qué piensan los alumnos?</h2>
      
      <div class="testi-container">
        <div class="testimonial mySwiper">
          <div class="swiper-wrapper">
            <div
              class="slide swiper-slide"
              v-for="(reseña, index) in reseñas"
              :key="index"
            >
              <p>{{ reseña.texto }}</p>
              <div class="details">
                <span class="name">{{ reseña.firma }}</span>
              </div>
            </div>
          </div>
          <div class="swiper-button-next nav-btn"></div>
          <div class="swiper-button-prev nav-btn"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swiper from 'swiper';
  import { Navigation, Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
  export default {
    data() {
      return {
        reseñas: [
          { texto: 'Tu vieja.',
            firma: '-Sasha'
          },
          { texto: 'Esta es una excelente clase. Aprendí mucho y me sentí muy bien acompañado.',
            firma: '-El Matsi'
          },
          { texto: 'Me gustó mucho la forma en que se desarrollan las actividades. Es muy práctico.',
            firma: '-Graciela'
          },
          { texto: 'El ambiente es muy ameno y se aprende de manera efectiva.',
            firma: '-Valen'
          },
        ]
      };
    },
    mounted() {
      // Initialize Swiper after the component has mounted
      new Swiper('.mySwiper', {
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        modules: [Navigation, Pagination],
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
  };
  </script>
  <style scoped>
  .alumnos-container {
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
  }
  
  .alumnos-title {
    color: #fff;
    font-size: 34px;
    margin: 0;
    text-align: center;
    border-bottom: 2px solid #ffa44e;
    padding-bottom: 5px;
  }
  .testi-container{
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .testimonial{
    position: relative;
    max-width: 900px;
    width: 100%;
    padding: 50px 0;
    overflow: hidden;  
  }
  .testimonial .slide{
    display: flex ;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 30px;
  }
  .slide p{
    text-align: center;
    padding: 0 160px;
    font-size: 14px;
    font-weight: 500;
    color: #bbb;
  }
  .slide .details{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .details .name{
    font-size: 14px;
    font-weight: 600;
    color: #545454;
  }
  .nav-btn{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    transform: translateY(10px);
    background-color: rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }
  .nav-btn:hover{
    background-color: rgba(255, 255, 255, 0.2);
  }
  .nav-btn::after,
  .nav-btn::before{
    font-size: 20px;
    color: #ffa44e;
  }
  .swiper-pagination-bullet{
    background-color: rgba(255, 255, 255, 0.6);
  }
  .swiper-pagination-bullet-active{
    background-color: #ffa44e;
  }
@media screen and (max-width: 768px){
    .slide p{
        padding: 0 20px;
    }
    .nav-btn{
        display: none;
    }
}

  </style>
<style>
.swiper-pagination-bullet{
  background-color: rgba(255, 255, 255, 0.6);
}
.swiper-pagination-bullet-active{
  background-color: #ffa44e;
}
</style>