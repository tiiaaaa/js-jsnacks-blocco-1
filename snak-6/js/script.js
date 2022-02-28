/**
 *
Chiedi un numero di 7 cifre all'utente
e calcola la somma di tutte le cifre che compongono il numero.
 *
 */

//! Inizializzo una costante con il valore del numero inserito dall'utente nel prompt
const userNumber = prompt("Inserisci un numero di sette cifre");
//! variabile che sad ogni ricaricamento si setta a 0
let sum = 0;

//! ciclo la i per la lunghezza dell USERNUMBER 
for (let i = 0; i < userNumber.length; i = i + 1){
    //! Per ogni giro la variabile SUM somma se stessa al valore del carattere successivo e lo fà per tutti i caratteri 
    //! che compongono USERNUMBER.
    sum += parseInt(userNumber.charAt(i));
}

//! infine stampa il valore finale sulla console
console.log(sum);


