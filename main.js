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
        
    }, 3000)    
}

function inflate(){
    clickCount++
    let balloonElement = document.getElementById("balloon")
    height += inflationRate
    width += inflationRate
    if(height >= maxSize){
        console.log("pop balloon")
        popCount++
        height = 0
        width = 0
        document.getElementById("pop-count").innerText = popCount
    }
    balloonElement.style.height = height 
    balloonElement.style.width = width 


    let clickCOuntElem = document.getElementById("click-count")
    clickCOuntElem.innerText = clickCount 
}

