// Test sentences

//check format of catchseen, check why catch new shows the same sentence again

var testUnc = [
    "Sylvain voit un homme se faire poignarder au loin.", 
    "Maxime joue sur son ordinateur vers 3 heures du matin lorsqu'il est interrompu soudainement par une panne d'électricité.",
    "En ouvrant son casier, Justine voit que quelqu'un lui a laissé un magnifique bouquet de roses.",
    "Jacqueline fait ses courses au supermarché.",
]

var testRes= [
    "Les jambes tremblotantes, il songe à prêter secours à l'homme qui git à terre mais il décide de partir en courant.",
    "Il entend son père monter les escaliers en hurlant 'Qu'est-ce que tu fais encore debout Maxime!'",
    "Elle rapproche son visage des fleurs pour en sentir l'odeur.",
    "Elle aime prendre son temps pour choisir les fruits qu'elle souhaite acheter.",
]


// Test sentences explanation

/*var testUnc = [
    "Certaines phrases sont créatrices d'incertitude:  <br> <br> Maxime joue sur son ordinateur vers 3 heures du matin lorsqu'il est interrompu soudainement par une panne d'électricité.",
    "Certaines phrases sont créatrices d'incertitude: <br> <br> En ouvrant son casier, Justine voit que quelqu'un lui a laissé un magnifique bouquet de roses.",
    "Certaines phrases ne créent pas d'incertitude: <br> <br> Jacqueline fais ses cours au supermarché.",
]

var testRes= [
    "Et elles sont suivies par une phrase qui resout cette incertitude: <br> <br> Il entend son pere monter les escalier en hurlant 'Qu'est-ce que tu fais encore debout Maxime!'",
    "Mais la pharse suivante ne resout pas l'incertitude: <br> <br>  Elle rapproche son visage des fleurs pour en sentir l'odeur.",
    "Et elles sont suivies par des phrases descriptives: <br> <br> Elle aime prendre son temps pour choisir les fruits qu'elle souhaite acheter.",
]*/


//Randomise test sentences indexes

sntncTest=[0,1,2,3];
sentencesTest=[];
for(var i=0;i<1;i++){
sentencesTest=sentencesTest.concat(shuffle(sntncTest))
}


//just add one example and how to use the slider, how does the display look 
//uncertainty: how much 

//Sentences for experiment

// No uncertainty sentences related to positive high condition, first and second parts



var frstPartPosHghNoUnc=[
    "Leo a commandé un écran sur Amazon.",
    "Jade se balade avec une amie.",
    "Sam est sur Tinder.",
    //"Dernièrement, John suit un régime alimentaire et il fait beaucoup de sport.",
    //"Lisa a travaillé assidûment pour sa thèse de master.",
    //"Simon est avec un ami lorsqu'il croise une fille avec qui ils ont fait la fête toute la nuit il y a quelques semaines.",
    //"Mara a bientôt un examen de la plus haute importance.",
    "Matt a une copine.",
    //"Aaron adore la musique de Louisa King.",
    //"Kevin est un fervent supporteur de l'équipe nationale de football."
]


var scndPartPosHghNoUnc=[
    "Il reçoit son colis après 2 jours ouvrables comme prévu.",
    "Elles parlent de leur journée.",
    "Il croise des profils différents et décide s'il souhaite les 'matcher'.",
    //"Il se sent en meilleure santé et il a perdu 3 kg.",
    //"Elle a eu une très bonne note: 85%!.",
    //"Ils discutent de tout et de rien.",
    //"Elle passe toutes ses journées à la bibliothèque.",
    "Il lui fait beaucoup de cadeaux.",
    //"Il écoute ses chansons chaque matin en allant au travail.",
    //"Il regarde tous les matchs et connaît les particularités de chaque joueur.",
]


//Positive High Uncertainty sentences, first and second parts

