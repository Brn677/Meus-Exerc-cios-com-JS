//2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo. 

const quadrado = (lado) =>{
    const area = lado * lado;
    const perimetro = area + area;
    return perimetro;
}

console.log(quadrado(8));