// my big object with pictures and titles and other tags
const execSummary = {
    manWanted: {
        sectionTitle: "Welcome! Meet Beverly! Aka: BEV",
       
        src: "ehhhhBev.jpg",
        alt: "Space Bev"
    },
   
   
    associates: { sectionTitle: "Other Identities:"},
    associates1:
        {
            pTag: "Beev",

            src: "beev.jpg",
            alt: "associates"
        },
    associates2:
        {
            pTag: "Turkey Bev",
            src: "turkeyBev.jpg",
            alt: "associates"
        },
        associates3:
        {
            pTag: "Bevtonia",

            src: "bevonosis.jpg",
            alt: "Bev As A Planet"
        },
        associates4:
        {
            pTag: "Taco Bev",

            src: "taco-bev.jpg",
            alt: "taco bev"
        },

}

// my giant function for creating the html
function loadSummary() {
    const summaryFragment = document.createDocumentFragment();
    // empties the page
    document.querySelector("#art").innerHTML = ""
    // loops through the object and creates the html tags and their attributes
    for (key in execSummary) {
        const detailFragment = document.createElement("div")
        // if there is a sectionTitle  it makes an h1
        if (execSummary[key].sectionTitle != null) {

            let hOne = document.createElement("h1");
            hOne.setAttribute("id", "bev-title");
            hOne.textContent = execSummary[key].sectionTitle;
            detailFragment.appendChild(hOne);
        }
       
        // if there is a src tag it makes an image tag
        if (execSummary[key].src != null) {
            let image = document.createElement("img");
            image.setAttribute("id", "bev-pics");
            image.src = execSummary[key].src;
            detailFragment.appendChild(image);

        }
        // if there is a pTag it makes a p tag
        if (execSummary[key].pTag != null) {
            let para = document.createElement("p");
            para.setAttribute("class", "pTag");
            para.textContent = execSummary[key].pTag;
            detailFragment.appendChild(para);
        }
        if (key === "associates1" || key === "associates2") {
            console.log("good")
            detailFragment.className = "associateClass";

        }
        summaryFragment.appendChild(detailFragment)
    }
    // puts everything in the summary fragment in the article
    document.querySelector("#art").appendChild(summaryFragment)
}