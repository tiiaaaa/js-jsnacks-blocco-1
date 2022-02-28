/**
 *
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */

const invitedList = ["giovanni", "mattia", "luca", "genny", "penelope", "federica", "francesca", "mariuccia", "sofia", "marina"];

const userName = prompt("Insert your name").toLowerCase().trim();

let isRegistred = false;

for (let i = 0; i < invitedList.lenght; i = i + 1){
    if (invitedList[i] === userName){
        isRegistred = true;
    }
}

if (isRegistred == true){
    console.log("L'utente è registrato");
}  else {
    console.log("L'utente non è presente nella lista");
}