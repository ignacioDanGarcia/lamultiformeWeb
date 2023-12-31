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
          right: 'dayGridMonth,timeGridWeek dayGridDay,listWeek',
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
