//10. Converter um inteiro informado menor que 32 para sua representação em binário.





function binario(inteiro) {
    let binario = "";
    let tempo = inteiro;

    if(tempo < 32) {
        if(tempo % 2 === 0){
            binario = "0" + binario;
        } else {
            binario = "1" + binario;
        }

        tempo = Math.floor(tempo / 2);
    }

    return binario;
}

console.log(binario(23));