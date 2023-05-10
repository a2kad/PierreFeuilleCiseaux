let joueur = document.getElementById('joueur')
let ordinateur = document.getElementById('ordinateur')
let verify = document.getElementById('verify')
let play = document.getElementById('play')
let radioButtons = document.querySelectorAll('input[name="btnradio"]')

let myGame = ''
let computerGame = ''

radioButtons.forEach(element => {
    element.addEventListener('click', function(){
        myGame = element.value
        joueur.innerText = element.value
    })
})


// verify.addEventListener('click', function(){
//     // let radioButtonsValue = document.querySelectorAll('input[name="btnradio"]:checked').value
//     // joueur.innerText = radioButtonsValue
//     for(const radioButton in radioButtons){
//         if (radioButton.checked){
//             myGame = radioButton.value
//             joueur.innerText = radioButton.value
//         }
//     }
// })

play.addEventListener('click', function(){
    let randomGame = randomInteger(1,4)
    // ordinateur.innerText = randomGame
    // console.log(randomGame)
    if (randomGame == 1){
        computerGame = 'pierre'
        ordinateur.innerText = randomGame
    }else if(randomGame == 2){
        computerGame = 'feuille'
        ordinateur.innerText = randomGame
    }else if(randomGame == 3){
        computerGame = 'ciseaux'
        ordinateur.innerText = randomGame
    }

})
function randomInteger (min,max){
    return Math.floor(Math.random()*(max-min))+min
}