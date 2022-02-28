/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */

//TODO Dichiaro una variabile con il primo valore che l'utente inserisce nel prompt 

let firstNumber = parseInt(prompt("Insrisci il primo numero"));
// console.log(firstNumber);

//TODO Dichiaro una variabile con il secondo valore che l'utente inserisce nel prompt 

let secondNumber = parseInt(prompt("Inserisci il secondo numero"));
// console.log(secondNumber);

//! Se il primo o il secondo non sono numeri 
if (isNaN (firstNumber) || isNaN (secondNumber)){
    console.log("Uno dei due numeri non è valido");
} else if (firstNumber === secondNumber){ //! Se il primo e il secondo numero sono uguali come valore e come identità 
    console.log("I numeri sono uguali")
} else if (firstNumber > secondNumber){ //! Se invece il primo numero è meggiore del secondo
    console.log("Il numero maggiore è "+ firstNumber);
} else { //! Altrimenti 
    console.log("Il numero maggiore è "+ secondNumber);
}