

/** 
* * fetch("https://striveschool-api.herokuapp.com/api/product/", {
* * headers: {
* * "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjN2M3MWIxYzc3ZjAwMTUwNjg0YTEiLCJpYXQiOjE3MTUyNDAwNDksImV4cCI6MTcxNjQ0OTY0OX0.jtz6zIShVWekkuJgYv81H71DbWGycpJW_Usmm6iPB8Q"
* *    }
    })*/


//COSTANTI PER COLLEGAMENTO ALL'API
const urlDatiProdotti = "https://striveschool-api.herokuapp.com/api/product/";



document.addEventListener("DOMContentLoaded", async function() {
    await ottengoProdotto(); // Chiamata per ottenere e visualizzare i prodotti al caricamento della pagina
});

async function ottengoProdotto() {
    try {
        const response = await fetch(urlDatiProdotti, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjN2M3MWIxYzc3ZjAwMTUwNjg0YTEiLCJpYXQiOjE3MTU1NTYyNDgsImV4cCI6MTcxNjc2NTg0OH0.LDOjYso5_jBYXpEk4tCXezAX8_p2OuxCn9l3_HmSd7Y",
            },
        });
        if (response.ok) {
            const prodotti = await response.json();
            prodotti.forEach((prodotto) => creaCard(prodotto)); // Mostra ogni prodotto sulla pagina
        } else {
            console.error("Errore durante il recupero dei dati:", response.status, response.statusText);
            alert("Si è verificato un errore durante il recupero dei dati.");
        }
    } catch (error) {
        console.error("Errore durante la richiesta di dati:", error);
        alert("Si è verificato un errore durante la richiesta di dati.");
    }
}

function creaCard(prodotto) {
    const cardsPerInserireProdotti = document.getElementById("contenitoreProdotti");
    const card = document.createElement("div");
    card.className = "cardProdotti";

    const imgProdotto = document.createElement("img");
    imgProdotto.className = "imgProductCard";
    imgProdotto.src = prodotto.imageUrl;

    const nomeProdotto = document.createElement("h4");
    nomeProdotto.textContent = prodotto.name;

    const marcaProdotto = document.createElement("p");
    marcaProdotto.textContent = prodotto.brand;

    const descrizioneProdotto = document.createElement("p");
    descrizioneProdotto.textContent = prodotto.description;

    const prezzoProdotto = document.createElement("p");
    prezzoProdotto.textContent = `Prezzo: ${prodotto.price} €`;

    const visualizzaCard = document.createElement("button");
    visualizzaCard.className = "visualizza";
    visualizzaCard.textContent = "Visualizza";
    visualizzaCard.addEventListener("click", function(){
        window.location.href = "back.html";
    })


    card.appendChild(imgProdotto);
    card.appendChild(nomeProdotto);
    card.appendChild(marcaProdotto);
    card.appendChild(descrizioneProdotto);
    card.appendChild(prezzoProdotto);
    card.appendChild(visualizzaCard);


    cardsPerInserireProdotti.appendChild(card);
}

