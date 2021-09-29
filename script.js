// -- GERALZÃO ---
const main = document.getElementById('main');
const divCounts = document.getElementById('counts');
const msg = document.getElementById('msg');
const movimentos = document.getElementById('movimentos');
const divBase = document.getElementById('base');

// CRIAÇÃO DE TORRES E BLOCOS 
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

// REINICIAR O JOGO 

// MENSAGEM FINAL
const final = () => {
    if (torres[2].childElementCount === 4) {
        mensagemFinal();
        main.style.pointerEvents = 'none';
        clearInterval(conometro);       
    }
}

// CONFIGURAÇÃO DE MENSAGENS (DE ERRO E FINAL)
const mensagemErr = () => {
    msg.innerText = 'TU NÃO PODE! CHORA BEBE';
    msg.style.color = 'red';
    setTimeout(() => {
        msg.innerText = '';
    }, 2000);
}
const mensagemFinal = () => {
    msg.innerHTML = 'Aobahh o miserável é um gênio!';
    msg.style.color = '';
    msg.style.backgroundColor = 'green';
    msg.style.padding = 20 + 'px';
}

//CRONOMETRO DOS SEGUNDOS
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

        showTime(minuto, segundo)
    }, 10)
}

const showTime = (min, seg) => {
    if (seg < 10 && min < 10) {
        timeContent.innerText = `0${min} : 0${seg}`
    }  
    if (seg < 10 && min < 10) {
        timeContent.innerText = `0${min} : 0${seg}`
    }  
    if (seg >= 10 && min < 10) {
        timeContent.innerText = `0${min} : ${seg}`
    }  
    if (seg >= 10 && min >= 10) {
        timeContent.innerText = `${min} : ${seg}`
    }
}



// -- BRUNO --

const main = document.querySelector('.main')
const torre1 = document.createElement('div')
const torre2 = document.createElement('div')
const torre3 = document.createElement('div')

torre1.className = 'torre'
torre2.className = 'torre'
torre3.className = 'torre'
torre1.id = 'torre1'
torre2.id = 'torre2'
torre3.id = 'torre3'

main.appendChild(torre1)
main.appendChild(torre2)
main.appendChild(torre3)

const bloco1 = document.createElement('div')
const bloco2 = document.createElement('div')
const bloco3 = document.createElement('div')
const bloco4 = document.createElement('div')

bloco1.id = 'bloco1'
bloco2.id = 'bloco2'
bloco3.id = 'bloco3'
bloco4.id = 'bloco4'

torre1.appendChild(bloco1)
torre1.appendChild(bloco2)
torre1.appendChild(bloco3)
torre1.appendChild(bloco4)

let controle = true
let elementoClicado = null


function primeiroClick(id){
    let torre = document.getElementById(id)
    if(torre.lastElementChild !== null){
        elementoClicado = torre.lastElementChild
        controle = false
    }
}

function segundoClick(id){
    let torre = document.getElementById(id)
    if(torre.lastElementChild === null){
        torre.appendChild(elementoClicado)
        elementoClicado = torre.lastElementChild
        controle = true
    }else if(torre.lastElementChild.clientWidth > elementoClicado.clientWidth){
        console.log(torre.lastElementChild)
        console.log(elementoClicado)
        torre.appendChild(elementoClicado)
        elementoClicado = torre.lastElementChild
        controle = true
    }
}

function handleClick(id){
    if(controle === true){
        primeiroClick(id)
    }else{
        segundoClick(id)
    }
}

const torres = document.querySelectorAll('.torre')
for(let i = 0; i < torres.length; i ++){
    torres[i].addEventListener('click', function(){
        handleClick(torres[i].id)
    })
}
