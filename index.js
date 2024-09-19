
var insta = document.getElementById("projeto1")
var inicio = document.getElementById("inicio")
var trd = document.getElementById("row")
var pitch3 = document.getElementById("projeto2")
var pitch4 = document.getElementById("projeto3")
var labmeta = document.getElementById("projeto4")
var primavera = document.getElementById("projeto5")
var labgem = document.getElementById("projeto6")
var cards = document.querySelectorAll(".mais")
var texto = document.getElementById("sobremim")
var cards = document.querySelectorAll(".card");

var titulo = document.getElementById("titulo")
var sub = document.getElementById("sub")
var acesse = document.getElementById("acesse")


cards.forEach((card) => {
    card.addEventListener("click", () => {
        trd.style.height = "100vh"
        trd.style.right = "100vw"

        const classes = Array.from(card.classList);

        switch (classes[1]) {
            case "card1":
                titulo.innerText = "InSTAUFPR"
                sub.innerText = "oi"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            case "card2":
                titulo.innerText = "oi"
                sub.innerText = "oi"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            case "card3":
                titulo.innerText = "oi"
                sub.innerText = "oi"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            case "card4":
                titulo.innerText = "oi"
                sub.innerText = "oi"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            case "card5":
                titulo.innerText = "oi"
                sub.innerText = "oi"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            case "card6":
                titulo.innerText = "oi"
                sub.innerText = "oi"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            default:
                console.log('Classe não reconhecida');
                break;
        }

    })
})

inicio.addEventListener("click", () => {
    trd.style.height = "200vh"
    trd.style.right = "0vw"
})


window.addEventListener('scroll', () => {
    const distanciaParaMudar = window.innerHeight * 2.5;

    if (window.scrollY < distanciaParaMudar && window.scrollY < window.innerHeight * 4) {
        texto.innerHTML = "Oi! Sou estudante de <strong>Ciência da Computação na UFPR</strong> e comecei a me aventurar no design e na programação em 2022, quando entrei no curso e no projeto de extenção <strong>Ciência para Todos (CPT)</strong>.";
    } else if (window.scrollY < window.innerHeight * 3.5) {
        texto.innerHTML = "Sou um <strong>Libriano de 22 anos</strong> que ama embelezar projetos e passar tempo com amigos";
    } else {
        texto.innerHTML = "A maioria dos meus projetos foram voltados a eventos entre a <strong>comunidade interna e externa à UFPR</strong>, como você vai ver a seguir :)";
    }
});