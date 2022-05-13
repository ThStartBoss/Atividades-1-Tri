
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Oque significa T.I?",
    alternativaA : "Tecnologia interessante",
    alternativaB : "Tensão Industrial",
    alternativaC : "Tecnologia da Informação",
    correta      : "Tecnologia da Informação",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "A Google e a Microsoft já tentaram contratar o charles?",
    alternativaA : "Sim",
    alternativaB : "Só uma das 2",
    alternativaC : "Não me recordo",
    correta      : "Não me recordo",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "O senhor Paulo, vulgo Battinelas é careca?",
    alternativaA : "Obvio",
    alternativaB : "Não",
    alternativaC : "Meio a Meio",
    correta      : "Obvio",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Quem criou o primeiro Computador",
    alternativaA : "Charles Babbage",
    alternativaB : "Charles Pereira",
    alternativaC : "Willian Bonner",
    correta      : "Charles Babbage",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "América",
    correta      : "América",
}

const q6 = {
    numQuestao   : 5,
    pergunta     : "Quem criou o primeiro e mais extenso aeroporto de mosquito?",
    alternativaA : "Battistella",
    alternativaB : "Santos Dumont",
    alternativaC : "The rock",
    correta      : "Battistella",
}
const q7 = {
    numQuestao   : 5,
    pergunta     : "Portugal se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "América",
    correta      : "Europa",
}
const q8 = {
    numQuestao   : 5,
    pergunta     : "Quem é Neymar Jr?",
    alternativaA : "O humano mais rico da historia",
    alternativaB : "O melhor jogador de CS:GO",
    alternativaC : "O IDOLO",
    correta      : "O IDOLO",
}
const q9 = {
    numQuestao   : 5,
    pergunta     : "A Africa do Sul se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "América",
    correta      : "Africa",
}
const q10 = {
    numQuestao   : 5,
    pergunta     : "Qual o primeiro time que o neymar jogou?",
    alternativaA : "Santos fs",
    alternativaB : "Santos ofc",
    alternativaC : "Santos fc",
    correta      : "Santos fc",
}
const q11 = {
    numQuestao   : 5,
    pergunta     : "Oque significa o verbo to be",
    alternativaA : "Ser",
    alternativaB : "Estar",
    alternativaC : "Ser ou Estar",
    correta      : "Ser ou Estar",
}
const q12 = {
    numQuestao   : 5,
    pergunta     : "Oque é o james webb?",
    alternativaA : "Um Binoculos",
    alternativaB : "Uma base lunar",
    alternativaC : "Um satélite",
    correta      : "Um satélite",
}
const q13 = {
    numQuestao   : 5,
    pergunta     : "Qual o resultado da expressão algebrica x=2+2",
    alternativaA : "x= 6",
    alternativaB : "x= 26",
    alternativaC : "x= 4",
    correta      : "x= 4",
}
const q14 = {
    numQuestao   : 5,
    pergunta     : "Qual o resultado da seguinte expressão: 12/4(2+1)+3!!",
    alternativaA : "721",
    alternativaB : "12",
    alternativaC : "729",
    correta      : "729",
}
const q15 = {
    numQuestao   : 5,
    pergunta     : "Qual o verdadeiro nome do Battinellas",
    alternativaA : "Paulão",
    alternativaB : "Dimitre",
    alternativaC : "Paulo",
    correta      : "Paulo",
}
const q16 = {
    numQuestao   : 5,
    pergunta     : "Quem foi Fallen",
    alternativaA : "Um jogador comum de CS:GO",
    alternativaB : "Um dos melhores jogadores de AWP",
    alternativaC : "Simplesmente o melhor jogador de AWP",
    correta      : "Simplesmente o melhor jogador de AWP",
}
const q17 = {
    numQuestao   : 5,
    pergunta     : "Qual dos jogos a baixo é um MOBA",
    alternativaA : "Valorant",
    alternativaB : "Raibow Six",
    alternativaC : "DOTA",
    correta      : "DOTA",
}
const q18 = {
    numQuestao   : 5,
    pergunta     : "A maior parte da mata amazonica se localiza em qual estado...",
    alternativaA : "RO",
    alternativaB : "AC",
    alternativaC : "AM",
    correta      : "AM",
}
const q19 = {
    numQuestao   : 5,
    pergunta     : "Em que ano aconteceu a abolição da escravidão",
    alternativaA : "1888",
    alternativaB : "1500",
    alternativaC : "1939",
    correta      : "1888",
}
const q20 = {
    numQuestao   : 5,
    pergunta     : "Em que ano e onde aconteceu o maior acidente aéreo da história do Brasil?",
    alternativaA : "Ano 2007, em São Paulo",
    alternativaB : "Ano 2006, no Mato Grosso",
    alternativaC : "Ano 1952, na Floresta Amazônica",
    correta      : "Ano 2007, em São Paulo",
}


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}

