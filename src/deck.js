const cartasSelecionadas = [];
const cartas = document.querySelectorAll('.cartas');

const cartasArray = document.querySelectorAll(".cartas");
const btnDeck = document.querySelector(".btnDeck");

const btnEsquerda = document.querySelector(".btnEsquerda");
const btnDireita = document.querySelector(".btnDireita");

const cartasElementos = document.querySelectorAll('.cartas');
let indiceInicial = 0;

const cartasInfo = [
    { id: 1, nome: "Pikachu", tipo: "Elétrico", ataque: 55, defesa: 40 },
    { id: 2, nome: "Charmander", tipo: "Fogo", ataque: 52, defesa: 43 },
    { id: 3, nome: "Squirtle", tipo: "Água", ataque: 48, defesa: 65 },
    { id: 4, nome: "Bulbasaur", tipo: "Planta", ataque: 49, defesa: 49 },
    { id: 5, nome: "Jigglypuff", tipo: "Normal", ataque: 45, defesa: 20 },
    { id: 6, nome: "Gengar", tipo: "Fantasma", ataque: 65, defesa: 60 }
];

cartasElementos.forEach(carta => {
    carta.addEventListener("click", () => {
        const idCarta = parseInt(carta.id);
        const cartaSelecionada = cartasInfo.find(c => c.id === idCarta); 

        if (cartasSelecionadas.some(c => c.id === idCarta)) {
            cartasSelecionadas.splice(cartasSelecionadas.findIndex(c => c.id === idCarta), 1);
            carta.classList.remove("selecionada");
        } else {
            if (cartasSelecionadas.length < 5) {
                cartasSelecionadas.push(cartaSelecionada);
                carta.classList.add("selecionada");
            } else {
                alert("Você só pode selecionar até 5 cartas!");
            }
        }

        console.log("Cartas selecionadas:", cartasSelecionadas);
    });
});

function atualizarCarrossel() {
    cartasArray.forEach((carta, index) => {
        if (index >= indiceInicial && index < indiceInicial + 3) {
            carta.style.display = "block"; 
        } else {
            carta.style.display = "none"; 
        }
    });
}

atualizarCarrossel();

btnDireita.addEventListener("click", () => {
    if (indiceInicial + 3 < cartasArray.length) {
        indiceInicial++; 
        atualizarCarrossel();
    }
});

btnEsquerda.addEventListener("click", () => {
    if (indiceInicial > 0) {
        indiceInicial--;
        atualizarCarrossel();
    }
});

btnDeck.addEventListener("click", () => {
    if (cartasSelecionadas.length === 5) {
        localStorage.setItem("deckSelecionado", JSON.stringify(cartasSelecionadas));
        alert("Deck salvo com sucesso!");
    } else {
        alert("Você precisa selecionar exatamente 5 cartas para salvar o deck!");
    }
});