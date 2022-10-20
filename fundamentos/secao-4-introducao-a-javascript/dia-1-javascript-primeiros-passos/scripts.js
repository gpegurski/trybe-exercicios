/*const myName = 'Grazziele';
const birthCity = 'Curitiba';
let birthYear = 2000;

console.log(myName, birthCity, birthYear);*/

const myName = 'Grazziele';
const birthCity = 'Curitiba';
let birthYear = 2000;
birthYear = 2030;

//console.log(birthYear);

const base = 5;
const heigth = 8;
const area = base * heigth;

//console.log(area);

const perimeter = (base * 2) + (heigth * 2);

//console.log(perimeter);

/*const nota = 80;

if(nota >= 80) {
    console.log('Parabéns, você foi aprovado(a)!');
} 
else if(nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera!')
}
else {
    console.log('Você foi reprovado(a)')
}*/

const currentHour = 8;
let message = '';

if(currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
}
else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
}
else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
}
else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!!';
}
else if (currentHour >= 4 && currentHour < 11) {
    message = 'Hmmm, cheiro de café recém-passado';
}
//console.log(message);

let weekDay = 'quarta-feira';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe :D')
}
else {
    console.log('FINALMENTE, descanso merecido!');
}