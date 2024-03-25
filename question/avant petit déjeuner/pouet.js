let ScreenQuestion = document.getElementById("questionscreen");
let screenwelcome = document.getElementById("welcomescreen");
let screenEnd = document.getElementById("screenEnd")
screenEnd.style.display = "none"
let ScreenRondPoint = document.getElementById("RondpointScreen");
ScreenRondPoint.style.display = "none"
let chemin1btn = document.getElementById(`Chemin 1`)
let chemin2btn = document.getElementById(`Chemin 2`)
let welcomebtn = document.getElementById(`welcome_btn`);
welcomebtn.addEventListener("click", ZE);

function ZE() {
    ScreenRondPoint.style.display ="block"
    screenwelcome.style.display = "none"
    chemin1btn.addEventListener("click",seeFirstQuestion1)
    chemin2btn.addEventListener("click",seeFirstQuestion2)
}

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
let question1 = new Question(`1De quoi est-il composé ?`, ["interessant", "à refaire", "barbant"],3);
quiz.addQuestion(question1);
let question2 = new Question(`2Vous rassasie-t-il jusqu’au repas du midi? 
`, ["oui", "non"],2);
quiz.addQuestion(question2);
let question3 = new Question(`3Est-il équilibré ?`, ["bon", "trop salé", "je n'ai pas mangé"],2);
quiz.addQuestion(question3);
let question4 = new Question(`4Pratiquez vous une/des activité(s) sportive(s) ?(Dans ce cas un petit-déjeuner est fortement conseillé)
`, ["l'idéé de l'evenement", "nourriture"," boisson", "les affiches"],2);
quiz.addQuestion(question4);
let question5 = new Question(`5Changez-vous vos habitudes le matin ?`, ["l'idéé de l'evenement", "nourriture"," boisson", "les affiches"],2);
quiz.addQuestion(question5);
let question6 = new Question(`6Selon vous, quel est le repas le plus équilibré de la journée ?`, ["oui","moyen", "non"],2);
quiz.addQuestion(question6);

let question7 = new Question(`-Prenez-vous habituellement un goûter à la pause du matin de 9h40 à 9h50 ?`,["23","24"],2);
quiz.addQuestion(question7);




// Add more questions as needed Qu’avez-vous le moins aimé ? 


function seeFirstQuestion1() {
    ScreenQuestion.style.display = "block";
    screenwelcome.style.display = "none";
    ScreenRondPoint.style.display = "none";

    quiz.showQuestion();
}





function quizz2() {
    this.question2 = [];
    this.indexCurrentQuestion2 = 0;

    this.addQuestion2 = function(question2) {
        this.question2.push(question2);
    }

    this.showQuestion2 = function() {

        if(this.indexCurrentQuestion2 < this.question.length) {
        this.question[this.indexCurrentQuestion2].showCurrentQuestion2(
            this.indexCurrentQuestion+1,this.question.length
        );
        }
        else {
            ScreenQuestion.classList.add('hidden');
            screenEnd.style.display = "block";
        }
    }
}
    
function Question2(title, answers,answerCorrect) {
    this.title = title;
    this.answers = answers;
    this.answerCorrect = answerCorrect;

    this.showCurrentQuestion2 = function(indexQuestion2) {
        let questionNumber2 = document.createElement('h2');
        questionNumber2.classList.add("quiz_subtitle");
        questionNumber2.textContent = " Question " + indexQuestion2 + "/" + "11";
        ScreenQuestion.append(questionNumber2);

        let questionTitle2 = document.createElement("h3");
        questionTitle2.textContent = this.title;
        ScreenQuestion.append(questionTitle2);

        let questionAnswer2 = document.createElement("ul");
        questionAnswer2.classList.add("question_answer")

        this.answers.forEach(function(answer,index) {
            let elAnswer2 = document.createElement("li");
            elAnswer2.classList.add("answer");
            elAnswer2.textContent = answer;
            elAnswer2.id = index+1;
            questionAnswer.append(elAnswer2);
            elAnswer2.addEventListener("click",this.cheakAnswer)
        });

        ScreenQuestion.append(questionAnswer);
    }
}

this.addAnswer2 = function(answer) {
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
        quiz2.indexCurrentQuestion++;
        quiz2.showQuestion();
    },1000);

}

this.isCorrectAnswer2 = function(answerUser) {
    if(answerUser == this.answerCorrect) {
        return true;
    }
    else {
        return false;
    }
}

let quiz2 = new quizz();
// Differente Question
let question12 = new Question2(`CONNARD d'avoir organisé un petit déjeuner ?`, ["interessant", "à refaire", "barbant"],3);
quiz2.addQuestion(question1);
let question22 = new Question2(`-Avez-vous pris un petit-déjeuner ce matin ?`, ["oui", "non"],2);
quiz2.addQuestion(question2);
let question32 = new Question2(`Comment avez-vous trouvé ce petit-déjeuner ?`, ["bon", "trop salé", "je n'ai pas mangé"],2);
quiz2.addQuestion(question3);
let question42 = new Question2(`Qu’avez-vous le plus aimé ?`, ["l'idéé de l'evenement", "nourriture"," boisson", "les affiches"],2);
quiz2.addQuestion(question4);
let question62 = new Question2(`Qu’avez-vous le moins aimé ?`, ["l'idéé de l'evenement", "nourriture"," boisson", "les affiches"],2);
quiz2.addQuestion(question6);
let question72 = new Question2(`-Vous a-t-il rassasié ?`, ["oui","moyen", "non"],2);
quiz2.addQuestion(question7);




// Add more questions as needed Qu’avez-vous le moins aimé ? 


function seeFirstQuestion2() {
    ScreenQuestion.style.display = "block";
    screenwelcome.style.display = "none";
    ScreenRondPoint.style.display ="none";

    quiz.showQuestion();
}