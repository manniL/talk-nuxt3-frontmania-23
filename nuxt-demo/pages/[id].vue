<script setup lang="ts">
const route = useRoute()
const id = route.params.id


const { data } = await useFetch<any>(`https://icanhazdadjoke.com/j/${id}`, {
  headers: {
    Accept: 'application/json',
  },
})

</script>

<template>
  <div>
    {{ data }}
  </div>
</template>