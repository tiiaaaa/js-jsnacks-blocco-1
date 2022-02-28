/**
 *
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */

//TODO Array con la lista dei nomi 
const invitedList = ["giovanni", "mattia", "luca", "genny", "penelope", "federica", "francesca", "mariuccia", "sofia", "marina"];

//TODO Nome che l'utente inserisce (lowercase è per mettere tutto minuscolo e .trim toglie spazzi all'inizio e fine della stringa)
const userName = prompt("Inserisci il tuo nome").toLowerCase().trim();

//TODO inizializziamo una var flag(d'appoggio) con valore false 
let isRegistred = false;

//! Cicla per tutta la lunghezza della lista 
for (let i = 0; i < invitedList.lenght; i = i + 1){
    //! Se i ha lo stesso valore del nome inserito dal utente 
    if (invitedList[i].toLowerCase() === userName){
        //! la variabile d'appoggio prende il valore di true (ovvero il nome inserito è presente nella lista degli invitati)
        isRegistred = true;
    }
}

//TODO Se la variabile ha valore true allora viene stampato in console un messaggio
if (isRegistred = true){
    console.log("L'utente è nella lista");
    //TODO Altrimenti ne viene stampato un altro
}  else {
    console.log("L'utente non è presente nella lista");
}


//! Seconda soluzione  

//TODO Senza utilizzare il ciclo for diciamo al programma che se trova USERNAME all'interno di INVITEDLIST ci ritorna il suo valore di indice (.indexof)
//TODO Se questo valore è DIVERSO da -1 (e quindi superiore) vorrà dire che USERNAME sarà presente nella lista.
// if (invitedList.indexOf(userName) != -1 ){
//     console.log("L'utente è nella lista");
//     //TODO Se invece il valore è uguale a -1 vorrà dire che il nome non srà presente nella lista
// } else{
//     console.log("L'utente non è presente nella lista");
// }


//! Terza soluzione

//TODO Utilizzando .INCLUDES stiamo dicendo che se trova USERNAME all' interno di INVITEDLIST ci ritorna un valore TRUE e va nel primo if
// if (invitedList.includes(userName)){
//     console.log("L'utente è nella lista");
//     //TODO Altrimenti se non trova USERNAME all' interno di INVITEDLIST ritornerà FALSE e andrà nel else
// } else {
//     console.log("L'utente non è presente nella lista");
// }