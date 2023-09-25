const questions=[
    {
        question: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
        answers: [
            {text:'4',correct:true},
            {text:'7',correct:false},
            {text:'9',correct:false},
            {text:'13',correct:false}
        ]
    },
    {
        question:"The H.C.F. of two numbers is 23 and the other two factors of their L.C.M. are 13 and 14. The larger of the two numbers is:",
        answers: [
            {text:'276',correct:false},
            {text:'299',correct:false},
            {text:'322',correct:true},
            {text:'345',correct:false}
        ]
    },
    {
        question:"Six bells commence tolling together and toll at intervals of 2, 4, 6, 8 10 and 12 seconds respectively. In 30 minutes, how many times do they toll together ?",
        answers: [
            {text:'4',correct:false},
            {text:'10',correct:false},
            {text:'15',correct:false},
            {text:'16',correct:true}
        ]
    },
    {
        question:'Let N be the greatest number that will divide 1305, 4665 and 6905, leaving the same remainder in each case. Then sum of the digits in N is:',
        answers: [
            {text:'4',correct:true},
            {text:'5',correct:false},
            {text:'6',correct:false},
            {text:'8',correct:false}
        ]
    },
    {
        question:"The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:",
        answers:[
            {text:'9000',correct:false},
            {text:'9400',correct:false},
            {text:'9600',correct:true},
            {text:'9800',correct:false}
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let cqi=0;
let score=0;

function startQuiz()
{
    cqi=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion()
{
    resetState();

    let currentQuestion=questions[cqi];
    let questionNo=cqi+1;
    questionElement.innerHTML=questionNo+'. '+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }

        button.addEventListener("click",selectAnswer);
    });
}

function resetState()
{
    nextButton.style.display='none';
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct=="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"; 
    exit.style.display="block";  
}

function handleNextButton()
{
    cqi++;
    if(cqi<questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(cqi<questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
});

startQuiz(); 