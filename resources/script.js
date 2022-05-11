let countdown = document.getElementById('countdown');
let home = document.getElementById('home');
let q1 = document.getElementById('q1')
let begin = document.getElementById('begin');
let correctAnswer = document.getElementsByClassName('answer');
let incorrectAnswer = document.getElementsByClassName('wrong');
let scoreElement = document.getElementById('score');
let lastElement = document.getElementById('last');
let scoreNum = 0;


home.style.transform = 'translateX(0%)';
scoreElement.textContent = scoreNum;




// console.dir(choices[0]);

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
        // scoreNum += 5;
        // this.parentElement.parentElement.style.transform = 'translate(-105%)';
        // this.parentElement.parentElement.nextElementSibling.style.transform = 'translate(0%)';
        clearInterval(3);
        console.log('last');
        console.log(timeLeft);
        scoreNum+= timeLeft;
        scoreElement.textContent = scoreNum;

    })
}


begin.addEventListener('click', function(){
    setTime();
    home.style.transform = 'translateX(-105%)'
    q1.style.transform = 'translateX(0%)'
})



let timeLeft = 60;
let setTime = () => {
    let timerInterval = setInterval(function(){
        timeLeft--;
        countdown.textContent = timeLeft;
        console.log(timerInterval);
    }, 1000);
    
}
let quizTimer = () => {
    timeLeft--;
    countdown.textContent = timeLeft
}
// let quizInterval = () => setInterval(quizTimer, 1000);


// setTime()


// q1.style.transform = 'translateX(-100%)'

let startQuiz = () => {
    setTime();
    let countdown = setInterval(function(){quizTimer()}, 1000);
    console.log(countdown);
    // console.log(event);
}

addCorrect();
addIncorrect();
addLast();
// clearInterval(quizInterval);