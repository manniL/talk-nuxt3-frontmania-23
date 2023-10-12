export default defineEventHandler(async (event) => {
  const jokes = await getRecentJokes()
  return jokes
})