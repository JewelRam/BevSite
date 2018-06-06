//function that creates the financial page
let financialPageFunc = () => {
    const financialPage = {
        bank_Accounts: {
            title: "Bank Accounts",
            val: ["Table Credit Union", "Mesa Rojo Bank and Trust"]
        },
        businesses: {
            title: "Businesses",
            val: ["A1B Car Wash", "Red Matter Technologies", "Paul Baddude & Associates"],
        },
        blackmail: {
            title: "People Walter Off-White has blackmailed",
            val: ["Frank Schrager", "Fred Beneke"]
        },
        laundering: {
            title: "Money Laundering Locations",
            val: ["A1B Car Wash", "SaveWalterOffWhite.com", "Los Gatos Hermanos"]
        }
    };

    const fragment = document.createDocumentFragment(); //create a document fragment so there is only one write event to the DOM

    let article = document.querySelector("#art")

    article.innerHTML = ""

    for (key in financialPage) {
        let object = financialPage[key];
        let valLength = object.val;
        let title = document.createElement("h2");
        let ul = document.createElement("ul");

        title.textContent = `${object.title}: `;
        fragment.appendChild(title);

        for (i = 0; i < valLength.length; i++) {
            let lis = document.createElement("li");
            lis.textContent = `${object.val[i]}`;
            ul.appendChild(lis);
        }

        fragment.appendChild(ul);

        article.appendChild(fragment);
    }
}
