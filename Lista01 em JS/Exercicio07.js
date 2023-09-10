const ladoQuadrado = parseFloat(prompt("Digite aqui a medida do lado do quadrado:"));
//const raio         = parseFloat(prompt("Digite aqui a medida em metros do raio de seu terreno circular:"));

const area = Math.round(ladoQuadrado * ladoQuadrado);
const dobroArea = area * 2

alert(`A área de seu quadrado é: ${area} m²`);
alert(`O dobro desta área é: ${dobroArea} m²`);



// Faça um programa que calcule a área de um quadrado e em seguida mostre o dobro desta área para o usuário