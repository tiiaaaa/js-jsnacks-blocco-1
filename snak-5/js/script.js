/**
 * 
Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
 * 
 */

//TODO inizializzo una variebile con un Array vuoto 
const userInputList = [];

//TODO Creo un FOR che chiedera x 6 volte un numero al utente tramite prompt e lo salverà nella variabile CURRENTNUMBER (si parte a contare da 0 quindi metto 7)
for (let i = 0; i < 7; i = i + 1){
    const currentNumber = parseInt(prompt("Inserisci un numero"));
    //TODO Se currentnumber diviso 2 da un resto, il numero sarà DISPARI 
    if ((currentNumber % 2 != 0) && (!isNaN(currentNumber))){ //!TODO Aggiungo anche un controllo con AND in caso il valore di CURRENTNUMBER fosse diverso da un numero
        userInputList.push(currentNumber);//TODO Se CURRENTNUMBER rispettera le condizioni verrà inserito nell'array tramite .push
    }
}    

    console.log(userInputList);