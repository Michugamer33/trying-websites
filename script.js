const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const question = document.getElementById("question")
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")


let score= JSON.parse(localStorage.getItem("score"))

if(!score){
    score => 0
}



const currectAns = num1*num2

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === currectAns){
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

question.innerText = `What is ${num1} multiply by ${num2}?`
scoreEl.innerText = `score: ${score}`

const btnEl = document.querySelector(".btn")


btnEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEl.offsetLeft)
    const y = (event.pageY - btnEl.offsetTop)
    
    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
})

