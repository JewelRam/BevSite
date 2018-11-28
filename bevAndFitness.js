//first step was creating a large object with smaller objects in it that create a newsfeed.
const myNewsfeed = {
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

const populateNews = function () {

//putting that object in a fragment so that I can then push that to DOM
    const newsFragment = document.createDocumentFragment();
    //this clears the html in that section
    document.querySelector("#art").innerHTML = " ";
//now making a for in loop to go through 
    for (const section in myNewsfeed) {
//if statement for the h1 section since it is by itself
        if (myNewsfeed[section].h1 != undefined) {
            let sectionH1 = document.createElement("h1");
            sectionH1.textContent = myNewsfeed[section].h1;
            newsFragment.appendChild(sectionH1);
        }
        if (myNewsfeed[section].src != null) {
            let image = document.createElement("img");
            image.setAttribute("id", "bev-fitness");
           
            image.src = myNewsfeed[section].src;
            newsFragment.appendChild(image);

        }
//if statement for the sections that have the h3 in it 
        if (myNewsfeed[section].h3 != undefined) {
            let sectionMain = document.createElement("section");
//these are basicall just creating the elements and then attaching the text and appending to the sectionMain 
            let sectionH3 = document.createElement("h3");
            sectionH3.setAttribute("id", "fitness");
            sectionH3.textContent = myNewsfeed[section].h3;
            sectionMain.appendChild(sectionH3);

            let sectionP = document.createElement("p");
            sectionP.textContent = myNewsfeed[section].p;
            sectionMain.appendChild(sectionP);

            let sectionH4 = document.createElement("h4");
            sectionH4.textContent = myNewsfeed[section].h4;
            sectionMain.appendChild(sectionH4);
//now appending all of those from sectionMain to newsFragment
            newsFragment.appendChild(sectionMain);
        }
    }
//selecting article to then append the entire news fragment 
    document.querySelector("#art").appendChild(newsFragment);
}