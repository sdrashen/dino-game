const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false //Essa var trabalha a questão de ele estar pulando ou não, porque quando o botão space era clicado muitas vezes rápido para pular o dino bugava.
let position = 0 //Posição inicial do dinossauro, em baixo.
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
        //A function math.random gera números aleatórios entre 0 e 1. Essa será aleatoridade com será criado um novo cactus na tela.
    let randomTime = Math.random() * 6000
        //Aqui add a classe cactus para no css estilizarmos o cactus
    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
        //O método appendChild add um filho. Assim podemos colocar o cactus dentro.
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
            if (cactusPosition < -60) {
                clearInterval(leftInterval)
                background.removeChild(cactus) //Impede o cactus de ir embora para o infinito
                    //cactusPosition > 0 indica que ele não saiu da tela, caso contrário seria cactusPosition < 0.
            } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
                //O dino tem a largura de 60px, então se cactusPosition > 0 && < 60 quer dizer que ele está ocupando o espaço do dino
                // position < 60 detecta o pulo do dino. Se o cactus estiver no começinho da tela, maior do que 0 à esquerda. menor do que 60 (espaço do dino) e a posição do pulo do dino não está mairo do que o cactus, aí temos uma colisão, game over.
                //game over:
                clearInterval(leftInterval)
                document.body.innerHTML = '<h1 class="gameOver">Game Over</h1>'
            } else {
                cactusPosition -= 10 //Velocidade que ele vai se mover para a esquerda
                cactus.style.left = cactusPosition + 'px'
            }
        }, 20)
        //SetTimeout serve para que uma function seja executada depois de um determinado tempo
        //Aqui a function invoca ela mesma de dentro dela. Isso é chamado RECURSIVIDADE. É como se fosse um espelho de frente para o outro
    setTimeout(createCactus, randomTime)
}
createCactus()
document.addEventListener('keyup', handleKeyUp)