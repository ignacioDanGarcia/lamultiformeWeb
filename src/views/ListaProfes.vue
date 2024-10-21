<template>
  <div>
    <Navbar />
    <br><br><br><br><br><br>
    <div class="profe-list">
        <NuestrasProfes
          v-for="(profe, index) in profes"
          :key="index"
          :nombre="profe.nombre"
          :resumen="profe.resumen"
          :imagen="profe.imagen"
          :reverseOrder="index % 2 !== 0"
        />
      </div>
    <div class="clase-list">
      <ClaseExplicacion
        v-for="(clase, index) in clases"
        :key="index"
        :titulo="clase.titulo"
        :resumen="clase.resumen"
        :imagenes="clase.imagen"
        :reverseOrder="index % 2 !== 0"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ClaseExplicacion from '../components/ClaseExplicacion.vue';
import NuestrasProfes from '../components/NuestrasProfes.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    ClaseExplicacion,
    Footer,
    NuestrasProfes,
  },
  data() {
    return {
      profes: [
          {
            nombre: 'Nuestras Profes',
            resumen: 'Este son Beru y Susy, las almas de la festichola.<br><br>Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate magnis nullam hac litora turpis turpis tempus at. Habitasse dolor luctus fringilla faucibus, himenaeos penatibus neque eget? Mauris egestas vivamus diam donec luctus? Molestie placerat vestibulum duis ultricies dui sed elit varius! Consectetur dolor congue, condimentum porta massa gravida. Ac quis ipsum venenatis risus diam nunc ultrices dapibus neque.<br><br>Nisi sollicitudin semper penatibus vivamus morbi lacus eros sodales elementum. Nisl et amet volutpat malesuada ornare eu. Dis donec nisi convallis porta suscipit turpis commodo in. Facilisis fringilla ligula leo massa lectus. Litora facilisis purus lacinia libero cubilia sapien. Tincidunt rutrum sapien proin faucibus proin dis. Libero eleifend mi cras conubia interdum turpis nec sociosqu. Vitae quisque dis magnis mus platea quis. Ac morbi fames fringilla quis nec neque augue. Litora interdum velit quisque lacus varius sem augue.<br><br>Rutrum cras at bibendum leo ipsum phasellus non porta. At augue rhoncus accumsan lacinia sollicitudin convallis scelerisque. Nullam et elementum iaculis elit nunc, facilisi vivamus est. Quam cubilia lobortis vel mus euismod maximus. Sociosqu et lobortis pretium pharetra sociosqu dignissim. Facilisis eget sed hac libero volutpat ipsum est parturient. Velit fringilla per metus duis mi molestie. Aenean a commodo ex rhoncus habitant. Semper erat nec eleifend porta curae vitae ornare.<br><br>Neque at nunc maecenas mollis hendrerit, faucibus feugiat. Proin mattis cursus finibus senectus vitae placerat magna orci. Imperdiet finibus vestibulum metus pharetra molestie; pretium torquent at. Id elementum penatibus netus elementum aliquam parturient ad nam. Suscipit proin etiam dictum consectetur in feugiat. Proin massa felis; arcu adipiscing convallis platea risus parturient. Amet duis donec dis magnis curae pretium eleifend faucibus.',
            imagen: '/susyberu.jpeg'
          },
      ],
      clases: [
        {
          titulo: 'Pilates',
          resumen: 'Las clases de Pilates están diseñadas para mejorar la flexibilidad, la fuerza muscular y la resistencia del cuerpo. Utilizan movimientos controlados que se enfocan en el core (músculos del abdomen, la espalda baja y la pelvis) para proporcionar estabilidad y equilibrio. Estas sesiones son perfectas para personas que buscan fortalecer su cuerpo, aliviar el estrés y mejorar la postura, ya que combinan ejercicios suaves con respiración consciente.',
          imagen: ['/pilates1.jpeg','/pilates2.jpg','/pilates3.jpeg','/pilates4.jpg'],
        },
        {
          titulo: 'Pilates restaurativo',
          resumen: 'El Pilates Restaurativo se enfoca en movimientos suaves y estiramientos que ayudan a relajar el cuerpo y la mente, promoviendo la recuperación física y la movilidad. Estas clases están pensadas para personas que se están recuperando de lesiones, tienen movilidad limitada o simplemente desean reducir la tensión acumulada en sus músculos. El objetivo es restaurar el bienestar físico mediante ejercicios que suavemente fortalecen y estiran los músculos sin causar estrés.',
          imagen: ['/1.png','/2.png'],
        },
        {
          titulo: 'Hatha Yoga Restaurativo',
          resumen: 'El Hatha Yoga Restaurativo se enfoca en la relajación profunda y el estiramiento suave. Utiliza posturas mantenidas durante más tiempo para permitir que el cuerpo se relaje por completo, acompañado de una respiración controlada para calmar la mente. Esta práctica es ideal para reducir el estrés, aumentar la flexibilidad y promover una sensación de calma y bienestar. Es una excelente opción para quienes buscan una práctica que favorezca la recuperación física y la paz interior.',
          imagen: ['/1.png','/2.png'],
        },
        {
          titulo: 'Yoga Integral',
          resumen: 'El Yoga Integral combina diferentes técnicas de yoga para crear una práctica completa que abarca el cuerpo, la mente y el espíritu. Incluye posturas físicas (asanas), ejercicios de respiración (pranayama) y técnicas de meditación para promover el bienestar y la paz interior. Esta clase es ideal para aquellos que buscan un enfoque holístico que no solo mejore la flexibilidad y la fuerza, sino también el equilibrio emocional y mental.',
          imagen: ['/1.png','/2.png'],
        },
        {
          titulo: 'Hatha Yoga Dinámico',
          resumen: 'El Hatha Yoga Dinámico es una versión más vigorosa del Hatha Yoga tradicional, donde se realiza una secuencia fluida de posturas que se conectan con la respiración. Este estilo es perfecto para aquellos que desean una práctica más activa, que aumente la fuerza muscular, la resistencia y el equilibrio. Las clases son energizantes y están diseñadas para trabajar todo el cuerpo, mejorando la coordinación y el enfoque mental.',
          imagen: ['/1.png','/2.png'],
        },
        // Agrega más clases aca
      ],
    };
  }
}
</script>

<style scoped>
.clase-list {
  margin: 20px 0;
}
.profe-list {
  margin: 10px 10px;
  padding: 10px 10px;
}
* {
  background: none; 
}
.profe-item {
    display: flex;
    flex-direction: column;
    align-items: center; 
    border-radius: 10px;
  }
</style>
