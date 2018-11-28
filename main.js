
const loadNews = document.querySelector("#news");

loadNews.addEventListener("click", () => {populateNews(myNewsfeed)});

const loadBev = document.querySelector("#financial");

loadBev.addEventListener("click", () => {populateOther(myNewsfeed)});

// document.querySelector("#financial").addEventListener("click", financialPageFunc);
loadSummary();

document.querySelector("#travel").addEventListener("click", travelListBuilder);

document.querySelector("#summary").addEventListener("click", loadSummary);