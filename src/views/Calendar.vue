<script>
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import listPlugin from '@fullcalendar/list';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import esLocale from '@fullcalendar/core/locales/es';

  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  

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
          right: 'dayGridMonth,timeGridWeek,dayGridDay,listWeek',
          },
          titleFormat: { year: 'numeric', month: 'long' },
          weekends: true,
          locale: esLocale,
          events: [
            { title: 'Pilates 19hs', start: '2023-12-24',
            backgroundColor: 'red',
            textColor: 'white'},
            { title: 'Yogaaa eee', start: new Date() },
          ]
       }
     }
   }
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
    background-color: #111;
    color: #ffa44e;
    font-size: 11px;
}
</style>
