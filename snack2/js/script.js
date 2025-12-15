//Creo array quadre contenente tot oggetti
const squadre = [
  { 'name' : "Juventus", 'punti': 0 },
  { 'name' : "Milan", 'punti': 0 },
  { 'name' : "Inter", 'punti': 0 },
  { 'name' : "Napoli", 'punti': 0 },
  { 'name' : "Palermo", 'punti': 0 },
  { 'name' : "Torino", 'punti': 0 },
  { 'name' : "Chieti", 'punti': 0 },
  { 'name' : "Aosta", 'punti': 0 }
];

//Andiamo a modificare i valori 'punti' per ogni oggetto con un ciclo sull'array
for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = Math.floor(Math.random()*100) ;  //generiamo un  numero intero tra 0 e 100
}

//(provo metodo alternativo)
//andiamo ad aggiungere un nuovo valore 'falli' per ogni oggetto nell'array 
for(let i = 0; i < squadre.length; i++){
    squadre[i].falli = Math.floor(Math.random()*100);
}
//Output
console.log(squadre);

//Dichiaro un nuovo array vuoto
const newSquadre = [];
//Faccio un ciclo per richiamare tutti gli oggetti del array squadre
for(let i = 0; i < squadre.length; i++){
    //costruisco l'oggetto che devo andare a pushare nel nuovo array
    const oggetto = {
        'name': squadre[i].name ,  //costruisco valore nome e prendo valore nome da ogni singolo oggetto del vecchio array
        'falli' : squadre[i].falli //costruisco valore falli e prendo valore falli da ogni singolo oggetto del vecchio array
    };
    //pusho il nuovo oggetto nell'array
    newSquadre.push(oggetto);
}
//Output
console.log(newSquadre);