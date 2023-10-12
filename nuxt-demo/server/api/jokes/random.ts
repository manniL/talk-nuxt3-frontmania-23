export default defineEventHandler(async () => {
  const joke = await fetchJokeFromApi()
  addRecentJoke(joke)
  return joke
})