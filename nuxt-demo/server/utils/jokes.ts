const STORE_NAME = 'assets:server:jokes'
const RECENT_JOKES_ENTRY = 'recent.json'

export async function fetchJokeFromApi (id?: string): Promise<Joke> {
  const suffix = id ? `/j/${id}` : ''

  const joke = await $fetch<Joke>(`https://icanhazdadjoke.com/${suffix}`, {
    headers: {
      Accept: 'application/json',
    }
  })
  return joke
}

export async function getRecentJokes (): Promise<Joke[]> {
  const jokes = await useStorage(STORE_NAME).getItem<Joke[]>(RECENT_JOKES_ENTRY)
  return jokes ?? []
}

export async function setRecentJokes (jokes: Joke[]): Promise<void> {
  await useStorage(STORE_NAME).setItem(RECENT_JOKES_ENTRY, jokes)
}


export async function addRecentJoke (joke: Joke): Promise<void> {
  const jokes = await getRecentJokes()
  const newJokes = jokes.slice(0, 9)
  newJokes.unshift(joke)
  await setRecentJokes(newJokes)
}