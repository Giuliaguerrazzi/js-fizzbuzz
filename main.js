// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

var numero = 100;
var item = '';

for (var i = 1; i <= numero; i++) {

  if ((i % 3 == 0) && (i % 5 == 0)) {
    list.innerHTML = item += '<li>' + 'FizzBuzz' + '</li>'
    console.log('FizzBuzz');
  }
  else if (i % 3 == 0) {
    list.innerHTML = item += '<li>' + 'Fizz' + '</li>'
    console.log('Fizz');
  }
  else if (i % 5 == 0) {
    list.innerHTML = item += '<li>' + 'Buzz' + '</li>'
    console.log('Buzz');
  }
  else {
    list.innerHTML = item += '<li>' + i + '</li>'
    console.log(i);
  }

}

// var num = 100;
//
// for ( var i = 1; i <= num; i++ ) {
//
//     if ( i % 15 == 0  ) {
//         console.log("FizzBuzz");
//     } else if ( i % 3 == 0) {
//         console.log("Fizz");
//     } else if ( i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i + "");
//     }
//
// }
