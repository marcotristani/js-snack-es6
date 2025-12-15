const bikes = [
  { 'name': "Bianchi Oltre XR4", peso: 6.8 },
  { 'name': "Pinarello Dogma F", peso: 7.9 },
  { 'name': "Specialized Tarmac SL8", peso: 8.3 },
  { 'name': "Cannondale SuperSix EVO", peso: 5.9 },
  { 'name': "Trek Émonda SLR", peso: 6.6 }
];

//Dichiaro due variabili dove andrò a salvare i valori finali 
let nameBikeWidthSmaller = '';
let widthBikeSmaller = Number.MAX_VALUE;  //Setto il valore iniziale di widthBikeSmaller come il numero più grande che js può accettare cosi qualsiasi peso andrò a confrontare sarà senza dubbio minore di questo

//Faccio un ciclo sull'array delle bici per andare a verificare il peso di ogni singolo oggetto
for (let i = 0; i < bikes.length; i++) {
    if(bikes[i].peso < widthBikeSmaller){    //Richiamo nell'oggetto iesimo il valore peso: se questo è minore del valore di widthBikeSmaller; se si verifica questa condizione allora il peso della biciclestta iesima diventera il nuovo widthBikeSmaller e salverò questo nome nella variabile nameBikeWidthSmaller
        widthBikeSmaller = bikes[i].peso;
        nameBikeSmaller = bikes[i].name;
    }
}

//Output dei valori della bici con peso minore
console.log(bikes);
console.log('Nome bici:',nameBikeSmaller, 'peso:', widthBikeSmaller);