<script>
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import listPlugin from '@fullcalendar/list';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import esLocale from '@fullcalendar/core/locales/es';

  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';


  export default {
    components: {
      FullCalendar,
      Navbar,
      Footer
    },
    data() {
      return {
        calendarOptions: {
          plugins: [dayGridPlugin,timeGridPlugin,listPlugin],
          initialView: 'dayGridMonth',
          headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek dayGridDay,listWeek',
          },
          titleFormat: { year: 'numeric', month: 'long' },
          weekends: true,
          locale: esLocale,
          events: [
            /*{ title: 'Pilates 19hs', start: '2023-12-24',
            backgroundColor: 'red',
            textColor: 'white'},
            { title: 'Yogaaa eee', start: new Date() },*/
          ]
       }
     }
   },
   computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  created(){
    this.loadUserEvents();
    
  },
  methods: {
    async loadUserEvents() {
      const db = getFirestore(this.$store.state.firebaseApp);
      const uid = this.$store.state.user;

      try {
        // Paso 1: Obtén los documentos de usuario_evento_rel para el usuario actual
        const userEventsQuery = query(
          collection(db, 'usuario_evento_rel'),
          where('usuario_uid', '==', uid)
        );
        const userEventsSnapshot = await getDocs(userEventsQuery);

        // Paso 2: Para cada documento en usuario_evento_rel, obtén la información del evento correspondiente
        const eventos = [];
        for (const userEventDoc of userEventsSnapshot.docs) {
          const eventoId = userEventDoc.data().oid_evento.id;
          console.log(eventoId);
          // Obtén el documento correspondiente en la colección eventos
          const eventoDocRef = doc(db, 'eventos', eventoId);
          const eventoDoc = await getDoc(eventoDocRef);
          
          if (eventoDoc.exists()) {
            // Obtén información adicional (título, fecha) del evento
            const tituloId = eventoDoc.data().oid_titulo.id;

            // Obtén el documento correspondiente en la colección titulos
            const tituloDocRef = doc(db, 'titulos', tituloId);
            const tituloDoc = await getDoc(tituloDocRef);

            if (tituloDoc.exists()) {
              // Obtén el nombre del título
              const nombreTitulo = tituloDoc.data().nombre;
              const colorCod = tituloDoc.data().color;

              // Obtén información adicional (fecha) del evento
              const fecha = eventoDoc.data().fecha;

              // Agrega el evento al arreglo eventos
              eventos.push({
                title: nombreTitulo,
                start: fecha,
                backgroundColor: colorCod,
                // Puedes agregar más propiedades según sea necesario
              });
            }
          }
        }

        // Paso 3: Actualiza el estado de los eventos en tu componente
        this.calendarOptions.events = eventos;
      } catch (error) {
        console.error('Error loading user events:', error);
      }
    },
  },
}
</script>
<template>
    <Navbar />
    <br><br><br><br><br><br><br>
    <FullCalendar :options="calendarOptions" />
    <br><br><br><br><br><br><br>
    <Footer />
</template>

<style  scoped>
.fc {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #ffa44e;
    color: #111;
    font-size: 11px;
    padding-right: 30px;
    padding-left: 30px;

}
@media (max-width: 767px) {
  .fc{
    height: 470px;
  }
  @media(max-width: 574px){
    .fc{
      font-size: 9px;
  }
  }
}
</style>
