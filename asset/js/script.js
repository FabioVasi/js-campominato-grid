/*
Consegna.

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Consigli del giorno:

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:

Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

Strumenti.

- if/else
- const
- let
- for/while
- addEventListener
- function
- append
- querrySelector
- createElement
 */




function generateGrill(domElement, maxSquare) {
    console.log(this);
    // creo un ciclo che produca automaticamente i quadrati di cui ho bisogno
    for (let i = 0; i < maxSquare; i++) {
        // creo l'elemento HTML che costituirà i miei quadrati
        const elementSquare = document.createElement('div');
        // do una classev all'elemento creato
        elementSquare.className = 'square'
        // appendo gli elementi creati per poterli visualizzare
        elementSquare.append(i + 1);
   
        domElement.append(elementSquare)
        // creo un evento che si attivi ad un click dentro un quadrato qualunque
        elementSquare.addEventListener('click', function() {

            elementSquare.classList.toggle('bg-skyblue')

            console.log('ho cliccato sulla cella ' + i);

        })

    }

}
// decido quanti quadrati voglio in pagina
const maxSquare = 100;
// seleziono un elemento da HTML nel quale vooro visualizzare la griglia
const squareEl = document.querySelector('.row');

generateGrill(squareEl, maxSquare)

// creo un pulsante che se cliccato produrrà la griglia
document.getElementById('produce').addEventListener('click', function() {

    generateGrill(domElement, maxSquare)

})

document.getElementById('reset').addEventListener('reset', function() {

    squareEl.style.display = 'none'

})