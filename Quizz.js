window.onload = function() {
    let currentQuestion = 1;

    // Appel de la fonction startQuiz au chargement de la page
    startQuiz();

    function startQuiz() {
        // Afficher uniquement le bouton de démarrage au début
        document.getElementById('start-container').style.display = 'block';
        document.getElementById('question-container').style.display = 'none';
    }

    function nextQuestion(response) {
        if (currentQuestion === 1) {
            handleQuestion1(response);
        } else if (currentQuestion === 2) {
            handleQuestion2(response);
        } else if (currentQuestion === 3) {
            showResult(response);
            return;
        }

        currentQuestion++;
        displayQuestion();
    }

    function handleQuestion1(response) {
        if (response === 'oui') {
            // Si la réponse est "oui", passe à la question suivante sur ce sujet
            displayQuestion("petit_dejeuner");
        } else if (response === 'non') {
            // Si la réponse est "non", passe à la question sur la raison
            displayQuestion("raison_petit_dejeuner");
        }
    }

    function handleQuestion2(response) {
        if (currentQuestion === 2 && response === 'oui') {
            // Si la réponse est "oui", demande "Que mangez-vous ?"
            displayQuestion("que_manger");
        } else if (currentQuestion === 2 && response === 'non') {
            // Si la réponse est "non", demande "Pour quelle raison ?"
            displayQuestion("raison_sans_petit_dejeuner");
        }
    }

    function showResult(response) {
        let resultText = '';

        if (response === 'oui') {
            resultText = 'Vous avez choisi "Oui, je prends un petit déjeuner."';
        } else if (response === 'non') {
            resultText = 'Vous avez choisi "Non, je ne prends pas de petit déjeuner."';
        }

        document.getElementById('result-text').innerText = resultText;
        document.getElementById('result').style.display = 'block';
        document.querySelector('.options').style.display = 'none';
    }

    function displayQuestion(nextSection) {
        // Afficher le conteneur de question et cacher le conteneur de démarrage
        document.getElementById('start-container').style.display = 'none';
        document.getElementById('question-container').style.display = 'block';

        if (nextSection === "petit_dejeuner") {
            document.getElementById('question').innerText = 'Question 2: Que mangez-vous habituellement au petit déjeuner ?';
            displayOptions(["Céréales", "Pain et confiture", "Œufs et bacon"]);
        } else if (nextSection === "raison_petit_dejeuner") {
            document.getElementById('question').innerText = 'Question 2: Pour quelle raison ne prenez-vous pas de petit déjeuner ?';
            displayOptions(["Pas le temps", "Pas faim le matin", "Autre"]);
        } else if (nextSection === "que_manger") {
            document.getElementById('question').innerText = 'Question 3: Que mangez-vous habituellement au petit déjeuner ?';
            displayOptions(["Céréales", "Pain et confiture", "Œufs et bacon"]);
        } else if (nextSection === "raison_sans_petit_dejeuner") {
            document.getElementById('question').innerText = 'Question 3: Pour quelle raison ne prenez-vous pas de petit déjeuner ?';
            displayOptions(["Pas le temps", "Pas faim le matin", "Autre"]);
        }
    }

    function displayOptions(options) {
        // Efface les options existantes
        let optionsContainer = document.querySelector('.options');
        optionsContainer.innerHTML = '';

        // Ajoute les nouvelles options
        for (let i = 0; i < options.length; i++) {
            let button = document.createElement('button');
            button.innerText = options[i];
            button.addEventListener('click', function () {
                nextQuestion(options[i].toLowerCase().replace(/\s+/g, '_'));
            });
            optionsContainer.appendChild(button);
        }
    }
};
