import type { Joke } from "~/types.js"

const STORAGE_NAME = 'assets:server:jokes'
const ITEM_NAME = 'recent.json'

export async function fetchJoke (id?: string) {
  const joke = id ? await fetchJokeWithId(id) : await fetchRandomJoke()
  // save the joke to a file

  const jokes = await getRecentJokes() ?? []
  const newJokes = jokes.concat([joke]).slice(0, 9)

  await useStorage(STORAGE_NAME).setItem(ITEM_NAME, newJokes)
}

async function fetchRandomJoke () {
  const result = await $fetch<Joke>('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    }
  })
  return result
}

export async function getRecentJokes() {
  return useStorage(STORAGE_NAME).getItem<Joke[]>(ITEM_NAME) ?? []
}

async function fetchJokeWithId (id: string) {
  const result = await $fetch<Joke>('https://icanhazdadjoke.com/j/' + id, {
    headers: {
      Accept: 'application/json',
    }
  })
  return result
}