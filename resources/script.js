let countdown = document.getElementById('countdown');
let home = document.getElementById('home');
let q1 = document.getElementById('q1')
let begin = document.getElementById('begin');
let choices = document.getElementsByClassName('choice')

console.dir(choices[0]);

let addChoices = () => {
    for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click',function(){
        console.log('clicked an answer');
        console.log(this.parentElement.parentElement);
        this.parentElement.parentElement.style.transform = 'translate(-105%)';
        this.parentElement.parentElement.nextElementSibling.style.transform = 'translate(0%)';

    })
}
}

addChoices();


begin.addEventListener('click', function(){
    setTime();
    home.style.transform = 'translateX(-105%)'
    q1.style.transform = 'translateX(0%)'
})

let timeLeft = 60;
let setTime = () => {
    let timerInterval = setInterval(function(){
        timeLeft--;
        countdown.textContent = timeLeft
    }, 1000)
}

// setTime()

home.style.transform = 'translateX(0%)'
// q1.style.transform = 'translateX(-100%)'

let startQuiz = () => {
    setTime()
    // console.log(event);
}