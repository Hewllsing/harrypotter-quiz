const quizData = [
    {
        question: "Quem matou os pais do Harry?",
        a: "Lucios Malfoy",
        b: "Pedro Pettigrew",
        c: "Tom Riddle",
        d: "Vitor Krum",
        correct: "c",
    },
    {
        question: "Quem ajudou Harry na penultima prova do calice do fogo?",
        a: "Neville Longbottom",
        b: "Ron Weasley",
        c: "Albus Dumbledore",
        d: "Rúbeo Hagrid",
        correct: "a",
    },
    {
        question: "Em qual filme Dumbledore morre?",
        a: "A ordem da fenix",
        b: "Enigma do principe",
        c: "Calice de fogo",
        d: "E as reliquias da morte",
        correct: "b",
    },
    {
        question: "Quantos filmes tem do Harry Potter?",
        a: "6",
        b: "8",
        c: "9",
        d: "7",
        correct: "d",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const timer = document.querySelector('.timer');

let currentQuiz = 0
let score = 0

const startTimer = () => {

    setInterval(() => {
      const currentTime = +timer.innerHTML;
      timer.innerHTML = currentTime + 1;
    }, 1000);
  
  }
startTimer()
loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2>Você respondeu ${score}/${quizData.length} questões corretas e seu tempo foi de ${timer.innerHTML} segundos!</h2>

            <button onclick="location.reload()">Tente novamente!</button>
            `
        }
    }
})

