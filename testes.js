function areTwoNumbersAreQuiteSimilar(n1, n2){
    var marginError = 0.01;
    var result = Math.abs(n1 - n2);

    if (result > marginError)
        return false;

    return true;
}


let teste1_resultado = ArraySum(calculateInss(3000, inss2023));
let teste1_esperado = 263.06;

console.log(`Teste 1 é valido? ${areTwoNumbersAreQuiteSimilar(teste1_esperado, teste1_resultado) ? "✅" : "❌" }`);

let teste2_resultado = ArraySum(calculateInss(3800, inss2023));
let teste2_esperado = 359.06;

console.log(`Teste 2 é valido? ${areTwoNumbersAreQuiteSimilar(teste2_esperado, teste2_resultado) ? "✅" : "❌" }`);



