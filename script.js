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















