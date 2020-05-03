"use strict"

console.log('------------ 1 užduotis----------------');

// 0 - 0
// 0 - 4
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30

const from = 0;
const to = 0;
let interv = 0;

for (let i= from; i <= to; i++  ) {
    interv = interv +i;
}
    console.log(interv);


    const nulis = 0;
    const keturi = 4;
    let suma = 0;

    for (let i= nulis; i<= keturi; i++ ) {
        suma = suma + i;
    }
    console.log(suma);
    

const zero = 0;
const simtas = 100;
let result = 0;

for (let i=zero; i<=simtas; i++) {
    result = result +i;
}
console.log(result);


const big = 574;
const lbig = 815;
let extrabig = 0;

for (let i=big; i<=lbig; i++) {
    extrabig = extrabig +i;
}
console.log(extrabig);


const msame = -50;
const same = 50;
let sameres = 0;

for (let i=msame; i<=same; i++) {
    sameres = sameres +i;
}
console.log(sameres);



const septym = -70;
const trim = 30;
let galutinis = 0;

for (let i=septym; i<=trim; i++) {
    galutinis = galutinis +i;
}
console.log(galutinis);


console.log('------------ 2 užduotis----------------');


const text = 'karbiuratorius';
const textlength = text.length;
let backward = '';

for ( let i=textlength-1; i>=0; i-- ) {
    backward = backward + text[i]
}
console.log(`Tekstas "${text}" atbulai yra "${backward}".`);


console.log('------------ 3 užduotis----------------');
// A
const froma = 0;
const tilla = 11;
// dalmenys
const dalmuoi = 3;
const dalmuoii = 5;
const dalmuoiii = 7;
// ATS
let countai = 0;
let countaii = 0;
let countaiii = 0;

for ( let i=froma; i<=tilla; i++) {
    if (i %dalmuoi === 0)
    countai++;
}
const answerai = `Skaičių intervale tarp ${froma} ir ${tilla}, besidalinančių be liekanos iš ${dalmuoi} yra ${countai} vienetai.`;

console.log(answerai);

console.log('~~~~~~');

for ( let i=froma; i<=tilla; i++) {
    if (i % dalmuoii === 0)
    countaii++;
}
const answeraii = `Skaičių intervale tarp ${froma} ir ${tilla}, besidalinančių be liekanos iš ${dalmuoii} yra ${countaii} vienetai.`;

console.log(answeraii);

console.log('~~~~~~');

for ( let i=froma; i<=tilla; i++) {
    if (i % dalmuoiii === 0)
    countaiii++;
}
const answeraiii = `Skaičių intervale tarp ${froma} ir ${tilla}, besidalinančių be liekanos iš ${dalmuoiii} yra ${countaiii} vienetai.`;

console.log(answeraiii);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// B
const fromb = 8;
const tillb = 31;
// dalmenys
const dalmuobi = 3;
const dalmuobii = 5;
const dalmuobiii = 7;
// ATS
let countbi = 0;
let countbii = 0;
let countbiii = 0;

for ( let i=fromb; i<=tillb; i++) {
    if (i %dalmuobi === 0)
    countbi++;
}
const answerbi = `Skaičių intervale tarp ${fromb} ir ${tillb}, besidalinančių be liekanos iš ${dalmuobi} yra ${countbi} vienetai.`;

console.log(answerbi);

console.log('~~~~~~');

for ( let i=fromb; i<=tillb; i++) {
    if (i %dalmuobii === 0)
    countbii++;
}
const answerbii = `Skaičių intervale tarp ${fromb} ir ${tillb}, besidalinančių be liekanos iš ${dalmuobii} yra ${countbii} vienetai.`;

console.log(answerbii);

console.log('~~~~~~');

for ( let i=fromb; i<=tillb; i++) {
    if (i %dalmuobiii === 0)
    countbiii++;
}
const answerbiii = `Skaičių intervale tarp ${fromb} ir ${tillb}, besidalinančių be liekanos iš ${dalmuobiii} yra ${countbiii} vienetai.`;

console.log(answerbiii);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// C
const fromc = -18;
const tillc = 18;
// dalmenys
const dalmuoci = 3;
const dalmuocii = 5;
const dalmuociii = 7;
// ATS
let countci = 0;
let countcii = 0;
let countciii = 0;

for ( let i=fromc; i<=tillc; i++) {
    if (i %dalmuoci === 0)
    countci++;
}
const answerci = `Skaičių intervale tarp ${fromc} ir ${tillc}, besidalinančių be liekanos iš ${dalmuoci} yra ${countci} vienetai.`;

console.log(answerci);

console.log('~~~~~~');

for ( let i=fromc; i<=tillc; i++) {
    if (i %dalmuocii === 0)
    countcii++;
}
const answercii = `Skaičių intervale tarp ${fromc} ir ${tillc}, besidalinančių be liekanos iš ${dalmuocii} yra ${countcii} vienetai.`;

console.log(answercii);

console.log('~~~~~~');

for ( let i=fromc; i<=tillc; i++) {
    if (i %dalmuociii === 0)
    countciii++;
}
const answerciii = `Skaičių intervale tarp ${fromc} ir ${tillc}, besidalinančių be liekanos iš ${dalmuociii} yra ${countciii} vienetai.`;

console.log(answerciii);

console.log('~~~~~~');