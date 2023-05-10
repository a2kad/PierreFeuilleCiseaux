let verify = document.getElementById('veify')
let play = document.getElementById('play')
const radioButtons = document.querySelectorAll('input[type="checkbox"]')

let myGame = ''
let computerGame = ''

verify.addEventListener('click', function(){
    for(const radioButton in radioButtons){
        if (radioButton.checked){
            myGame = radioButton.value
        }
    }
})

play.addEventListener('click', function(){
    let randomGame = randomInteger(1,3)
    if (randomGame == 1){
        computerGame = 'pierre'
    }else if(randomGame == 2){
        computerGame = 'feuille'
    }else if(randomGame == 3){
        computerGame = 'ciseaux'
    }
    
})
function randomInteger (min,max){
    return Math.floor(Math.random()*(max-min))+min
}