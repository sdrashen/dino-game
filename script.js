const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false //Essa var trabalha a questão de ele estar pulando ou não, porque quando o botão space era clicado muitas vezes rápido para pular o dino bugava.
    //As linhas de código abaixo fazem o dino pular
function handleKeyUp(event) {
    //O event é enviado para a function sempre que pressionada a tecla pelo navegador
    //keyCode é código das teclas no teclado
    if (event.keyCode === 32) {
        //Aqui insere-se essa negativa, porque se ele não estiver pulando, então é para pular
        if (!isJumping) {
            jump()
        }
    }
}

function jump() {
    let position = 0 //Posição inicial do dinossauro, em baixo.
        //A var upInterval criará uma repetição de intervalos para ações, que aqui é mover o dino para cima.
        //A function setInterval define intervalos. O que estiver descrito nela será executado sem parar no intervalo que foi definido. 20ms nesse caso
    isJumping = true
    let upInterval = setInterval(() => {
        //Esse if é para impedir que ele saia voando
        if (position >= 150) {
            //clearInterval éfunction do JS
            clearInterval(upInterval)

            //Para o dino descer
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval)
                    isJumping = false //Aqui determina que ele não está mais pulando
                } else {
                    position -= 20
                    dino.style.bottom = position + 'px'
                }
            }, 20)
        } else {
            //Sempre que o intervalo repetir ele vai pegar o valor que está na posição e incrementar 20.
            position += 20 //Mesmo que positon = position + 20
            dino.style.bottom = position + 'px'
        }
    }, 20)
}
//Aqui vamos gerar os cactus
function createCactus() {
    //Vamos usar JS para criar novos elementos HTML
    const cactus = document.createElement('div')
        //Aqui determinamos que nosso cactus comece à direita
    let cactusPosition = 1000
    cactus.style.left = 1000 + 'px'
        //Aqui add a classe cactus para no css estizarmos o cactus
    cactus.classList.add('cactus')
        //O método appendChild add um filho. Assim podemos colocar o cactus dentro.
    background.appendChild(cactus)
}
createCactus()
document.addEventListener('keyup', handleKeyUp)