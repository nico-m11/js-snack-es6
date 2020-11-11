/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre
saranno tutte settate a 0.*/
//Esercizio 4A
let squadre = [
  {
    'nome':'SSC Napoli',
    'punti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'FC Qualiano',
    'punti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Secondigliano Club Associazione',
    'punti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Villa Literno Fc',
    'punti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Casapesenna Football',
    'punti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Mariano Keller As Calcio',
    'punti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Pozzuoli/Puteolana Fc',
    'punti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'AS Calcio Giugliano',
    'punti': 0,
    'falliSubiti': 0
  },
]
/*Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti.*/
//Esercizio 4B
for( var i = 0; i < squadre.length; i++) {
  squadre[i].punti = (Math.random() * 100 + 1).toFixed(0);
  squadre[i].falliSubiti = (Math.random() * 30 + 1).toFixed(0);
};
console.log(squadre);
for (var chiave in squadre) {
document.getElementById('outputUno').innerHTML += `Nome squadra: ${squadre[chiave].nome} i punti sono: ${squadre[chiave].punti} ed i falli: ${squadre[chiave].falliSubiti} <br>`;
};
