// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Et vous, que savez-vous d’Alzheimer?",
        "main":    "<p>Fausses-idées, a priori, préjugés… La maladie véhicule de nombreuses idées reçues. La réalité est parfois tout autre. A votre tour de tester vos connaissances sur la maladie. Car mieux connaître la maladie, c’est mieux y faire face !</p>",
        "results": "<h5>Merci d’avoir participé à ce quiz !</h5>",
        "level1":  "Vous disposez déjà de bonnes connaissances sur la maladie d’Alzheimer. Pour connaitre nos actions à destination des personnes malades et des aidants, rapprochez-vous de l’association départementale la plus proche de chez vous.",
        "level2":  "Vous disposez déjà de bonnes connaissances sur la maladie d’Alzheimer. Pour connaitre nos actions à destination des personnes malades et des aidants, rapprochez-vous de l’association départementale la plus proche de chez vous.",
        "level3":  "Pour enrichir vos connaissances sur la maladie d’Alzheimer, rapprochez-vous de l’association départementale la plus proche de chez vous.",
        "level4":  "Pour enrichir vos connaissances sur la maladie d’Alzheimer, rapprochez-vous de l’association départementale la plus proche de chez vous.",
        "level5":  "Pour enrichir vos connaissances sur la maladie d’Alzheimer, rapprochez-vous de l’association départementale la plus proche de chez vous." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "La maladie d’Alzheimer est une conséquence naturelle du vieillissement?",
            "a": [
                {"option": "Vrai",      "correct": false},
                {"option": "Faux",      "correct": true}
            ],
            "correct": "<p><span>Bonne réponse</span> Si la fréquence de cette maladie augmente avec l’âge, elle n’est pas la conséquence normale du vieillissement. Il s’agit d’une maladie à part entière et plus précisément d’une dégénérescence anormale des neurones dont les premiers signes apparaissent en moyenne autour de 70 ans.</p>",
            "incorrect": "<p><span>Mauvaise réponse</span> Si la fréquence de cette maladie augmente avec l’âge, elle n’est pas la conséquence normale du vieillissement. Il s’agit d’une maladie à part entière et plus précisément d’une dégénérescence anormale des neurones dont les premiers signes apparaissent en moyenne autour de 70 ans.</p>"
        },
        {
            "q": "La maladie d’Alzheimer ne touche pas seulement les personnes âgées?",
            "a": [
                {"option": "Vrai",      "correct": true},
                {"option": "Faux",      "correct": false}
            ],
            "correct": "<p><span>Bonne réponse</span> En effet, même si la maladie d’Alzheimer est d’autant plus fréquente que l’on avance en âge, elle peut également survenir avant l’âge de 60 ans. On parle alors de malades jeunes. Cela représente environ 3%  des personnes diagnostiquées.</p>",
            "incorrect": "<p><span>Mauvaise réponse</span> En effet, même si la maladie d’Alzheimer est d’autant plus fréquente que l’on avance en âge, elle peut également survenir avant l’âge de 60 ans. On parle alors de malades jeunes. Cela représente environ 3%  des personnes diagnostiquées.</p>"
        },
        {
            "q": "Mon père ayant eu la maladie d’Alzheimer, j’ai plus de risques de la développer?",
            "a": [
                {"option": "Vrai",      "correct": false},
                {"option": "Faux",      "correct": true }
            ],
            "correct": "<p><span>Bonne réponse</span> À peine 1% des cas de maladie d’Alzheimer peuvent être qualifiés d’héréditaires. Il s’agit de formes familiales précoces – la maladie se déclare généralement avant 65 ans et parfois dès la quarantaine – liées à des mutations génétiques précises. Ces cas sont extrêmement rares.</p>",
            "incorrect": "<p><span>Mauvaise réponse</span> À peine 1% des cas de maladie d’Alzheimer peuvent être qualifiés d’héréditaires. Il s’agit de formes familiales précoces – la maladie se déclare généralement avant 65 ans et parfois dès la quarantaine – liées à des mutations génétiques précises. Ces cas sont extrêmement rares.</p>"
        },
        { // Question 4
            "q": "C’est le médecin généraliste qui pose le diagnostic?",
            "a": [
                {"option": "Vrai",      "correct": false},
                {"option": "Faux",      "correct": true }
            ],
            "correct": "<p><span>Bonne réponse</span> Le médecin généraliste réalise une évaluation de premier niveau pour évaluer la nécessité d’orienter la personne vers un médecin spécialiste neurologue. C’est à ce moment-là qu’un bilan diagnostique sera réalisé.</p>",
            "incorrect": "<p><span>Mauvaise réponse</span> Le médecin généraliste réalise une évaluation de premier niveau pour évaluer la nécessité d’orienter la personne vers un médecin spécialiste neurologue. C’est à ce moment-là qu’un bilan diagnostique sera réalisé.</p>" // no comma here
        },
        { // Question 5
            "q": "Une fois diagnostiquées, les personnes malades ne peuvent plus pratiquer d’activités?",
            "a": [
                {"option": "Vrai",      "correct": false},
                {"option": "Faux",      "correct": true }
            ],
            "correct": "<p><span>Bonne réponse</span> Avoir la maladie d’Alzheimer ne signifie pas ne rien pouvoir faire. De nombreuses activités restent possibles (promenades, chant et écoute musicale, danse, confection d’un plat simple…)</p>",
            "incorrect": "<p><span>Mauvaise réponse</span> Avoir la maladie d’Alzheimer ne signifie pas ne rien pouvoir faire. De nombreuses activités restent possibles (promenades, chant et écoute musicale, danse, confection d’un plat simple…)</p>"
        },
        { // Question 6
            "q": "La maladie coûte très chère à la personne malade et à sa famille?",
            "a": [
                {"option": "Vrai",      "correct": true},
                {"option": "Faux",      "correct": false }
            ],
            "correct": "<p><span>Bonne réponse</span> La maladie d’Alzheimer est l’une des pathologies les plus onéreuses : les chercheurs ont estimé que celle-ci coûte en moyenne 22 099 euros par an pour chaque personne malade. 74% des dépenses liées à la maladie d’Alzheimer relèvent du champ médico-social et ne font l’objet d’aucune prise en charge par l’Assurance maladie.</p>",
            "incorrect": "<p><span>Mauvaise réponse</span> Avoir la maladie d’Alzheimer ne signifie pas ne rien pouvoir faire. De nombreuses activités restent possibles très longtemps (promenades, chant et écoute musicale, danse, confection d’un plat simple…</p>"
        },
        { // Question 7
            "q": "Si Je fais travailler mon cerveau et ma mémoire, je suis protégé(e)?",
            "a": [
                {"option": "Vrai",      "correct": false  },
                {"option": "Faux",      "correct": true }
            ],
            "correct": "<p><span>Bonne réponse</span> Mots fléchés, sudokus, jeux de mémoire : toutes les activités faisant travailler les neurones sont excellentes. Mais elles ne suffisent pas. Les études tendent à montrer qu’il y aurait même plus efficaces : les relations sociales ! Voir du monde, discuter, débattre, constitueraient de meilleures protections contre la maladie d’Alzheimer.</p>",
            "incorrect": "<p><span>Mauvaise réponse</span> Mots fléchés, sudokus, jeux de mémoire : toutes les activités faisant travailler les neurones sont excellentes. Mais elles ne suffisent pas. Les études tendent à montrer qu’il y aurait même plus efficaces : les relations sociales ! Voir du monde, discuter, débattre, constitueraient de meilleures protections contre la maladie d’Alzheimer.</p>"
        },
        { // Question 8
            "q": "La maladie d’Alzheimer est causée par l’aluminium présent dans l’eau du robinet et de nombreux produits?",
            "a": [
                {"option": "Vrai",      "correct": false},
                {"option": "Faux",      "correct": true }
            ],
            "correct": "<p><span>Bonne réponse</span> Il s’agit là d’une des idées les plus répandues et pourtant, les nombreux travaux de recherche s’attachant à étudier l’incidence éventuelle de l’aluminium sur la maladie d’Alzheimer n’ont pour l’instant mis en évidence aucun lien concluant.</p>",
            "incorrect": "<p><span>Mauvaise réponse</span> Il s’agit là d’une des idées les plus répandues et pourtant, les nombreux travaux de recherche s’attachant à étudier l’incidence éventuelle de l’aluminium sur la maladie d’Alzheimer n’ont pour l’instant mis en évidence aucun lien concluant.</p>"
        },
        { // Question 9
            "q": "Dans la maladie d’Alzheimer, les troubles portent principalement sur la mémoire récente et le raisonnement",
            "a": [
                {"option": "Vrai",      "correct": true},
                {"option": "Faux",      "correct": false }
            ],
            "correct": "<p><span>Bonne réponse</span> La maladie d’Alzheimer est une lente dégénérescence des neurones, qui débute au niveau de l’hippocampe puis s’étend au reste du cerveau. Elle se caractérise par des troubles de la mémoire à court terme, des fonctions d’exécution et de l’orientation dans le temps et l’espace.</p>",
            "incorrect": "<p><span>Mauvaise réponse</span> La maladie d’Alzheimer est une lente dégénérescence des neurones, qui débute au niveau de l’hippocampe puis s’étend au reste du cerveau. Elle se caractérise par des troubles de la mémoire à court terme, des fonctions d’exécution et de l’orientation dans le temps et l’espace..</p>"
        },
        { // Question 10
            "q": "La vaccination thérapeutique, encore à l’étude, a pour but de nous empêcher d’attraper la maladie d’Alzheimer?",
            "a": [
                {"option": "Vrai",      "correct": false},
                {"option": "Faux",      "correct": true }
            ],
            "correct": "<p><span>Bonne réponse</span> La vaccination s’appuie sur le système immunitaire ainsi que sur les compétences spécifiques de ses composants, en particulier les lymphocytes mémoire. Il s’agirait de booster le système immunitaire pour détruire les agrégats de protéine Tau qui se développent dans le cerveau. </p>",
            "incorrect": "<p><span>Mauvaise réponse</span> La vaccination s’appuie sur le système immunitaire ainsi que sur les compétences spécifiques de ses composants, en particulier les lymphocytes mémoire. Il s’agirait de booster le système immunitaire pour détruire les agrégats de protéine Tau qui se développent dans le cerveau. </p>"
        }
    ]
};
