/*chiedo informazioni base all'utente
  quali nome cognome e età..*/
var nome;
nome = prompt("Inserisci il tuo nome");
console.log(nome);
document.getElementById('il-mio-nome').innerHTML= nome;

var cognome;
cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);
document.getElementById('il-mio-cognome').innerHTML= cognome;

var  eta;
eta = parseInt(prompt("Inserisci la tua età"));
console.log(eta);
document.getElementById('età').innerHTML= eta;

// voglio sapere quanti km vuole percorrere
var  km;
km = parseInt(prompt("Inserisci quanti km vuoi percorrere"));
console.log(km);
document.getElementById('km-da-percorrere').innerHTML= "[" + km + "]";

//definisco prezzo standard al km
var  prezzoakm;
prezzoakm = 0.21;

/*calcolo il prezzo del biglietto facendo attenzione
 all'età dell'utente..Si applica uno sconto del 20%
 per i minorenni e uno sconto del 40% per gli over 65..*/
var   prezzo,sconto;
prezzo = km * prezzoakm;

if ( eta <= 17 ) {
  sconto= ( prezzo * 20 ) / 100 ;
  prezzo= prezzo - sconto;
}
else if (eta > 65 )  {
  sconto= (prezzo * 40) / 100;
  prezzo= prezzo - sconto;
  
}
console.log(prezzo);
document.getElementById('prezzo-biglietto').innerHTML= prezzo + "€";

alert("Ci scusiamo per il sicuro ritardo che farà il treno...");
