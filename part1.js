function verificaraNota(nota) {
    if (nota === 10) {
        return "Exelente! Nota 10! Parabéns.";
    } else if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 4 && nota < 7) {
        return "Em recuperação";
    } else {
        return "Reprovado";
    }
}

// Exemplos:

console.log(verificaraNota(10)); // Saída: Exelente! Nota 10! Parabéns.
console.log(verificaraNota(8));  // Saída: Aprovado
console.log(verificaraNota(5));  // Saída: Em recuperação
console.log(verificaraNota(3));  // Saída: Reprovado
