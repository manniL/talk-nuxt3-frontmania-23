<script setup lang="ts">
const { data } = await useFetch('/api/jokes/recent')
</script>

<template>
  <div>
    <h1>Hey Frontmania</h1>
    <Icon style="font-size: 100pt;" name="heroicons:academic-cap" />
    <ul>
      <li v-for="joke in data">
        {{ joke.joke }}
      </li>
    </ul>
  </div>
</template>
