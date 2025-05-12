const fundoSombra = document.querySelector(".sombra");
const modalCartas = document.querySelector(".modal-cartas");
const cartasElementos = document.querySelectorAll(".cartas");

const btnVerModal = document.querySelector(".btnVisualizarCartas");
const btnFecharModal = document.querySelector(".btnFechar");
const btnJogar = document.querySelector(".btnJogar");

let cartas = [
    {
        id: 1,
        nome: undefined,
        tipo: undefined,
        ataque: 0,
        defesa: 0
    },
    
    {
        id: 2,
        nome: undefined,
        tipo: undefined,
        ataque: 0,
        defesa: 0
    },

    {
        id: 3,
        nome: undefined,
        tipo: undefined,
        ataque: 0,
        defesa: 0
    },

    {
        id: 4,
        nome: undefined,
        tipo: undefined,
        ataque: 0,
        defesa: 0
    },

    {
        id: 5,
        nome: undefined,
        tipo: undefined,
        ataque: 0,
        defesa: 0
    },

    {
        id: 6,
        nome: undefined,
        tipo: undefined,
        ataque: 0,
        defesa: 0
    }

];
console.log(cartas);

btnVerModal.addEventListener("click", ()=>{
    exibirModalCartas();
});

btnFecharModal.addEventListener("click", ()=>{
    esconderModalCartas();
});

btnJogar.addEventListener("click", ()=>{
    alert("Estamos trabalhando nisso. :) !");
    console.error("Página indisponivél 404.")
});

function exibirModalCartas(){
    modalCartas.classList.remove("desativado"); 
    modalCartas.showModal();
    
    modalCartas.classList.add("ativo");
    fundoSombra.classList.add("ativo");
};

function esconderModalCartas(){
    modalCartas.classList.remove("ativo"); 
    modalCartas.classList.add("desativado"); 
    
    setTimeout(() => {
        modalCartas.close(); 
        fundoSombra.classList.remove("ativo");
    }, 300); 
};