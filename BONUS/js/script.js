const zucchine = [
  { 'varietà': 'Zucchina Nera di Milano', 'peso': 180, 'lunghezza': 18 },
  { 'varietà': 'Zucchina Romanesca', 'peso': 200, 'lunghezza': 15 },
  { 'varietà': 'Zucchina Tonda di Piacenza', 'peso': 150, 'lunghezza': 12 },
  { 'varietà': 'Zucchina Bianca Triestina', 'peso': 170, 'lunghezza': 16 },
  { 'varietà': 'Zucchina Striata di Napoli', 'peso': 190, 'lunghezza': 17 },
  { 'varietà': 'Zucchina Trombetta di Albenga', 'peso': 220, 'lunghezza': 25 },
  { 'varietà': 'Zucchina Verde Chiaro', 'peso': 160, 'lunghezza': 14 },
  { 'varietà': 'Zucchina Gialla', 'peso': 140, 'lunghezza': 13 },
  { 'varietà': 'Zucchina Crookneck', 'peso': 210, 'lunghezza': 20 },
  { 'varietà': 'Zucchina Rugosa Friulana', 'peso': 175, 'lunghezza': 15 }
];

const zucchineCorte = [];
const zucchineLunghe = [];
let pesoZucchineCorte = 0;
let pesoZucchineLunghe = 0;

for(let i = 0; i < zucchine.length; i++){
    if(zucchine[i].lunghezza >= 15){
        zucchineLunghe.push(zucchine[i]);
        pesoZucchineLunghe += zucchine[i].peso;
    }else {
        zucchineCorte.push(zucchine[i]);
        pesoZucchineCorte += zucchine[i].peso;
    }
}

console.log(zucchineCorte, zucchineLunghe);
console.log('peso corte:', pesoZucchineCorte);
console.log('peso lunghe:', pesoZucchineLunghe);

