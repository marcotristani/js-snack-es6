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