var frstPartPosHghUnc=[
    "Quelqu'un toque à la porte de Pierre et dépose un colis inattendu.",
    "Maja marche avec un ami lorsqu'il sort un cadeau de son sac.",
    "Lukas a un nouveau 'match' sur Tinder.",
    //"Justin suit un régime alimentaire et il fait beaucoup de course à pied. <br> Pour savoir s'il a perdu du poids, il monte sur la balance.",
    //"Sara a travaillé assidument pour la thèse qu'elle a rendu le mois passé. <br> Elle espère avoir une bonne note.",
    //"Mario est avec un ami lorsqu'ils croisent une fille avec qui ils ont fait la fête comme des fous il y a quelques semaines. <br> Mario est gêné car il ne se rappelle plus du prénom de la fille.",
    //"Quelqu'un a dit à Cynthia que l'examen de physique quantique qu'elle redoutait a été annulé.",
    "Albert se dirige à un 'blind-date' que son meilleur ami lui a organisé. <br> À ce qu'il paraît la fille qu'il va rencontrer est magnifique.",
    //"Julien est un fan inconditionnel de la chanteuse Sandra Miller. <br> Ses amis lui ont acheté un ticket backstage pour qu'il puisse la rencontrer. <br> Julien a hâte mais il a peur d'être gêné en la voyant.",
    //"Bob regarde une finale de Coupe du Monde, son équipe préférée a des chances de gagner!"
]

var scndPartPosHghRes=[
    "Pierre ouvre le colis et découvre un parfum offert par sa copine Sara.",
    "Elle déballe le cadeau et voit qu'il s'agit du magnifique pull qu'elle voulait depuis des mois.",
    "Il ouvre l'application et découvre que c'est la jolie fille qu'il avait 'superliké' plus tôt dans la journée.",
    //"Il monte sur la balance et après quelques secondes le verdict tombe: il a perdu 3 Kg!",
    //"En arrivant en classe son professeur la congratule immédiatement car sa thèse était excellente: Sara a obtenu un 85%!.",
    //"L'ami de Mario lui glisse discrètement à l'oreille qu'elle s'appelle Diana.",
    //"Elle envoie un e-mail à son professeur en lui demandant si c'est bien le cas. Ce dernier lui confirme que l'examen a été supprimé.",
    "Lorsque Albert la voit arriver, il est immédiatement sous le charme.",
    //"Quand Julien rencontre Sandra Miller, il pète un plomb et fond en larmes. Heureusement pour lui, elle prend le temps de le rassurer et passe une dizaine de minutes avec lui.",
    //"Pendant tout le match, les joueurs des deux camps se sont battus sans relâche mais personne n'a su faire la différence. <br> Les tirs au but sont donc annoncés. <br> Bob ne quitte pas l'écran des yeux, jusqu'au moment où son équipe devient enfin Championne du Monde!"
]

var frstPartPosHghUnc1=[
    "Une personne toque à la porte de Jim et dépose un colis inattendu.",
    "Mia se balade avec un ami lorsque soudain il sort un cadeau de son sac.",
    "Max a un nouveau match sur Tinder!",
    //"Michael s'est mis au régime et à la musculation. <br> Il aimerait savoir s'il a perdu du poids, donc il monte sur sa balance.",
    //"Soline a travaillé d'arrache-pied sur son devoir le mois passé. <br> Elle espère avoir une très bonne note.",
    //"Karl est avec un ami lorsqu'ils croisent une fille avec qui ils ont passé la soirée il y a quelques semaines. <br> Karl s'efforce de se rappeler son prénom mais n'y parvient pas.",
    //"Serena entend que son examen d'algèbre a été annulé.",
    "Robbie se dirige vers le rencard que son meilleur ami lui a arrangé. <br> Selon ce dernier, la fille qu'il va lui presenter est magnifique.",
    //"Mark est super fan de Mc King donc ses amis lui ont pris un ticket back-stage pour son prochain concert. <br> Même si il est enthousiaste, il est aussi très nerveux car il a l'habitude de bégayer devant les personnes qu'il ne connait pas.",
    //"Tom regarde un match de foot avec son équipe préférée, ils pourraient gagner la Champions League!"
]


