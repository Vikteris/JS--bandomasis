"use strict"

// 1 uzduotis

const sk1 = 55;
const sk2 = 55;
const sk3 = 5;

const sum = sk1 + sk2 +sk3;

console.log( sum );
console.log( '------------------------------------------------' );
// 2 uzduotis

const apskritis = 'Siauliai';
const rajonas = "Radviliskio";
const kaimas = 'Alksniupiai';
const gatve = 'Algirdo';
const gyvenamojiVieta = apskritis + ' ' + rajonas +' '+ kaimas+' '+ gatve;

console.log('Gyvenamoji vieta:', gyvenamojiVieta );

console.log('------------------------------------------------');

// 3 uzduotis

const reiks1 = 1;
const reiks2 = 2;
const reiks3 = 3;
const reiks4 = 4;
const reiks5 = 5;
const uzdavinys = reiks1 - reiks2 + reiks3 - reiks4 + reiks5;

console.log( uzdavinys);
console.log('------------------------------------------------');

// 4 uzduotis

// Mano vardas Viktoras, tarnavau Lietuvos kariuomenje, Juozo vitkaus inzinerijos batalione

const row1 = ['vardas','Mano', 'Viktoras'];
const row2 = ['Lietuvos', 'kariuomeneje', 'tarnavau'];
const row3 = ['inzinerijos', 'Juozo', 'batalione.', 'Vitkaus'];

let prisistatymas = row1[1] + ' ' + row1[0] + ' ' + row1[2]
prisistatymas = prisistatymas + ', ' + row2[2] + ' ' + row2[0] + ' ' + row2[1]
prisistatymas = prisistatymas + ', ' + row3[1] + ' ' + row3[3] + ' ' + row3[0] + ' ' + row3[2]
console.log( prisistatymas );



const textA = ['vardas ','Mano ','Viktoras, '];
const textB = ['Lietuvos ', 'kariuomeneje, ', 'tarnavau '];
const textC = ['Inžinerijos ','Juozo ','batalione.','Vitkaus '];

let textSum = textA[1] + textA[0] + textA[2];
textSum = textSum + textB[2] + textB[0] + textB[1];
textSum = textSum + textC[1] + textC[3] + textC[0] + textC[2];
console.log(textSum);