/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 1561;
let number2 = 1563;

if (number1 > number2) {
  console.log(number1 + " è maggiore di " + number2)

} else if (number1 === number2) {
  console.log(number1 + " è uguale a " + number2)
} else {
  console.log(number1 + " è minore di " + number2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 10;

if (x !== 5) {
  console.log("not equal")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

x = 10;
const y = 5;

if (x % y === 0) {
  console.log("divisibile per 5")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let a = 8;
let b = 2;

if ((a === 8) || (b === 8) || (a + b === 8) || (a - b === 8) || (b - a === 8)) {
  console.log("Verificato")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40;
const spedizione = 10;

if (totalShoppingCart > 50) {
  console.log("Totale senza Spedizione" + totalShoppingCart)
}
else {
  console.log("Totale + Spedizione " + (totalShoppingCart + spedizione))
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

totalShoppingCart = 70;
let totalShoppingCartSconto = (totalShoppingCart * 0.8)

if (totalShoppingCartSconto > 50) {
  console.log("Totale senza Spedizione " + totalShoppingCartSconto + " €")
}
else {
  console.log("Totale + Spedizione " + (totalShoppingCartSconto + spedizione + "€"))
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let xx = 6;
let yy = 18;
let zz = 23;
//let result = "";

if (xx > yy && xx > zz && yy > zz) {
  console.log(xx, yy, zz)

} else if (yy > xx && yy > zz && xx > zz) {
  console.log(yy, xx, zz)
} else if (zz > xx && zz > yy && xx > yy) {
  console.log(zz, xx, yy)
} else {
  console.log(zz, yy, xx)
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let age = 20;

if (typeof age === 'number') {
  console.log("è un numero")
} else {
  console.log(" non è un numero")
}




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (age % 2 === 0) {
  console.log("è un numero pari")
} else {
  console.log("è un numero dispari")
}





/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;

if (val < 5) {
  console.log("Meno di 5")
} else if (val < 10) {
  console.log("Meno di 10")
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myArray = []
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
myArray.push(6)
myArray.push(7)
myArray.push(8)
myArray.push(9)
myArray.push(10)
console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myArray[9] = 100
console.log(myArray)