var scndPartPosHghNoRes=[
    "Jim ouvre sa porte curieux, mais en prenant le colis entre ses mains <br> il réalise qu'il est destiné à son voisin.",
    "Son ami lui demande si elle aime le papier cadeau.",
    "Il tente d'ouvrir l'application pour voir de qui il s'agit, mais son téléphone reste figé sur la page d'accueil.",
    //"En posant ses pieds dessus, il remarque que la balance n'a plus de batterie.",
    //"Son professeur lui dit qu'il n'a pas encore fini de corriger les devoirs.",
    //"Il continue de discuter avec elle comme si de rien n'était",
    //"Elle espère que ce soit vrai car elle ne comprend rien en cours.",
    "En allant au rendez-vous, Robbie est très anxieux et il transpire beaucoup comme à son habitude.",
    //"Après le set de Mc King, Mark est escorté par la sécurité jusqu'aux loges.",
    //"Les deux équipes jouent aussi bien l'une que l'autre, le match est très serré."
]


// No uncertainty sentences related to positive low condition, first and second parts

var frstPartPosLowNoUnc= [
    //"La maman de Kevin lui envoie un message en lui demandant ce qu'il voudrait manger pour le dîner.",
    //"Lucie voit une très belle robe sur Asos.",
    //"Paul doit rejoindre un ami pour prendre un café.",
    "Lena fait son jogging dans un parc.",
    "Tyler adore les sneakers.",
    //"Laura aimerait adopter un chaton.",
    "Léonard a envie de manger un bon plat ce soir.",
    //"Eva planifie un city-trip à San Francisco.",
    "Alexandre joue à la loterie chaque semaine.",
    //"Mike a faim."
]

var scndPartPosLowNoUnc= [
    //"Il lui répond qu'il aimerait de la lasagne.",
    //"Elle décide de la commander.",
    //"Il monte dans le bus pour se rendre au lieu de rendez-vous.",
    "Elle croise beaucoup de gens qui font des pique-niques.",
    "Il décide d'en acheter une nouvelle paire.",
    //"Elle cherche sur Internet où est-ce qu'elle pourrait trouver un refuge.",
    "Il va à son restaurant préféré.",
    //"Elle cherche des vols pas chers sur Internet.",
    "Il achète toujours ses tickets chez le même vendeur.",
    //"Il décide d'acheter de la nourriture."
]


//Positive Low Uncertainty sentences, first and second parts

var frstPartPosLowUnc=[
    //"Nick reçoit un message de sa maman qui lui dit qu'elle a préparé un bon repas pour lui.",
    //"Josephine se demande si une robe qu'elle a vue en ligne flatterait sa silhouette.",
    //"Emmanuel est supposé rejoindre son ami pour prendre un verre d'ici peu, donc il décide de vérifier l'heure qu'il est sur son téléphone.",
    "Emma est en train de courir dans un parc lorsqu'elle voit un homme au loin qui ressemble à son ami Marcus. <br> Elle commence à courir dans sa direction pour vérifier que ce soit bien lui.",
    "Erik vient d'acheter des sneakers super rares et il a hâte de voir la tête de ses amis quand il leur dira ce soir.",
    //"Nelly aimerait adopter un chaton et elle espère en trouver un au refuge de la ville.",
    "Andy est à son restaurant préféré et à son habitude il commande 'La Surprise du Chef' comme plat principal. <br> Il s'agit d'une préparation dans laquelle le chef choisit les ingrédients qu'il souhaite travailler. <br> Andy espère qu'il va aimer.",
    //"Kim veut partir en voyage mais elle ne sait pas encore où aller. <br> Elle commence à regarder des destinations sur Google.",
    "Nathan a joué à la loterie avec les mêmes numéros qu'il utilise à chaque fois. <br> Cette semaine il pourrait gagner 3 000 000 d'euros.",
    //"Philippe a un peu faim mais il a oublié son portefeuille a la maison. <br> Il glisse sa main dans sa poche et sent qu'il a quelques pièces. <br> Philippe adore quand ça arrive, il prend les pièces en main pour les compter."
]

