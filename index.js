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
        message: 'Selecione o operador que vocE qr',
        choices: ['Soma', 'Subtrair', 'Multiplicar', 'Dividir']
    }
]);
let result;
switch (answer.operator) {
    case 'Somar':
        result = answer.num1 + answer.num2;
        console.log("A resposta ao soma é: " + result);
        break;
    case 'Subtrair':
        result = answer.num1 - answer.num2;
        console.log("a resposta ao subtrair éÇ " + result);
        break;
    case 'Multiplicar':
        result = answer.num1 * answer.num2;
        console.log("a resposta da multiplicacao é: " + result);
        break;
    case 'Dividir':
        result = answer.num1 / answer.num2;
        console.log("A resposta ao dividar e: " + result);
        break;
}
