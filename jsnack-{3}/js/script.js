/* Creare un oggetto  che rappresenti un
triangolo rettangolo, con le seguenti
proprietà: base e altezza.
Calcolare perimetro ed area.*/

//Esercizio 3

// definiamo la base e l'altezza del nostro triangolo

let triangolo = {
  'base': 15,
  'altezza': 10,
  'area': function() {
    return (this.base * this.altezza) / 2;
  }
};
console.log(triangolo);
// definiamo una variabile area che è uguale alla functin area

const area = triangolo.area();
console.log(area);
// stampo l'area
document.getElementById('output').innerHTML = `L'area del nostro triasngolo equivale a = ${area}`;

// ricaviamo l'ipotenusa

const ipotenusa = (triangolo.altezza ** 2 + triangolo.base ** 2) ** 0.5;
console.log(ipotenusa);
// il perimetro lo ricaviamo sommando i suoi lati

const perimetro =  triangolo.base + triangolo.altezza + ipotenusa;
console.log(perimetro);

// stampiamo il perimetro
document.getElementById('outputUno').innerHTML = `Il perimetro è uguale a = ${perimetro};`
