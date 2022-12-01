// // if aninhados

let idadeDependente = 12

//idadeDependente >= 13
//idadeDependente <= 17

if(idadeDependente >= 13){
    if(idadeDependente <= 17){
        console.log("Pode ter o cartão de dependente")
    } else{
        console.log("O limite de idade é 17 anos")
    }
}else{
    console.log("Para ter o cartão, o dependente precisa ter entre 13 e 17 anos. Consulte a disponibilidade")
}

// usando operadores lógicos
if(idadeDependente >= 13 && idadeDependente <= 17){
    console.log("Pode ter o cartão de dependente")
}else{
    console.log("Para ter o cartão, o dependente precisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank.")
}




    
