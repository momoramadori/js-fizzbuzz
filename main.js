//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


//Segnarmi una array
var numeri = [];
//Inserire i numeri da 1 a 100 nel mio array
for (var i = 0; i < 100; i++) {
    numeri[i] = i + 1;
    //Devo riconoscere i multipli di 3
    var modulo3 = numeri[i] % 3;
    //Devo riconoscere i multipli di 5
    var modulo5 = numeri[i] % 5;
    //
    //Devo sostituire i numeri con le varie Fizz,Buzz e FizzBuzz
    if (modulo3 == 0 && modulo5!= 0) {
        //Sostituisco con Fizz i multipli di 3 e non di 5
        numeri[i] = "Fizz";
    } else if (modulo3!= 0 && modulo5 == 0) {
        //Sostituisco con Buzz i multipli non di 3 ma di 5
        numeri[i] = "Buzz";
    } else if (modulo3 == 0 && modulo5 == 0) {
        //Sostituisco con FizzBuzz i multipli sia di 3 che di 5
        numeri[i] = "FizzBuzz";
    }
    console.log(numeri[i]);
}
