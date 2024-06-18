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
   },
   {
    question: "The balance sheet is a financial statement that shows a company's revenues and expenses over a specific period.",
    answer: "false"
   },
   {
    question: "Market segmentation involves dividing a broad target market into subsets of consumers with common needs or characteristics.",
    answer: "true" 
   },
   {
    question: "In a SWOT analysis, 'W' stands for Weaknesses.",
    answer: "true"
   },
   {
    question: "The Four Ps of marketing are Product, Price, Place, and Profit.",
    answer: "false"
   },
   {
    question: "A limited liability company (LLC) combines the taxation benefits of a partnership with the liability protection of a corporation.",
    answer: "true"
   },
   {
    question: "In cost accounting, fixed costs change with the level of production output.",
    answer: "false"
   },
   {
    question: "A company's mission statement defines its long-term goals and strategic direction",
    answer: "true"
   },
   {
    question: "Cash flow from investing activities includes the cash transactions for the purchase and sale of assets.",
    answer: "true"
   },
   {
    question: "The Just-In-Time (JIT) inventory system aims to minimize holding costs by receiving goods only as they are needed in the production process.",
    answer: "true"
   },
   {
    question: "In business ethics, utilitarianism focuses on the actions that are morally right because they benefit the greatest number of people.",
    answer: "true"
   },
   {
    question: "Strategic planning typically focuses on a short-term timeframe of one year or less.",
    answer: "false"
   },
   {
    question: "In finance, the time value of money principle suggests that money available now is worth less than the same amount in the future due to potential earning capacity.",
    answer: "false"
   },
   {
    question: "The current ratio is a liquidity ratio that measures a company's ability to pay short-term obligations.",
    answer: "true"
   },
   {
    question: "A merger occurs when two companies combine to form a new entity, while an acquisition involves one company taking over another.",
    answer: "true"
   },
   {
    question: "Porter's Five Forces analysis includes competitive rivalry, the threat of new entrants, bargaining power of suppliers, bargaining power of buyers, and the threat of substitutes.",
    answer: "true"
   }
];

let userScore = 0;
let questionIndex = 0;
let randomQuestion = Math.floor(Math.random() * questions.length);
const effectMove = document.getElementById("soundEffect");


let nextQuest = document.querySelector('.next');
const scoreBox = document.querySelector(".endBox");
const quizBox = document.querySelector(".main-quiz-holder");
const mScore = document.getElementById("userScore");
const outOfScore = document.getElementById("outOf");
const catImageEnd = document.getElementById("goodluck-cat");
const comments = document.getElementById("comments");
const startQuizHolder = document.querySelector(".startQuiz");
const startQ = document.querySelector(".startQ");
const catHome = document.getElementById("cat-home");

function playE(){
  effectMove.play();
  effectMove.audio = 0.7;
}

startQ.addEventListener('click', () =>{
  playE()
  setTimeout(()=>{
    quizBox.style.display = "block";
    catHome.style.display = "block";
    startQuizHolder.style.display = "none";
  },500);
});


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

  playE();
  userSelected = (pickFalse.classList.contains("userPick")) ? "false" : "true";
  (userSelected == answer)? userScore++ : null;
    
  if(questionIndex >= questions.length - 1){

    if(userScore >= 15){
      comments.innerHTML = "Good job baby <del>shark</del>";
      catImageEnd.src = "img/peach-goma-peach-and-goma.gif";
    }else{
      comments.innerHTML = "Nice try baby <del>shark</del>";
      catImageEnd.src = "img/banana-cat-banana-cat-crying.gif";
    }
    setTimeout(()=>{
      document.getElementsByTagName("article")[0].style.marginTop = "4rem";
      catHome.style.display = "none";
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
