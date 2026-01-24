<template>
  <div class="faq-container">
    <h2>Preguntas frecuentes</h2>

    <div
      v-for="(item, index) in faqs"
      :key="index"
      class="faq-item"
    >
      <div class="question" @click="toggle(index)">
        <span>{{ item.question }}</span>
        <span class="icon">
          {{ activeIndex === index ? '−' : '+' }}
        </span>
      </div>

      <div v-if="activeIndex === index" class="answer">
        <p v-for="(line, i) in item.answer" :key="i">
          {{ line }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqSuscripciones',
  data() {
    return {
      activeIndex: null,
      faqs: [
        {
          question: '¿Cómo funcionan los planes de suscripción?',
          answer: [
            'Los planes te permiten acceder a contenidos exclusivos según el plan que elijas.',
            'El acceso es personal y está asociado a tu cuenta.',
          ],
        },
        {
          question: '¿Cuánto tiempo dura el acceso?',
          answer: [
            'Cada plan tiene una duración específica (por ejemplo, 6 meses).',
            'Durante ese período podés ver los contenidos las veces que quieras.',
          ],
        },
        {
          question: '¿Cómo se realiza la compra?',
          answer: [
            'La compra se realiza mediante transferencia bancaria.',
            'Una vez realizado el pago, debés enviar el comprobante por WhatsApp.',
          ],
        },
        {
          question: '¿Cuándo se habilita el acceso?',
          answer: [
            'Una vez verificado el pago, el acceso se habilita manualmente.',
            'Vas a recibir la confirmación cuando tu suscripción esté activa.',
          ],
        },
        {
          question: '¿Dónde gestiono mis clases y suscripciones?',
          answer: [
            'Las suscripciones y clases grabadas se gestionan desde la sección "Mi cuenta".',
            'Los turnos presenciales se administran a través de la plataforma SigueFit.',
          ],
        },
        {
          question: '¿Puedo compartir mi cuenta?',
          answer: [
            'No. El acceso es personal y no transferible.',
          ],
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.faq-container {
  max-width: 900px;
  margin: 60px auto;
  padding: 0 24px;
}

.faq-container h2 {
  margin-bottom: 30px;
  color: #5761b2;
}

.faq-item {
  border-bottom: 1px solid #ddd;
  padding: 14px 0;
}

.question {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  color: #333;
}

.icon {
  font-size: 22px;
  line-height: 1;
}

.answer {
  margin-top: 10px;
  color: #555;
}

.answer p {
  margin: 6px 0;
}
</style>
