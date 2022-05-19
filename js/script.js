/*Está linha escreve um linha com a tag <H1> dentro da DOM exbindo no HTML uma linha com o texto */
document.write("<h1>Estamos executando o script.js</h1>");

/*Essa linha executa uma linha  com o texto dentro do <body> do HTML*/
document.write("Esse script está em um arquivo externo e é referenciado no header do HTML");

/*Essa linha executa um comando mostrando um conjunto de string na console do navegador */
console.log("Esse script está no cabeçalho do HTML");

/*Essa linha executa um comando mostrando um conjunto de string na console do navegador */
console.log("Primeiro");

/*Essa linha executa um comando mostrando um conjunto de string na console do navegador */
console.log("Segundo");

// Comentário de uma linha

/*  Comentário 
    de 
    múltiplas
    Linhas
*/

// Tipagem fraca

/*Este conjunto de codigo executa uma iteração dentro da DOM, usando uma tag com quebra de paragrafo iterando o valor da variavel*/
var teste = 1;
document.write("<hr>O valor da variável teste é " + teste + "<hr>");
teste = 'joao';
document.write("O valor da variável teste agora é " + teste + "<hr>");

// Variável global - criada sem necessidade de declaração

/*Essa declaração usa uma variavel global que é mostrada na console do navegador */
nome = 'joao';
console.log(nome)

// Formas de declaração de variáveis

/*Este bloco de declarações, executa um comando na console do navegador, porém, mostrando o tipo 
de cada variavel na console do navegador*/
var   v1 = 5.25;
let   v2 = null; 
const v3 = 'teste'

console.log(typeof(v1));
console.log(typeof(v2));
console.log(typeof(v3));
console.log(typeof NaN); // tipo number
console.log(typeof +Infinity); // tipo number
console.log(typeof null); // tipo number
const number = "1";


// Operadores de comparação

/*Este bloco executa na console do navegador uma comparação se os valores correspondem ao 
seu tipo, retornando um valor booleano*/
console.log(number == 1);
// true
console.log(number === 1);
// false

/*Executa um texto dentro do console do navegador */
console.log('ele disse "vtnc"');

// adicionar uma lista no body do HTML, 
var lista = ['Arroz', 'Feijão', 'carne','macarrão'];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

/*O comando exibe os items da lista ordenada na console */
console.log(listaUl);
console.log(body);

//alert("Vamos criar uma lista aqui!");
/*Adciona a Lista no body da pagina */
body[0].appendChild(listaUl);


/*Este comando adciona os itens da Lista dentro da UL criada no body do HTML */
for(var  i=0;i<lista.length;i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);
}

/*Escreve o texto entre "" no body avisando sobre a lista criada acima */
document.write("A lista não ordenada <b>ACIMA</b> foi criada dinamicamente via JavaScript");

/*Cria um objeto com atributos */
var obj = {
    nome: "Joao",
    sobrenome: "Furtado",
    profissao: "jogador",
    salario: 120000,
    pessoaJuridica: true
};

/*Exibe os atributos do objeto criado  */
console.log(obj);

/*Exibe o texto mais a iteração com o atributo do objeto*/
console.log("Salario: R$" + obj.salario);

/*Cria um array lista com varios items de difereentes tipos, ou seja, um array com tipagem dinamica */
var arr = [5, "JP", true, {teste1: 1, teste2: 2}, false];
/*Exibe os itens dentro do array e o seu tipo */
console.log(arr);
console.log(arr[1]);
console.log(typeof arr);

/*Este comando faz uma comparação */
if(arr[4]) {
    console.log("Entrou no teste do IF")
}

// Operadores de comparação ==, ===, !=, >, <, >=, <= 
if (obj.salario > '100000') {
    console.log("Salário acima de 100 mil");
}