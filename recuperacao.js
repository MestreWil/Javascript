
//Questão 1
let nome='William';

document.getElementById('ex1').innerHTML+=`crie uma variável que armazene o seu nome e exiba o valor dela. <br><p>${nome}</p>`;
//Questão 2
let number=10;
document.getElementById('ex2').innerHTML+=`salve um número em uma variável e a mostre o valor dela. <br><p>${number}</p>`;
//Questão 3
let paragrafo=`<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. ${nome}, sequi. Tenetur repellat dignissimos dolor earum dicta ullam, cum ad labore nam, iste quod quam! Magni facilis omnis hic molestias odio!</p>`;
document.getElementById('ex3').innerHTML+=`use o javascript para inserir um parágrafo no HTML com o seu nome entre as tags.<br>${paragrafo}`;
//Questão 4
if(number>0){
  document.getElementById('ex4').innerHTML+=`salve um número em uma variável e mostre se ela é maior ou menor do que zero.<br><p>${number} é maior que 0</p>`;
}
else{
  document.getElementById('ex4').innerHTML+=`salve um número em uma variável e mostre se ela é maior ou menor do que zero.<br><p>${number} é menor que 0</p>`;
}
//Questão 5
if(number%2==0){
  document.getElementById('ex5').innerHTML+=`salve um número em uma variável e mostre se ele é par ou ímpar.<br><p>${number} é par</p>`
}
else{
  document.getElementById('ex5').innerHTML+=`salve um número em uma variável e mostre se ele é par ou ímpar.<br><p>${number} é ímpar</p>`
}
//Questão 6
let resultado='';

if(resultado+=number%3==0){
  document.getElementById('ex6').innerHTML+=` salve um número em uma variável e veja se ela é divisível por 3, se for mostre true no HTML, senão mostre false.<br><p>${resultado}</p>`;
}
else{
  document.getElementById('ex6').innerHTML+=` salve um número em uma variável e veja se ela é divisível por 3, se for mostre true no HTML, senão mostre false.<br><p>${resultado}</p>`;
}
//Questão 7
let sobrenome='Tavares de Moura';
let nome_completo=nome;
nome_completo=nome_completo.concat(' ')
nome_completo=nome_completo.concat(sobrenome)
document.getElementById('ex7').innerHTML+=`crie duas variáveis com seu nome e sobrenome, crie uma terceira variável que vai receber o nome completo a partir das variáveis anteriores.<br><p>${nome_completo}</p>`;
//Questão 8
let mostra='';
for(let i = 1; i <=100;i++){
  mostra+=(", "+i)
}
 document.getElementById('ex8').innerHTML+=` mostre todos os números, separados por uma vírgula, lado a lado de 1 até 100.<br><p>${mostra}</p>`;
//Questão 9
let num=5;
let mostre='';

while (num <= 99) {
  if(num%2==0){
    mostre+=(", "+num)
  }
  num++;
}
 document.getElementById('ex9').innerHTML+=`usando uma estrutura de repetição diferente da acima, mostre todos os números pares entre de 5 a 99.<br><p>${mostre}</p>`;
 //Questão 10
 let num2=2;
 let mostre1='';

 for(num2=2;num2<=100;num2++) {
  if(num2%4==0){
    
    
    mostre1+=(", "+num2)
  }
  num2++;
} 
document.getElementById('ex10').innerHTML+=`começando em 2, mostre todos os números múltiplos de 4 lado a lado, separados por vírgula.<br><p>${mostre1}</p>`;
//Questão 11
let num3=0;

