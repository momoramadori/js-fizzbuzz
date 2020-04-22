//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//Creare una "lista" di 100 numeri
for (var i = 1; i <= 100; i++) {
    //Devo riconoscere i multipli di 3
    var modulo3 = i % 3;
    //Devo riconoscere i multipli di 5
    var modulo5 = i % 5;
    //Identifico una variabile anche per multipli di 15
    var modulo15 = i % 15;
    //Devo sostituire i numeri con le varie Fizz,Buzz e FizzBuzz
    if ( modulo15 == 0 ) {
        console.log('FizzBuzz');
        document.getElementById("container").insertAdjacentHTML("beforeend",'<li class="fizzbuzz">FizzBuzz</li>');
    } else if ( modulo5 == 0) {
        console.log('Buzz')
        document.getElementById("container").insertAdjacentHTML("beforeend", '<li class="buzz">Buzz</li>');
    } else if ( modulo3 == 0) {
        console.log('Fizz')
        document.getElementById("container").insertAdjacentHTML("beforeend",'<li class="fizz">Fizz</li>' );
    } else {
        console.log(i);
        document.getElementById("container").insertAdjacentHTML("beforeend", '<li>' + i + '</li>');
    }
}
