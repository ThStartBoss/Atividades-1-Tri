var nome1 = "joao"
var nome2= "jhon"
var nome3 = "jonathan"

console.log(nome1, nome2, nome3)

var comida1 = "pao"
var comida2 = "peixe"
var comida3 = "pera"
var comida4 = "pamonha"
var comida5 = "pecego" 

console.log(comida1, comida2, comida3, comida4, comida5)

var nome4 = "tiago"
var nome5 = "davi"

var sobrenome1 = "martins"
var sobrenome2 = "rodrigues"

console.log(nome4, sobrenome1)
console.log(nome5, sobrenome2)

isCorrer = true
isVoar = false
isMorrer = false
isDancar = true
isPular = true
isDeitar = false
console.log(isCorrer, isVoar, isMorrer, isDancar, isPular, isDeitar)

var cimento = 12
var coca = 13
var guarana = 14
var fanta = 15
var agua = 16
var kuat = 17
var suco = 18
var juice = 19
console.log(cimento, coca, guarana, fanta, agua, kuat, suco, juice)

const F = 90
const G = 91
const H = 92
const I = 93
const J = 94 

console.log(F, G, H, I, J)

const subtrair = function(x,y){
    let resultado = x - y
    return"Subtração: (" + x +") - ( " + y +") = " + resultado
    
}
console.log(subtrair(70, 30))
console.log(subtrair(60, 40))

const dividir = function(x,y){
    let resultado = x - y
    return"Subtração: (" + x +") / ( " + y +") = " + resultado
}
console.log(dividir(100, 10))
console.log(dividir(25, 5))

const multiplicar = function(x,y){
    let resultado = x - y
    return"Subtração: (" + x +") * ( " + y +") = " + resultado
}
console.log(multiplicar(100, 10))
console.log(multiplicar(10, 5))

----------------------------------------------------------------------------------------------------------

nota = Math.floor(Math.random() * 10) + 1
console.log(nota)

if(nota >= 7) {
    console.log("Aprovado")
} else if(nota >=3){
    console.log("Recuperação")
}
else {
    console.log("Reprovado")
}
---------------------------------------------------------------------------------------------------
a = 2
b = 3

console.log(a == b) //igual
console.log(a != b) //diferente
console.log(a > b) //menor
console.log(a >= b) //menor ou igual
console.log(a < b) //maior
console.log(a <= b) //maior ou igual

numero = 2
letra = '2' 
console.log(numero == letra) //igual
console.log(numero === letra) //diferente

a = 2
b = 3
c = 5
d = 9

console.log(a <= b && c <= d) //"&&" operador de Conjunção, (e)
console.log(a <= b && c >= d)
console.log(a <= b || c >= d) // "||" operador de disjunção, (ou)
--------------------------------------------------------------------------------------------------

let initial = [40, 52, 63, 47, 49];

for(b=0;b<initial.length;b++){

let division = initial[b]/20;

let next = 10**division;

let finish = next * (2 * 10**-5);

let stringC = finish.toString();

stringC = stringC.replace(".", "");

let count = 0;
let counting = true;
let cap = true;

let nOne = "";
let nTwo = "";
let result = "Número muito grande";

for(i=0; i<stringC.length; i++){
  if(finish < 1){
    if(stringC[i] == "0" && counting == true){
      count++;
    } else {
      nOne = stringC[count];
      nTwo = stringC[count + 1];
      counting = false;
    }
    result = `${nOne},${nTwo}.10^-${count}`;
  }
}

console.log(`Altura do som: ${initial[b]}dB\nR: ${result}`);

}
-----------------------------------------------------------------------------
