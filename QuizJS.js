const questions = [
   {
     question: "Equity financing involves borrowing money that must be repaid with interest.",
     answer: "false"
   },
   {
     question: "The primary goal of for-profit businesses is to maximize shareholder value.",
     answer: "true"
   },
   {
     question: "Corporate social responsibility (CSR) refers to a company's efforts to improve society and the environment beyond its business operations.",
     answer: "true"
   },
   {
     question: "The break-even point is the level of sales at which total revenues equal total costs.",
     answer: "true"
   },
   {
     question: "In a partnership, each partner's liability is limited to the amount they invested in the business.",
     answer: "false"
   }
];

let userScore = 0;
let questionIndex = 0;
let randomQuestion = Math.floor(Math.random() * questions.length);



let nextQuest = document.querySelector('.next');
const scoreBox = document.querySelector(".endBox");
const quizBox = document.querySelector(".main-quiz-holder");
const mScore = document.getElementById("userScore");
const outOfScore = document.getElementById("outOf");

nextQuest.style.display = "none";

function quizStart(){
  let {question} = questions[questionIndex];
  let userPick = document.querySelectorAll('.btn');

  let questionTitle = document.querySelector('.question-title');
  
  questionTitle.textContent = `${questionIndex + 1}. ${question}`; 
  
  userPick.forEach((pick)=>{
    pick.addEventListener('click', ()=>{
      userPick.forEach(p => p.classList.remove("userPick")); 
      pick.classList.add("userPick");
      nextQuest.style.display = "block";
    });
  });
}

nextQuest.addEventListener('click', ()=>{
  let {answer} = questions[questionIndex];
  let [pickTrue, pickFalse] = document.querySelectorAll('.btn');
  let userSelected = "";


  userSelected = (pickFalse.classList.contains("userPick")) ? "false" : "true";
  (userSelected == answer)? userScore++ : null;
    
  if(questionIndex >= questions.length - 1){
    setTimeout(()=>{
      quizBox.style.display = "none";
      scoreBox.style.display = "flex";
      mScore.textContent = userScore;
      outOfScore.textContent = ` /${questions.length}`;
    }, 500);
  }else{
    setTimeout(()=>{

      document.querySelectorAll('.btn').forEach(btn => btn.classList.remove("userPick"));
      questionIndex++;
      quizStart();
      nextQuest.style.display = "none";
    }, 400);
  }
});

quizStart();
