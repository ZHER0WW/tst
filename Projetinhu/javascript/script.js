//Seletores:

const personagem = document.querySelector('.perso-1');
const monstro = document.querySelector('.monster-1');
const jogo = document.querySelector('.game-skel');
const opcoes = document.querySelector('.menu');

//Loop de verificação do jogo, tipo um tick do mine:

    const loop = setInterval(function() {

        const monsterposition = monstro.offsetLeft;
        const personagemheight = Number(window.getComputedStyle(personagem).bottom.replace('px', ''));

        if (monsterposition <= 83 && monsterposition > 0 && personagemheight < 80  ) {
 
            monstro.style.animation = 'none';
            monstro.style.left = `${monsterposition}px`
            
            personagem.style.animation = 'none';
            personagem.style.bottom = `${personagemheight}px`;

            clearInterval(loop);
        }
    })

//Controle de pulo com a tecla espaço:

let isJumping = false;

function jump() {
    if (isJumping) {
        return;
    }

    isJumping = true;
    personagem.classList.add('jump');
    personagem.src = "arquivos/nikita-yakovlev-static.png";

    setTimeout(function() {
        personagem.classList.remove('jump');
        isJumping = false;
    }, 500); // Tempo de duração da animação (500ms)

    setTimeout(function() {
        personagem.src = "arquivos/nikita-yakovlev-char-run-export.gif";
    }, 200);
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        jump();
    }
});

//Menu de pausa do game:

let isMenu = false;

function menu() {

    if (isMenu) {

        isMenu = false;
        opcoes.classList.remove('menu-animation');
        opcoes.classList.add('exit-menu-animation');
        location.reload();
    }
     else {

        isMenu = true;
        opcoes.classList.add('menu-animation');
        opcoes.classList.remove('exit-menu-animation');
    }
  }
