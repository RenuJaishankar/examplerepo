console.log("This script works fine!")
let hand1="Rock"
let hand2="Paper"
let hand1Win = () => console.log(`${hand1} beats ${hand2}, Hand 1 wins`)
let hand2Win = () => console.log(`${hand2} beats ${hand2}, Hand 2 wins`)
if(hand1 === hand2){
    console.log(`${hand1} and ${hand2} are the same! It's a draw!`)
} else if (hand1 === "Rock" && hand2 === "Paper") {
    hand1Win()
}
else if (hand1==="Sciccors" && hand2 === "paper"){
    hand1Win()
}
else if (hand1==="paper" && hand2 === "scissors"){
     hand2Win()
}
else if (hand1==="Scissors" && hand2 === "Rock"){
    hand2Win()
}else if (hand1 === "Paper" && hand2 === "Rock") {
    hand1Win()
} else {
    console.log("I didn't understand that.")
}
