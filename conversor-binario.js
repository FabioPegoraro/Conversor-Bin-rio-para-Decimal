const rs = require('readline-sync')

let numero = rs.question('informe um nuemro')
let numBinario = []

//função para inverter o numero binário
function inverter(string){
    let saida = ""
    for (let i = string.length-1; i>=0; i--){
        saida+= string[i]           
    }

    for(let i = 0; i < saida.length ; i++){
        let caractereAtual = saida.charAt(i)
        
        numBinario.push(caractereAtual)
        }
}

inverter(numero)


function calculo(num){

    let decimal = []
    let total = '' // Valor total do numero Decimal

    // Transformando o numero Binário para o decimal
    num.forEach((element, index) => {   

        for(let i = 1; i <= 1 ; i++){
            let resultado = (Math.pow(2, index) * element)
            
            decimal.push(resultado)                        
        }        
    });
    // Calculando o número Decimal
    for (let i = 0; i < decimal.length; i++) {
        total = parseInt(total + decimal[i])
        
    }

    console.log(total)
}

calculo(numBinario)



// 10011\