var scndPartPosLowRes=[
    //"Nick rentre avec hâte à la maison et découvre qu'elle lui a fait une pizza, son plat préféré.",
    //"Elle décide d'aller au magasin physique pour l'essayer. Josephine enfile la robe qui lui va comme un gant.",
    //"Il est 16h30, il ne lui reste plus que 10 minutes pour le rejoindre.",
    "Emma se rapproche de l'homme et crie: 'Marcus!'. <br> L'homme se retourne en sursautant et la salue chaleureusement.",
    "Les amis d'Erik adorent sa nouvelle paire et le complimentent sur son goût.",
    //"Lorsqu'elle arrive au refuge, Nelly identifie immédiatement le chaton de ses rêves: <br> un tout noir avec des petites oreilles.",
    "Un parfum incroyable se dégage du plat surprise. Andy se régale.",
    //"Elle voit qu'il y a des vols pas chers pour Venise ce week-end et elle en réserve un immédiatement.",
    "Nathan compare ses numéros avec ceux gagnants...et c'est le Jackpot!!! <br> Il a tout les numéros gagnants, il est maintenant millionnaire!",
    //"Il voit qu'il a tout juste ce qu'il lui faut pour acheter une petit casse-croûte."
]


var frstPartPosLowUnc1 =[
    //"La maman d'Ethan lui envoie un message en disant qu'elle va lui préparer un bon repas.",
    //"Marina a vu un pantalon splendide en ligne et elle ne sait pas si elle veut le commander.",
    //"Magnus doit rejoindre son ami pour prendre un café, il décide de regarder l'heure sur son portable.",
    "Lucie marche dans la rue lorsqu'elle voit une personne au loin qui ressemble à son cousin Jérémy.",
    "Ava a acheté un nouveau sac à main de luxe et elle a hâte de le montrer à ses copines.",
    //"Alexandra aimerait adopter un chien et elle espère en trouver un mignon au refuge.",
    "Lorenzo est à son restaurant favoris, il adore y aller car son ami Aaron est le chef. <br> Lorenzo a hâte de goûter ce qu'Aaron va lui préparer vu que chaque fois qu'il mange chez lui il découvre de nouvelles saveurs.",
    //"Irene aimerait voyager mais vu qu'elle ne sait pas où aller, elle décide de demander conseil à une agence de voyages.",
    "Bertrand a joué à la loterie en utilisant ses numéros favoris <br> pour tenter de gagner le jackpot de € 4 000 000.",
    //"Michael a un peu faim mais il a oublié son argent à la maison. <br> Il glisse sa main dans la petite poche de son sac et voit qu'il lui reste quelques pièces.  <br> Michael adore quand cela arrive! Il prend les pièces en main pour les compter."

]

var scndPartPosLowNoRes= [
    //"Ethan essaye de l'appeler pour en savoir plus mais son téléphone s'éteint.",
    //"Marina décide d'aller au magasin physique pour l'essayer mais le manager lui dit que la pièce est hors de stock.",
    //"Magnus sort son téléphone mais sa batterie est à plat.",
    "Lucie essaye d'attirer son attention en hurlant son prénom en vain.",
    "Ava est très satisfaite de son achat et elle s'entraîne à defiler avec dans son salon comme font les stars.",
    //"Mais elle est inquiète car son chat a mauvais caractère et il pourrait mal réagir à l'arrivée d'un chiot à la maison.",
    "L'attente est plus longue que d'habitude, Lorenzo a très faim.",
    //"L'agent lui dit qu'il y a des promotions intéressantes pour Málaga, Barcelona et Rome.",
    "Il essaie de regarder le tirage de la loterie à la télé, mais il n'y a pas de signal.",
    //"Michael a du mal à se concentrer à cause du bruit ambiant.",
]


// No uncertainty sentences related to Negative High condition, first and second parts

var frstPartNegHghNoUnc=[
    //"Sam rentre à la maison.",
    "C'est la veille du nouvel an et Mike entend des feux d'artifice toute la nuit.",
    "Julie reçoit un appel de l'hôpital pour lui rappeler qu'elle a un rendez-vous avec son dentiste.",
    //"Erin voyage en avion.",
    //"Ivan adore faire du voilier.",
    "Lena doit retirer de l'argent.",
    "Sara marche vers chez elle au milieu de la nuit.",
    //"Vladimir achète des chaussettes en ligne.",
    //"Mady fait la fête au centre-ville.",
    //"Bob aimerait avoir une petite copine."
]

