// 9. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu raio e sua altura.


function ciclidro(raio, altura){
    return (Math.PI * Math.pow(raio, 2)) * altura;
}


console.log('O volune da lata de oléo, é:', Math.floor(ciclidro(2, 6)));
