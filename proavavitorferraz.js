//response

let aluno1 = {
    nome:"Vitor Ferraz",
    idade: 17,
    ra: "1234567",
    cursando:["PDM", "TIA"],
    presença:["2022-03-03", "2022-08-04", "2022-05-03"],
}

function validaCasdastro(){

    if(aluno1.nome.lenght<10){
        return "cadastro inválido";  
    } 
    if(aluno1.idade.toString()<14){
        return "cadastro inválido";
    }
    if(cursando<3){
        return "cadastro inválido";
    }
    if(presença<2){
        return "cadastro inválido";
    }
    if(ra<7){
        return "RA inválido";
    }
    else{
        return"Seu cadastro foi um sucesso";
    }  
}
console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.ra);
console.log(aluno1.cursando);
console.log(aluno1.presença);



let aluno2 = {
    nome:"Pedro",
    idade: 10,
    ra: "1234",
    cursando:["PDM", "TIA"],
    presença:["2022-03-04", "2022-08-09"],
}

function validaCasdastro(aluno2){

    if(aluno2.nome.lenght<10){
        return "cadastro inválido";  
    }
    if(aluno2.idade.toString()<14){
        return "cadastro inválido";
    }
    if(cursando<3){
        return "cadastro inválido";
    }
    if(presença<2){
        return "cadastro inválido";
    }
    if(ra<7){
        return "RA inválido";
    }
    else{
        return"Seu cadastro foi um sucesso";
    }  
}
console.log(aluno2.nome);
console.log(aluno2.idade);
console.log(aluno2.ra);
console.log(aluno2.cursando);
console.log(aluno2.presença);

