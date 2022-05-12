// Selecting items in HTML
let countdown = document.getElementById('countdown');
let home = document.getElementById('home');
let q1 = document.getElementById('q1')
let begin = document.getElementById('begin');
let correctAnswer = document.getElementsByClassName('answer');
let incorrectAnswer = document.getElementsByClassName('wrong');
let scoreElement = document.getElementById('score');
let lastElement = document.getElementById('last');
let topRight = document.querySelector('.timer');
let finalScore = document.getElementById('finalScore');
let lastCard = document.getElementById('highScore');
let didYouWinSpan = document.getElementById('didYouWin');
let firstInfo = document.getElementById('firstInfo');
let secondInfo = document.getElementById('secondInfo');
let thirdInfo = document.getElementById('thirdInfo');
let nameSubmit = ''







const enterYourName = document.createElement("input");
const enterYourNameLabel = document.createElement("label");
const submitButton = document.createElement("div");

submitButton.setAttribute('class', 'submitter');
submitButton.setAttribute('id','submitter');
submitButton.innerHTML = '<h4>Submit</h4>'
submitButton.setAttribute('value','post');
enterYourName.setAttribute('name', 'enterName')
enterYourName.setAttribute('id', 'enterName');
enterYourNameLabel.setAttribute('for', 'enterName');
enterYourNameLabel.innerHTML = 'Enter your initials:';

lastCard.append(enterYourNameLabel);
lastCard.append(enterYourName);
lastCard.append(submitButton);




 // Initializes variables
let scoreNum = 0;
let didYouWin = ''

// Sets local storage;
var highScore = localStorage.getItem("highScore");
localStorage.setItem("highScore", scoreNum);



let topScore = {
    position: 1,
    score: 40,
    name: 'ABC'
}

let secondPlace = {
    position: 2,
    score: 34,
    name: 'XYZ'
}

let thirdPlace = {
    position: 3,
    score: 30,
    name: 'TOM'
}

let topThree = [topScore, secondPlace, thirdPlace];

localStorage.setItem("top-three", JSON.stringify(topThree));
let topThreeJs = JSON.parse(localStorage.getItem('top-three'));


home.style.transform = 'translateX(0%)';
scoreElement.textContent = scoreNum;




let addCorrect = () => {
    for (let i = 0; i < correctAnswer.length; i++) {
    correctAnswer[i].addEventListener('click',function(){
        console.log('clicked an answer');
        console.log(this.parentElement.parentElement);
        scoreNum += 5;
        scoreElement.textContent = scoreNum;
        console.log(scoreNum)
        this.parentElement.parentElement.style.transform = 'translate(-105%)';
        this.parentElement.parentElement.nextElementSibling.style.transform = 'translate(0%)';
    })
}
}
let addIncorrect = () => {
    for (let i = 0; i < incorrectAnswer.length; i++) {
    incorrectAnswer[i].addEventListener('click',function(){
        console.log('clicked an answer');
        console.log(this.parentElement.parentElement);
        this.style.backgroundColor = 'red';
        timeLeft -= 2;
        // clearInterval(quizInterval);

    })
}
}

let addLast = () => {
    lastElement.addEventListener('click', function() {
        scoreNum+= timeLeft;
        clearInterval(3);
        setTime(0);
       topRight.style.display = 'none';
       finalScore.textContent = scoreNum;
       localStorage.setItem("highScore", scoreNum);

       if (scoreNum > topThreeJs[2].score) {
           if (scoreNum > topThreeJs[1].score){
               if (scoreNum > topThreeJs[1].score){
                   console.log('first place')
               }
               console.log('second place')
           }
           console.log('yep');
       } else didYouWinSpan.textContent = 'Better luck next time'
        // scoreNum += 5;
        // this.parentElement.parentElement.style.transform = 'translate(-105%)';
        // this.parentElement.parentElement.nextElementSibling.style.transform = 'translate(0%)';
        // clearInterval(3);
        
        // countdown.textContent= 'Game ended'
        scoreElement.textContent = scoreNum;

    })
}


begin.addEventListener('click', function(){
    setTime(60);
    home.style.transform = 'translateX(-105%)'
    q1.style.transform = 'translateX(0%)'
})



let timeLeft = 0;
let setTime = (starting) => {
    timeLeft= starting
    var timerInterval = setInterval(function(){
        
        countdown.textContent = 'Time left: ' + timeLeft;
        console.log(timerInterval);

        if(timeLeft <= 0){
            clearInterval(4);
            console.log('time ran out');
            // timeleft++;
            // clearInterval(3);
        } else timeLeft--;
    }, 1000);
    
}
let quizTimer = () => {
    timeLeft--;
    countdown.textContent = timeLeft
}
// let quizInterval = () => setInterval(quizTimer, 1000);


// setTime()


// q1.style.transform = 'translateX(-100%)'

// let startQuiz = () => {
//     setTime(60);
//     let countdown = setInterval(function(){quizTimer()}, 1000);
//     console.log(countdown);
//     // console.log(event);
// }

addCorrect();
addIncorrect();
addLast();

firstInfo.textContent = topScore.name + " " + topScore.score;
secondInfo.textContent = secondPlace.name +" " + secondPlace.score;
thirdInfo.textContent = thirdPlace.name + " " + thirdPlace.score;

// clearInterval(quizInterval);
let submitts = document.getElementById('submitter');
let nameInput = document.getElementById('enterName');
submitts.addEventListener('click', function() {
    nameSubmit = enterYourName.value;
    console.log(nameSubmit);
    console.log(topThreeJs)
    if (scoreNum > topThreeJs[0].score){
           thirdPlace.score = topThreeJs[1].score;
           thirdPlace.name = topThreeJs[1].name;
           secondPlace.score = topThreeJs[0].score;
           secondPlace.name = topThreeJs[0].name;
           topScore.score = scoreNum;
           topScore.name = nameSubmit;
           firstInfo.textContent = topScore.name + " " + topScore.score;
secondInfo.textContent = secondPlace.name +" " + secondPlace.score;
thirdInfo.textContent = thirdPlace.name + " " + thirdPlace.score;
localStorage.setItem("top-three", JSON.stringify(topThree));
       }
    }
)