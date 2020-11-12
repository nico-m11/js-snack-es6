/*dato questo array di obj iniziale:
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
Creiamo una copia dell’array di partenza e aggiungiamo ai singoli
elementi (quindi ogni oggetto del nuovo array)
una nuova proprietà position che contiene una lettera casuale.  non
 dobbiamo modificare l’array iniziale*/

 // creamo una costante con i caratteri casuali

 const casualCaratter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

 //inserisco la variabile iniziale
 const arrayObj = [
   {name: 'Poppy', type: 'tshirt', color: 'red'},
   {name: 'Jumping', type: 'occhiali', color: 'blue'},
   {name: 'CrissCross', type: 'scarpe', color: 'black'},
   {name: 'Jenny', type: 'borsa', color: 'pink'},
 ];
// creo una costante che uguale alla funzione per generare la posizione delle lettere casuali all arrayObj
const nuovoArray = arrayObj.map (element => {
     element.position = casualCaratter.charAt(Math.floor(Math.random() * casualCaratter.length));
     return element
});
console.log(nuovoArray);

// riporto in HTML
for (let chiave in nuovoArray) {
  document.getElementById('output').innerHTML += `${nuovoArray[chiave].name} ${nuovoArray[chiave].type} ${nuovoArray[chiave].color} ${nuovoArray[chiave].position} <br>`;
};
