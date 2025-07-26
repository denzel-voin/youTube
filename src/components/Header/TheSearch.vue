<script setup>
import TheSearchInput from "./TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton.vue";
import TheSearchResults from "./TheSearchResults.vue";
import {computed, ref, watch} from "vue";

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

const emits = defineEmits(["updateQuery"]);

const trimmedQuery = computed(() => localQuery.value.replace(/\s+/g, ' ').trim());

const results = computed(() => {
  return keywords.filter(keyword => keyword.includes(trimmedQuery.value));
});

const changeState = (state) => {
  isSearchInputFocus.value = state;
}

const decrementResult = () => {
  if (activeSearchResult.value === null) return activeSearchResult.value = results.value.length - 1;
  return activeSearchResult.value === 0 ? activeSearchResult.value = results.value.length - 1 : activeSearchResult.value -= 1;
}

const incrementResult = () => {
  if (activeSearchResult.value === null) return activeSearchResult.value = 0;
  return activeSearchResult.value < results.value.length - 1 ? activeSearchResult.value += 1 : activeSearchResult.value = 0;
}

watch(() => props.query, (newVal) => {
  if (newVal !== localQuery.value) {
    localQuery.value = newVal;
  }
});

watch(localQuery, (newVal) => {
  emits("updateQuery", newVal);
});

</script>

<template>
  <div class="flex w-full h-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
          v-model:query="localQuery"
          @change-state="changeState"
          @keyup.up="decrementResult"
          @keyup.down="incrementResult"
      />
      <TheSearchResults
          v-show="localQuery.length && isSearchInputFocus" :results="results"
          :activeSearchResult="activeSearchResult"
      />
    </div>
    <TheSearchButton/>
  </div>
</template>

<style scoped>

</style>