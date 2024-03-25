let ScreenQuestion = document.getElementById("questionscreen");
let screenwelcome = document.getElementById("welcomescreen");
let screenEnd = document.getElementById("screenEnd")
screenEnd.style.display = "none"

let welcomebtn = document.getElementById(`welcome_btn`);
welcomebtn.addEventListener("click", seeFirstQuestion);

function quizz() {
    this.question = [];
    this.indexCurrentQuestion = 0;

    this.addQuestion = function(question) {
        this.question.push(question);
    }

    this.showQuestion = function() {

        if(this.indexCurrentQuestion < this.question.length) {
        this.question[this.indexCurrentQuestion].showCurrentQuestion(
            this.indexCurrentQuestion+1,this.question.length
        );
        }
        else {
            ScreenQuestion.classList.add('hidden');
            screenEnd.style.display = "block";
        }
    }
}
    
function Question(title, answers,answerCorrect) {
    this.title = title;
    this.answers = answers;
    this.answerCorrect = answerCorrect;

    this.showCurrentQuestion = function(indexQuestion) {
        let questionNumber = document.createElement('h2');
        questionNumber.classList.add("quiz_subtitle");
        questionNumber.textContent = " Question " + indexQuestion + "/" + "11";
        ScreenQuestion.append(questionNumber);

        let questionTitle = document.createElement("h3");
        questionTitle.textContent = this.title;
        ScreenQuestion.append(questionTitle);

        let questionAnswer = document.createElement("ul");
        questionAnswer.classList.add("question_answer")

        this.answers.forEach(function(answer,index) {
            let elAnswer = document.createElement("li");
            elAnswer.classList.add("answer");
            elAnswer.textContent = answer;
            elAnswer.id = index+1;
            questionAnswer.append(elAnswer);
            elAnswer.addEventListener("click",this.cheakAnswer)
        });

        ScreenQuestion.append(questionAnswer);
    }
}

this.addAnswer = function(answer) {
    this.answer.push(answer);
}
// Fonction pour faire apparaitre les effets au clics de l'utilisateur 
this.cheakAnswer = (event) => {
    console.log(event.target);
    let answerSelected = event.target;
    console.log(this.answerCorrect);

    if(this.isCorrectAnswer(answerSelected.id)) {
        answerSelected.classList.add('answer--correct');
    }
    else {
        answerSelected.classList.add('answer--correct');
    };

    //Fonction pour passez à la question prochaine
    setTimeout (function() {
        ScreenQuestion.textContent ='';
        quiz.indexCurrentQuestion++;
        quiz.showQuestion();
    },1000);

}

this.isCorrectAnswer = function(answerUser) {
    if(answerUser == this.answerCorrect) {
        return true;
    }
    else {
        return false;
    }
}

let quiz = new quizz();
// Differente Question
let question1 = new Question(`Comment trouvez-vous l'idée d'avoir organisé un petit déjeuner ?`, ["interessant", "à refaire", "barbant"],3);
quiz.addQuestion(question1);
let question2 = new Question(`-Avez-vous pris un petit-déjeuner ce matin ?`, ["oui", "non"],2);
quiz.addQuestion(question2);
let question3 = new Question(`Comment avez-vous trouvé ce petit-déjeuner ?`, ["bon", "trop salé", "je n'ai pas mangé"],2);
quiz.addQuestion(question3);
let question4 = new Question(`Qu’avez-vous le plus aimé ?`, ["l'idéé de l'evenement", "nourriture"," boisson", "les affiches"],2);
quiz.addQuestion(question4);
let question6 = new Question(`Qu’avez-vous le moins aimé ?`, ["l'idéé de l'evenement", "nourriture"," boisson", "les affiches"],2);
quiz.addQuestion(question6);
let question7 = new Question(`-Vous a-t-il rassasié ?`, ["oui","moyen", "non"],2);
quiz.addQuestion(question7);

let question8 = new Question(`Si vous n’aviez pas d’idée, vous a-t-il inspiré pour préparer un petit-déjeuner chez vous ?`, ["il m'a donné des idées","il ne m'a pas donné d'idées"],2);
quiz.addQuestion(question8);

let question9 = new Question(`-Qu’aimeriez-vous garder pour un prochain petit-déjeuner ?
?`, ["le geste d'offrir", "le manger", "les affiches"],2);
quiz.addQuestion(question9);

let question10 = new Question(`Qu’aimeriez-vous garder pour un prochain petit-déjeuner ?
`, ["pouet","le manger","les affiches"],2);
quiz.addQuestion(question10);
let question11 = new Question(`Qu’avez-vous le moins aimé ?`, ["le geste d'offrir", "le manger", "les affiches"],2);
quiz.addQuestion(question11);




// Add more questions as needed Qu’avez-vous le moins aimé ? 


function seeFirstQuestion() {
    ScreenQuestion.style.display = "block";
    screenwelcome.style.display = "none";

    quiz.showQuestion();
}


