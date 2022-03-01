/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */

const numbers = [];
let sum = 0;

for (let i = 0 ; i < 30 ; i++){
    // const randomInt ;
    numbers.push(Math.floor(Math.random() * 9999 ) );
    sum += numbers;
}

console.log(numbers);
console.log(sum);
console.log(sum / numbers.length);