var scndPartNegHghNoUnc=[
    //"Il enlève sa veste.",
    "Il met des bouchons d'oreilles pour dormir.",
    "Julie remercie le réceptionniste pour ce rappel.",
    //"Elle a bouclé sa ceinture.",
    //"Il part souvent en navigation pendant l'été.",
    "Elle se rend à la banque près de chez elle.",
    "Des voitures passent le long de la rue.",
    //"Il reçoit un message de confirmation de transaction venant de sa banque.",
    //"Elle voit beaucoup de personnes qui consomment de l'alcool.",
    //"Il commence à se soucier plus de son apparence."
]


//Negative High Uncertainty sentences, first and second parts

var frstPartNegHghUnc=[
    //"Jim habite seul et il rentre tous les jours du travail à 19h. <br> Mais vendredi dernier en passant la porte un bruit inquiétant venant de l'étage l'a surpris.",
    "Il est 4 heures du matin et Mike s'apprête à aller dormir lorsque soudain il entend un homme crier 'Adieu monde cruel' suivi d'un bruit sourd.",
    "Matéo est en retard pour aller au travail lorsque son téléphone sonne. <br> Ça alors! On l'appelle toujours au mauvais moment! <br> Il décroche nerveux et une voix froide lui dit qu'un de ses proches a été admis en réanimation à l'hôpital.",
    //"Chloé est sur le point de s'endormir lorsque l'avion sur lequel elle voyage commence à faire un bruit sourd depuis le moteur gauche.",
    //"Megan est en train de bronzer sur son bateau lorsqu'elle entrevoit une tempête se former à quelques noeuds.",
    "Arthur fait la file à la banque pour retirer de l'argent quand un homme cagoulé et armé rentre dans le bâtiment.",
    "Il est 3 heures du matin et Selma marche vers chez elle. <br> Soudain, elle entend une femme crier et une voiture arriver en trombe.",
    //"Jean reçoit un message de sa banque le notifiant que sa transaction de € 2000 a bien eu lieu. <br> Jean panique parce qu'il n'a pas utilisé sa carte bancaire depuis une semaine.",
    //"Elena est de sortie en ville lorsque sa mère l'appelle en panique pour lui demander si elle est bien en sécurité. <br> Elle poursuit confuse en criant que quelque chose d'horrible vient d'arriver au centre-ville.",
    //"Paul craque pour une fille depuis des semaines mais il ne comprend pas si elle est intéressée."
]


var scndPartNegHghRes=[
    //"Après avoir monté les escaliers en courant, il découvre qu'un oiseau s'est introduit dans sa chambre détruisant son vase préféré.",
    "Le souffle coupé, il se lève pour se rapprocher de sa fenêtre. Il a à peine le temps de se gratter les paupières qu'il voit <br> son voisin étendu à terre, inerte.",
    "La voix dit à Matéo que son frère vient d'avoir un grave accident de voiture.",
    //"Après quelques minutes, le pilote dit aux passagers qu'une turbine dans le moteur est déféctueuse mais que cela ne va pas impacter leur trajet. <br> Il ajoute qu'il ne faut pas paniquer.",
    //"Il commence à pleuvoir et elle essaye de s'abriter. <br> Des vagues de plusieurs mètres s'abattent sur le mas du bateau, Megan perd l'équilibre et tombe dans l'eau. <br> Elle se bat contre les vagues pendant plusieurs minutes mais exténuée elle se noie.",
    "Arthur lâche un cri strident et se fait immédiatement tirer dessus. Il meurt avant d'arriver aux urgences",
    "Selma a à peine le temps de comprendre ce qu'il arrive que la voiture la percute. Elle décède sur le coup",
    //"Il cherche partout sa carte mais ne la trouve pas. Quelqu'un a du s'en emparer pour lui soutirer de l'argent.",
    //"La mère d'Élena lui dit qu'il y a eu une attaque terroriste et qu'elle doit rentrer à la maison le plus vite possible.",
    //"Après des semaines d'hésitation il décide enfin de se lancer et de l'inviter boire un verre. <br> Malheureusement, il apprend qu'elle fréquente un de ses amis."
]

