export default async function bukuData() {
  try {
    const response = await fetch('https://gutendex.com/books?sort=popular&page=1');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (err) {
    console.error('Fetch buku gagal:', err);
    return null;
  }
}
