

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

document.addEventListener("DOMContentLoaded", function(){
   

    /**
     * * GET
     */
    const ottengoProdotto = async() => {
       const response =  await fetch(urlDatiProdotti, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjN2M3MWIxYzc3ZjAwMTUwNjg0YTEiLCJpYXQiOjE3MTU0OTMyOTgsImV4cCI6MTcxNjcwMjg5OH0.jrqqcW5Qg_XURt1HzzDr5Sl0BzaXd5Ov81nNrc8HtKY",
        }
        })

        /**
     * TODO: ITERAZIONE  prodotti.forEach((prodotto) => creaCard(prodotto))
     */
        .then((response) => response.json())
        .then((prodotti) => {
            prodotti.forEach((prodotto) => creaCard(prodotto)); //su ogni prodotto creo la card
        })

        .catch((error) => 
        console.error("errore:", error));
  /*       const prodotti = await response.json();
       // prodotti.forEach((prodotto) => creaCard(prodotto));
        return prodotti
        //console.log(prodotti) */
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
                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjN2M3MWIxYzc3ZjAwMTUwNjg0YTEiLCJpYXQiOjE3MTU0OTMyOTgsImV4cCI6MTcxNjcwMjg5OH0.jrqqcW5Qg_XURt1HzzDr5Sl0BzaXd5Ov81nNrc8HtKY",
             },
             body: JSON.stringify(nuovoProdotto),
         })

         
        .then((response) => response.json())
        .then((nuovoProdotto)=>{
            creaCard(nuovoProdotto);
            console.log("Prodotto aggiunto con successo! ")
            alert("Prodotto aggiunto con successo! "); // messaggio di conferma
        })
        .catch((error) => {
            console.error("Errore durante l'aggiunta del prodotto: ", error);
        })

         //if(!response.ok){
             //  alert("Ops..qualcosa è andato storto");
            //}

            //const aggiungiItem = await response.json()
            /**
             * TODO RICHIAMARE LA FUNZIONE CHE CREA LA CARD
             */
          
            //return aggiungiItem
            
         }

        console.log(nuovoItem())

         /**
          * ! mi esce errore 400 e l'endpoint risulta non accessibile di nuovo
          */
         

/**
 * ! item all'interno form 
 */

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
        imgProdotto.url = prodotto.imageUrl;

        const nomeProdotto = document.createElement("h4");
        const marcaProdotto = document.createElement("p");
        const descrizioneProdotto = document.createElement("p");
        const prezzoProdotto = document.createElement("p");

        /**
         * TODO:
         */
        //aggiungere tasto modifica
        //aggiungere tassto delete

        //riporto i valori dell'oggetto all'interno degli elementi creati
        imgProdotto.innerHTML = prodotto.imageUrl;
        nomeProdotto.innerHTML = prodotto.name;
        marcaProdotto.innerHTML = prodotto.brand;
        descrizioneProdotto.innerHTML = prodotto.description;
        prezzoProdotto.innerHTML = prodotto.price;

        /**
         * TODO:
         */
        //riportare i vlori all'interno del button modifica 
        //riportare i vlori all'interno del button elimina


        //aggiungere gli elementi dei valori inseriti dall'utente nella costante card
        card.appendChild(imgProdotto);
        card.appendChild(nomeProdotto);
        card.appendChild(marcaProdotto);
        card.appendChild(descrizioneProdotto);
        card.appendChild(prezzoProdotto);

        cardsPerInserireProdotti.appendChild(card);

        }
        

/*


    
    card.appendChild(nomeItem);
    card.appendChild(descrizioneItem);
    card.appendChild(marcaItem);
    card.appendChild(immagineItem);
    card.appendChild(prezzoItem);

    cardsPerInserireProdotti.appendChild(card);
}

const aggiungiProdotto = document.getElementById("buttonAggiungi");

aggiungiProdotto.addEventListener("click", creaCard);
} */



         /**
          * TODO riportare la lista prodotto nella pagina principale al caricamento della pagina
         /*
         window.onload = async () => {
            const response = await fetch(urlDatiProdotti);
            const prodotto = await response.json();
            console.log(prodotto);
        }*/

    })