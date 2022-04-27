const dino = document.querySelector('.dino')
    //As linhas de código abaixo fazem o dino pular
function handleKeyUp(event) {
    //O event é enviado para a function sempre que pressionada a tecla pelo navegador
    //keyCode é código das teclas no teclado
    if (event.keyCode === 32) {
        console.log('Pressed space key')
    }
}
document.addEventListener('keyup', handleKeyUp)
    //Keyup: quando a tecla é pressionada, um evento de keydown é gerado. Quando a tecla é liberada, o keyup (subir) acontece.