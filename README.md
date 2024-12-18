# Unhandled API Fetch Error in Next.js 15

This repository demonstrates a common error in Next.js 15 applications: unhandled errors during API data fetching.  The `about.js` page fetches data from an API route (`/api/data`).  If the API request fails, the application crashes without proper error handling.

The solution demonstrates how to gracefully handle potential API errors using async/await and try...catch blocks.