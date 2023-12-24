<template>
    <div>
        <div class="agenda">
            <h1 class="agenda-text">Agenda</h1>
        </div>
        
        <div class="row">
            <div class="column">
                <div class="card">
                    
                    <h2>Lunes</h2>
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

            <div class="column">
                <div class="card">
                    
                    <h2>Martes</h2>
                    <p>15.00hs PILATES - Profe BERU</p>
                    <p>16.00hs YOGA - Profe BERU</p>
                    <p>17.00hs YOGA - Profe BERU</p>
                    <p>19.30hs PILATES - Profe BERU</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    
                    <h2>Miércoles</h2>
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

            <div class="column">
                <div class="card">
                    
                    <h2>Jueves</h2>
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

            <div class="column">
                <div class="card">
                    
                    <h2>Viernes</h2>
                    <p>08.00hs PILATES - Profe SUSY</p>
                    <p>09.00hs PILATES - Profe SUSY</p>
                    <p>10.00hs HATHA YOGA - Profe THEO</p>
                    <p>11.00hs PILATES - Profe SUSY</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    
                    <h2>Sábado</h2>
                    <p>Próximamente!</p>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
export default {
  name: 'Agenda'
}
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