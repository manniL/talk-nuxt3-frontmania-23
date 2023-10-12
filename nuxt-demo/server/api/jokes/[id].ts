export default defineEventHandler(async (event) => {
  const joke = await fetchJokeFromApi(event.context.params!.id)
  addRecentJoke(joke)
  return joke
})