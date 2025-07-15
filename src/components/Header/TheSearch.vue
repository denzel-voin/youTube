<script setup>
import TheSearchInput from "./TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton.vue";
import TheSearchResults from "./TheSearchResults.vue";
import {computed, ref} from "vue";

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

const query = ref('');

const results = computed(() => {
  return keywords.filter(keyword => keyword.includes(query.value));
})
</script>

<template>
  <div class="flex w-full h-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput v-model:query="query"/>
      <TheSearchResults v-show="query" :results="results"/>
    </div>
    <TheSearchButton/>
  </div>
</template>

<style scoped>

</style>