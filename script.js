function converter() {
    numero = document.getElementById("numBinario").value;
    
    //Verificando se o campo está vazio
    if (numero == '' ) {
        alert("Digite um codigo binário. Ex.: 01011101")
        console.log('primiero if '+numero)    
    }

    let numBinario = []

    
    function inverterCaracter(string) {
        let saida = "";
        for (let i = string.length - 1; i >= 0; i--) {
            saida += string[i];
        }

        for (let i = 0; i < saida.length; i++) {
            let caractereAtual = saida.charAt(i);
            
            //Verificando se o caracterAtuual é 0 ou 1
            if(caractereAtual != '1' && caractereAtual != '0'){
                alert("Digite um codigo binário. Ex.: 01011101")
                return numero = ''
            }
            numBinario.push(caractereAtual);
        }

        // Transformando o número Binário para o decimal
        function transfDecimal(num) {
            let decimal = [];
            let total = ""; // Valor total do numero Decimal

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

        transfDecimal(numBinario);
    }
    
    inverterCaracter(numero)

}

