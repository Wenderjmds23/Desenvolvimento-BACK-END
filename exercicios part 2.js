// Solicite uma palavra.
let palavra = prompt("Digite uma palavra:");

// Convertendo a palavra para uppercase
palavra = palavra.toUpperCase();

// Iterando sobre cada letra da palavra e imprimindo uma por linha
for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i]);
}
