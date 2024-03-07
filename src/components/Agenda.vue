<template>
    <div>
      <div class="agenda">
        <h1 class="agenda-text">Agenda</h1>
      </div>
  
      <div class="row">
        <div v-for="(day, index) in filteredDaysOfWeek" :key="index" class="column">
            <div  class="card">
              <h2>{{ day }}</h2>
              <p v-for="event in getEventsByDay(index)" :key="event.id">
                {{ event.start }} {{ event.title }} - Profe {{ event.profe }}
              </p>
            
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { getFirestore, collection, getDocs, query, getDoc, doc } from 'firebase/firestore';
import store from '../store/store';

export default {
  name: 'Agenda',
  data() {
    return {
      events: [],
      daysOfWeek: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    };
  },
  computed: {
    filteredDaysOfWeek() {
      //aca filtra los dias de la semana para omitir el domingo (index 0)
      return this.daysOfWeek.filter((day, index) => index > 0);
    },
  },
  methods: {
    async loadEvents() {
        const db = getFirestore(store.state.firebaseApp);
        const eventsQuery = query(collection(db, 'eventos'));
        const eventsSnapshot = await getDocs(eventsQuery);

        
        const eventsPromises = eventsSnapshot.docs.map(async (eventDoc) => {
          const data = eventDoc.data();
          const tituloDocRef = doc(db, 'titulos', data.oid_titulo.id);
          const profeDocRef = doc(db, 'profes', data.oid_profe.id);

          //usa Promise.all para esperar las dos consultas antes de continuar
          const [tituloDoc, profeDoc] = await Promise.all([getDoc(tituloDocRef), getDoc(profeDocRef)]);

          const nombreTitulo = tituloDoc.exists() ? tituloDoc.data().nombre : 'Sin título';
          const nombreProfe = profeDoc.exists() ? profeDoc.data().nombre : 'Sin profesor';
          return {
            id: eventDoc.id,
            start: data.hora_inicio,
            title: nombreTitulo,
            profe: nombreProfe,
            day: data.fecha,
          };
        });

        //espera a que todas las promesas se resuelvan antes de asignar a this.events
        this.events = await Promise.all(eventsPromises);
      },
    getEventsByDay(day) {
      return this.events.filter((event) => event.day === day);
    },
  },
  async created() {
    await this.loadEvents();
  },
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
}
.agenda {
    text-align: center;
    margin-bottom: 60px;
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
.row {
    display: flex;
    flex-wrap: wrap;
}

.column {
    width: 100%;
    padding: 0 1em 1em 1em;
    text-align: center;
}

.card {
    border: 1px solid #fff;
    width: 100%;
    height: 100%;
    padding: 2em 1.5em;
    background: linear-gradient(#fff 50%, #5761b2 50%);
    background-size: 100% 200%;
    background-position: 0 2.5%;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
}
h2 {
    font-size: 20px;
    font-weight: 600;
    color: #5761b2;
    margin: 1em 0;
}

p {
    color: #bbb;
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: 0.03em;
    margin: 0;
}

.icon-wrapper {
    background-color: #5761b2;
    position: relative;
    margin: auto;
    font-size: 30px;
    height: 2.5em;
    width: 2.5em;
    color: #fff;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: 0.5s;
}

.card:hover {
    background-position: 0 100%;
}

.card:hover .icon-wrapper {
    background-color: #fff;
    color: #5761b2;
}

.card:hover h2 {
    color: #ffa44e;
}

.card:hover p {
    color: #fff;
}

@media screen and (min-width: 768px) {
    section {
        padding: 0 2em;
    }

    .column {
        flex: 0 50%;
        max-width: 50%;
    }
}

@media screen and (min-width: 992px) {
    section {
        padding: 1em 3em;
    }

    .column {
        flex: 0 0 33.33%;
        max-width: 33.33%;
    }
}

</style>