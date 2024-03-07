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
          right: 'dayGridMonth,dayGridDay listWeek',
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
        
        const userEventsQuery = query(
          collection(db, 'usuario_evento_rel'),
          where('usuario_uid', '==', uid)
        );
        const userEventsSnapshot = await getDocs(userEventsQuery);

        
        const eventos = [];
        for (const userEventDoc of userEventsSnapshot.docs) {
          const eventoId = userEventDoc.data().oid_evento.id;
          
          const eventoDocRef = doc(db, 'eventos', eventoId);
          const eventoDoc = await getDoc(eventoDocRef);
          
          if (eventoDoc.exists()) {
            
            const tituloId = eventoDoc.data().oid_titulo.id;

            
            const tituloDocRef = doc(db, 'titulos', tituloId);
            const tituloDoc = await getDoc(tituloDocRef);

            if (tituloDoc.exists()) {
              
              const nombreTitulo = tituloDoc.data().nombre;
              const colorCod = tituloDoc.data().color;

              
              const fecha = eventoDoc.data().fecha;
              const dia = [fecha];
              const hora = eventoDoc.data().hora_inicio;
              
              eventos.push({
                title: `${nombreTitulo} ${hora}`,
                daysOfWeek: dia,
                backgroundColor: colorCod,
                
              });
            }
          }
        }

        
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
