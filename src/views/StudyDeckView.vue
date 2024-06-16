<script setup>
import { ref, computed, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { useRoute, useRouter } from "vue-router";
import HeaderMaster from "@/components/HeaderMaster.vue";
import NavBar from "@/components/NavBar.vue";
import BtnScore from "@/components/BtnScore.vue";

const route = useRoute();
const router = useRouter();
const deckId = ref(parseInt(route.params.id));
const deck = ref({});
const showStudyCard = ref(true);
const showQuestion = ref(true);
const showAnswer = ref(false);
const currentCardIndex = ref(0);

// Simulación de la data (puedes realizar llamada a la API)
const decks = [
  {
    id: 1,
    title: "Mazo 1",
    date: "20 de mayo, 2024",
    by: "Autor 1",
    cards: [
      {
        id: 1,
        question: "¿Cuál es la capital de Francia?",
        answer: "París es la capital de Francia.",
        dueDate: null,
      },
      {
        id: 2,
        question: "¿Cuál es el océano más grande del mundo?",
        answer: "El océano Pacífico es el más grande del mundo.",
        dueDate: null,
      },
      {
        id: 3,
        question: "¿Cuál es el animal más rápido del mundo?",
        answer: "El guepardo es el animal más rápido del mundo.",
        dueDate: null,
      },
      {
        id: 4,
        question: "¿En qué año fue la Revolución Francesa?",
        answer: "La Revolución Francesa fue en 1789.",
        dueDate: null,
      },
    ],
  },
  {
    id: 2,
    title: "Mazo 2",
    date: "21 de mayo, 2024",
    by: "Autor 2",
    cards: [
      {
        id: 1,
        question: "¿Cuál es el animal más rápido del mundo?",
        answer: "El guepardo es el animal más rápido del mundo.",
        dueDate: null,
      },
      {
        id: 2,
        question: "¿En qué año fue la Revolución Francesa?",
        answer: "La Revolución Francesa fue en 1789.",
        dueDate: null,
      },
      // Más tarjetas de estudio aquí...
    ],
  },
];

onMounted(() => {
  deck.value = decks.find((d) => d.id === deckId.value);
});



const toggleCard = () => {
  showQuestion.value = !showQuestion.value;
  showAnswer.value = !showAnswer.value;
};

const nextCard = () => {
  const currentDeck = decks.find((d) => d.id === deckId.value);
  const currentCards = currentDeck.cards;

  // Encontrar la próxima tarjeta que debe ser estudiada según la fecha de vencimiento
  const nextIndex = currentCards.findIndex(card => {
    return !card.dueDate || card.dueDate <= new Date();
  });

  if (nextIndex !== -1) {
    currentCardIndex.value = nextIndex;
    showQuestion.value = true;
    showAnswer.value = false;
  } else {
    alert("¡Has terminado de estudiar todas las tarjetas!");
    router.push({ name: 'DeckDetailsView' });
  }
};

const currentCard = computed(() => decks[deckId.value - 1].cards[currentCardIndex.value]);

const assignDueDate = (days) => {
  const card = currentCard.value;
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  card.dueDate = currentDate;
  console.log(`Card ID: ${card.id}, Due Date: ${card.dueDate}`);
  nextCard();
};


</script>

<template>
  <div class="home-container">
    <HeaderMaster />
    <div class="a ml-72 mt-24 pr-6">
      <div class="navegation-bar flex gap-2 text-12px items-center justify-start">
        <router-link
          :to="{ name: 'DecksView' }"
          class="font-normal text-navGrey"
          >Mis Mazos</router-link
        >
        <Icon
          icon="ep:arrow-right"
          width="15"
          height="15"
          style="color: #8a8f9d;"
        />
        <router-link
          :to="{ name: 'DeckDetailsView' }"
          class="font-normal text-navGrey"
          >{{ deck.title }}</router-link
        >
        <Icon
          icon="ep:arrow-right"
          width="15"
          height="15"
          style="color: #8a8f9d;"
        />
        <span class="font-bold">Estudiar Flash Cards</span>
      </div>
      <div class="flex items-center p-2 gap-5">
        <h1 class="font-bold md:text-32px sm:text-24px">
          Estudiar Flash Cards
        </h1>
        <span class="font-black md:text-32px sm:text-24px text-navGrey">{{
          deck.title
        }}</span>
      </div>
      <div class="flex flex-col gap-8 py-6">
        <div
          v-if="showStudyCard"
          class="btn-container flex justify-center items-center gap-7"
        >
          <BtnScore option="Muy Fácil" @score="assignDueDate" />
          <BtnScore option="Fácil" @score="assignDueDate" />
          <BtnScore option="Medio" @score="assignDueDate" />
          <BtnScore option="Difícil" @score="assignDueDate" />
          <BtnScore option="Muy Difícil" @score="assignDueDate" />
        </div>
        <div
          v-if="showQuestion && (!currentCard.dueDate || currentCard.dueDate <= new Date())"
          class="study-card-container mx-20 min-h-[18rem] p-8 max-h-[18rem] bg-opacity-30 bg-purpleP flex items-start justify-center text-justify rounded-xl border border-purpleP overflow-y-scroll max-w-none"
        >
          <span class="text-editor">
            {{ currentCard.question }}
            <!-- Mostrar pregunta o respuesta según el estado -->
            <!-- <template v-if="showQuestion">
              {{ currentCard.question }}
            </template>
            <template v-else>
              {{ currentCard.question }}
            </template> -->
          </span>
        </div>
        <div
          v-if="showAnswer"
          class="study-answer-container mx-20 min-h-[18rem] p-8 max-h-[18rem] bg-opacity-30 bg-purpleP flex items-start justify-center text-justify rounded-xl border border-purpleP overflow-y-scroll max-w-none"
        >
          <span class="text-editor">
            {{ currentCard.answer }}
          </span>
        </div>
        <div class="btn-container-answer flex justify-center items-center gap-7">
          <button
            v-if="showQuestion"
            @click="toggleCard"
            class="border rounded-xl text-white font-medium py-2 px-5 hover:bg-white bg-pink-500 hover:border-pink-500 hover:text-pink-500"
          >
            <!-- Cambiar el texto del botón según el estado -->
           <!--  <template v-if="showQuestion">Respuesta</template>
            <template v-else>Siguiente</template> -->
            Respuesta
          </button>
        </div>
      </div>
    </div>
    <NavBar />
  </div>
</template>