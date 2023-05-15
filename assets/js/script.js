let joueur = document.getElementById('joueur')
let ordinateur = document.getElementById('ordinateur')
let play = document.getElementById('play')
let reset = document.getElementById('reset')
let radioButtons = document.querySelectorAll('input[name="btnradio"]')
let resultat = document.getElementById('resultat')
let myScore = document.getElementById('myScore')
let computerScore = document.getElementById('computerScore')

let myGame = ''
let computerGame = ''
let myScoreCount = 0
let computerScoreCount = 0

radioButtons.forEach(element => {
    element.addEventListener('click', function () {
        if (element.value == 1) {
            myGame = 'pierre'
            joueur.innerText = myGame
        } else if (element.value == 2) {
            myGame = 'feuille'
            joueur.innerText = myGame
        } else if (element.value == 3) {
            myGame = 'ciseaux'
            joueur.innerText = myGame
        }
    })
})

reset.addEventListener('click', function () {
    let myGame = ''
    let computerGame = ''
    joueur.innerText = 'Joueur'
    ordinateur.innerText = 'Ordinateur'
    let myScoreCount = 0
    let computerScoreCount = 0
    myScore.innerText = myScoreCount
    computerScore.innerText = computerScoreCount
    resultat.innerText = 'Sélectionnez un élément et appuyez sur play'
})

play.addEventListener('click', function () {
    let randomGame = randomInteger(1, 4)
    if (randomGame == 1) {
        computerGame = 'pierre'
        ordinateur.innerHTML = '<img src="assets/img/stone.png" alt="Stone">'

    } else if (randomGame == 2) {
        computerGame = 'feuille'
        ordinateur.innerHTML = '<img src="assets/img/scissors.png" alt="Scissors">'
    } else if (randomGame == 3) {
        computerGame = 'ciseaux'
        ordinateur.innerHTML = '<img src="assets/img/paper.png" alt="Paper">'
    }

    if (computerGame == myGame) {
        resultat.innerHTML = '<img class="resultatImg" src="assets/img/equal.png" alt="Paper">'
    } else if ((myGame == 'pierre' && computerGame == 'ciseaux') || (myGame == 'ciseaux' && computerGame == 'feuille') || (myGame == 'feuille' && computerGame == 'pierre')) {
        resultat.innerHTML = '<img class="resultatImg" src="assets/img/champion.png" alt="Paper">'
        myScoreCount++
        myScore.innerText = myScoreCount

    } else if ((myGame == 'pierre' && computerGame == 'feuille') || (myGame == 'ciseaux' && computerGame == 'pierre') || (myGame == 'feuille' && computerGame == 'ciseaux')) {
        resultat.innerHTML = '<img class="resultatImg" src="assets/img/dislike.png" alt="Paper">'
        computerScoreCount++
        computerScore.innerText = computerScoreCount
    } else if (myGame == '') {
        resultat.innerText = 'Choisir un élément'

    }
})

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
