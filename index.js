// for (i=0; i<5; i++){
//     document.querySelectorAll(".box")[i].addEventListener("click", randomColor)
// }


//firstColor
document.querySelector("#h").addEventListener("click", randomFirstColor)
function randomFirstColor(){
    const r= Math.floor(Math.random()*256)
    const g= Math.floor(Math.random()*256)
    const b= Math.floor(Math.random()*256)
    const newFirstColor= `rgb(${r}, ${g}, ${b})`
    document.getElementById("h").style.backgroundColor=newFirstColor
    document.getElementById("h").innerText=newFirstColor
}

//SecondColor
document.querySelector("#e").addEventListener("click", randomSecondColor)
function randomSecondColor(){
    const r= Math.floor(Math.random()*256)
    const g= Math.floor(Math.random()*256)
    const b= Math.floor(Math.random()*256)
    const newSecondColor= `rgb(${r}, ${g}, ${b})`
    document.getElementById("e").style.backgroundColor=newSecondColor
    document.getElementById("e").innerText=newSecondColor
}

//ThirdColor
document.querySelector("#l").addEventListener("click", randomThirdColor)
function randomThirdColor(){
    const r= Math.floor(Math.random()*256)
    const g= Math.floor(Math.random()*256)
    const b= Math.floor(Math.random()*256)
    const newThirdColor= `rgb(${r}, ${g}, ${b})`
    document.getElementById("l").style.backgroundColor=newThirdColor
    document.getElementById("l").innerText=newThirdColor
}

//FourthColor
document.querySelector("#l2").addEventListener("click", randomFourthColor)
function randomFourthColor(){
    const r= Math.floor(Math.random()*256)
    const g= Math.floor(Math.random()*256)
    const b= Math.floor(Math.random()*256)
    const newFourthColor= `rgb(${r}, ${g}, ${b})`
    document.getElementById("l2").style.backgroundColor=newFourthColor
    document.getElementById("l2").innerText=newFourthColor
}

//FifthColor
document.querySelector("#o").addEventListener("click", randomFifthColor)
function randomFifthColor(){
    const r= Math.floor(Math.random()*256)
    const g= Math.floor(Math.random()*256)
    const b= Math.floor(Math.random()*256)
    const newFifthColor= `rgb(${r}, ${g}, ${b})`
    document.getElementById("o").style.backgroundColor=newFifthColor
    document.getElementById("o").innerText=newFifthColor
}