// Récupérer mes 3 blocks div HTML (le header, la div questions et la div result)
let header_screen = document.getElementById("welcomescreen");
let questions_screen = document.getElementById("questionscreen");
// Etablir la fonction Quiz permettant d'ajouter des questions et de voir combien de bonnes réponse le user a
function Quiz(){
    this.questions = [];

    // Ajouts de questions
    this.addQuestion = function(question) {
        this.questions.push(question);
    }

    // Fonction servant à passer à la question suivante s'il y en a une, sinon ça affiche le résultat final 
    this.displayCurrentQuestion = function() {
        if(this.indexCurrentQuestion < this.questions.length) {
            this.questions[this.indexCurrentQuestion].getElement(
                 this.indexCurrentQuestion + 1, this.questions.length
            );
        }
        else {
            questions_screen.style.display = "none";
        }
    }
}


// Fonction Question permettant de créer les questions avec le titre, les réponses et la réponse correcte
function Question(title) {
    this.title = title

    // Mise en place et structuration du HTML et CSS pour mes questions
    this.getElement = function(indexQuestion, nbrOfQuestions) {
        let questionTitle = document.createElement("h3");
        questionTitle.classList.add("title_questions");
        questionTitle.textContent = this.title;

        // Le append sert à afficher le html (il existe le after et le prepend si on veut afficher au-dessus ou en-dessous)
        questions_screen.append(questionTitle);

        let questionAnswer = document.createElement("ul");
        questionAnswer.classList.add("list_questions");

        // Boucle en ForEach pour placer à chaque fois un <li> pour chaque réponse
        this.answers.forEach((answer, index) => {
            let answerElement =  document.createElement("li");
            answerElement.classList.add("answers");
            answerElement.textContent = answer;
            answerElement.id = index + 1;
            answerElement.addEventListener("click", this.checkAnswer)
    
            questionAnswer.append(answerElement);
        });

        // Fonction pour voir à combien de question on est sur le total de questions présents
        let questionNumber = document.createElement("h4");
        questionNumber.classList.add("avancement_question");
        questionNumber.textContent = "Questions : " + indexQuestion + "/" + nbrOfQuestions;

        questions_screen.append(questionNumber);

        questions_screen.append(questionAnswer);
    }

    this.addAnswer = function(answer) {
        this.answers.push(answer);
    },

    // Ici on va checker la réponse correcte avec une écoute d'évènement :
    this.checkAnswer = (e) => { 
        let answerSelect = e.target;
        if (this.isCorrectAnswer(answerSelect.id)) {
            answerSelect.classList.add("answersCorrect");
            quiz.nbrCorrects++;
        } else {
            answerSelect.classList.add("answersWrong");
            let RightAnswers = this.correctAnswers.map(index => document.getElementById(index));
            RightAnswers.forEach(RightAnswer => {
                RightAnswer.classList.add("answersCorrect");
            });
        
        }
    }
};


// On va récupérer notre fonction Quiz pour implémenter ses données dans ses arguments 
// Partie Création des mes données de Questions :
let quiz = new Quiz();

let question1 = new Question("Quelles cartes graphiques n'existent pas ? ");
quiz.addQuestion(question1);

let question2 = new Question("Quand a été crée IBM ? ");
quiz.addQuestion(question2);

let question3 = new Question("Quand a été crée Apple ? ");
quiz.addQuestion(question3);

let question4 = new Question("Combien vaut le samsung s21 128Go Neuf en moyenne ? ");
quiz.addQuestion(question4);

let question5 = new Question("En 1971, qui a fabriqué le premier processeur ? ");
quiz.addQuestion(question5);

let question6 = new Question("Comment stockait-on nos données en 1928 ? ");
quiz.addQuestion(question6);

let question7 = new Question("De quel pays vient Sony ? ");
quiz.addQuestion(question7);

let question8 = new Question("Quand a été inventé le premier modèle d'intelligence artificielle ? ");
quiz.addQuestion(question8);

let question9 = new Question("Quand a été crée le premier robot ? ");
quiz.addQuestion(question9);

let question10 = new Question("Quand a été lancé la première fusée en orbite ? ");
quiz.addQuestion(question10);


// Ici je suis obligé de passer par un querySelectroAll pour avoir accès à la fonction ForEach (car le getElement ne le possède pas)
let NbrQuestion = document.querySelectorAll(".nbrQuestion");

NbrQuestion.forEach(function(NbrQuestion) {
    NbrQuestion.textContent = quiz.questions.length;
});


// Fonction servant à lancer le questionnaire en enlevant la page d'introduction du quiz et en mettant la première question
function startQuestions() {
    header_screen.style.display = "none";
    questions_screen.style.display = "block";

    quiz.displayCurrentQuestion();
}


// Récupérer le bouton dans mon html avec le ElementById car le ElementsByClassName n'a pas le addEventListener)
let btn_start = document.getElementById("btn_start");
btn_start.addEventListener("click", startQuestions);
