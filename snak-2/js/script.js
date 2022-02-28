/**
 * 
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */

//TODO Variabile che contiene la prima parola
let firstWord = prompt("Inserisci la prima parola");
console.log(firstWord);

//TODO Variabile che contiene la seconda parola
let secondWord = prompt("Inserisci la seconda parola");
console.log(secondWord);

//! Se la l'unghezza e l'identità delle due parole è uguale 
if (firstWord.length === secondWord.length){
    console.log("La lunghezza delle parole è uguale");
    //! Se la lunghezza prima è >= della seconda 
} else if (firstWord.length >= secondWord.length) { 
    console.log(secondWord + " " + firstWord);
    //! Altrimenti
} else {
    console.log(firstWord + " " + secondWord);
}

