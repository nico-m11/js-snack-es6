/*Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente
*/
//definisco l'array di nomi
const nomi = ['Ernesto', 'Mery', 'Gennaro', 'Luisa', 'Martina', 'Brigida', 'Ciro'];
// definisco var max Lunghezza
const maxLung = nomi.length;
// chiedo all'utente di inserire due numeri
let primoInput = prompt(`Inserisci un numero da 0 a ${maxLung}`);
let secondoInput = prompt(`Inserisci un numero da 0 a ${maxLung}`);


const newNome = nomi.filter((element, index) => {
  return index >= primoInput && index <= secondoInput
});

console.log(newNome);

document.getElementById('output').innerHTML = `I nomi da te scelti sono ${newNome}`
