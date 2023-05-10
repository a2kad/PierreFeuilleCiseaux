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
    let myScore = 0
    let computerScore = 0
})

play.addEventListener('click', function () {
    let randomGame = randomInteger(1, 4)
    if (randomGame == 1) {
        computerGame = 'pierre'
        ordinateur.innerText = computerGame
    } else if (randomGame == 2) {
        computerGame = 'feuille'
        ordinateur.innerText = computerGame
    } else if (randomGame == 3) {
        computerGame = 'ciseaux'
        ordinateur.innerText = computerGame
    }

    if (computerGame == myGame) {
        resultat.innerText = "EGALITE"
    } else if ((myGame == 'pierre' && computerGame == 'ciseaux') || (myGame == 'ciseaux' && computerGame == 'feuille') || (myGame == 'feuille' && computerGame == 'pierre')) {
        resultat.innerText = 'GAGNE'
        myScoreCount++
        myScore.innerText = myScoreCount
        
    } else if ((myGame == 'pierre' && computerGame == 'feuille') || (myGame == 'ciseaux' && computerGame == 'pierre') || (myGame == 'feuille' && computerGame == 'ciseaux')) {
        resultat.innerText = 'PERDU'
        computerScoreCount++
        computerScore.innerText = computerScoreCount
    } else if (myGame == '') {
        resultat.innerText = 'Choisir un élément'
        
    }
})

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
/*                <!--Moi cod --- UDALIT POTOM -->
                <p>My Score :</p>
                <div class="myScore">
0
                </div>
                <p>Computer Score :</p>
                <div class="computerScore">
0
                </div>
                <!--Moi cod --- UDALIT POTOM -->*/