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


console.log('--------------4 uždavinys------------------');
console.log('-------------DidziausiasSkaiciusSarase----------------------');


function didziausiasSkaiciusSarase(list) {
    
    // validavimas
    if (Array.isArray(list) === false) {
        return console.error('Klaida: Pateikta netinkamo tipo reikšmė.');
    }
    if (list.length === 0 ) {
        return console.error('Klaida: Pateiktas sarašas negali būti tuščias.');   
    }

    // logika
    // einam per skaičiu saraša
    // ar ein skaičius yra tikras skaičius:
        // jei taip : tesiam, 
        // jei ne: einama prie sekančio sarašo nario

    let didziausias = -Infinity;
        for ( let i=0; i<list.length; i++) {
            const einamasisSkaicius = list[i];
            if (isFinite(einamasisSkaicius) === false) {
                continue;
            }

            if (einamasisSkaicius > didziausias) {
                // ar ein skaičius didesnis už 'didžiausia' skaičiu
                    // jei taip: didžiausias skaičius = einamas/tikriniamas skaičius
                    // Gražintas rezultatas
            }
                didziausias = einamasisSkaicius;
            }
    
    if (didziausias === -Infinity) {
        return console.error('Saraše turi būti bent vienas noramlus skaičius');
        
    }

    return didziausias;    
}

console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( 1 ) );
console.log( didziausiasSkaiciusSarase( true) );
console.log( didziausiasSkaiciusSarase( false ) );
console.log( didziausiasSkaiciusSarase( [] ) );
console.log( didziausiasSkaiciusSarase( [ Infinity, Infinity, Infinity ] ),'->', 'Error');


console.log( didziausiasSkaiciusSarase( [ 1 ] ),'->', 1);
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ),'->', 3);
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ),'->', 78 );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ),'->', 69 );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ),'->', -1 );
console.log( didziausiasSkaiciusSarase( [ 1, Infinity, 3 ] ),'->', 3);
console.log( didziausiasSkaiciusSarase( [ 1, 3, Infinity ] ),'->', 3);

console.log( didziausiasSkaiciusSarase( [ Infinity, 1, 3 ] ),'->', 3);
console.log( didziausiasSkaiciusSarase( [ 1, Infinity, Infinity ] ),'->', 1);
console.log( didziausiasSkaiciusSarase( [ Infinity, 1, Infinity ] ),'->', 1);
console.log( didziausiasSkaiciusSarase( [ Infinity, Infinity, 1 ] ),'->', 1);



console.log('--------------5 uždavinys------------------');
console.log('-------------IsrinktiRaides----------------------');


function isrinktiRaides( text, step ) {
    // valdicaija
    if ( typeof(text) !== 'string' ) {
        return console.error('Klaida: Pirmasis kintamasis netinkamo tipo.');   
    }
    if (text === '' && text > 100) {
        return console.error('Klaida: Pirmojo kintamojo reikšmė yra netinkamo dydžio.');    
    }
    // if (text.length === 0) {
        if (text === '') {
        return console.error('Klaida: Tekstas negali būti tuščias ');
    }
    if ( isFinite(step) === false ) {
        return console.error('Klaida: Antrasis kintamasis netinkamo tipo.(normalus skaičius)');   
    }
    if (step === 0) {
        return console.error('Klaida: Antrasis kintamasis turi buti didesnis už 0.');
    }
    if ( step > text.length) {
        return console.error('Klaida: Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.');
    }
    if ( step % 1 !==0) {
        return console.error('Klaida: Žingsnis turi buti sveikasis skaičius.');
    }
    // logika
    let newWord= '';
        
    if (step > 0) {
        for ( let i=step-1; i<text.length; i= i + step) {
            newWord= newWord +text[i];
        }  
    }else {
        for (let i = text.length + step; i >= 0; i = i + step) {
            newWord = newWord + text[i];
    }

}
    // gražinimas rez
    return newWord;
}

console.log( isrinktiRaides( 1561, 2 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( '', 3 ) );
console.log(isrinktiRaides('dfgjdfhigldfh', Infinity));
console.log(isrinktiRaides('dfgjdfhigldfh', NaN));
console.log( isrinktiRaides( 'abcdefghijkl', 1.5 ));

console.log( isrinktiRaides( 'abcdefg', 2 ),'->', 'bdf');
console.log( isrinktiRaides( 'abcdefghijkl', 3 ),'->', 'cfil' );
console.log( isrinktiRaides( 'abcdefghijkl', 1 ),'->', 'abcdefghijkl' );
console.log( isrinktiRaides( 'abcdefghijkl', -3 ),'->', 'jgda' );
console.log( isrinktiRaides( 'qweqfgsttsdga', -3 ) );


console.log('--------------6 uždavinys------------------');
console.log('-------------Dalyba----------------------');


function dalyba( one, two ) {
    if (!isFinite(one) ||
        !isFinite(two) ){
        return console.error('Klaida: Reikia normalių skaičių.');
    }
    if (two === 0) {
        return console.error('ERROR: Dalyba is nulio nepageidautina');
    }
    return one / two;
}
console.log( dalyba(Infinity, 4) );
console.log( dalyba(8, Infinity) );
console.log( dalyba(8, 0) );

console.log( dalyba(8, 4) );
console.log( dalyba(254, 2) );
console.log( dalyba(0, 2) );


