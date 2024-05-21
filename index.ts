import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Digite o primeiro número: '
    },
    {
        type: 'numer',
        name: 'num2',
        message: 'Digite o segundo número: '
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Selecione a opção abaixo',
        choices: ['Soma', 'Subtrair', 'Multiplicar', 'Dividir']
    }
]);

let result: number;

switch(answer.operator){
    case 'Somar':
        result = answer.num1 + answer.num2;
        console.log("A soma é: " + result);
        break;

    case 'Subtrair':
        result = answer.num1 - answer.num2;
        console.log("A subtração é " + result);
        break;

    case 'Multiplicar':
        result = answer.num1 * answer.num2;
        console.log("A multiplicação é: " + result);
        break;

     case 'Dividir':
        result = answer.num1 / answer.num2;
        console.log("A divisão é: " + result);
        break;
}