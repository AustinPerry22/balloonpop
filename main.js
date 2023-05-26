let startButton = document.getElementById("startButton")
let inflateButton = document.getElementById("inflateButton")

//DATA
let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxSize = 300
let popCount = 0
let gameLength = 5000
let clockId = 0
let timeRemaining = 0

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
        popCount++
        height = 0
        width = 0
    }
    draw()
}

function draw(){
    let balloonElement = document.getElementById("balloon")
    let clickCOuntElem = document.getElementById("click-count")
    let popCountElem = document.getElementById("pop-count")
    
    balloonElement.style.height = height 
    balloonElement.style.width = width 
    
    clickCOuntElem.innerText = clickCount 
    popCountElem.innerText = popCount
}

function stopGame(){
    inflateButton.setAttribute("disabled", "true")
    startButton.removeAttribute("disabled")
        
    clickCount = 0
    height = 120
    width = 100
    stopClock()
    draw()
}