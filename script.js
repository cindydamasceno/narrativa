// TOOLTIPS




// DECLARA VARIÁVEIS DAS IMAGENS

let camada1 = document.getElementById('camada1');
let camada2 = document.getElementById('camada2');
let camada3 = document.getElementById('camada3');
let camada4 = document.getElementById('camada4');
// let camada5 = document.getElementById('camada5');


// INICIA FUNÇÃO INLINE

window.addEventListener('scroll', () => {
    // ESTABELECE UM VALOR PARA A ROLAGEM VERTICAL (Y)
    let posicao = window.scrollY; 

    // ORGANIZA SCROLLYTELLING
    camada1.style.top = posicao * -1.0+ 'px';
    camada2.style.top = posicao * -1.5+ 'px';
    camada3.style.top = posicao * -1.7+ 'px';
    camada4.style.top = posicao * -1.5+ 'px';
});

// DECLARA VARIAVEIS SCROLLAMA

var main = document.querySelector("body");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

// DECLARA VARIAVEIS SCROLLAMA
var main = document.querySelector("body");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

// INICIANDO O SCROLLAMA
var scroller = scrollama();

// EVENTOS SCROLLAMA
function handleStepEnter(response) {
    var el = response.element;
    var paragrafo = el.querySelector('p');

    // REMOVE STEPS
    steps.forEach(step => {
        step.classList.remove('is-active');
        step.querySelector('p').classList.remove('is-active');
    });

    // Adiciona a classe 'is-active' ao step atual e seu parágrafo
    el.classList.add('is-active');
    paragrafo.classList.add('is-active');

    // AQUI MUDA A IMAGEM DA DIREITA BASEADA NO PASSO
    var novaImagem = el.dataset.step;
    var imagemPreguenta = document.querySelector("#imagem-pregada");

    // Verifica se o atributo data-step está presente e muda a imagem
    if (novaImagem) {
        imagemPreguenta.src = novaImagem;
    }
}

// Função de inicialização do scrollama
function inicia() {
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.33,
            debug: false // DESATIVA O DEBUGAR (LINHAS DE REFERENCIA)
        })
        .onStepEnter(handleStepEnter);

    // CONFIGURA O RESIZE
    window.addEventListener("resize", scroller.resize);
}

// INICIALIZA TODO O OBA OBA UHU 10/10
inicia();


// IMPLEMENTAR MUDANÇA

document.querySelector("#botao-tereza").addEventListener('click', function() {
    console.log('Mostrando Teresa'); // SABER SE CLICOU NO BOTÃO
    mostraDiv('tereza');
});

document.querySelector("#botao-luiza").addEventListener('click', function() {
    console.log('Mostrando Luiza'); // SABER SE CLICOU NO BOTÃO
    mostraDiv('luiza');
});

document.querySelector("#botao-mariana").addEventListener('click', function() {
    console.log('Mostrando Mariana'); // SABER SE CLICOU NO BOTÃO
    mostraDiv('mariana');
});

function mostraDiv(personagem) {

    // DEIXA BOTÃO MENOR QUANDO CLICA

    // DEIXA COM OPACITY 1 APENAS A SELECIONADA

    document.getElementById('botao-tereza').style.opacity = 0.5;
    // document.getElementById('botao-tereza').style.width = '120px';
    // document.getElementById('botao-tereza').style.height = '120px';

    document.getElementById('botao-luiza').style.opacity = 0.5;
    // document.getElementById('botao-luiza').style.width = '120px';
    // document.getElementById('botao-luiza').style.height = '120px';

    document.getElementById('botao-mariana').style.opacity = 0.5;
    // document.getElementById('botao-mariana').style.width = '120px';
    // document.getElementById('botao-mariana').style.height = '120px';

    document.getElementById('botao-' + personagem).style.opacity = 1;
    // document.getElementById('botao-' + personagem).style.width = '140px';  
    // document.getElementById('botao-' + personagem).style.height = '140px'

    // ESCONDE DIVS
    document.getElementById('tereza').style.display = 'none';
    document.getElementById('luiza').style.display = 'none';
    document.getElementById('mariana').style.display = 'none';

    // MOSTRA DIV QUE EU QUERO
    document.getElementById(personagem).style.display = 'block'; 
}