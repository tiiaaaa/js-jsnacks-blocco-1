/**
 * 
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */

let firstWord = prompt("inserisci la prima parola");
console.log(firstWord);

let secondWord = prompt("inserisci la seconda parola");
console.log(secondWord);

if (firstWord.length === secondWord.length){
    console.log("La lunghezza delle parole è uguale");
} else if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
} else if (secondWord.length > firstWord.length) {
    console.log(firstWord, secondWord);
}

