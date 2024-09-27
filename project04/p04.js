const random=parseInt(Math.random()*100+1)
const submit=document.querySelector("#subt")
const userinput=document.querySelector("#guessField")
const guess=document.querySelector(".guesses")
 const remaining=document.querySelector("lastResult")

const lowhigh=document.querySelector(".loworhi")
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')

let prevguess=[]
let numberofguess=1

let playgame=true
if(playgame)
{

    submit.addEventListener('click',function(e){

        e.preventDefault()
        const guess=parseInt(userinput.value)
        vlaidateGuess(guess);

    })


}

function vlaidateGuess(guess) //check if the input enter by the user is valid or not
{
if(isNaN(guess))
{
    alert('please enter the valid number')

}
else if(guess < 1)
    alert('please enter the number greater than 1')
else if(guess > 100)
    alert('please enter the number less than 100')
else{
prevguess.push(guess)
if(numberofguess==11){
    displayGuess(guess)
    dispalyMessage(`Game is over...the random number was ${random}')
        endgame()

        
}
        else{
        displayGuess(guess)
       checkGuess(guess)
        }

}

}
function checkGuess(guess) //tells if the guess is greater or smaller than the value 
{
if


}
function dispalyMessage(message)
{


}
function displayGuess(guess)
{


}
function endgame(){


}