var frstPartNegHghUnc1=[
    //"Jack rentre chez lui et entend des bruits suspects à l'étage. Il est inquiet car il habite seul.",
    "Il est 4 heures du matin et John est sur le point de s'endormir lorsqu'il entend des coups de feu.",
    "Simon est en train de courir pour attraper son bus lorsque son téléphone sonne. <br> Une voix glaciale lui dit qu'un de ses proches a eu un accident.",
    //"Mara est dans ses pensées lorsque l'avion dans lequel elle voyage perd de l'altitude violemment. Mara pousse un cri.",
    //"Justine bronze en pleine mer lorsqu'elle voit une tornade se former au loin.",
    "Mike est dans un supermarché lorsqu'un homme cagoulé et armé crie: 'Tout le monde au sol, ceci est un hold-up!'",
    "Mira rentre chez elle en pleine nuit vers 3 heures du matin lorsqu'elle entend une moto arriver rapidement dans son dos et des cris stridents.",
    //"Barney reçoit un message de sa banque lui disant qu'il n'a plus d'argent sur son compte. <br> Il panique car il n'a plus dépensé d'argent depuis une semaine.",
    //"Clara est en soirée lorsque son père l'appelle en demandant si elle va bien car une bombe a explosé à la gare.",
    //"Olivier a un 'crush' sur une fille mais il ne comprend pas si c'est réciproque."
]

var scndPartNegHghNoRes=[
    //"Il marche sur la pointe des pieds en se rapprochant des escaliers.",
    "Il sursaute de son lit et regarde par sa fenêtre.",
    "Simon s'arrête et le bus lui file sous le nez. Il demande qui est à l'appareil mais la ligne se coupe.",
    //"L'hôtesse de l'air la plus proche s'évanouit.",
    //"Un frisson parcourt sa colonne vertébrale.",
    "Les jambes de Mike commencent à trembler.",
    "Elle se retourne pour regarder ce qu'il se passe.",
    //"Il essaie d'appeler sa banque pour expliquer la situation.",
    //"Clara essaie de le calmer et lui dit de la lâcher un peu. <br> Il exagère toujours.",
    //"Olivier prend son courage à deux mains et l'invite au restaurant."
]


// No uncertainty sentences related to negative low condition, first and second parts

var frstPartNegLowNoUnc=[
    "Liam est à la station et il attend son train matinal.",
    //"Bella a un devoir à rendre ce mois. ",
    "Emma se balade dans la rue.",
    //"Jeanne fait des activités touristiques.",
    "Bruno rentre chez lui.",
    //"Mona dort paisiblement dans son lit.",
    "Comme tous les matins, Ana sort son chien.",
    //"En sortant de l'école, Justine réalise qu'elle a oublié son téléphone en classe.",
    //"Theo prend l'avion pour partir en vacances.",
    //"Manuel veut se réveiller tôt demain donc il met un réveil à 8 heures du matin."
]


var scndPartNegLowNoUnc=[
    "Lorsque le train arrive, il monte dedans.",
    //"Elle est nerveuse à cause de la 'deadline'.",
    "Elle porte des chaussures bleues.",
    //"Elle prend beaucoup de selfies.",
    "Il prend son bus.",
    //"Elle rêve que son chien mange.",
    "Le soleil réchauffe sa peau.",
    //"Elle décide de retourner à l'école pour le récupérer.",
    //"Il a préparé une grande valise avec tous ses habits préférés.",
    //"Il dort paisibliment et son alarme le réveille à l'heure prévue."
]


//Positive Low Uncertainty sentences and resolutions, first and second parts

var frstPartNegLowUnc=[
    "Le train de Kim est retardé.",
    //"Fabian ne se souvient plus de la deadline exacte pour le devoir qu'il doit rendre ce mois-ci.",
    "Mina vient de marcher sur quelque chose de collant.",
    //"Olivia fait du tourisme lorsque quelque chose de mouillé tombe sur sa tête.",
    "Connor attend son métro en espérant qu'il ne sera pas trop rempli.",
    //"Sam se fait réveiller par l'aboiement de son chien en pleine nuit. <br> Il se dit que c'est étrange étant donné que son chien est d'habitude très calme.",
    "Comme chaque matin, Eva se promène lorsqu'elle entend une personne crier des mots dans une langue étrangère derrière elle.",
    //"Lorena est en retard pour son rendez-vous. Elle s'apprête à sortir mais elle ne trouve pas son téléphone.",
    //"La valise de Marco, contenant tous ses habits favoris, a été perdue lors de son voyage en avion.",
    //"Lia a un examen de mathématiques aujourd'hui mais son réveil n'a pas sonné. Elle s'empresse de se préparer en espérant quand-même arriver à temps."
]


