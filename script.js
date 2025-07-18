// SheetDB POST example for news publish
const newsForm = document.getElementById('newsForm');
const newsList = document.getElementById('newsList');
const SHEET_API_URL = "https://sheetdb.io/api/v1/YOUR_SHEETDB_ID"; // Change this

newsForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  await fetch(SHEET_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [{ title, content }] })
  });

  newsForm.reset();
  alert("সংবাদ যুক্ত হয়েছে!");
});

// Optional: Fetch and show news
async function loadNews() {
  const res = await fetch(SHEET_API_URL);
  const data = await res.json();
  newsList.innerHTML = data.map(n => `<h3>${n.title}</h3><p>${n.content}</p><hr>`).join("");
}

loadNews();
