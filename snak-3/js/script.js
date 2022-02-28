/**
 * 
Il software deve chiedere per 10 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

//TODO Inizializzo la variabile sum a 0 cosi quando ricarico la pagina il suo valore si resetterà sempre a 0
let sum = 0

//TODO Ciclo FOR da 0 a 10 
for (let i = 0; i < 10; i = i + 1) {
    //! Ad ogni giro x10 volte chiederà all'utente di inserire un numero
    const usernumber = parseInt(prompt("Inserisci un numero"));
    //! Automaticamente sommerà la somma ottenuta di volta in volta con i numeri inseriti dal utente
    sum += usernumber;
}
//! Infine stampera in console la somma finale di tutti e 10 i numeri
console.log(sum);
