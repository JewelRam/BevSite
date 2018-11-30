
// const loadRap = document.querySelector("#rap");

// loadRap.addEventListener("click", () => {populateRapSheet(rapSheetObj)});
const loadCatPage = document.querySelector("#travel");
loadCatPage.addEventListener("click", () => {populateCats(BevAndCats)});

const loadBev = document.querySelector("#financial");
loadBev.addEventListener("click", () => {populateOther(BevOther)});

document.querySelector("#summary").addEventListener("click", loadSummary);
loadSummary();

const loadFitness = document.querySelector("#news");
loadFitness.addEventListener("click", () => {populateFitness(fitnessBev)});