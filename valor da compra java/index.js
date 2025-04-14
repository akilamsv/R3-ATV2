let prCompra = parseFloat(prompt("Qual é o valor da compra?"));
//A variavel valor irá armazenar o valor da compra 

let descontoTTL = (prCompra) - (prCompra*0.1)
//A variavel descontoTTL irá armazenar o valor da compra com o desconto total

let desconto = (prCompra*0.1) 
//A variavel desconto irá armazenar o valor da compra com o desconto 

if (!isNaN(prCompra)) 
    if (prCompra > 100) {
        console.log("Você conseguiu um desconto de " +desconto+ " reais, o valor total da compra é " +descontoTTL);
        // comando define que se o valor da compra for maior que 100, existirá desconto
    } 

    if (!isNaN(prCompra)) 
    if (prCompra <100) {
            console.log ("O valor da compra é " +prCompra)
            // comando define que se a compra for menor que 100, não havera desconto
        } 
    
