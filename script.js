const apiKey = "your_key";
const content = document.getElementById('content');

// Определяем, на какой странице мы находимся
const page = window.location.pathname.split("/").pop();

if (page === 'index.html' || page === '') {
  getCats();
} else if (page === 'facts.html') {
  getFacts();
}

// GET-запрос картинок котов
async function getCats() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5', {
      headers: { 'x-api-key': apiKey }
    });
    const cats = await response.json();

    content.innerHTML = '';
    cats.forEach(cat => {
      const img = document.createElement('img');
      img.src = cat.url;
      img.alt = 'Cute cat';
      img.width = 300;
      content.appendChild(img);
    });
  } catch (error) {
    console.error(error);
    content.textContent = 'Ошибка при загрузке котов.';
  }
}
// GET-запрос фактов о котах
async function getFacts() {
  try {
    const response = await fetch('https://catfact.ninja/facts?limit=5');
    const data = await response.json();

    content.innerHTML = '';
    data.data.forEach(fact => {
      const p = document.createElement('p');
      p.textContent = fact.fact;
      content.appendChild(p);
    });
  } catch (error) {
    console.error(error);
    content.textContent = 'Ошибка при загрузке фактов.';
  }

}
