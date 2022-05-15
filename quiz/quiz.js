const quiz = document.getElementById("quiz");
const lis = document.getElementsByTagName("li");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a
    ? currentQuizData.a
    : (lis[0].style.display = "none");
  b_text.innerText = currentQuizData.b
    ? currentQuizData.b
    : (lis[1].style.display = "none");
  c_text.innerText = currentQuizData.c
    ? currentQuizData.c
    : (lis[2].style.display = "none");
  d_text.innerText = currentQuizData.d
    ? currentQuizData.d
    : (lis[3].style.display = "none");
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
  for (let li of lis) {
    li.style.display = "block";
  }
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `;
    }
  }
});
