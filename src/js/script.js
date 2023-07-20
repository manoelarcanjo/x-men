const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        removerSelecaoPersonagem();

        personagem.classList.add('selecionado');

        alterarImgPersonagemSelecionado(personagem);

        alterarNomePersonagem(personagem);

        alterarDescricaoPersonagem(personagem);

    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricaoPersonagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-descripttion');
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nomePersonagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImgPersonagemSelecionado(personagem) {
    const imgPersonagemGrande = document.querySelector('.personagemGrande');
    const idPersonaegm = personagem.attributes.id.value;
    imgPersonagemGrande.src = `./src/imagens/card-${idPersonaegm}.png`;
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

