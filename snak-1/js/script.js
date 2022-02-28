/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */

let firstNumber = parseInt(prompt("Insrisci il primo numero"));
console.log(firstNumber);

let secondNumber = parseInt(prompt("Inserisci il secondo numero"));
console.log(secondNumber);

if (firstNumber > secondNumber){
    console.log(firstNumber);
} else {
    console.log(secondNumber);
}