var scndPartNegLowRes= [
    "Elle entend qu'il sera retardé de quelques heures à cause d'un problème technique qui affecte les rails de train.",
    //"Il vérifie et se rend compte que la 'deadline' est dans 2 jours. Son pouls accélère, il n'a même pas encore commencé le devoir !",
    "Elle regarde sous sa chaussure et voit qu'un chewing-gum est collé à sa semelle.",
    //"Elle touche ses cheveux et comprend qu'un pigeon lui a déféqué dessus.",
    "Le métro qui arrive en station déborde de gens, Connor arrive à s'y glisser avec difficulté mais il a du mal à respirer.",
    //"Il se lève pour aller voir si son chien va bien. <br> Une fois en bas des escaliers, il se gratte les yeux pour être sur de bien voir ce qu'il se passe: son chien a une souris dans la gueule.",
    "Elle se retourne et voit qu'il s'agit d'un homme bourré qui se met à vomir sur le trottoir.",
    //"Elle se souvient soudain qu'elle a laissé dans les cabines à la gym ce matin.",
    //"Marco reçoit un appel de la compagnie d'avion lui disant qu'ils sont dans l'incapacité de trouver sa valise et qu'il sera remboursé pour les dommages occasionnés.",
    //"Lia arrive à l'école à bout de souffle 3 minutes en retard mais le professeur lui interdit de rentrer en classe."
]

var frstPartNegLowUnc1= [
    "Le bus de Cara est en retard.",
    //"Kevin ne se rappelle pas quelle est la 'deadline' pour un devoir qu'il doit rendre cette semaine.",
    "Karen vient de marcher sur quelque chose de collant.",
    //"Elena fait du tourisme lorsqu'elle sent quelque chose de chaud tomber sur son épaule.",
    "Cam attend son bus en espérant qu'il ne sera pas trop plein.",
    //"Adrien est réveillé par son chien qui aboie en pleine nuit. Il est surpris car son chien n'aboie jamais.",
    "Comme chaque matin, Sara se balade dans son quartier lorsqu'elle entend quelqu'un chanter bruyamment.",
    //"Lucille ne trouve pas son portable.",
    //"La valise de Simon, contenant tous ses livres favoris, a été perdue par la compagnie aérienne lors de son dérnier vol.",
    //"Vera a une rédaction de géographie à rendre aujourd'hui, mais elle ne l'a pas encore terminée <br> Elle travaille d'arrache-pied et espère y arriver à temps."
]

var scndPartNegLowNoRes=[
    "Elle continue à attendre.",
    //"Il essaye de vérifier la date limite dans ses e-mails mais il n'a pas de Wi-Fi.",
    "Elle regarde sous sa chaussure mais il n'y a rien.",
    //"Elle regarde son épaule mais il n'y a rien dessus.",
    "Le bus qui arrive est hors-service, Cam continue à attendre.",
    //"Il se dit qu'il devrait descendre vérifier ce qu'il se passe mais il est trop fatigué. Il retourne donc dormir.",
    "Elle regarde derrière d'elle pour comprendre d'où vient cette voix, mais ne voit que des enfants aux alentours.",
    //"Elle regarde partout dans la maison mais il n'y a pas de trace de son téléphone.",
    //"Simon commence à faire la file aux objets trouvés de l'aéroport.",
    //"Cela fait des heures qu'elle tape frénétiquement à l'ordinateur."
]


//Randomise conditions indexes if 10 sentences

/*cond=[0,1,2,3,4,5,6,7,8,9,10,11];
conditions=[];
for(var i=0;i<10;i++){
  conditions=conditions.concat(shuffle(cond))
}*/

//Randomise conditions indexes if 4 sentences

cond=[0,1,2,3,4,5,6,7,8,9,10,11];
conditions=[];
for(var i=0;i<4;i++){
  conditions=conditions.concat(shuffle(cond))
}


//Randomise sentences order if 10 sentences

/*const originalList = [...Array(10).keys()]*/

