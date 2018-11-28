// my big object with pictures and titles and shit
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

// my giant function
function loadSummary() {
    const summaryFragment = document.createDocumentFragment();
    // empties the page
    document.querySelector("#art").innerHTML = ""
    // goes through the smaller objects in my big object
    for (key in execSummary) {
        const detailFragment = document.createElement("div")
        // if there is a sectionTitle thingy it makes an h1
        if (execSummary[key].sectionTitle != null) {

            let hOne = document.createElement("h1");
            hOne.setAttribute("id", "bev-title");
            hOne.textContent = execSummary[key].sectionTitle;
            detailFragment.appendChild(hOne);
        }
       
        // if there is a src thingy it makes an image tag
        if (execSummary[key].src != null) {
            let image = document.createElement("img");
            image.setAttribute("id", "bev-pics");
            image.src = execSummary[key].src;
            detailFragment.appendChild(image);

        }
        // if there is a pTag thingy it makes a p tag
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
    // puts all my shit in the article
    document.querySelector("#art").appendChild(summaryFragment)
}









