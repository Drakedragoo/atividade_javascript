const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6,5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador,nota) => acc + nota , 0);
        
    const media = somaDasNotas / notasDaSala.lenght;
    
    return media;
};

console.log(`A média da de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da de Python é ${calculaMedia(salaPython)}`);
