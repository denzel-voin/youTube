<script setup>
import TheSearchInput from "./TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton.vue";
import TheSearchResults from "./TheSearchResults.vue";
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";

const keywords = [
  "лунный камень",
  "шумный ветер",
  "сахарный песок",
  "горячий кофе",
  "ледяная тишина",
  "спокойный рассвет",
  "пыльная дорога",
  "северный свет",
  "бешеный ритм",
  "тихий океан",
  "золотой мост",
  "вечерний звон",
  "хрустальный замок",
  "бархатная ночь",
  "туманный берег",
  "скользкий путь",
  "яркая вспышка",
  "глубокая мысль",
  "пустой вагон",
  "скрытая угроза"
];

const props = defineProps(["query"]);
const localQuery = ref(props.query);
const isSearchInputFocus = ref(false);
const activeSearchResult = ref(null);
const results = ref([]);

const emits = defineEmits(["updateQuery"]);

const trimmedQuery = computed(() => localQuery.value.replace(/\s+/g, ' ').trim());

const updateResults = () => {
  activeSearchResult.value = null;
  if (localQuery.value === '') results.value = [];
  else results.value = keywords.filter(keyword => keyword.includes(trimmedQuery.value));
};

const changeState = (state) => {
  isSearchInputFocus.value = state;
}

const decrementResult = () => {
  if (activeSearchResult.value === null) activeSearchResult.value = results.value.length - 1;
  else if (activeSearchResult.value === 0) activeSearchResult.value = results.value.length - 1;
  else activeSearchResult.value -= 1;
  localQuery.value = results.value[activeSearchResult.value];
}

const incrementResult = () => {
  if (activeSearchResult.value === null) activeSearchResult.value = 0;
  else if (activeSearchResult.value < results.value.length - 1) activeSearchResult.value += 1;
  else activeSearchResult.value = 0;
  localQuery.value = results.value[activeSearchResult.value];
}

const handleClick = () => {
  changeState(false);
}

const selectClickResult = (id) => {
  localQuery.value = results.value[id];
  updateResults();
}

watch(() => props.query, (newVal) => {
  if (newVal !== localQuery.value) {
    localQuery.value = newVal;
  }
});

watch(localQuery, (newVal) => {
  emits("updateQuery", newVal);
});

onMounted(() => {
  document.addEventListener('click', handleClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClick)
})

</script>

<template>
  <div class="flex w-full h-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
          v-model:query="localQuery"
          @update:query="updateResults"
          @change-state="changeState"
          @keyup.up="decrementResult"
          @keyup.down="incrementResult"
          @keydown.up.prevent
          @enter="selectClickResult(activeSearchResult)"
      />
      <TheSearchResults
          v-show="localQuery && isSearchInputFocus" :results="results"
          :activeSearchResult="activeSearchResult"
          @search-mouse-enter="activeSearchResult = $event"
          @search-mouse-leave="activeSearchResult = null"
          @select-search-result="selectClickResult($event)"
      />
    </div>
    <TheSearchButton @click="selectClickResult(activeSearchResult)" />
  </div>
</template>

<style scoped>

</style>