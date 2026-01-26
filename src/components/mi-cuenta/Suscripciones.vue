<template>
  <div class="suscripciones">

    <h2>Mis suscripciones On Demand</h2>

    <!-- Sin paquetes -->
    <div v-if="!tieneSuscripciones" class="empty-state">
      <p>
        Aún no tenés suscripciones activas.
        Escribinos por WhatsApp para coordinar la compra y acceder a tus clases.
      </p>
    </div>

    <!-- Planes -->
    <div v-else-if="!suscripcionActiva" class="planes">
      <div
        v-for="plan in planes"
        :key="plan.paquete"
        class="plan-card"
        @click="seleccionarPlan(plan)"
      >
        <h3>{{ plan.titulo }}</h3>
        <p>{{ plan.descripcion }}</p>
      </div>
    </div>

    <!-- Clases -->
    <div v-else-if="suscripcionActiva && !claseActiva" class="clases">
      <button class="volver" @click="volverAPlanes">← Volver a planes</button>

      <h3>{{ suscripcionActiva.titulo }}</h3>

      <ul class="lista-clases">
        <li
          v-for="clase in suscripcionActiva.clases"
          :key="clase.id"
          @click="seleccionarClase(clase)"
        >
          ▶ {{ clase.titulo }}
        </li>
      </ul>
    </div>

    <!-- Video -->
    <div v-else class="video">
      <button class="volver" @click="claseActiva = null">
        ← Volver a clases
      </button>

      <h4>{{ claseActiva.titulo }}</h4>

      <iframe
        :src="claseActiva.link"
        width="100%"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>

  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { getAuth } from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore'

const db = getFirestore()
const auth = getAuth()

const planes = ref([])
const suscripcionActiva = ref(null)
const claseActiva = ref(null)

const tieneSuscripciones = computed(() => planes.value.length > 0)

const seleccionarPlan = (plan) => {
  suscripcionActiva.value = plan
  claseActiva.value = null
}

const seleccionarClase = (clase) => {
  claseActiva.value = clase
}

const volverAPlanes = () => {
  suscripcionActiva.value = null
  claseActiva.value = null
}

const cargarSuscripciones = async () => {
  const user = auth.currentUser
  if (!user) return
  
  const userRef = doc(db, 'usuarios', user.uid)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) return
  
  const paquetes = userSnap.data().suscripciones || []

  if (paquetes.length === 0) return

  // 2️⃣ Obtener videos por paquete
  const videosQuery = query(
    collection(db, 'videos'),
    where('paquete', 'in', paquetes)
  )

  const videosSnap = await getDocs(videosQuery)

  // 3️⃣ Agrupar videos por paquete
  const mapaPlanes = {}

  videosSnap.forEach(docu => {
    const video = { id: docu.id, ...docu.data() }

    if (!mapaPlanes[video.paquete]) {
      mapaPlanes[video.paquete] = {
        paquete: video.paquete,
        titulo: `Plan ${video.paquete}`,
        descripcion: `Clases del paquete ${video.paquete}`,
        clases: []
      }
    }

    mapaPlanes[video.paquete].clases.push(video)
  })

  planes.value = Object.values(mapaPlanes)
}

onMounted(cargarSuscripciones)
</script>


<style scoped>
.suscripciones {
  padding: 16px;
}

/* Empty */
.empty-state {
  margin-top: 20px;
  color: #666;
}

/* Planes */
.planes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.plan-card {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: #ffa44e;
}

.plan-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.plan-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* Clases */
.lista-clases {
  list-style: none;
  padding: 0;
}

.lista-clases li {
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.lista-clases li:hover {
  background: #f5f5f5;
}

/* Video */
.video iframe {
  margin-top: 16px;
}

/* Botón volver */
.volver {
  background: none;
  border: none;
  color: #5761b2;
  cursor: pointer;
  margin-bottom: 12px;
  font-weight: bold;
}
</style>
