console.log("jeg er i fetchkommuner.js");
const urlKommuner = "https://api.dataforsyningen.dk/kommuner"

function fetchKommuner() {
    console.log("222 fetch komminuer")
    return fetch(urlKommuner).then((response) => response.json()
    )
}

function actionFetch() {
    console.log("111 action fetch")
    const kommuner = fetchKommuner()
    console.log("333 done fetch kommuner")
    console.log(kommuner)
}

const pbfetchKommuner = document.getElementById("pbfetchKommuner")
pbfetchKommuner.addEventListener("click", actionFetch)