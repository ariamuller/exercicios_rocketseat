/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/
const sub = function(receitas,despesas){
    total = receitas - despesas
    return total
}

let objeto = { 
    receitas: [],
    despesas: []
}

objeto.receitas = window.prompt("Digite a receita: ")
objeto.despesas = window.prompt("Digite as despesas: ")
alert("Subtraindo...")

let saldo = sub(objeto.receitas, objeto.despesas)

if(saldo > 0) {
    console.log('seu saldo � '+ saldo +' saldo positivo ' )
}else {
    console.log( 'seu saldo � ' + saldo +' Saldo negativo ')
}
