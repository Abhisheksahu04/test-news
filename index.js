async function fetchNews(q) {
  var url = "https://project-news-sto7.onrender.com/";
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
