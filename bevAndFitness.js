//first step was creating a large object with smaller objects in it that create a newsfeed.
const fitnessBev = {
    section1: {
        h1: "Bev Used To Be Fat...",
        src: "bev-nips.jpg",
       alt: "associates"
    },
   
    section2: {
        h1: "But thanks to her tireless efforts with boxing..",
        src: "fighter-bev.jpg"
    },
    section3: {
        h1: "And running..",
        src: "running-bev.jpg"
    },
    section4: {
        h1: "She was able to get BUFF",
        src: "buff-bev2.jpg"
    }
};

//make it all into a function that will create the elements, attach the text content, append to the article which then goes into the html

const populateFitness = function () {

//putting that object in a fragment so that I can then push that to DOM
    const newsFragment = document.createDocumentFragment();
    //this clears the html in that section
    document.querySelector("#art").innerHTML = " ";
//now making a for in loop to go through 
    for (const section in fitnessBev) {
//if statement for the h1 section since it is by itself
        if (fitnessBev[section].h1 != undefined) {
            let sectionH1 = document.createElement("h1");
            sectionH1.setAttribute("id", "fitnessH1");
            sectionH1.textContent = fitnessBev[section].h1;
            newsFragment.appendChild(sectionH1);
        }
        if (fitnessBev[section].src != null) {
            let image = document.createElement("img");
            image.setAttribute("id", "bev-fitness");
           
            image.src = fitnessBev[section].src;
            newsFragment.appendChild(image);

        }
//if statement for the sections that have the h3 in it 
        if (fitnessBev[section].h3 != undefined) {
            let sectionMain = document.createElement("section");
//these are basicall just creating the elements and then attaching the text and appending to the sectionMain 
            let sectionH3 = document.createElement("h3");
            sectionH3.setAttribute("id", "fitness");
            sectionH3.textContent = fitnessBev[section].h3;
            sectionMain.appendChild(sectionH3);

            let sectionP = document.createElement("p");
            sectionP.textContent = fitnessBev[section].p;
            sectionMain.appendChild(sectionP);

            let sectionH4 = document.createElement("h4");
            sectionH4.textContent = fitnessBev[section].h4;
            sectionMain.appendChild(sectionH4);
//now appending all of those from sectionMain to newsFragment
            newsFragment.appendChild(sectionMain);
        }
    }
//selecting article to then append the entire news fragment 
    document.querySelector("#art").appendChild(newsFragment);
}