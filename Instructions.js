
//General introductory instructions

var welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Bienvenu(e)(s) dans cette expérience. Appuyez sur la touche espace pour avancer.',
    choices: ' '
};


var instruct1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "L'expérience va durer environ 15 minutes. <br> Afin que vous restiez concentré(e)s, nous vous demandons de trouver un endroit calme <br> et de fermer toutes les autres pages web sur votre moteur de recherche. <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '
};

//Overall experiment instructions

var instruct2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Tout au long de l'expérience nous allons vous demander d'évaluer des séquences composées chacune de deux phrases. <br> <br> Initialement vous allez être confronté(e)s à une première phrase que vous devrez évaluer en termes de: <br> <br> 1. Niveau d'incertitude: à quel point la phrase vous rend incertain(e). <br> 2. Niveau de curiosité: à quel point la phrase vous rend curieu(x)(se). <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '

};

var instruct3 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Dans un second temps, vous verrez une deuxième phrase qui complètera celle que vous venez de noter. <br> Aprés l'avoir lue, vous devrez noter la séquence (phrase 1 + phrase 2) selon les critères suivants: <br> <br> 1. Niveau d'incertitude: à quel point la séquence vous rend incertain(e) maintenant. <br> 2. Niveau de satisfaction: à quel point vous êtes satisfaits par la séquence. <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '
}


//Unc old experiment instructions


var htmlStringUnc3Old = `
<div>
<h1>Instructions</h1>
    <p><br>Tout au long de l'expérience, nous allons vous demander d'évaluer des séquences composées chacune de deux phrases.</p>
    <p>Dans un premier temps, vous allez être confronté(e) à une première phrase. Par exemple: </p>
    <p id = 'frstIns'> “Chloé est sur le point de s'endormir lorsque l'avion sur lequel elle voyage commence à faire un bruit sourd du moteur gauche." </p>
    Votre tâche consistera à :</p>
    <ol type="1">
        <li><b>Indiquer à quel point la phrase vous rend incertain/e.</li></b>
   
    <p><br><br>Dans un second temps, vous verrez une deuxième phrase qui complétera celle que vous venez d'évaluer. 
    <p>La phrase en rouge sera suivie par une autre en bleu, dans ce cas:</p>
    <p id = 'scndIns'>"Chloé sursaute et elle commence à crier.”</p>

    <p>Après l'avoir lue, vous devrez indiquer:

       <li><b>À quel point vous pensez que la seconde phrase ait réduit votre incertitude initiale (celle créée par la prémisse).</b></li>
     </ol>
    <br> <br> Appuyez sur la touche espace pour avancer.

</div>
`;


var instruct3UncOld = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringUnc3Old,
    choices: ' '
}


//Unc new experiment instructions

var htmlStringUnc2 = `
<div>
<h1>Définition de l'incertitude</h1>
    <p><br>Dans cette expérience, vous serez confrontés à des phrases que vous devrez évaluer en termes de niveau d'incertitude de vos attentes. <b>Nous définissons l'incertitude de vos attentes comme le fait de ne pas savoir lequel de plusieurs scénarios attendus va se réaliser</b>. Plus vous vous sentez capables de prévoir ce qu'il va se passer, moins vous êtes incertains. Si vous avez des doutes quant à laquelle de vos prédictions va se réaliser, vous êtes plus incertains.</p>
    <p>Prenons par exemple la phrase suivante :</p>
    <p id = 'frstIns'>"Chloé est sur le point de s'endormir lorsque l'avion sur lequel elle voyage commence à faire un bruit sourd du moteur gauche."</p>
    <p>Cette phrase peut donner lieu à de nombreux scénarios possibles :</p>
    <ul>
        <i><li>Crash de l'avion.</li> </i>
        <i><li>L'avion chute mais se rétablit rapidement.</li> </i>
        <i><li>Fausse alerte, Chloé rêvait.</li> </i>
        <i><li>Le bruit s'arrête et le pilote dit qu'il ne faut pas s'inquiéter.</li> </i>
    </ul>
    <p>Évidemment, certains scénarios sont plus probables que d'autres : il y a plus de chances que le vol se passe bien plutôt que l'avion ne se crashe.</p>
    <p><br><b>Si, en lisant des phrases, vous avez un scénario en tête qui, selon vous, est le plus probable, votre incertitude est basse. Cependant, si vous avez plusieurs scénarios concurrents en tête et que vous ne savez pas en choisir un, votre incertitude est élevée.</b></p>
    <p><b>En alternative, si vous êtes confrontés à une phrase où il n'y a pas d'événement déclencheur de prédictions, comme par exemple :</b> <p id = 'frstIns'>"Julie promène son chien"</p> <b>L'incertitude de vos attentes sera basse étant donné qu'il n'y a pas de prédictions à comparer.</b></p>
    <br> <br> Appuyez sur la touche espace pour avancer.
</div>
`;


