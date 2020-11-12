/* Creare un array di oggetti: ogni oggetto
descriverà una bici da corsa con le seguenti
proprietà: nome e peso.
stampare a schermo la bici con peso minore.*/

// creo un array di oggetti

const bike = [
  {
    'nome': 'Mountain bike',
    'peso': 10
  },
  {
    'nome': 'Bici da ciclocross',
    'peso': 19
  },
  {
    'nome': 'Bmx',
    'peso': 15
  },
  {
    'nome': 'Tandem',
    'peso': 25
  },
  {
    'nome': 'Bici da corsa',
    'peso': 18
  },
  {
    'nome': 'Bici elettrica',
    'peso': 17
  },
];

// creo una variabile bici leggere per far si che venga sempre prima
//let lightBike = bike[0];
// creo un ciclo per valutare quella con peso minore
//for(var i = 0; i < bike.length; i++) {
//  if(lightBike.peso > bike[i].peso) {
//    lightBike = bike[i];
//  }
//}
//console.log(lightBike);
//console.log(bike)
// riporto nel document.html
//document.getElementById('outputUno').innerHTML = ` La Bici più leggera è: ${lightBike.nome} ${lightBike.peso}`;


/*jsnack 2 - Updated
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/

// utilizzo il DESTRUCTURING come richiesto e commento quanto fatto in precenza
//const [, , , , bikeOne] = bike;
//console.log(bikeOne);
 bike.sort((a, b) => a.nome - b.peso);

 let [lightBike] = bike;
 console.log(lightBike);

// riporto in HTML
document.getElementById('outputUno').innerHTML = `La bici più leggera è: ${lightBike.nome} ${lightBike.peso}`;
