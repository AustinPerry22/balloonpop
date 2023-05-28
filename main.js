let startButton = document.getElementById("startButton")
let inflateButton = document.getElementById("inflateButton")


// #region GAME LOGIC AND DATA

//DATA
let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxSize = 300
let highestPopCount = 0
let currentPopCount = 0
let gameLength = 5000
let clockId = 0
let timeRemaining = 0
let currentPlayer = {}

function startGame(){

    startButton.setAttribute("disabled", "true")
    inflateButton.removeAttribute("disabled")
    startClock()
    setTimeout(stopGame, gameLength)    
}

function startClock(){
    timeRemaining = gameLength
    drawClock()
    clockId = setInterval(drawClock, 1000)
}

function stopClock(){
    clearInterval(clockId)
}

function drawClock(){
    let countdownElem = document.getElementById("countdown")
    countdownElem.innerText = (timeRemaining/1000).toString()
    timeRemaining -= 1000
}

function inflate(){
    clickCount++
    height += inflationRate
    width += inflationRate

    if(height >= maxSize){
        console.log("pop balloon")
        currentPopCount++
        height = 0
        width = 0
    }
    draw()
}

function draw(){
    let balloonElement = document.getElementById("balloon")
    let clickCOuntElem = document.getElementById("click-count")
    let popCountElem = document.getElementById("pop-count")
    let highPopCountElem = document.getElementById("high-pop-count")
    let playerNameElem = document.getElementById("player-name")
    
    balloonElement.style.height = height 
    balloonElement.style.width = width 
    
    clickCOuntElem.innerText = clickCount 
    popCountElem.innerText = currentPopCount
    highPopCountElem.innerText = currentPlayer.topScore.toString()

    playerNameElem.innerText = currentPlayer.name
}

function stopGame(){
    inflateButton.setAttribute("disabled", "true")
    startButton.removeAttribute("disabled")
        
    clickCount = 0
    height = 120
    width = 100

    if(currentPopCount > currentPlayer.topScore){
        currentPlayer.topScore = currentPopCount
        savePlayers()
    }
    currentPopCount = 0

    stopClock()
    draw()
}

//#endregion

let players = []
loadPlayers()

function setPlayer(event){
    event.preventDefault()
    let form = event.target

    let playerName = form.playerName.value

    currentPlayer = players.find(player => player.name == playerName)

    if(!currentPlayer){
        currentPlayer = {name: playerName, topScore: 0}
        players.push(currentPlayer)
        savePlayers()
    }

    form.reset()
    document.getElementById("game").classList.remove("hidden")
    form.classList.add("hidden")
    draw()
}

function changePlayer(){
    document.getElementById("playerForm").classList.remove("hidden")
    document.getElementById("game").classList.add("hidden")
}
function savePlayers(){
    window.localStorage.setItem("players", JSON.stringify(players))
}

function loadPlayers(){
    let playerData = JSON.parse(window.localStorage.getItem("players"))
    if(playerData){
        players = playerData
    }
}

