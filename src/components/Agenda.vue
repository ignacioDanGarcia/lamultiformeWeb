<template>
    <div class="agenda">
        <div class="timeline">
            <ul>
            <li>
                <div class="timeline-content">
                
                <h1>LUNES</h1>
                <div class="column">
                            <div class="row">
                                <div class="day-hours">
                                    <p>8.00hs PILATES - Profe SUSY</p>
                                    <p>9.00hs PILATES - Profe SUSY</p>
                                    <p>10.00hs PILATES - Profe SUSY</p>
                                    <p>11.00hs PILATES - Profe SUSY</p>
                                    <p>15.00hs PILATES - Profe BERU</p>
                                    <p>16.00hs PILATES - Profe BERU</p>
                                    <p>17.00hs PILATES - Profe BERU</p>
                                    <p>18.30hs HATHA YOGA DINAMICO - Profe BERU</p>
                                </div>
                            </div>
                        </div>
                </div>
            </li>
            <li>
                <div class="timeline-content">
                
                <h1>MARTES</h1>
                <div class="column">
                            <div class="row">
                                <div class="day-hours">
                                    <p>15.00hs PILATES - Profe BERU</p>
                                    <p>16.00hs YOGA - Profe BERU</p>
                                    <p>17.00hs YOGA - Profe BERU</p>
                                    <p>19.30hs PILATES - Profe BERU</p>
                                </div>
                            </div>
                        </div>
                </div>
            </li>
            <li>
                <div class="timeline-content">
                
                <h1>MIERCOLES</h1>
                <div class="column">
                            <div class="row">
                                <div class="day-hours">
                                    <p>08.00hs PILATES - Profe BERU</p>
                                    <p>09.00hs PILATES - Profe BERU</p>
                                    <p>10.00hs PILATES - Profe BERU</p>
                                    <p>11.00hs PILATES - Profe BERU</p>
                                    <p>15.00hs PILATES - Profe BERU</p>
                                    <p>16.00hs PILATES - Profe BERU</p>
                                    <p>17.00hs PILATES - Profe BERU</p>
                                    <p>18.00hs YOGA DINÁMICO - Profe DANI</p>
                                    <p>19.30hs YOGA DINÁMICO - Profe DANI</p>
                                </div>
                            </div>
                        </div>
                </div>
            </li>
            <li>
                <div class="timeline-content">
                
                <h1>JUEVES</h1>
                <div class="column">
                            <div class="row">
                                <div class="day-hours">
                                    <p>08.00hs PILATES - Profe BERU</p>
                                    <p>09.00hs PILATES - Profe BERU</p>
                                    <p>10.00hs YOGA - Profe BERU</p>
                                    <p>11.00hs YOGA - Profe BERU</p>
                                    <p>15.00hs YOGA - Profe BERU</p>
                                    <p>16.00hs YOGA - Profe BERU</p>
                                    <p>17.00hs YOGA - Profe BERU</p>
                                    <p>18.00hs PILATES - Profe BERU</p>
                                    <p>19.00hs YOGA DINÁMICO - Profe BERU</p>
                                </div>
                            </div>
                        </div>
                </div>
            </li>
            <li>
                <div class="timeline-content">
                
                <h1>VIERNES</h1>
                <div class="column">
                            <div class="row">
                                <div class="day-hours">
                                    <p>08.00hs PILATES - Profe SUSY</p>
                                    <p>09.00hs PILATES - Profe SUSY</p>
                                    <p>10.00hs HATHA YOGA - Profe THEO</p>
                                    <p>11.00hs PILATES - Profe SUSY</p>
                                </div>
                            </div>
                        </div>
                </div>
            </li>
            <li>
                <div class="timeline-content">
                
                <h1>ARTE</h1>
                <div class="column">
                            <div class="row">
                                <div class="day-hours">
                                    <p>LUNES 19.45hs MURGA ESTILO URUGUAYA</p>
                                    <p>VIERNES 18.45hs TALLER LITERARIO</p>
                                    <p>SÁBADO 11.00hs FLAMENCO PARA PRINCIPIANTES</p>
                                </div>
                            </div>
                        </div>
                </div>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Agenda'
}
</script>

<style scoped>
.agenda {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
}
.timeline {
  width: 80%;
  height: auto;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  
}

.timeline ul {
  list-style: none;
}
.timeline ul li {
  padding: 70px;
  color: black;
  margin-bottom: 20px;
  
}
.timeline ul li:last-child {
  margin-bottom: 0;
}
.timeline-content h1 {
  position: absolute;
  bottom: 0;
  white-space: nowrap; 
  font-family: 'Times New Roman', Times;
  font-style: italic;
  font-size: 100px;
  font-weight: bold;
  color: #ffa44e;
}

.timeline ul li:nth-child(odd) .timeline-content h1 {
  left: 0;
  transform: rotate(-90deg);
  transform-origin: left bottom;
}

.timeline ul li:nth-child(even) .timeline-content h1 {
  right: 0;
  transform: rotate(90deg);
  transform-origin: right bottom;
}

.column {
    display: flex;
    flex-wrap: wrap;
    margin: 5px;   
}

.row {
    width: 100%;
    padding: 0 1em 1em 1em;
    
}
.day-hours{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0 0 0;
    flex-direction: column;   
    
  }
.timeline li:nth-child(odd) .day-hours {
    align-items: end;
}
.day-hours p{
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: max-content;
    position: relative;
    text-decoration:  none;
    padding: 6px 0px;
    color: #000;
}
.timeline li:nth-child(odd) .day-hours p::after{
  content: '';
  height: 3px;
  width: calc(100% + 118px);
  background: #5761b2;
  position: absolute;
  left: 0;
  bottom: -10px;  
}
.timeline li:nth-child(even) .day-hours p::after{
  content: '';
  height: 3px;
  width: calc(100% + 118px);
  background: #5761b2;
  position: absolute;
  left: -125px;
  bottom: -10px;
}
@media only screen and (max-width: 767px) {
  .timeline li:nth-child(even) .day-hours {
    align-items: end;
  }
  
  /*FALTA ARREGLAR COMO SE VEN EN EL CELU*/

  .timeline li:nth-child(even) .day-hours p::after{
    width: calc(100%);
    left: 0px;
  }
  .timeline li:nth-child(odd) .day-hours p::after{
    width: calc(100%);
  }
}
@media only screen and (min-width: 768px) {
  .timeline:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #5761b2;
    margin: auto;
  }
  .timeline ul li {
    width: 50%;
    position: relative;
    margin-bottom: 50px;
  }
  .timeline ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
  }
  .timeline ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
  }
  .timeline ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -30px;
  }
  .timeline ul li:nth-child(even)::before {
    transform: translate(-50%, -50%);
    left: -30px;
  }
}

</style>