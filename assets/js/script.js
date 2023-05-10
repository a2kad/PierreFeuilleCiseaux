let joueur = document.getElementById('joueur')
let ordinateur = document.getElementById('ordinateur')
let play = document.getElementById('play')
let reset = document.getElementById('reset')
let radioButtons = document.querySelectorAll('input[name="btnradio"]')

let myGame = ''
let computerGame = ''

radioButtons.forEach(element => {
    element.addEventListener('click', function(){
        if (element.value == 1){
            myGame = 'pierre'
            joueur.innerText = myGame
        }else if(element.value == 2){
            myGame = 'feuille'
            joueur.innerText = myGame
        }else if(element.value == 3){
            myGame = 'ciseaux'
            joueur.innerText = myGame
        }
    })
})

reset.addEventListener('click', function(){
    let myGame = ''
    let computerGame = ''
    joueur.innerText = 'Joueur'
    ordinateur.innerText = 'Ordinateur'
})

play.addEventListener('click', function(){
    let randomGame = randomInteger(1,4)
    if (randomGame == 1){
        computerGame = 'pierre'
        ordinateur.innerText = computerGame
    }else if(randomGame == 2){
        computerGame = 'feuille'
        ordinateur.innerText = computerGame
    }else if(randomGame == 3){
        computerGame = 'ciseaux'
        ordinateur.innerText = computerGame
    }

})
function randomInteger (min,max){
    return Math.floor(Math.random()*(max-min))+min
}