for(i=1;i<=199;i++) {
  if(i%7==0){
    num3++;
     
  }
  
} 
document.getElementById('ex11').innerHTML+=`conte todos os números múltiplos de 7, começando em 1 e indo até 199, mostre o valor final do contado.<br><p>${num3}</p>`;
//Questão 12
for (let i = 0; i < nome.length; i++) {
  document.getElementById('ex12').innerHTML+=`mostre todas as letras do seu nome em linhas individuais.<br><p> ${nome[i]}<br></p>`;
  
}
//Questão 13
for (let i = 0; i < nome.length; i++) {
  if(i%2==1)
  document.getElementById('ex13').innerHTML+=`mostre apenas os caracteres pares do seu nome completo.<br><p> ${nome[i]}</p>`;
}
//Questão 14
for (let i = 0; i < nome.length; i++) {
  if(i%2==0)
  document.getElementById('ex14').innerHTML+=`mostre apenas os caracteres ímpares do seu nome completo.<br><p> ${nome[i]}</p>`;
}
//Questão 15
let vogais=''
for (let i = 0; i < nome_completo.length; i++) {
 switch(nome_completo[i]){
  case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    vogais+=nome_completo[i]
      break;
      default:
        
   }
}
document.getElementById('ex15').innerHTML+=`mostre apenas as vogais de seu nome completo, espaço em branco não é vogal.<br><p> ${vogais}</p>`;
//Questão 16
let consoante=''
for (let i = 0; i < nome_completo.length; i++) {
 switch(nome_completo[i]){
  case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      case ' ':
        
    
    break;
      default:
        consoante+=nome_completo[i]
   }
}
document.getElementById('ex16').innerHTML+=`mostre apenas as consoantes de seu nome completo, espaço em branco não é consoante.<br><p> ${consoante}</p>`;
//Questão 17
let list=[1,2,3,4,5];
document.getElementById('ex17').innerHTML+=`crie uma lista com 5 números inteiros e mostre no HTML.<br><p> ${list}</p>`;
//Questão 18
let list2=[6,7,8,9,10,11,12,13,14,15];
let mostre2=''
for (let i = 0; i< list2.length; i++) {
  mostre2+=list2[i]*10+', '
  
}
document.getElementById('ex18').innerHTML+=`crie uma lista com 5 números inteiros e mostre no HTML.<br><p> ${mostre2}</p>`;
//Questão 19
let movies=['senhor dos aneis 1', 'senhor dos aneis 2', 'senhor dos aneis 3', 'senhor dos aneis 4', 'senhor dos aneis 5'];
let mostre3=''
for (let i = 0; i< movies.length; i++) {
  mostre3+=movies[i]+'<br> '
  
}
document.getElementById('ex19').innerHTML+=`crie uma lista com 5 de seus filmes favoritos, depois eles, um em cada linha.<br><p> ${mostre3}</p>`;
//Questão 20
let list3=[];
let mostre4='';
for (let i = 0; i < 250; i++) {
  list3[i]=2+i*2;
  mostre4+=(", "+list3[i]);
  
}

document.getElementById('ex20').innerHTML+=`crie uma lista que contenha os primeiros 250 números inteiros pares, começando do 1, mostre o tamanho e todos os números separados por um espaço.<br><p> ${mostre4}</p>`;
//Questão 21
let soma=0;
let list4=[]
for (let i = 0; i < 300; i++) {
  list4[i]=3+i*2;
  soma+=list4[i]
}
document.getElementById('ex21').innerHTML+=`crie uma lista com os primeiros 300 números inteiros ímpares, começando do 2, e mostre a soma de todos eles.<br><p> ${soma}</p>`;
//Questão 22

let list5=[];
let index=0;
let soma1=0;
for(let i=100;i<150;i++){
  list5[index]=i;
  if(index%6==0){
    soma1+=list5[index];
  }
  index++
}
document.getElementById('ex22').innerHTML+=`crie uma lista de 50 números, a partir do 100 até 50, e some apenas os números que estão em um índice múltiplo de 6.<br><p> ${soma1}</p>`;

//Questão 22
/** tentei fazer mas bugou meu codigo por algum motivo, ai desisti */


