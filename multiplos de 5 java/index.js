let numero = parseFloat(prompt("Insira um número:")); //A variavel numero irá armazenar o número inserido pelo usuario

if (!isNaN(numero)) 
    if (numero % 5 != 0) {
        alert ("O número não é multiplo de 5")
        // comando define que número não multiplo de 5
    } 

    if (!isNaN(numero)) 
        if (numero % 5 == 0) {
            alert ("O número é multiplo de 5")
            // comando define que número é multiplo de 5
        } 
    
