const BevAndCats = {
  //the object we're going to loop though to make out html
  section1: {
    h1: "Something Else Bev Is Passionate About Is Cats!",
    h3: "Whether It's Spending Time With Her Beloved Buttface",
    h4: "Or Spending Time With Strays.",

    src: "buttface.jpg",
    alt: "buttface"
  },

  section2: {
    src: "stray.jpg"
  },
  section3: {
    h2: "But She Has A Dark Secret... She Steals And Hoards Them",
    src: "hoarder-bev.jpg"
  },
 
  section4: {
    h1: "And Then KILLS Them And Uses Their Skin To Become One Of Them!",
    src: "cat-bev.jpg"
  }
};

//make it all into a function that will create the elements, attach the text content, append to the article which then goes into the html

const populateCats = function () {

  //putting that object in a fragment so that I can then push that to DOM
  const CatFragment = document.createDocumentFragment();
  //this clears the html in that section
  document.querySelector("#art").innerHTML = " ";
  //now making a for in loop to go through 
  for (const section in BevAndCats) {
    //if statement for the h1 section since it is by itself
    if (BevAndCats[section].h1 != undefined) {
      let sectionH1 = document.createElement("h1");
      sectionH1.setAttribute("id", "CatH1");
      sectionH1.textContent = BevAndCats[section].h1;
      CatFragment.appendChild(sectionH1);
    }
    if (BevAndCats[section].h2 != undefined) {
      let sectionH2 = document.createElement("h2");
      sectionH2.setAttribute("id", "CatH2");
      sectionH2.textContent = BevAndCats[section].h2;
      CatFragment.appendChild(sectionH2);
    }
    if (BevAndCats[section].src != null) {
      let image = document.createElement("img");
      image.setAttribute("id", "bev-other");

      image.src = BevAndCats[section].src;
      CatFragment.appendChild(image);

    }
    //if statement for the sections that have the h3 in it 
    if (BevAndCats[section].h3 != undefined) {
      let sectionMain = document.createElement("section");
      //these are basicall just creating the elements and then attaching the text and appending to the sectionMain 
      let sectionH3 = document.createElement("h3");
      sectionH3.setAttribute("id", "CatH3");
      sectionH3.textContent = BevAndCats[section].h3;
      sectionMain.appendChild(sectionH3);

      let sectionP = document.createElement("p");
      sectionP.textContent = BevAndCats[section].p;
      sectionMain.appendChild(sectionP);

      let sectionH4 = document.createElement("h4");
      sectionH4.textContent = BevAndCats[section].h4;
      sectionMain.appendChild(sectionH4);
      //now appending all of those from sectionMain to newsFragment
      CatFragment.appendChild(sectionMain);
    }
  }
  //selecting article to then append the entire news fragment 
  document.querySelector("#art").appendChild(CatFragment);
}