//BASICAO
const main = document.getElementById('main');
const extaKenzie = document.getElementById('extaKenzie');
const msg = document.getElementById('msg');
const movimentos = document.getElementById('movimentos');
const divBase = document.getElementById('base');

// CONSTRUÇÃO DAS TORRES E BLOCOS
function criarTorres() {
    for (let i = 1; i <= 3; i++) {
        const torre = document.createElement('div');
        torre.classList.add('torre');
        torre.id = 'torre' + i;
        main.appendChild(torre);
    }
}
function criarBlocos() {
    for (let i = 1; i <= 4; i++) {
        const bloco = document.createElement('div');
        bloco.classList.add('bloco');
        bloco.id = 'bloco' + i;
        torre1.appendChild(bloco);
    }
}

// INICIAR O JOGO
let torres;
const btnStart = document.getElementById('btn-start');
const iniciarJogo = () => {
    btnStart.style.display = 'none';
    btnRestart.style.display = 'inline-block';
    extaKenzie.style.visibility = 'visible';
    divBase.style.display = 'block';
    criarTorres();
    criarBlocos();
    movimentos.innerText = `Movimentos: ${count}`;

    torres = document.querySelectorAll('.torre');
    torres.forEach((item) => {
        item.addEventListener("click", escolhaTorre);
    });

    time();
}
btnStart.addEventListener('click', iniciarJogo);


// VALIDAÇÃO
let blocoAtual = '';
let count = 0;

function escolhaTorre(e) {
    const torreEscolhida = e.currentTarget;

    validaJogada(torreEscolhida);
    
}

const validaJogada = (torreEscolhida) => {
    
    if (blocoAtual === '' && torreEscolhida.childElementCount !== 0) {
        blocoAtual = torreEscolhida.firstElementChild;
    } else if (blocoAtual === '' && torreEscolhida.childElementCount === 0) {
        mensagemErr();
    }

     else if (torreEscolhida.childElementCount === 0) {
        torreEscolhida.insertAdjacentElement('afterbegin', blocoAtual);
        count++
        blocoAtual = '';
    } else if (torreEscolhida.firstElementChild.clientWidth > blocoAtual.clientWidth) {
        torreEscolhida.insertAdjacentElement('afterbegin', blocoAtual);
        count++
        blocoAtual = '';
    } else if (torreEscolhida.firstElementChild.clientWidth < blocoAtual.clientWidth) {
        mensagemErr();
        blocoAtual = '';
    }

    movimentos.innerText = `Movimentos: ${count}`;
    final();
}

// RENICIAR O JOGO SEM ATUALIZAR A PAGINA HSHSSH
const btnRestart = document.getElementById('btn-restart');
const reiniciarJogo = () => {
    torres.forEach((item) => {
        item.innerHTML = '';
    });

    msg.innerText = '';
    count = 0;
    movimentos.innerText = `Movimentos: ${count}`;

    criarBlocos();
    clearInterval(conometro);
    time();
    main.style.pointerEvents = 'visible';
    msg.style.padding = 0;
}
btnRestart.addEventListener('click', reiniciarJogo);

// MENSAGEM NO FINAL DO JOGO == CAMPEAO... VENCEDORRR
const final = () => {
    if (torres[2].childElementCount === 4) {
        mensagemFinal();
        main.style.pointerEvents = 'none';
        clearInterval(conometro);       
    }
}
const mensagemFinal = () => {
    msg.innerHTML = 'Aobahh, você conseguiu!';
    msg.style.color = '#fff';
    msg.style.backgroundColor = '#00800092';
    msg.style.padding = 20 + 'px';
}

const timeContent = document.getElementById('time-content');
let conometro;

const time = () => {
    let minuto = 0;
    let segundo = 0;
    let cent = 0;

    conometro = setInterval(() => {
        cent++;
        if (cent === 99) {
            segundo++;
            cent = 0;
            if (segundo === 59) {
                minuto++
                segundo = 0;
            }
        }

        showTime(minuto, segundo, cent)
    }, 10)
}