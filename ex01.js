//1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

const areaEperimetro = (base, altura) => {
    const area = base * altura;
    const perimetro = 2 * area;
    console.log(`A area do retangulo é ${area} e seu perimetro é ${perimetro}`);

    return perimetro;
}

areaEperimetro(5, 10);

