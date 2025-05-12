const fundoSombra = document.querySelector(".sombra");
const modalCartas = document.querySelector(".modal-cartas");
const btnVerModal = document.querySelector(".btnVisualizarCartas");
const btnFecharModal = document.querySelector(".btnFechar");
const btnJogar = document.querySelector(".btnJogar");

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
    modalCartas.showModal();
    fundoSombra.style.display = "block";
};

function esconderModalCartas(){
    modalCartas.close();
    fundoSombra.style.display = "none";
};
