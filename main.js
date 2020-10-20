// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
var numero = 100;
console.log(numero);

for (var i = 0; i <= numero; i++) {
  if (numero % 3 == 0) {
    console.log('Fizz');
  }
  else if (numero % 5 == 0) {
    console.log('Buzz');
  }
  else if ((numero % 3 == 0) && (numero % 5 == 0)) {
    console.log('FizzBuzz');
  }
  else {
    console.log(numero);
  }

}
