var first = document.getElementById("first")
var trd = document.getElementById("trd")
var frt = document.getElementById("frt")
const fft = document.getElementById('fft');

var second = document.getElementById("second")
var botaoSobre = document.getElementById("sobre")
var botaoProjetos = document.getElementById("projetos")
var botaoContato = document.getElementById("contato")
var voltarSobre = document.getElementById("voltarSobre")
var voltarProjetos = document.getElementById("voltarProjetos")
var voltarProjeto = document.getElementById("voltarProjeto")
var voltarContato = document.getElementById("voltarContato")
var voltar = document.getElementById("inicio")


var insta = document.getElementById("projeto1")
var pitch3 = document.getElementById("projeto2")
var pitch4 = document.getElementById("projeto3")
var labmeta = document.getElementById("projeto4")
var primavera = document.getElementById("projeto5")
var labgem = document.getElementById("projeto6")
var cards = document.querySelectorAll(".mais")

cards.forEach(card => {
    card.addEventListener('click', function() {
        trd.style.display = 'none';
        fft.style.display = 'flex';
    });
});


botaoSobre.addEventListener("click", function(){
    first.style.display="none"
    second.style.display="flex"
})

botaoProjetos.addEventListener("click", function(){
    first.style.display="none"
    trd.style.display="flex"
})

botaoContato.addEventListener("click", function(){
    first.style.display="none"
    frt.style.display="flex"
})

voltarSobre.addEventListener("click", function(){
    first.style.display="flex"
    second.style.display="none"
})
voltarProjetos.addEventListener("click", function(){
    first.style.display="flex"
    trd.style.display="none"
})
voltarProjeto.addEventListener("click", function(){
    trd.style.display="flex"
    fft.style.display="none"
})
voltarContato.addEventListener("click", function(){
    first.style.display="flex"
    frt.style.display="none"
})
inicio.addEventListener("click", function(){
    first.style.display="flex"
    fft.style.display="none"
})

