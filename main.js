const loadRap = document.querySelector("#rap");

loadRap.addEventListener("click", () => {populateRapSheet(rapSheetObj)});

const loadNews = document.querySelector("#news");

loadNews.addEventListener("click", () => {populateNews(newsfeed)});

document.querySelector("#financial").addEventListener("click", financialPageFunc);
loadSummary();

document.querySelector("#summary").addEventListener("click", loadSummary);

const loadTravel = document.querySelector("#travel");

loadTravel.addEventListener("click", travelListBuilder);