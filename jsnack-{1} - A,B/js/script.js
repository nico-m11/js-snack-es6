/* Creare un oggetto palla che abbia le
seguenti proprietà. Nome = palla e peso = 10 */

//Esercizio 1A

// creo una variabile let che contiene un oggetto con i dati richiesti

let palla = {
  'nome': 'Palla',
  'peso': 10
};

console.log(palla);

//riporto l'oggetto nel document.html
document.getElementById('output').innerHTML = ` ${palla.nome} ${palla.peso} `;
//Esercizio 1B

/*Attraverso un prompt dare la possibilità
all'utente di modificare il peso della palla*/

let pallaUno = {
  'nome': 'Palla',
  'peso': 10
};

console.log(pallaUno.peso);

//chiedo all'utente di inserire un nuovo peso

pallaUno.peso = parseInt(prompt('Inserisci un nuovo peso per la nostra palla: '));
console.log(pallaUno.peso);

//riporto in HTML

document.getElementById('outputUno').innerHTML = ` ${pallaUno.nome} 'il peso da te scelto è:' ${pallaUno.peso} `;
