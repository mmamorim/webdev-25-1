import readlineSync from "readline-sync"
import chalk from 'chalk';

console.log(chalk.red("Oi gente"));


let userName = readlineSync.question('Digite seu nome: ');
console.log('Oi ' + userName + '! Tudo bem?');