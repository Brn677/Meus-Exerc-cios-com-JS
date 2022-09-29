//7. Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias.

function idadeEmDias(dias, anos, meses) {
   anos = dias / 365;
   meses = dias / 30;
   
        console.log(`Anos: ${anos} Meses: ${Math.round(meses)} Dias: ${dias}`)
    return;
}

idadeEmDias(365);