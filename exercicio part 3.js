// Função para verificar se o usuário é maior de idade
function verificarMaiorIdade(nome, anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    if (idade >= 18) {
        console.log(`Bem-vindo(a), ${nome}!`);

        // Solicitar nome de usuário e senha
        let usuario = prompt("Digite um nome de usuário:");
        let senha = prompt("Digite uma senha:");

        // Salvar os dados em uma lista para uso posterior
        let dadosUsuario = {
            nome: nome,
            usuario: usuario,
            senha: senha
        };

        console.log("Dados salvos:", dadosUsuario);
    } else {
        console.log(`Desculpe, ${nome}. Você é menor de idade e não pode fazer login.`);
    }
}

// Solicitar nome e ano de nascimento ao usuário
let nome = prompt("Digite seu nome:");
let anoNascimento = prompt("Digite seu ano de nascimento:");

// Converter ano de nascimento para número inteiro
anoNascimento = parseInt(anoNascimento);

// Verificar maioridade
verificarMaiorIdade(nome, anoNascimento);
