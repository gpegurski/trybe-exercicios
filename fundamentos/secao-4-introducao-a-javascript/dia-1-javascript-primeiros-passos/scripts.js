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
    //console.log('Oba, mais um dia de aprendizado na Trybe :D')
}
else {
    //console.log('FINALMENTE, descanso merecido!');
}

let status = 'aprovado';

/*switch (status) {
    case 'aprovado':
        console.log('Parabéns, você foi aprovado(a)!');
        break;

    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;

    case 'reprovado':
        console.log('Você foi reprovado(a)');
        break;

    default:
        console.log('Informação incorreta');
}*/

//const a = 4;
//const b = 8;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);



// if (a > b) {
//     console.log('a');
// } else {
//     console.log('b');
// }



// const a = 9;
// const b = 2;
// const c = 3;

// if(a > b && a > c) {
//     console.log(`${a} é o maior número!`);
// } 
// else if (b > a && b > c) {
//     console.log(`${b} é o maior número!`);
// }
// else {
//     console.log(`${c} é o maior número!`);
// }

// const number = 0;

// if(number < 0) {
//     console.log('negative');
// } else if (number > 0) {
//     console.log('positive');
// } else {
//     console.log('zero');
// }

// const valor1 = 70;
// const valor2 = 50;
// const valor3 = 60;

// const soma = valor1 + valor2 + valor3;
// const positivos = valor1 > 0 && valor2 > 0 && valor3 > 0;

// if(positivos){
//     if(soma === 180){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log('Erro: ângulo inválido');
// }

//6
// const peca = 'Bispo';

// switch (peca.toLowerCase()) {
//     case 'rei':
//         console.log('Rei > uma casa apenas para qualquer direção');
//         break;

//     case 'bispo':
//         console.log('Bispo > diagonal');
//         break;

//     case 'torre':
//         console.log('Torre > horizontal e vertical');
//         break;

//     default:
//         console.log('Erro, peça inválida!');
// };

//7
// let porcentagem = 90;

// if(porcentagem < 0 || porcentagem > 100) {
//     console.log('Erro');
// } else if(porcentagem >= 90) {
//     console.log('A');
// } else if (porcentagem >= 80) {
//     console.log('B');
// } else if (porcentagem >= 70) {
//     console.log('C');
// } else if (porcentagem >= 60) {
//     console.log('D');
// } else if (porcentagem >= 50) {
//     console.log('E');
// } else {
//     console.log('F');
// }

//8
// const num1 = 29;
// const num2 = 3;
// const num3 = 15;

// let par = false;

// if((num1 % 2 === 0 ||  num2 % 2 === 0 || num3 % 2 === 0)){
//     par = true;
// };
// console.log(par);

//9
// const a = 2;
// const b = 10;
// const c = 2;

// let impar = false;

// if((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)){
//     impar = true;
// };
// console.log(impar);

//10
// const custo = 7;
// const venda = 40;
// const imposto = custo * 0.2;

// const maiorQueZero = custo > 0 && venda > 0; 

// if(maiorQueZero){
//     const lucroTotal = imposto + custo;
//     const lucro = (venda - lucroTotal) * 1000;
//     console.log(lucro);
// }

//11
// let salarioBruto = 2000.00;
// let aliquotaInss = '';
// let aliquotaIR = '';

// if(salarioBruto <= 1556.94){
//     aliquotaInss = salarioBruto * 0.08;
// } else if(salarioBruto <= 2594.92){
//     aliquotaInss = salarioBruto * 0.09;
// } else if(salarioBruto <= 5189.82){
//     aliquotaInss = salarioBruto * 0.11;
// } else {
//     aliquotaInss = 570.88;
// }

// const baseSalarial = salarioBruto - aliquotaInss;

// if(baseSalarial <= 1903.98){
//     aliquotaIR = 0;
// } else if(baseSalarial <= 2826.65){
//     aliquotaIR = (baseSalarial * 0.075) - 142.80;
// } else if(baseSalarial <= 3751.05){
//     aliquotaIR = (baseSalarial * 0.15) - 354.80;
// } else if(baseSalarial <= 4664.68){
//     aliquotaIR = (baseSalarial * 0.225) - 636.13;
// } else {
//     aliquotaIR = (baseSalarial * 0.275) - 869.36;
// };

// console.log("Salário: " + (baseSalarial - aliquotaIR));