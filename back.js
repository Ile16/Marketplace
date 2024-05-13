

/** 
* * fetch("https://striveschool-api.herokuapp.com/api/product/", {
* * headers: {
* * "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjN2M3MWIxYzc3ZjAwMTUwNjg0YTEiLCJpYXQiOjE3MTUyNDAwNDksImV4cCI6MTcxNjQ0OTY0OX0.jtz6zIShVWekkuJgYv81H71DbWGycpJW_Usmm6iPB8Q"
* *    }
    })*/


//COSTANTI PER COLLEGAMENTO ALL'API
const urlDatiProdotti = "https://striveschool-api.herokuapp.com/api/product/";


/**
 * ! FUNZIONE GET METHOD
 */

//funzione con evento al caricamento della pagina

document.addEventListener("DOMContentLoaded", function(){ })
   

    /**
     * * GET
     */
    const ottengoProdotto = async() => {
       const response =  await fetch(urlDatiProdotti, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjN2M3MWIxYzc3ZjAwMTUwNjg0YTEiLCJpYXQiOjE3MTU1NTYyNDgsImV4cCI6MTcxNjc2NTg0OH0.LDOjYso5_jBYXpEk4tCXezAX8_p2OuxCn9l3_HmSd7Y",
        }
        })

        const prodotti = await response.json();
        prodotti.forEach((prodotto) => creaCard(prodotto));
        return prodotti

    }
    ottengoProdotto()

//

        //METHOD POST con il nuovo prodotto
        const nuovoItem = async () => {

            //oggetto con i valori dell'input
            const nuovoProdotto = {
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                brand: document.getElementById("brand").value,
                imageUrl: document.getElementById("img").value,
                price: document.getElementById("number").value,
            }       
            
            //richiesta invio aggiunta elementi 
            let response = await fetch(urlDatiProdotti, {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjN2M3MWIxYzc3ZjAwMTUwNjg0YTEiLCJpYXQiOjE3MTU1NTYyNDgsImV4cCI6MTcxNjc2NTg0OH0.LDOjYso5_jBYXpEk4tCXezAX8_p2OuxCn9l3_HmSd7Y",
             },
             body: JSON.stringify(nuovoProdotto),
         })

         if(!response.ok){
          alert("Ops..qualcosa è andato storto");
        }
        const aggiungiItem = await response.json()
        creaCard(aggiungiItem);

        //ripulire il form 
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("brand").value = "";
        document.getElementById("img").value = "";
        document.getElementById("number").value = "";
         }
        
        //console.log(nuovoItem())

        //POINTER CONTENITORE
        const cardsPerInserireProdotti = document.getElementById("contenitoreProdotti");

        function creaCard(prodotto) {
            const card = document.createElement("div"); //aggiungo un elemento nuovo
            card.className = "cardProdotti"; //aggiunta della classe al nuovo elemento

        //creo gli elementi all'interno del contenitore 
        //conterranno immagine, nome, descrizione, marca e prezzo
        const imgProdotto = document.createElement("img");
        imgProdotto.className = "imgProductCard";
        //l'immagine dovrà contenere l'url
        imgProdotto.src = prodotto.imageUrl;

        const nomeProdotto = document.createElement("h4");
        const marcaProdotto = document.createElement("p");
        const descrizioneProdotto = document.createElement("p");
        const prezzoProdotto = document.createElement("p");


        //aggiungere tasto modifica
        const pulsanteModificaCard = document.createElement("button");
        pulsanteModificaCard.className = "modificaCard";
        pulsanteModificaCard.textContent = "Modifica"

        //aggiungere tasto delete
        const pulsanteEliminaCard = document.createElement("button");
        pulsanteEliminaCard.className = "eliminaCard";
        pulsanteEliminaCard.textContent = "Elimina";

       
        
        //gestione DELETE CARD
          /**
           * TODO:ELIMINA CARD
           */



        //riporto i valori dell'oggetto all'interno degli elementi creati
        imgProdotto.innerHTML = prodotto.imageUrl;
        nomeProdotto.innerHTML = prodotto.name;
        marcaProdotto.innerHTML = prodotto.brand;
        descrizioneProdotto.innerHTML = prodotto.description;
        prezzoProdotto.innerHTML = `Prezzo: ${prodotto.price} €`;

        //aggiungere gli elementi dei valori inseriti dall'utente nella costante card
        card.appendChild(imgProdotto);
        card.appendChild(nomeProdotto);
        card.appendChild(marcaProdotto);
        card.appendChild(descrizioneProdotto);
        card.appendChild(prezzoProdotto);
        card.appendChild(pulsanteModificaCard); //lo aggiungo alla card
        card.appendChild(pulsanteEliminaCard); //stessa cosa

        cardsPerInserireProdotti.appendChild(card);
        }     
 
