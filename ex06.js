// 6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

//Maneira 01
/*
function lerNum(n1, n2) {
    const quo = Math.trunc(n1 / n2);
    const resto = n1 % n2;
    return console.log(`O quociente, é:${quo} e o resto, é:${resto}`);
}
lerNum(13, 5);*/


//Maneira 02
/*
const lerNum = (n1, n2) => {
    const quo = ~~(n1 / n2);
    const resto = n1 % n2;
    return console.log(`O quociente, é: ${quo} e o resto, é: ${resto}`);
} 
lerNum(13, 5);
*/


//Maneira 03
const lerNum = (n1, n2) => {
    const quo = Math.floor(n1/n2);
    const resto = n1 % n2;
    return console.log(`O quociente, é: ${quo} e o resto, é: ${resto}`);
} 

lerNum(13, 5);