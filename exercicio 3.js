<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulador de Dados</title>
    <style>
        .dado {
            width: 100px;
            height: 100px;
            border: 1px solid black;
            text-align: center;
            font-size: 30px;
            margin: 10px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <h1>Simulador de Dados</h1>
    <button id="botaoGirar">Girar Dados</button>
    <div id="dados">
        <div class="dado" id="dadoD6"></div>
        <div class="dado" id="dadoD8"></div>
        <div class="dado" id="dadoD20"></div>
    </div>

    <script>
        const botaoGirar = document.getElementById("botaoGirar");
        const dadoD6 = document.getElementById("dadoD6");
        const dadoD8 = document.getElementById("dadoD8");
        const dadoD20 = document.getElementById("dadoD20");

        botaoGirar.addEventListener("click", () => {
            const resultadoD6 = Math.floor(Math.random() * 6) + 1;
            const resultadoD8 = Math.floor(Math.random() * 8) + 1;
            const resultadoD20 = Math.floor(Math.random() * 20) + 1;

            dadoD6.textContent = resultadoD6;
            dadoD8.textContent = resultadoD8;
            dadoD20.textContent = resultadoD20;
        });
    </script>
</body>
</html>