//Questão 24
let objeto={
  nome, nascimento:'10/09/1998',movies, altura:1.7, peso:81,
idade:24
};
let mostre5=''
for(let componente in objeto ){
mostre5+=componente+':'+objeto[componente]+'<br>';
}
document.getElementById('ex24').innerHTML+=`crie um objeto contendo o seu nome, sua data de nascimento, seus 5 filmes favoritos, sua altura, seu peso e sua idade, mostre todos os valores (com suas legendas) no HTML.<br><p> ${mostre5}</p>`;
//Questão 25
let objeto2={
  nome: 'senhor dos aneis',
  lancamento:' 1 de janeiro de 2002',
  oscar: 'sim',
};
let  mostre6=''

for(let key in objeto2 ){
mostre6+=key+':'+objeto2[key]+'<br>';
}
document.getElementById('ex25').innerHTML+=` crie um objeto com os dados de seu filme favorito, os dados são o nome, a data de lançamento e se ele ganhou algum oscar.<br><p> ${mostre6}</p>`;
//Questão 28
function res(meunome){
  return "Bom dia "+meunome
}
document.getElementById('ex28').innerHTML+= `crie uma função que receba o seu nome e te retorne "bom dia" mais o seu nome.<br><p> ${res("William")}</p>`;
//Questão 29
function soma2(n1,n2){
  if(isNaN(n1)){
    return "Ta errado teu numero 1"
  }
  if(isNaN(n2)){
    return "Ta errado teu numero 2"
  }
  return n1+n2
}
document.getElementById('ex29').innerHTML+= `crie uma função que receba dois números e mostre o a soma deles, mostre uma mensagem caso seja enviado qualquer coisa diferente de um número.<br><p> ${soma2(1,1)}</p>`;
//Questão 30
function sub(n1,n2){
  if(isNaN(n1)){
    return "Ta errado teu numero 1"
  }
  if(isNaN(n2)){
    return "Ta errado teu numero 2"
  }
  return n1-n2
}
document.getElementById('ex30').innerHTML+= `crie uma função que receba dois números e mostre o a subtração deles, mostre uma mensagem caso seja enviado qualquer coisa diferente de um número.<br><p> ${sub(1,1)}</p>`;
//Questão 31
function mul(n1,n2){
  if(isNaN(n1)){
    return "Ta errado teu numero 1"
  }
  if(isNaN(n2)){
    return "Ta errado teu numero 2"
  }
  return n1*n2
}
document.getElementById('ex31').innerHTML+= `crie uma função que receba dois números e mostre o a multiplicação deles, mostre uma mensagem caso seja enviado qualquer coisa diferente de um número.<br><p> ${mul(1,1)}</p>`;
//Questão 32
function divi(n1,n2){
  if(isNaN(n1)){
    return "Ta errado teu numero 1"
  }
  if(isNaN(n2)){
    return "Ta errado teu numero 2"
  }
  if(n2==0){
    return "nao se divide por 0"
  }
  return n1/n2
}
document.getElementById('ex32').innerHTML+= `crie uma função que receba dois números e mostre o a multiplicação deles, mostre uma mensagem caso seja enviado qualquer coisa diferente de um número.<br><p> ${divi(1,1)}</p>`;
//Questão 33
function maiorNumero(n1,n2){
  if(n1>n2){
    return `O número ${n1} é maior que ${n2}`
  }
  if(n1<n2){
    return `O número ${n2} é maior que ${n1}`
  }
  if(n1==n2){
    return `O número ${n2} é igual a ${n1}`
  }
}
document.getElementById('ex33').innerHTML+= `crie uma função que receba dois números e retorne o maior deles.<br><p> ${maiorNumero(1,1)}</p>`;
//Questão 46
function media(n1,n2,n3){
  
    return (n1+n2+n3)/3
  }

document.getElementById('ex46').innerHTML+= `crie uma função que receba 3 notas de um aluno e retorne sua média.<br><p> ${media(3,10,7)}</p>`;
/* as questões que não fiz foi pq ou não consegui fazer ou pq não tinha tempo pra fazer e entregar no prazo*/