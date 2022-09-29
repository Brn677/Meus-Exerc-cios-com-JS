//11. Faça um algoritmo para calcular a nota semestral de um aluno. A nota semestral é obtida pela média aritmética entre a nota de 2 bimestres. Cada nota de bimestre é composta por 2 notas de provas.

const bimestre1 = (num1,num2) => num1 + num2;
const bimestre2 = (num1,num2) => num1 + num2;
console.log("A media semestral do aluno,é:"+ (bimestre1(8, 9) + bimestre2(9, 9))/ 2);
