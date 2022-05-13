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
let nameSubmit = '';
let scoreNum = 0;
let didYouWin = '';
let startTimeBoolean = false;
let timeLeft = 60;

// Default score & transform for first card
home.style.transform = 'translateX(0%)';
scoreElement.textContent = scoreNum;

// Scoring elments created by javascript
const enterYourName = document.createElement("input");
const enterYourNameLabel = document.createElement("label");
const submitButton = document.createElement("div");


// Adds styling & attributes to scoring elements
submitButton.setAttribute('class', 'submitter button');
submitButton.setAttribute('id','submitter');
submitButton.innerHTML = '<h4>Submit</h4>'
submitButton.setAttribute('value','post');
enterYourName.setAttribute('name', 'enterName');
enterYourName.setAttribute('id', 'enterName');
enterYourName.setAttribute('maxlength','3');
enterYourNameLabel.setAttribute('for', 'enterName');
enterYourNameLabel.innerHTML = 'Enter your initials:';


// Default Top Scores
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

//Default Top Three
let topThree = [topScore, secondPlace, thirdPlace];
let onload = () => {
    if (! localStorage.getItem('top-three')) {
        localStorage.setItem("top-three", JSON.stringify(topThree));
    } else {
        topScore = JSON.parse(localStorage.getItem('top-three'))[0];
        secondPlace = JSON.parse(localStorage.getItem('top-three'))[1];
        thirdPlace = JSON.parse(localStorage.getItem('top-three'))[2];
}}

// Default JSON to JS for Top Three from storage
let topThreeJs = JSON.parse(localStorage.getItem('top-three'));

// Adds functionality for correct answers
let addCorrect = () => {
    for (let i = 0; i < correctAnswer.length; i++) {
        correctAnswer[i].addEventListener('click',function(){
            scoreNum += 5;
            scoreElement.textContent = scoreNum;
            this.parentElement.parentElement.style.transform = 'translate(-105%)';
            this.parentElement.parentElement.nextElementSibling.style.transform = 'translate(0%)';
        })
    }
}

// Adds functionality for incorrect answers
let addIncorrect = () => {
    for (let i = 0; i < incorrectAnswer.length; i++) {
        incorrectAnswer[i].addEventListener('click',function(){
            this.style.backgroundColor = 'var(--danger)';
            this.style.color = 'var(--bg)'
            timeLeft -= 2;
        })
    }
}

// Adds functionality for correct last quiz question.
let addLast = () => {
    lastElement.addEventListener('click', function() {
        scoreNum+= timeLeft;
        // clearInterval(3);
        // setTime(0);
        startTimeBoolean = false;
        timerFunctionality()
        topRight.style.display = 'none';
        finalScore.textContent = scoreNum;
        let topThreeJs = JSON.parse(localStorage.getItem('top-three'));
        if (scoreNum > topThreeJs[2].score) {
            lastCard.append(enterYourNameLabel);
            lastCard.append(enterYourName);
            lastCard.append(submitButton);
            let submitts = document.getElementById('submitter');
            submitts.addEventListener('click', function() {
                nameSubmit = enterYourName.value.toUpperCase();
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
                    topThree = [topScore, secondPlace, thirdPlace];
                    localStorage.setItem("top-three", JSON.stringify(topThree));
                } else if (scoreNum > topThreeJs[1].score){
                    thirdPlace.score = topThreeJs[1].score;
                    thirdPlace.name = topThreeJs[1].name;
                    secondPlace.score = scoreNum;
                    secondPlace.name = nameSubmit;
                    firstInfo.textContent = topScore.name + " " + topScore.score;
                    secondInfo.textContent = secondPlace.name +" " + secondPlace.score;
                    thirdInfo.textContent = thirdPlace.name + " " + thirdPlace.score;
                    topThree = [topScore, secondPlace, thirdPlace];
                    localStorage.setItem("top-three", JSON.stringify(topThree));
                } else if (scoreNum > topThreeJs[2].score){
                    thirdPlace.score = scoreNum;
                    thirdPlace.name = nameSubmit;
                    firstInfo.textContent = topScore.name + " " + topScore.score;
                    secondInfo.textContent = secondPlace.name +" " + secondPlace.score;
                    thirdInfo.textContent = thirdPlace.name + " " + thirdPlace.score;
                    localStorage.setItem("top-three", JSON.stringify(topThree));
                    }
            })
        } else {
            didYouWinSpan.textContent = 'Better luck next time'
            scoreElement.textContent = scoreNum;
        }
    })
}

// Adds functionality for begin button
begin.addEventListener('click', function(){
    // setTime(60);
    startTimeBoolean = true;
    home.style.transform = 'translateX(-105%)'
    q1.style.transform = 'translateX(0%)'
    timerFunctionality();
})

// Sets & clears the timer interval
let timerFunctionality = () => {
    if (startTimeBoolean == true) {
    // Timer functionality
    // let timeLeft = 0;
    // let setTime = {
        var timerInterval = setInterval(function(){
            countdown.textContent = 'Time left: ' + timeLeft;
            // console.log(timerInterval);
            if(timeLeft <= 0){
                clearInterval(4);
                // timeleft++;
                // clearInterval(3);
            } else timeLeft--;
        }, 1000);
        
    // }
    } else clearInterval(3)
}

// Initializes quiz;
addCorrect();
addIncorrect();
addLast();
onload();

// Adds the scores to the hall of fame
firstInfo.textContent = topScore.name + " " + topScore.score;
secondInfo.textContent = secondPlace.name +" " + secondPlace.score;
thirdInfo.textContent = thirdPlace.name + " " + thirdPlace.score;


