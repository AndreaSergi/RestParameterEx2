// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

function filterOutOdds(...numbers) {
    return numbers = numbers.filter(number => number % 2 === 0);
}

const evenNumbers = filterOutOdds(1,42,56,346,23,35,6,)
console.log(evenNumbers)