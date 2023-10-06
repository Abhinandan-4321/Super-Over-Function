const $ball = document.getElementsByClassName('ball')
const $team1score = document.getElementById('score-team1')
const $team1wickets = document.getElementById('wickets-team1')
const $team2score = document.getElementById('score-team2')
const $team2wickets = document.getElementById('wickets-team2')
const resetbutton = document.getElementById('reset')
const strikebutton = document.getElementById('strike')
const strikeaudio = new Audio("https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3")
const cheer = new Audio("https://i1.faceprep.in/prograd-junior/Ball%2BHit%2BCheer.mp3")


var team1score = 0
var team2score = 0
var team1wickets = 0
var team2wickets = 0
var turn = 1
var ballsfaced = 0
const possible_outcomes = [0,1,2,3,4,5,6,"W"]//we use array then we could easily values through their indexes

function finished(){
    if(team1score >team2score) alert("India Wins");
    if(team2score > team1score) alert("Pakistan Wins");
    if(team1score == team2score) alert("It's a draw");
    
}


strikebutton.onclick = () => {
    strikeaudio.play()
    ballsfaced++;
    if (turn === 1) {
        var score = possible_outcomes[Math.floor(Math.random() * possible_outcomes.length)];
        console.log(score);
        console.log(turn)
        if(score === "W"){
            team1wickets++;
            $team1wickets.innerText = team1wickets
            document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML = "W"
        }
        else{
            team1score += score
            $team1score.textContent = team1score
            document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML = score
        }
        if(ballsfaced == 6 || team1wickets == 2){
            turn = 2
            ballsfaced = 0
        }
    }

        else if (turn == 2) {
        var score = possible_outcomes[Math.floor(Math.random() * possible_outcomes.length)];
        console.log(score);
        if(score === "W"){
            team2wickets++;
            $team2wickets.innerText = team2wickets
            document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = "W"
            
        }
        else{
            team2score += score
            $team2score.innerText = team2score
            document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = score
        }
        
        if(ballsfaced == 6 || team2wickets == 2 || team2score > team1score ){
            turn = 3
            finished()
            cheer.play()
        }
}   
}
resetbutton.onclick = () => {
    window.location.reload()
    }