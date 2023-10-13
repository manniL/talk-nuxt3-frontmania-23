import { getRecentJokes } from "~/server/utils/jokes.js"

export default defineEventHandler(async () => {
  return getRecentJokes()
})