//Randomise sentences order if 4 sentences

const originalList = [...Array(4).keys()]


//Create a matrix with 12 conditions each containing a random permutation of 4 sentences numbers


const iSentenceIdx = Array.from({ length: 12 }, () => shuffleArray([...originalList]));


// Create catch trials

//Decide at which trial to call Catch Seen trial

//Create an array with the trials around which we want to call Catch New trial 

lCatchSeenTmp = [15,25,35];

//Create array with random number to add to lCatchSeenTmp indexes

RandomAddToSeen = [1,2,3,4,5];
shuffledRandomAddToSeen=shuffle(RandomAddToSeen);

//Define lCatchSeen and j

lCatchSeen=[];

j=0;

//Create a loop that will return an array of length 48 with 1 everytime a lCatchSeen trial will be called

for(var i=0;i<48;i++){
  if(i==lCatchSeenTmp[j]+shuffledRandomAddToSeen[0]){ //integrate randomness to the trials by adding index 0 of shuffledRandomAddToSeen array to lCatchSeenTmp.
    lCatchSeen[i]=1;
    j=j+1;
  } else {
    lCatchSeen[i]=0;
  }
}



//Decide at which trial to call Catch New trial 

//Create an array with the trials around which we want to call Catch New trial 

lCatchNewTmp = [10,30,40];

//Create array with random number to add to lCatchNewTmp indexes

RandomAddToNew = [1,2,3,4,5];
shuffledRandomAddToNew=shuffle(RandomAddToNew);

//Define lCatchNew and j

lCatchNew=[];

j=0;

//Create a loop that will return an array of length 48 with 1 everytime a CatchNewTrial will be called

for(var i=0;i<48;i++){
  if(i==lCatchNewTmp[j]+shuffledRandomAddToNew[0]){ //integrate randomness to the trials by adding index 0 of shuffledRandomAddToNew array to lCatchNewTmp.
    lCatchNew[i]=1;
    j=j+1;
  } else {
    lCatchNew[i]=0;
  }
}


//Create the new sentences to display in Catch New trials

//Create an array with the indexes of new sentences to call -> [0,1,2]


lNewIdx=[0,1,2,3,4,5,6,7]

//Create new sentences to pick


var lNew = [
"<p id = 'frst'>"+"Maria s'est fait mordre par un doberman." + "</p>"  + "<p id = 'scnd'>"+"Elle a été emmenée d'urgence à l'hôpital."+ "</p>"+'<br>' +'<br>',
"<p id = 'frst'>"+"Bastien est inquiet car il a beaucoup de travail."+ "</p>" +"<p id = 'scnd'>"+"Il est aussi fatigué car il ne dort pas assez."+ "</p>"+'<br>' +'<br>',
"<p id = 'frst'>"+"Jerome se sent mal dans sa peau." + "</p>" + "<p id = 'scnd'>"+"Il décide de consulter un psychologue."+ "</p>"+'<br>' +'<br>',
"<p id = 'frst'>"+"Mathias aime jouer au rugby." + "</p>"+ "<p id = 'scnd'>"+"Il s'entraîne chaque jour."+ "</p>"+'<br>' +'<br>',
"<p id = 'frst'>"+"Lucien n'aime que les habits de marque." + "</p>"+ "<p id = 'scnd'>"+"Il n'achète jamais du 'bas de gamme'."+ "</p>"+'<br>' +'<br>',
"<p id = 'frst'>"+"Laura sent une présence derrière elle." + "</p>"+ "<p id = 'scnd'>"+"Elle se tourne et se fait assaillir par un inconnu."+ "</p>"+'<br>' +'<br>',
"<p id = 'frst'>"+" Joanna adore les roses." + "</p>"+ "<p id = 'scnd'>"+"Surtout quand son copain Steven lui en offre."+ "</p>"+'<br>' +'<br>',
"<p id = 'frst'>"+" Yves apprécie passer du temps avec ses petits enfants." + "</p>"+ "<p id = 'scnd'>"+"Les voir le fait sentir 'jeune'."+ "</p>"+'<br>' +'<br>',
]




//Define functions to use in the code

//Define shuffle function

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

//Define shuffle function for array

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
