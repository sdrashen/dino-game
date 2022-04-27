const dino = document.querySelector('.dino')
    //As linhas de código abaixo fazem o dino pular
function handleKeyUp(event) {
    //O event é enviado para a function sempre que pressionada a tecla pelo navegador
    //keyCode é código das teclas no teclado
    if (event.keyCode === 32) {
        jump()
    }
}

function jump() {
    let position = 0 //Posição inicial do dinossauro, em baixo.
        //A var upInterval criará uma repetição de intervalos para ações, que aqui é mover o dino para cima.
        //A function setInterval define intervalos. O que estiver descrito nela será executado sem parar no intervalo que foi definido. 20ms nesse caso
    let upInterval = setInterval(() => {
        //Esse if é para impedir que ele saia voando
        if (position >= 150) {
            //clearInterval éfunction do JS
            clearInterval(upInterval)
                //Para o dino descer
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval)
                }
                position -= 20
                dino.style.bottom = position + 'px'
            }, 20)
        } else {
            //Sempre que o intervalo repetir ele vai pegar o valor que está na posição e incrementar 20.
            position += 20 //Mesmo que positon = position + 20
            dino.style.bottom = position + 'px'
        }
    }, 20)
}
document.addEventListener('keyup', handleKeyUp)
    //Keyup: quando a tecla é pressionada, um evento de keydown é gerado. Quando a tecla é liberada, o keyup (subir) acontece.