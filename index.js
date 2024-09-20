
var insta = document.getElementById("projeto1")
var inicio = document.getElementById("inicio")
var trd = document.getElementById("linha")
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
var fft = document.getElementById("fft");
var coluna = document.getElementById("cards");




cards.forEach((card) => {
    card.addEventListener("click", () => {

        trd.style.height = "100vh"
        trd.style.right = "100vw"
        coluna.style.display = "none"

        const classes = Array.from(card.classList);

        switch (classes[1]) {
            case "card1":
                fft.style.background = " var(--azule, linear-gradient(179deg, #3DBFC3 29.73%, rgba(106, 172, 174, 0.81) 89.4%))"
                titulo.innerText = "InSTAUFPR"
                sub.innerHTML = "<p class = 'descricao'>Atualmente trabalho no Insituto de Soluções Aplicadas da UFPR. Sou social media, mas sempre ajudo com site dos professores e eventos que todos do setor de tecnologia da UFPR querem criar. Fiz muitos amigos e conexões aqui, além de ter dado um jeito no site deles!</p>"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            case "card2":
                fft.style.background = " linear-gradient(260deg, #5D009B -72.57%, #350059 -24.61%, #8C00EB 96.8%)"
                titulo.innerText = "oi"
                sub.innerHTML = "<p class = 'descricao'>Atualmente trabalho no Insituto de Soluções Aplicadas da UFPR. Sou social media, mas sempre ajudo com site dos professores e eventos que todos do setor de tecnologia da UFPR querem criar. Fiz muitos amigos e conexões aqui, além de ter dado um jeito no site deles!</p>"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            case "card3":
                fft.style.background = "black";
                titulo.innerText = "oi"
                sub.innerHTML = "<p class = 'descricao'>Atualmente trabalho no Insituto de Soluções Aplicadas da UFPR. Sou social media, mas sempre ajudo com site dos professores e eventos que todos do setor de tecnologia da UFPR querem criar. Fiz muitos amigos e conexões aqui, além de ter dado um jeito no site deles!</p>"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            case "card4":
                fft.style.background = "linear-gradient(225deg, #F6971D 0.58%, #3DBFC3 74.43%)"
                titulo.innerText = "oi"
                sub.innerHTML = "<p class = 'descricao'>Atualmente trabalho no Insituto de Soluções Aplicadas da UFPR. Sou social media, mas sempre ajudo com site dos professores e eventos que todos do setor de tecnologia da UFPR querem criar. Fiz muitos amigos e conexões aqui, além de ter dado um jeito no site deles!</p>"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            case "card5":
                fft.style.background = "var(--roxo, linear-gradient(180deg, #AF61C3 27.83%, #352339 114.35%))"
                titulo.innerText = "oi"
                sub.innerHTML = "<p class = 'descricao'>Atualmente trabalho no Insituto de Soluções Aplicadas da UFPR. Sou social media, mas sempre ajudo com site dos professores e eventos que todos do setor de tecnologia da UFPR querem criar. Fiz muitos amigos e conexões aqui, além de ter dado um jeito no site deles!</p>"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            case "card6":
                fft.style.background = "linear-gradient(158deg, #218CEE 14.41%, #E7F5FF 114.33%)"
                titulo.innerText = "oi"
                sub.innerHTML = "<p class = 'descricao'>Atualmente trabalho no Insituto de Soluções Aplicadas da UFPR. Sou social media, mas sempre ajudo com site dos professores e eventos que todos do setor de tecnologia da UFPR querem criar. Fiz muitos amigos e conexões aqui, além de ter dado um jeito no site deles!</p>"
                acesse.innerHTML = "<a href='google.com'>Acesse</a>"
                break;
            default:
                console.log('Classe não reconhecida');
                break;
        }

    })
})

inicio.addEventListener("click", () => {
    trd.style.height = "auto"
    trd.style.right = "0vw"
    coluna.style.display = "grid"

})


window.addEventListener('scroll', () => {
    const distanciaParaMudar = window.innerHeight * 2.5;

    if (window.scrollY < distanciaParaMudar && window.scrollY < window.innerHeight * 4) {
        texto.innerHTML = "Olá! Sou estudante de <strong>Ciência da Computação na UFPR</strong>. Comecei a me aventurar no <strong>design e programação</strong> em 2022, quando entrei no curso e no projeto de extenção Ciência para Todos (CPT).";
    } else if (window.scrollY < window.innerHeight * 3.5) {
        texto.innerHTML = "Sou um <strong>libriano de 22 anos</strong> que ama organizar e dar um 'tchan' em projetos, mas também ama passar tempo com amigos";
    } else {
        texto.innerHTML = "A maioria dos meus projetos foram voltados a eventos entre a <strong>comunidade interna e externa da UFPR</strong>, como você vai ver a seguir :)";
    }
});