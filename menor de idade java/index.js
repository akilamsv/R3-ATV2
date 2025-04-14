let numIdade =  parseFloat(prompt("Insira sua idade:")); //A variavel numIdade irá armazenar a idade do usuario 

if (!isNaN(numIdade)) {
    if (numIdade > 18) {
        console.log ("Você é maior de idade");
        // comando define que o usuário é menor de idade
    } else

    if (numIdade < 18){
        console.log("Você é menor de idade");
        // comando define que o usuário é maior de idade
    }
}
    