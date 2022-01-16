export async function fetchBooks() {
  const resp = await fetch('https://the-one-api.dev/v2/book/', {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}
