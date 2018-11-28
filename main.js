// const loadRap = document.querySelector("#rap");

// loadRap.addEventListener("click", () => {populateRapSheet(rapSheetObj)});

const loadNews = document.querySelector("#news");

loadNews.addEventListener("click", () => {populateNews(myNewsfeed)});
loadSummary();
const loadBev = document.querySelector("#financial");

loadBev.addEventListener("click", () => {populateOther(myNewsfeed)});

// document.querySelector("#financial").addEventListener("click", financialPageFunc);

document.querySelector("#travel").addEventListener("click", travelListBuilder);

document.querySelector("#summary").addEventListener("click", loadSummary);
