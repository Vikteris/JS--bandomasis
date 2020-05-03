"use strict";

console.log('-------------1 uždavinys------------------');
console.log('-----------Tuscia funkcija----------------');


function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija() );

console.log('-------------2 uždavinys------------------');
console.log('-------------Daugyba----------------------');


function daugyba( first, second) {

    if (typeof (first) !== 'number') {
        return console.error('ERROR: pirma reiksme turi buti skaicius');
    }
    if (typeof (second) !== 'number') {
        return console.error('ERROR: antra reiksme turi buti skaicius');
    }
    
    if (isFinite(first) === false) {
        return console.error('ERROR: pirma reiksme turi buti ne begalybe');
    }
    if (isFinite(second) === false) {
        return console.error('ERROR: antra reiksme turi buti ne begalybe');
    }

const  allSum = first * second;
return allSum;
}

console.log(daugyba('laba', 'diena'));
console.log(daugyba(256, true));
console.log(daugyba([25, 26], 25));
console.log(daugyba(Infinity, 28));
console.log(daugyba(21, Infinity));
console.log(daugyba(NaN, 15));
console.log(daugyba('NaN', 16));



console.log(daugyba(2,2));
console.log(daugyba(5,6,25,96));
console.log(daugyba(13.25,-13.28));
console.log(daugyba(-35, -80));
console.log(daugyba(-12.22, 15));

console.log('--------------3 uždavinys------------------');
console.log('-------------SkaitmenuKiekisSkaiciuje----------------------');


function skaitmenuKiekisSkaiciuje( number ){
    // valdicaija
    if ( typeof (number) !== 'number' ||
        isFinite(number) === false ) {
        return console.error(' Klaida: Pateikta netinkamo tipo reikšmė.');
    }
    // if ( typeof(number) !== 'number') {
    //     return console.error('Klaida: Reikalingas skaičius'); 
    // }
    // if ( isNaN(number) === true) {
    //     return console.error(' Klaida: reikalingas tikras skaičius');
        
    // }
    // if ( isFinite(number) === false) {
    //     return console.error(' Klaida: reikalingas tikras skaičius');

    // logika
    const skaiciusTekstu = ''+number;
    let count = skaiciusTekstu.length;

    // Jei skaičius turi deišimtaine daliy!
    if (number % 1 !== 0) {     
        count--;
    }
    // jei skaičius neigiamas!
    if (number < 0) {
        count --;
    }

    // gražinamas rezultatas
    return count;
}


console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );

console.log( skaitmenuKiekisSkaiciuje( 5 ), '->', 1 );
console.log( skaitmenuKiekisSkaiciuje( 781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ),'->', 11);
console.log( skaitmenuKiekisSkaiciuje( 345454545445454545454 ),'->', 21 );

console.log( skaitmenuKiekisSkaiciuje( 3.141515 ),'->', 7 );
console.log( skaitmenuKiekisSkaiciuje( -3.141515 ),'->', 7 );


