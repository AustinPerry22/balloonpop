let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxSize = 300
let popCount = 0
let startButton = document.getElementById("startButton")
let inflateButton = document.getElementById("inflateButton")

function startGame(){

    startButton.setAttribute("disabled", "true")
    inflateButton.removeAttribute("disabled")
    setTimeout(()=>{
        inflateButton.setAttribute("disabled", "true")
        startButton.removeAttribute("disabled")
        
        clickCount = 0
        height = 120
        width = 100
        draw()
    }, 3000)    
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
