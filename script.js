let numero = "";

function converter() {
    numero = document.getElementById("numBinario").value;
    let numBinario = []

    
    function inverter(string) {
        let saida = "";
        for (let i = string.length - 1; i >= 0; i--) {
            saida += string[i];
        }

        for (let i = 0; i < saida.length; i++) {
            let caractereAtual = saida.charAt(i);

            numBinario.push(caractereAtual);
        }

        function transDecimal(num) {
            let decimal = [];
            let total = ""; // Valor total do numero Decimal

            // Transformando o número Binário para o decimal
            num.forEach((element, index) => {
                for (let i = 1; i <= 1; i++) {
                    let resultado = Math.pow(2, index) * element;

                    decimal.push(resultado);
                }
            });
            // Calculando o número Decimal
            for (let i = 0; i < decimal.length; i++) {
                total = parseInt(total + decimal[i]);
            }
            document.getElementById("valorDigitado").value = total
        }
        transDecimal(numBinario);
    }
    inverter(numero)

}

