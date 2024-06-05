async function fetchNews(q) {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=f7cd016d1db243358864867b0fe15e9a";
  // var req = new Request(url);
  let p = await fetch(url);
  let response = await p.json();
  console.log(JSON.stringify(response));
  let newsHtml = "";
  results.innerHTML = response.totalResults;
  for (item of response.articles) {
    let news = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.urlToImage}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <a href="${item.url}" target="_blank" class="btn btn-primary">Read more</a>
  </div>
</div>`;
    newsHtml += news;
  }
  document.querySelector(".meracontainer").innerHTML = newsHtml;
}

fetchNews();
