<script setup lang="ts">
const { data, refresh } = await useFetch<Record<string, unknown>>('https://icanhazdadjoke.com/', {
  headers: {
    Accept: 'application/json',
  },
})

onMounted(() => {
  // refresh the joke every 5 seconds
  setInterval(() => {
    refresh()
  }, 5000)
})
</script>

<template>
  <div>
    <h1>Hey Frontmania</h1>
    <Icon style="font-size: 100pt;" name="heroicons:academic-cap" />
    {{ data }}
  </div>
</template>