var htmlStringUnc3 = `
<div>
<h1>Exemple</h1>
    <p><br>Tout au long de l'expérience, nous allons vous demander d'évaluer des séquences composées chacune de deux phrases.</p>
    <p>Dans un premier temps, vous allez être confronté(e) à une première phrase. Par exemple: </p>
    <p id = 'frstIns'> “Chloé est sur le point de s'endormir lorsque l'avion sur lequel elle voyage commence à faire un bruit sourd du moteur gauche." </p>
    Votre tâche consistera à indiquer si :</p>
    <ol type="1">
        <li><b>Vous êtes capables de prévoir des scénarios probables.</b></li>
        <li><b>Quel est votre niveau d'incertitude.</b></li>

    <p><br><br>Dans un second temps, vous verrez une deuxième phrase qui complétera celle que vous venez d'évaluer. 
    <p>La phrase en rouge sera suivie par une autre en bleu, dans ce cas:</p>
    <p id = 'scndIns'>"Chloé sursaute et elle commence à crier.”</p>

    <p>Après l'avoir lue, vous devrez indiquer:

    <li><b>À quel point vous pensez que la seconde phrase ait réduit votre incertitude initiale (celle créée par la prémisse).</b></li>
  </ol>
<br> <br> Appuyez sur la touche espace pour avancer.

</div>
`;

var instruct2Unc = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringUnc2,
    choices: ' '
}
    
var instruct3Unc = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: htmlStringUnc3,    
    choices: ' '
}

//Crs experiment instructions

var instruct2Crs = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Tout au long de l'expérience nous allons vous demander d'évaluer des séquences composées chacune de deux phrases. <br> <br> Initialement vous allez être confronté(e)s à une première phrase que vous devrez évaluer en termes de: <br> <br> 1. Niveau de curiosité: à quel point la phrase vous rend curieux(se). <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '

};

var instruct3Crs = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Dans un second temps, vous lirez une deuxième phrase qui complètera celle que vous venez de noter. <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '
}

//Sat experiment instructions

var instruct2Sat = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Tout au long de l'expérience nous allons vous demander d'évaluer des séquences composées chacune de deux phrases. <br> <br> Initialement vous allez être confronté(e)s à une première phrase que vous devrez simplement lire. <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '

};

var instruct3Sat = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Dans un second temps, vous verrez une deuxième phrase qui complètera celle que vous venez de lire. <br> Vous devrez noter <b> à quel point vous appréciez la séquence en son ensemble.</b>  <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '
}


//Val experiment instructions

var instruct2Val = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Tout au long de l'expérience nous allons vous demander d'évaluer des séquences composées chacune de deux phrases. <br> <br> Initialement, vous allez être confronté(e)s à une première phrase. Vous devrez évaluer si celle-ci est plutot positive ou plutôt négative. <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '

};

var instruct3Val = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Dans un second temps, vous verrez une deuxième phrase qui complètera celle que vous venez de lire. Vous devrez également noter si cette dernière est plutôt négative ou positive. <br> <br> Appuyez sur la touche espace pour avancer.",
    choices: ' '
}


//General continued instructions

var instruct4 = {
    type:jsPsychHtmlKeyboardResponse,
    stimulus: "<b>Attention</b>: Même si certains prénoms de personnages reviennent au fil de l'expérience <br> nous vous demandons de traiter chaque séquence indépendamment. <br> <br> Appuyez sur la touche espace pour avancer."
}


var instruct5 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Pour que cela soit plus clair, nous allons vous montrer deux exemples. <br> <br> Appuyez sur la touche espace pour commencer."
}


var instruct6 = {
    type:jsPsychHtmlKeyboardResponse,
    stimulus: "Nous allons maintenant commencer l'expérience. <br> <br> Appuyez sur la touche espace quand vous êtes prêts."
}


var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: "NO_KEYS",
    trial_duration: function () {
        return jsPsych.randomization.sampleWithoutReplacement ([500, 750, 1000, 1250, 1500, 1750, 2000], 1) [0];
    },
    data: {
        task: 'fixation'
    }
};


