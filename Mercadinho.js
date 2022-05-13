let produtos = document.querySelector('#produtos')
let botao = document.querySelector('#comprar')

botao.addEventListener('click', comprar)
function comprar(){
        let compra = "produto comprado\n"
        if(produtos.value == "Hamburguer Simples"){
            compra += "produto: " + produtos.value + ", valor: R$35,00"
        } else if(produtos.value == "Hamburguer Duplo"){
            compra += "produto: " + produtos.value + ", valor: R$45,00"
        } else if(produtos.value == "Hamburguer Duplo com Bacon"){
            compra += "produto: " + produtos.value + ", valor: R$50,00"
        } else if(produtos.value == "Cachorro quente"){
            compra += "produto: " + produtos.value + ", valor: R$25,00"
        } else if(produtos.value == "Cachorro quente Duplo prensado"){
            compra += "produto: " + produtos.value + ", valor: R$35,00"
        } else {
            compra += "produto não selecionado"
        }
        alert(compra)
}
