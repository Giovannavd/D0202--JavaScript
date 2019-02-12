// console.log= mostra no console
// console.log("Hello world!");

// let nota = Number(prompt("Qual a nota do aluno?"));

// console.log(nota);

// alert("A nota do aluno é:" +nota);
// Mesma coisa só que mais fácil.  ${variável}
// alert(`A nota do aluno é ${nota}.`);

//                                  IF, ELSE IF, ELSE

// if(condição) { o que vai acontecer} else if(se não se) {próxima condição} else {se a condição não foi atendida, acontecerá isso}
    

// nota>=6 ==> Está comprando um valor que pode ser texto com um número, por isso converter. Number ()
// if (nota >= 6) {
//     alert(`Parabéns, o aluno foi aprovado!`);
// }
// else if (nota >= 5.5){
//     alert(`Parabéns, você foi aprovado, agradeça o sistema.`);
// }
// else{
//     alert(`Parece que sua nota foi insuficiente, converse com a coordernação.`);
// }


//                                          LOOP

// para de rodar quado condição=false
// while (condição){  
//     execução

//     passo = quebra o while
// }

// let contador = 0;
// while(contador < 10) {
//         console.log(contador);
//         // contador = contador +1;
//         // contador += 1  formas de escrever a mesma coisa;
//         contador++;
// }

// // EXEMPLO

// let i= 0;  
// //  Por convenção: contador = i  2 contadores= i e ij, 3 contadores= i =ij =ijk...
// let nota = Number(prompt(`Qual a nota do aluno?`));
// // Garantir que a informação inserida seja um número antes de continuar a rodar o código
// while (isNaN(nota) && i < 5) {
//     nota = Number(prompt(`Por favor, digite um número.Qual a nota do aluno?`));

//     i ++;
// }

// if (i >= 5) {
//     alert(`Você chegou ao limite de tentativas, por favor tente novamente mais tarde.`);
// }

//                                  VETORES


// let vetor = [15, 2, -10 , 227, 458, 300];

// let i = 0;
// while(i < vetor.lenght) {
//     console.log(vetor[i]);

//     i++;
// }

// for(let valor of vetor) {
//     console.log(valor);
// }

// VERIFICAR SE O VALOR É PAR OU ÍMPAR E AVISAR NO CONSOLE.LOG O RESULTADO

let vetor = [15, 2, -10 , 227, 458, 300];

//  valor= um dos valores do vetor; recebe os valores do vetor
for(let valor of vetor) {
    if(valor % 2 === 0) {
        console.log(`O número ${valor} é par`);
    }
    else{
        console.log(`O número ${valor} é ímpar`);
    }
}


// OBJETO(exercício da casa e do gato no FDS) é uma lista na qual os índices são palavras. Como não tem índices, não é possível usar for of
// Lista: índice e valor. Objeto: chave(dentro uma palavra) e valor.

let objeto = {
    nome: "João",
    sobrenome: " da Silva",
    idade: 17,
    namorada: undefined,
    cachorros: [
        {
          nome: "Rex",
          raca: "Tomba-potes",
        },
        {
          nome:"Mila",
          raca: "tomba-lata",  
        }
            




