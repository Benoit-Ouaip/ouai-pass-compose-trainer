export interface Exercise {
  id: number;
  presentSentence: string;
  verbToConjugate: string;
  correctAnswer: string;
  explanation: string;
}

export interface Scenario {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  exercises: Exercise[];
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Au parc d'aventure",
    description: "Accrobranche, tyrolienne, ponts suspendus. Conjugue les verbes du 1er groupe avec l'auxiliaire 'avoir'.",
    icon: "🌲",
    color: "bg-ouaip-green/20 text-ouaip-green",
    exercises: [
      {
        id: 1,
        presentSentence: "Tom glisse sur la tyrolienne.",
        verbToConjugate: "glisser",
        correctAnswer: "Tom a glissé sur la tyrolienne.",
        explanation: "Le verbe 'glisser' se conjugue avec l'auxiliaire 'avoir' : il a glissé."
      },
      {
        id: 2,
        presentSentence: "Les enfants escaladent tous les filets.",
        verbToConjugate: "escalader",
        correctAnswer: "Les enfants ont escaladé tous les filets.",
        explanation: "Le verbe 'escalader' avec 'ils' : ils ont escaladé."
      },
      {
        id: 3,
        presentSentence: "Marie traverse le pont suspendu.",
        verbToConjugate: "traverser",
        correctAnswer: "Marie a traversé le pont suspendu.",
        explanation: "Le verbe 'traverser' avec 'elle' : elle a traversé."
      },
      {
        id: 4,
        presentSentence: "Paul saute de branche en branche.",
        verbToConjugate: "sauter",
        correctAnswer: "Paul a sauté de branche en branche.",
        explanation: "Le verbe 'sauter' se conjugue avec avoir : il a sauté."
      },
      {
        id: 5,
        presentSentence: "Les guides expliquent les règles.",
        verbToConjugate: "expliquer",
        correctAnswer: "Les guides ont expliqué les règles.",
        explanation: "Le verbe 'expliquer' avec ils : ils ont expliqué."
      },
      {
        id: 6,
        presentSentence: "Nous attachons notre harnais.",
        verbToConjugate: "attacher",
        correctAnswer: "Nous avons attaché notre harnais.",
        explanation: "Le verbe 'attacher' avec nous : nous avons attaché."
      },
      {
        id: 7,
        presentSentence: "Tu observes les autres grimpeurs.",
        verbToConjugate: "observer",
        correctAnswer: "Tu as observé les autres grimpeurs.",
        explanation: "Le verbe 'observer' avec tu : tu as observé."
      },
      {
        id: 8,
        presentSentence: "Elle encourage son équipe.",
        verbToConjugate: "encourager",
        correctAnswer: "Elle a encouragé son équipe.",
        explanation: "Le verbe 'encourager' avec elle : elle a encouragé."
      },
      {
        id: 9,
        presentSentence: "Ils grimpent jusqu'au sommet.",
        verbToConjugate: "grimper",
        correctAnswer: "Ils ont grimpé jusqu'au sommet.",
        explanation: "Le verbe 'grimper' avec ils : ils ont grimpé."
      },
      {
        id: 10,
        presentSentence: "Je teste ma force sur la corde.",
        verbToConjugate: "tester",
        correctAnswer: "J'ai testé ma force sur la corde.",
        explanation: "Le verbe 'tester' avec je : j'ai testé."
      },
      {
        id: 11,
        presentSentence: "Le moniteur aide les débutants.",
        verbToConjugate: "aider",
        correctAnswer: "Le moniteur a aidé les débutants.",
        explanation: "Le verbe 'aider' avec il : il a aidé."
      },
      {
        id: 12,
        presentSentence: "Vous admirez le paysage d'en haut.",
        verbToConjugate: "admirer",
        correctAnswer: "Vous avez admiré le paysage d'en haut.",
        explanation: "Le verbe 'admirer' avec vous : vous avez admiré."
      },
      {
        id: 13,
        presentSentence: "Les participants terminent le parcours.",
        verbToConjugate: "terminer",
        correctAnswer: "Les participants ont terminé le parcours.",
        explanation: "Le verbe 'terminer' avec ils : ils ont terminé."
      },
      {
        id: 14,
        presentSentence: "Sarah photographie ses amis.",
        verbToConjugate: "photographier",
        correctAnswer: "Sarah a photographié ses amis.",
        explanation: "Le verbe 'photographier' avec elle : elle a photographié."
      },
      {
        id: 15,
        presentSentence: "Nous marchons sur les ponts de singe.",
        verbToConjugate: "marcher",
        correctAnswer: "Nous avons marché sur les ponts de singe.",
        explanation: "Le verbe 'marcher' avec nous : nous avons marché."
      },
      {
        id: 16,
        presentSentence: "Tu écoutes les conseils du guide.",
        verbToConjugate: "écouter",
        correctAnswer: "Tu as écouté les conseils du guide.",
        explanation: "Le verbe 'écouter' avec tu : tu as écouté."
      },
      {
        id: 17,
        presentSentence: "Il balance sur la tyrolienne géante.",
        verbToConjugate: "balancer",
        correctAnswer: "Il a balancé sur la tyrolienne géante.",
        explanation: "Le verbe 'balancer' avec il : il a balancé."
      },
      {
        id: 18,
        presentSentence: "Elles jouent dans les filets d'escalade.",
        verbToConjugate: "jouer",
        correctAnswer: "Elles ont joué dans les filets d'escalade.",
        explanation: "Le verbe 'jouer' avec elles : elles ont joué."
      },
      {
        id: 19,
        presentSentence: "Je dépasse mes limites aujourd'hui.",
        verbToConjugate: "dépasser",
        correctAnswer: "J'ai dépassé mes limites aujourd'hui.",
        explanation: "Le verbe 'dépasser' avec je : j'ai dépassé."
      },
      {
        id: 20,
        presentSentence: "Les enfants rigolent dans les arbres.",
        verbToConjugate: "rigoler",
        correctAnswer: "Les enfants ont rigolé dans les arbres.",
        explanation: "Le verbe 'rigoler' avec ils : ils ont rigolé."
      },
      {
        id: 21,
        presentSentence: "Tu progresses rapidement sur le parcours.",
        verbToConjugate: "progresser",
        correctAnswer: "Tu as progressé rapidement sur le parcours.",
        explanation: "Le verbe 'progresser' avec tu : tu as progressé."
      },
      {
        id: 22,
        presentSentence: "Elle monte courageusement vers les hauteurs.",
        verbToConjugate: "monter",
        correctAnswer: "Elle a monté courageusement vers les hauteurs.",
        explanation: "Le verbe 'monter' avec elle : elle a monté."
      },
      {
        id: 23,
        presentSentence: "Nous choisissons le parcours difficile.",
        verbToConjugate: "choisir",
        correctAnswer: "Nous avons choisi le parcours difficile.",
        explanation: "Le verbe 'choisir' avec nous : nous avons choisi."
      },
      {
        id: 24,
        presentSentence: "Vous respectez les consignes de sécurité.",
        verbToConjugate: "respecter",
        correctAnswer: "Vous avez respecté les consignes de sécurité.",
        explanation: "Le verbe 'respecter' avec vous : vous avez respecté."
      },
      {
        id: 25,
        presentSentence: "Ils glissent ensemble sur la grande tyrolienne.",
        verbToConjugate: "glisser",
        correctAnswer: "Ils ont glissé ensemble sur la grande tyrolienne.",
        explanation: "Le verbe 'glisser' avec ils : ils ont glissé."
      },
      {
        id: 26,
        presentSentence: "Je m'amuse beaucoup dans les arbres.",
        verbToConjugate: "s'amuser",
        correctAnswer: "Je me suis amusé(e) beaucoup dans les arbres.",
        explanation: "Le verbe pronominal 's'amuser' avec je : je me suis amusé(e)."
      },
      {
        id: 27,
        presentSentence: "Le groupe découvre de nouveaux défis.",
        verbToConjugate: "découvrir",
        correctAnswer: "Le groupe a découvert de nouveaux défis.",
        explanation: "Le verbe 'découvrir' avec il : il a découvert."
      },
      {
        id: 28,
        presentSentence: "Tu franchis tous les obstacles.",
        verbToConjugate: "franchir",
        correctAnswer: "Tu as franchi tous les obstacles.",
        explanation: "Le verbe 'franchir' avec tu : tu as franchi."
      },
      {
        id: 29,
        presentSentence: "Elle réussit parfaitement son parcours.",
        verbToConjugate: "réussir",
        correctAnswer: "Elle a réussi parfaitement son parcours.",
        explanation: "Le verbe 'réussir' avec elle : elle a réussi."
      },
      {
        id: 30,
        presentSentence: "Nous applaudissons les autres participants.",
        verbToConjugate: "applaudir",
        correctAnswer: "Nous avons applaudi les autres participants.",
        explanation: "Le verbe 'applaudir' avec nous : nous avons applaudi."
      }
    ]
  },
  {
    id: 2,
    title: "Dans la cuisine du chef Léo",
    description: "Recettes, gestes précis. Maîtrise les verbes pronominaux au passé composé.",
    icon: "👨‍🍳",
    color: "bg-ouaip-red/20 text-ouaip-red",
    exercises: [
      {
        id: 31,
        presentSentence: "Nous nous lavons les mains avant de cuisiner.",
        verbToConjugate: "se laver",
        correctAnswer: "Nous nous sommes lavé les mains avant de cuisiner.",
        explanation: "Se laver est pronominal : nous nous sommes lavé les mains."
      },
      {
        id: 32,
        presentSentence: "Le chef se prépare pour le service.",
        verbToConjugate: "se préparer",
        correctAnswer: "Le chef s'est préparé pour le service.",
        explanation: "Se préparer : il s'est préparé."
      },
      {
        id: 33,
        presentSentence: "Je me concentre sur ma recette.",
        verbToConjugate: "se concentrer",
        correctAnswer: "Je me suis concentré(e) sur ma recette.",
        explanation: "Se concentrer : je me suis concentré(e)."
      },
      {
        id: 34,
        presentSentence: "Tu te dépêches de finir ton plat.",
        verbToConjugate: "se dépêcher",
        correctAnswer: "Tu t'es dépêché(e) de finir ton plat.",
        explanation: "Se dépêcher : tu t'es dépêché(e)."
      },
      {
        id: 35,
        presentSentence: "Elle se spécialise dans les desserts.",
        verbToConjugate: "se spécialiser",
        correctAnswer: "Elle s'est spécialisée dans les desserts.",
        explanation: "Se spécialiser : elle s'est spécialisée."
      },
      {
        id: 36,
        presentSentence: "Nous nous amusons à créer de nouveaux plats.",
        verbToConjugate: "s'amuser",
        correctAnswer: "Nous nous sommes amusés à créer de nouveaux plats.",
        explanation: "S'amuser : nous nous sommes amusés."
      },
      {
        id: 37,
        presentSentence: "Vous vous organisez bien en cuisine.",
        verbToConjugate: "s'organiser",
        correctAnswer: "Vous vous êtes organisés bien en cuisine.",
        explanation: "S'organiser : vous vous êtes organisés."
      },
      {
        id: 38,
        presentSentence: "Ils se disputent pour la meilleure recette.",
        verbToConjugate: "se disputer",
        correctAnswer: "Ils se sont disputés pour la meilleure recette.",
        explanation: "Se disputer : ils se sont disputés."
      },
      {
        id: 39,
        presentSentence: "Je me trompe dans les proportions.",
        verbToConjugate: "se tromper",
        correctAnswer: "Je me suis trompé(e) dans les proportions.",
        explanation: "Se tromper : je me suis trompé(e)."
      },
      {
        id: 40,
        presentSentence: "Le cuisinier se repose après le service.",
        verbToConjugate: "se reposer",
        correctAnswer: "Le cuisinier s'est reposé après le service.",
        explanation: "Se reposer : il s'est reposé."
      },
      {
        id: 41,
        presentSentence: "Tu te rappelles la recette de grand-mère.",
        verbToConjugate: "se rappeler",
        correctAnswer: "Tu t'es rappelé(e) la recette de grand-mère.",
        explanation: "Se rappeler : tu t'es rappelé(e)."
      },
      {
        id: 42,
        presentSentence: "Elle se brûle en touchant la poêle.",
        verbToConjugate: "se brûler",
        correctAnswer: "Elle s'est brûlée en touchant la poêle.",
        explanation: "Se brûler : elle s'est brûlée."
      },
      {
        id: 43,
        presentSentence: "Nous nous aidons mutuellement.",
        verbToConjugate: "s'aider",
        correctAnswer: "Nous nous sommes aidés mutuellement.",
        explanation: "S'aider : nous nous sommes aidés."
      },
      {
        id: 44,
        presentSentence: "Vous vous régalez avec ce dessert.",
        verbToConjugate: "se régaler",
        correctAnswer: "Vous vous êtes régalés avec ce dessert.",
        explanation: "Se régaler : vous vous êtes régalés."
      },
      {
        id: 45,
        presentSentence: "Ils se perfectionnent dans l'art culinaire.",
        verbToConjugate: "se perfectionner",
        correctAnswer: "Ils se sont perfectionnés dans l'art culinaire.",
        explanation: "Se perfectionner : ils se sont perfectionnés."
      },
      {
        id: 46,
        presentSentence: "Je me salisse les mains avec la farine.",
        verbToConjugate: "se salir",
        correctAnswer: "Je me suis sali(e) les mains avec la farine.",
        explanation: "Se salir : je me suis sali(e)."
      },
      {
        id: 47,
        presentSentence: "Tu te débrouilles bien avec les épices.",
        verbToConjugate: "se débrouiller",
        correctAnswer: "Tu t'es débrouillé(e) bien avec les épices.",
        explanation: "Se débrouiller : tu t'es débrouillé(e)."
      },
      {
        id: 48,
        presentSentence: "Elle s'inquiète pour la cuisson du gâteau.",
        verbToConjugate: "s'inquiéter",
        correctAnswer: "Elle s'est inquiétée pour la cuisson du gâteau.",
        explanation: "S'inquiéter : elle s'est inquiétée."
      },
      {
        id: 49,
        presentSentence: "Nous nous retrouvons en cuisine chaque matin.",
        verbToConjugate: "se retrouver",
        correctAnswer: "Nous nous sommes retrouvés en cuisine chaque matin.",
        explanation: "Se retrouver : nous nous sommes retrouvés."
      },
      {
        id: 50,
        presentSentence: "Vous vous plaignez de la chaleur des fourneaux.",
        verbToConjugate: "se plaindre",
        correctAnswer: "Vous vous êtes plaints de la chaleur des fourneaux.",
        explanation: "Se plaindre : vous vous êtes plaints."
      },
      {
        id: 51,
        presentSentence: "Ils se moquent de mes maladresses.",
        verbToConjugate: "se moquer",
        correctAnswer: "Ils se sont moqués de mes maladresses.",
        explanation: "Se moquer : ils se sont moqués."
      },
      {
        id: 52,
        presentSentence: "Je me décide enfin pour le menu.",
        verbToConjugate: "se décider",
        correctAnswer: "Je me suis décidé(e) enfin pour le menu.",
        explanation: "Se décider : je me suis décidé(e)."
      },
      {
        id: 53,
        presentSentence: "Tu te demandes comment faire cette sauce.",
        verbToConjugate: "se demander",
        correctAnswer: "Tu t'es demandé(e) comment faire cette sauce.",
        explanation: "Se demander : tu t'es demandé(e)."
      },
      {
        id: 54,
        presentSentence: "Elle se souvient de sa première leçon de cuisine.",
        verbToConjugate: "se souvenir",
        correctAnswer: "Elle s'est souvenue de sa première leçon de cuisine.",
        explanation: "Se souvenir : elle s'est souvenue."
      },
      {
        id: 55,
        presentSentence: "Nous nous excusons pour le retard du plat.",
        verbToConjugate: "s'excuser",
        correctAnswer: "Nous nous sommes excusés pour le retard du plat.",
        explanation: "S'excuser : nous nous sommes excusés."
      },
      {
        id: 56,
        presentSentence: "Vous vous habituez aux nouveaux ustensiles.",
        verbToConjugate: "s'habituer",
        correctAnswer: "Vous vous êtes habitués aux nouveaux ustensiles.",
        explanation: "S'habituer : vous vous êtes habitués."
      },
      {
        id: 57,
        presentSentence: "Ils se félicitent pour ce succès culinaire.",
        verbToConjugate: "se féliciter",
        correctAnswer: "Ils se sont félicités pour ce succès culinaire.",
        explanation: "Se féliciter : ils se sont félicités."
      },
      {
        id: 58,
        presentSentence: "Je me dirige vers le frigo pour les ingrédients.",
        verbToConjugate: "se diriger",
        correctAnswer: "Je me suis dirigé(e) vers le frigo pour les ingrédients.",
        explanation: "Se diriger : je me suis dirigé(e)."
      },
      {
        id: 59,
        presentSentence: "Tu te lèves tôt pour préparer le petit-déjeuner.",
        verbToConjugate: "se lever",
        correctAnswer: "Tu t'es levé(e) tôt pour préparer le petit-déjeuner.",
        explanation: "Se lever : tu t'es levé(e)."
      },
      {
        id: 60,
        presentSentence: "Elle se présente comme la nouvelle apprentie.",
        verbToConjugate: "se présenter",
        correctAnswer: "Elle s'est présentée comme la nouvelle apprentie.",
        explanation: "Se présenter : elle s'est présentée."
      }
    ]
  },
  {
    id: 3,
    title: "Carnet de voyage de Sofia",
    description: "Villes, transports, hôtels. Apprends les verbes qui se conjuguent avec 'être' et leurs accords.",
    icon: "✈️",
    color: "bg-ouaip-blue/20 text-ouaip-blue",
    exercises: [
      {
        id: 61,
        presentSentence: "Sofia arrive tard à Bruxelles.",
        verbToConjugate: "arriver",
        correctAnswer: "Sofia est arrivée tard à Bruxelles.",
        explanation: "Arriver + être + accord féminin : elle est arrivée."
      },
      {
        id: 62,
        presentSentence: "Les touristes sortent de l'hôtel ce matin.",
        verbToConjugate: "sortir",
        correctAnswer: "Les touristes sont sortis de l'hôtel ce matin.",
        explanation: "Sortir + être + accord masculin pluriel : ils sont sortis."
      },
      {
        id: 63,
        presentSentence: "Je pars en voyage demain matin.",
        verbToConjugate: "partir",
        correctAnswer: "Je suis parti(e) en voyage demain matin.",
        explanation: "Partir + être : je suis parti(e)."
      },
      {
        id: 64,
        presentSentence: "Tu viens avec nous en excursion.",
        verbToConjugate: "venir",
        correctAnswer: "Tu es venu(e) avec nous en excursion.",
        explanation: "Venir + être : tu es venu(e)."
      },
      {
        id: 65,
        presentSentence: "Elle tombe amoureuse de cette ville.",
        verbToConjugate: "tomber",
        correctAnswer: "Elle est tombée amoureuse de cette ville.",
        explanation: "Tomber + être + accord féminin : elle est tombée."
      },
      {
        id: 66,
        presentSentence: "Nous entrons dans le musée.",
        verbToConjugate: "entrer",
        correctAnswer: "Nous sommes entrés dans le musée.",
        explanation: "Entrer + être : nous sommes entrés."
      },
      {
        id: 67,
        presentSentence: "Vous retournez à l'hôtel avant la nuit.",
        verbToConjugate: "retourner",
        correctAnswer: "Vous êtes retournés à l'hôtel avant la nuit.",
        explanation: "Retourner + être : vous êtes retournés."
      },
      {
        id: 68,
        presentSentence: "Ils montent au sommet de la tour.",
        verbToConjugate: "monter",
        correctAnswer: "Ils sont montés au sommet de la tour.",
        explanation: "Monter + être : ils sont montés."
      },
      {
        id: 69,
        presentSentence: "Je descends du train à la gare centrale.",
        verbToConjugate: "descendre",
        correctAnswer: "Je suis descendu(e) du train à la gare centrale.",
        explanation: "Descendre + être : je suis descendu(e)."
      },
      {
        id: 70,
        presentSentence: "La voyageuse reste trois jours à Paris.",
        verbToConjugate: "rester",
        correctAnswer: "La voyageuse est restée trois jours à Paris.",
        explanation: "Rester + être + accord féminin : elle est restée."
      },
      {
        id: 71,
        presentSentence: "Tu reviens de ton voyage en Italie.",
        verbToConjugate: "revenir",
        correctAnswer: "Tu es revenu(e) de ton voyage en Italie.",
        explanation: "Revenir + être : tu es revenu(e)."
      },
      {
        id: 72,
        presentSentence: "Elle passe par Londres avant Paris.",
        verbToConjugate: "passer",
        correctAnswer: "Elle est passée par Londres avant Paris.",
        explanation: "Passer + être : elle est passée."
      },
      {
        id: 73,
        presentSentence: "Nous naissons tous avec l'envie de voyager.",
        verbToConjugate: "naître",
        correctAnswer: "Nous sommes nés tous avec l'envie de voyager.",
        explanation: "Naître + être : nous sommes nés."
      },
      {
        id: 74,
        presentSentence: "Vous devenez de vrais globe-trotteurs.",
        verbToConjugate: "devenir",
        correctAnswer: "Vous êtes devenus de vrais globe-trotteurs.",
        explanation: "Devenir + être : vous êtes devenus."
      },
      {
        id: 75,
        presentSentence: "Ils repartent vers une nouvelle destination.",
        verbToConjugate: "repartir",
        correctAnswer: "Ils sont repartis vers une nouvelle destination.",
        explanation: "Repartir + être : ils sont repartis."
      },
      {
        id: 76,
        presentSentence: "Je retombe sous le charme de cette région.",
        verbToConjugate: "retomber",
        correctAnswer: "Je suis retombé(e) sous le charme de cette région.",
        explanation: "Retomber + être : je suis retombé(e)."
      },
      {
        id: 77,
        presentSentence: "Tu interviens pour aider les autres voyageurs.",
        verbToConjugate: "intervenir",
        correctAnswer: "Tu es intervenu(e) pour aider les autres voyageurs.",
        explanation: "Intervenir + être : tu es intervenu(e)."
      },
      {
        id: 78,
        presentSentence: "Elle va directement à son hôtel.",
        verbToConjugate: "aller",
        correctAnswer: "Elle est allée directement à son hôtel.",
        explanation: "Aller + être + accord féminin : elle est allée."
      },
      {
        id: 79,
        presentSentence: "Nous accourons vers la sortie d'urgence.",
        verbToConjugate: "accourir",
        correctAnswer: "Nous sommes accourus vers la sortie d'urgence.",
        explanation: "Accourir + être : nous sommes accourus."
      },
      {
        id: 80,
        presentSentence: "Vous mourez d'envie de visiter ce château.",
        verbToConjugate: "mourir",
        correctAnswer: "Vous êtes morts d'envie de visiter ce château.",
        explanation: "Mourir + être : vous êtes morts."
      },
      {
        id: 81,
        presentSentence: "Ils demeurent dans ce petit village.",
        verbToConjugate: "demeurer",
        correctAnswer: "Ils sont demeurés dans ce petit village.",
        explanation: "Demeurer + être : ils sont demeurés."
      },
      {
        id: 82,
        presentSentence: "Je surviens au bon moment.",
        verbToConjugate: "survenir",
        correctAnswer: "Je suis survenu(e) au bon moment.",
        explanation: "Survenir + être : je suis survenu(e)."
      },
      {
        id: 83,
        presentSentence: "Tu parviens enfin à destination.",
        verbToConjugate: "parvenir",
        correctAnswer: "Tu es parvenu(e) enfin à destination.",
        explanation: "Parvenir + être : tu es parvenu(e)."
      },
      {
        id: 84,
        presentSentence: "Elle disparaît dans la foule du marché.",
        verbToConjugate: "disparaître",
        correctAnswer: "Elle a disparu dans la foule du marché.",
        explanation: "Disparaître + avoir : elle a disparu."
      },
      {
        id: 85,
        presentSentence: "Nous convenons d'un rendez-vous au café.",
        verbToConjugate: "convenir",
        correctAnswer: "Nous sommes convenus d'un rendez-vous au café.",
        explanation: "Convenir + être : nous sommes convenus."
      },
      {
        id: 86,
        presentSentence: "Vous apparaissez soudain devant le monument.",
        verbToConjugate: "apparaître",
        correctAnswer: "Vous avez apparu soudain devant le monument.",
        explanation: "Apparaître + avoir : vous avez apparu."
      },
      {
        id: 87,
        presentSentence: "Ils échappent de justesse au contrôle.",
        verbToConjugate: "échapper",
        correctAnswer: "Ils ont échappé de justesse au contrôle.",
        explanation: "Échapper + avoir : ils ont échappé."
      },
      {
        id: 88,
        presentSentence: "Je surgis de derrière la colonne.",
        verbToConjugate: "surgir",
        correctAnswer: "J'ai surgi de derrière la colonne.",
        explanation: "Surgir + avoir : j'ai surgi."
      },
      {
        id: 89,
        presentSentence: "Tu émerges de ta sieste dans le train.",
        verbToConjugate: "émerger",
        correctAnswer: "Tu as émergé de ta sieste dans le train.",
        explanation: "Émerger + avoir : tu as émergé."
      },
      {
        id: 90,
        presentSentence: "Elle ressort son appareil photo.",
        verbToConjugate: "ressortir",
        correctAnswer: "Elle est ressortie son appareil photo.",
        explanation: "Ressortir + être : elle est ressortie."
      }
    ]
  },
  {
    id: 4,
    title: "Journal du club de foot",
    description: "Match, entraînement, score. Travaille les négations et les adverbes (bien, déjà, encore).",
    icon: "⚽",
    color: "bg-ouaip-yellow/20 text-ouaip-dark-blue",
    exercises: [
      {
        id: 91,
        presentSentence: "Les joueurs ne marquent pas encore de but.",
        verbToConjugate: "marquer",
        correctAnswer: "Les joueurs n'ont pas encore marqué de but.",
        explanation: "Négation avec 'encore' : ne ont pas encore marqué → n'ont pas encore marqué."
      },
      {
        id: 92,
        presentSentence: "L'entraîneur prépare bien son équipe.",
        verbToConjugate: "préparer",
        correctAnswer: "L'entraîneur a bien préparé son équipe.",
        explanation: "Adverbe 'bien' : a bien préparé."
      },
      {
        id: 93,
        presentSentence: "Les supporters ne voient jamais un tel match.",
        verbToConjugate: "voir",
        correctAnswer: "Les supporters n'ont jamais vu un tel match.",
        explanation: "Négation 'ne...jamais' : n'ont jamais vu."
      },
      {
        id: 94,
        presentSentence: "Je ne comprends pas encore les règles.",
        verbToConjugate: "comprendre",
        correctAnswer: "Je n'ai pas encore compris les règles.",
        explanation: "Négation 'ne...pas encore' : n'ai pas encore compris."
      },
      {
        id: 95,
        presentSentence: "Tu joues déjà très bien au foot.",
        verbToConjugate: "jouer",
        correctAnswer: "Tu as déjà très bien joué au foot.",
        explanation: "Adverbe 'déjà' : as déjà joué."
      },
      {
        id: 96,
        presentSentence: "Elle ne rate jamais ses penalties.",
        verbToConjugate: "rater",
        correctAnswer: "Elle n'a jamais raté ses penalties.",
        explanation: "Négation 'ne...jamais' : n'a jamais raté."
      },
      {
        id: 97,
        presentSentence: "Nous courons déjà assez vite.",
        verbToConjugate: "courir",
        correctAnswer: "Nous avons déjà assez vite couru.",
        explanation: "Adverbe 'déjà' : avons déjà couru."
      },
      {
        id: 98,
        presentSentence: "Vous ne perdez jamais contre cette équipe.",
        verbToConjugate: "perdre",
        correctAnswer: "Vous n'avez jamais perdu contre cette équipe.",
        explanation: "Négation 'ne...jamais' : n'avez jamais perdu."
      },
      {
        id: 99,
        presentSentence: "Ils ne finissent pas encore l'entraînement.",
        verbToConjugate: "finir",
        correctAnswer: "Ils n'ont pas encore fini l'entraînement.",
        explanation: "Négation 'ne...pas encore' : n'ont pas encore fini."
      },
      {
        id: 100,
        presentSentence: "Le gardien arrête bien tous les tirs.",
        verbToConjugate: "arrêter",
        correctAnswer: "Le gardien a bien arrêté tous les tirs.",
        explanation: "Adverbe 'bien' : a bien arrêté."
      },
      {
        id: 101,
        presentSentence: "Tu ne gagnes jamais contre moi.",
        verbToConjugate: "gagner",
        correctAnswer: "Tu n'as jamais gagné contre moi.",
        explanation: "Négation 'ne...jamais' : n'as jamais gagné."
      },
      {
        id: 102,
        presentSentence: "Elle dribble déjà comme une professionnelle.",
        verbToConjugate: "dribbler",
        correctAnswer: "Elle a déjà dribblé comme une professionnelle.",
        explanation: "Adverbe 'déjà' : a déjà dribblé."
      },
      {
        id: 103,
        presentSentence: "Nous ne vendons pas encore nos billets.",
        verbToConjugate: "vendre",
        correctAnswer: "Nous n'avons pas encore vendu nos billets.",
        explanation: "Négation 'ne...pas encore' : n'avons pas encore vendu."
      },
      {
        id: 104,
        presentSentence: "Vous tirez bien dans les angles.",
        verbToConjugate: "tirer",
        correctAnswer: "Vous avez bien tiré dans les angles.",
        explanation: "Adverbe 'bien' : avez bien tiré."
      },
      {
        id: 105,
        presentSentence: "Ils ne battent jamais l'équipe adverse.",
        verbToConjugate: "battre",
        correctAnswer: "Ils n'ont jamais battu l'équipe adverse.",
        explanation: "Négation 'ne...jamais' : n'ont jamais battu."
      },
      {
        id: 106,
        presentSentence: "Je ne mets pas encore mes crampons.",
        verbToConjugate: "mettre",
        correctAnswer: "Je n'ai pas encore mis mes crampons.",
        explanation: "Négation 'ne...pas encore' : n'ai pas encore mis."
      },
      {
        id: 107,
        presentSentence: "Tu défends déjà très bien ton but.",
        verbToConjugate: "défendre",
        correctAnswer: "Tu as déjà très bien défendu ton but.",
        explanation: "Adverbe 'déjà' : as déjà défendu."
      },
      {
        id: 108,
        presentSentence: "Elle ne fait jamais de fautes graves.",
        verbToConjugate: "faire",
        correctAnswer: "Elle n'a jamais fait de fautes graves.",
        explanation: "Négation 'ne...jamais' : n'a jamais fait."
      },
      {
        id: 109,
        presentSentence: "Nous sautons bien par-dessus les obstacles.",
        verbToConjugate: "sauter",
        correctAnswer: "Nous avons bien sauté par-dessus les obstacles.",
        explanation: "Adverbe 'bien' : avons bien sauté."
      },
      {
        id: 110,
        presentSentence: "Vous ne prenez pas encore de risques.",
        verbToConjugate: "prendre",
        correctAnswer: "Vous n'avez pas encore pris de risques.",
        explanation: "Négation 'ne...pas encore' : n'avez pas encore pris."
      },
      {
        id: 111,
        presentSentence: "Ils tombent jamais lors des tacles.",
        verbToConjugate: "tomber",
        correctAnswer: "Ils ne sont jamais tombés lors des tacles.",
        explanation: "Négation 'ne...jamais' avec être : ne sont jamais tombés."
      },
      {
        id: 112,
        presentSentence: "Je réussis déjà mes premiers matchs.",
        verbToConjugate: "réussir",
        correctAnswer: "J'ai déjà réussi mes premiers matchs.",
        explanation: "Adverbe 'déjà' : ai déjà réussi."
      },
      {
        id: 113,
        presentSentence: "Tu ne vois pas encore la différence.",
        verbToConjugate: "voir",
        correctAnswer: "Tu n'as pas encore vu la différence.",
        explanation: "Négation 'ne...pas encore' : n'as pas encore vu."
      },
      {
        id: 114,
        presentSentence: "Elle applaudit bien les belles actions.",
        verbToConjugate: "applaudir",
        correctAnswer: "Elle a bien applaudi les belles actions.",
        explanation: "Adverbe 'bien' : a bien applaudi."
      },
      {
        id: 115,
        presentSentence: "Nous ne sortons jamais du terrain perdants.",
        verbToConjugate: "sortir",
        correctAnswer: "Nous ne sommes jamais sortis du terrain perdants.",
        explanation: "Négation 'ne...jamais' avec être : ne sommes jamais sortis."
      },
      {
        id: 116,
        presentSentence: "Vous lisez déjà les mouvements adverses.",
        verbToConjugate: "lire",
        correctAnswer: "Vous avez déjà lu les mouvements adverses.",
        explanation: "Adverbe 'déjà' : avez déjà lu."
      },
      {
        id: 117,
        presentSentence: "Ils ne suivent pas encore les conseils.",
        verbToConjugate: "suivre",
        correctAnswer: "Ils n'ont pas encore suivi les conseils.",
        explanation: "Négation 'ne...pas encore' : n'ont pas encore suivi."
      },
      {
        id: 118,
        presentSentence: "Je choisis bien mes passes.",
        verbToConjugate: "choisir",
        correctAnswer: "J'ai bien choisi mes passes.",
        explanation: "Adverbe 'bien' : ai bien choisi."
      },
      {
        id: 119,
        presentSentence: "Tu ne reviens jamais de tes blessures.",
        verbToConjugate: "revenir",
        correctAnswer: "Tu n'es jamais revenu(e) de tes blessures.",
        explanation: "Négation 'ne...jamais' avec être : n'es jamais revenu(e)."
      },
      {
        id: 120,
        presentSentence: "Elle réfléchit déjà comme une stratège.",
        verbToConjugate: "réfléchir",
        correctAnswer: "Elle a déjà réfléchi comme une stratège.",
        explanation: "Adverbe 'déjà' : a déjà réfléchi."
      }
    ]
  },
  {
    id: 5,
    title: "Escape game virtuel",
    description: "Énigmes, indices, mystères. Maîtrise les verbes irréguliers fréquents (voir, prendre, écrire...).",
    icon: "🔍",
    color: "bg-ouaip-dark-blue/20 text-ouaip-dark-blue",
    exercises: [
      {
        id: 121,
        presentSentence: "Jules écrit le code secret sur le mur.",
        verbToConjugate: "écrire",
        correctAnswer: "Jules a écrit le code secret sur le mur.",
        explanation: "Écrire est irrégulier : il a écrit (et non 'a écrivé')."
      },
      {
        id: 122,
        presentSentence: "Les joueurs prennent des indices.",
        verbToConjugate: "prendre",
        correctAnswer: "Les joueurs ont pris des indices.",
        explanation: "Prendre est irrégulier : ils ont pris (et non 'ont prendé')."
      },
      {
        id: 123,
        presentSentence: "Je vois une clé cachée sous le tapis.",
        verbToConjugate: "voir",
        correctAnswer: "J'ai vu une clé cachée sous le tapis.",
        explanation: "Voir est irrégulier : j'ai vu."
      },
      {
        id: 124,
        presentSentence: "Tu fais une découverte importante.",
        verbToConjugate: "faire",
        correctAnswer: "Tu as fait une découverte importante.",
        explanation: "Faire est irrégulier : tu as fait."
      },
      {
        id: 125,
        presentSentence: "Elle dit la solution à haute voix.",
        verbToConjugate: "dire",
        correctAnswer: "Elle a dit la solution à haute voix.",
        explanation: "Dire est irrégulier : elle a dit."
      },
      {
        id: 126,
        presentSentence: "Nous lisons les instructions attentivement.",
        verbToConjugate: "lire",
        correctAnswer: "Nous avons lu les instructions attentivement.",
        explanation: "Lire est irrégulier : nous avons lu."
      },
      {
        id: 127,
        presentSentence: "Vous mettez la clé dans la serrure.",
        verbToConjugate: "mettre",
        correctAnswer: "Vous avez mis la clé dans la serrure.",
        explanation: "Mettre est irrégulier : vous avez mis."
      },
      {
        id: 128,
        presentSentence: "Ils ouvrent la porte mystérieuse.",
        verbToConjugate: "ouvrir",
        correctAnswer: "Ils ont ouvert la porte mystérieuse.",
        explanation: "Ouvrir est irrégulier : ils ont ouvert."
      },
      {
        id: 129,
        presentSentence: "Je comprends enfin l'énigme.",
        verbToConjugate: "comprendre",
        correctAnswer: "J'ai compris enfin l'énigme.",
        explanation: "Comprendre est irrégulier : j'ai compris."
      },
      {
        id: 130,
        presentSentence: "Tu apprends les règles du jeu.",
        verbToConjugate: "apprendre",
        correctAnswer: "Tu as appris les règles du jeu.",
        explanation: "Apprendre est irrégulier : tu as appris."
      },
      {
        id: 131,
        presentSentence: "Elle boit une potion magique.",
        verbToConjugate: "boire",
        correctAnswer: "Elle a bu une potion magique.",
        explanation: "Boire est irrégulier : elle a bu."
      },
      {
        id: 132,
        presentSentence: "Nous courons vers la sortie.",
        verbToConjugate: "courir",
        correctAnswer: "Nous avons couru vers la sortie.",
        explanation: "Courir est irrégulier : nous avons couru."
      },
      {
        id: 133,
        presentSentence: "Vous offrez votre aide aux autres.",
        verbToConjugate: "offrir",
        correctAnswer: "Vous avez offert votre aide aux autres.",
        explanation: "Offrir est irrégulier : vous avez offert."
      },
      {
        id: 134,
        presentSentence: "Ils reçoivent un message crypté.",
        verbToConjugate: "recevoir",
        correctAnswer: "Ils ont reçu un message crypté.",
        explanation: "Recevoir est irrégulier : ils ont reçu."
      },
      {
        id: 135,
        presentSentence: "Je conduis l'équipe vers la victoire.",
        verbToConjugate: "conduire",
        correctAnswer: "J'ai conduit l'équipe vers la victoire.",
        explanation: "Conduire est irrégulier : j'ai conduit."
      },
      {
        id: 136,
        presentSentence: "Tu construis un plan d'évasion.",
        verbToConjugate: "construire",
        correctAnswer: "Tu as construit un plan d'évasion.",
        explanation: "Construire est irrégulier : tu as construit."
      },
      {
        id: 137,
        presentSentence: "Elle craint les pièges du labyrinthe.",
        verbToConjugate: "craindre",
        correctAnswer: "Elle a craint les pièges du labyrinthe.",
        explanation: "Craindre est irrégulier : elle a craint."
      },
      {
        id: 138,
        presentSentence: "Nous résolvons toutes les énigmes.",
        verbToConjugate: "résoudre",
        correctAnswer: "Nous avons résolu toutes les énigmes.",
        explanation: "Résoudre est irrégulier : nous avons résolu."
      },
      {
        id: 139,
        presentSentence: "Vous connaissez déjà ce type de jeu.",
        verbToConjugate: "connaître",
        correctAnswer: "Vous avez connu déjà ce type de jeu.",
        explanation: "Connaître est irrégulier : vous avez connu."
      },
      {
        id: 140,
        presentSentence: "Ils vivent une aventure extraordinaire.",
        verbToConjugate: "vivre",
        correctAnswer: "Ils ont vécu une aventure extraordinaire.",
        explanation: "Vivre est irrégulier : ils ont vécu."
      },
      {
        id: 141,
        presentSentence: "Je peins un symbole sur le mur.",
        verbToConjugate: "peindre",
        correctAnswer: "J'ai peint un symbole sur le mur.",
        explanation: "Peindre est irrégulier : j'ai peint."
      },
      {
        id: 142,
        presentSentence: "Tu joins les deux parties du puzzle.",
        verbToConjugate: "joindre",
        correctAnswer: "Tu as joint les deux parties du puzzle.",
        explanation: "Joindre est irrégulier : tu as joint."
      },
      {
        id: 143,
        presentSentence: "Elle rompt le code de la porte.",
        verbToConjugate: "rompre",
        correctAnswer: "Elle a rompu le code de la porte.",
        explanation: "Rompre est irrégulier : elle a rompu."
      },
      {
        id: 144,
        presentSentence: "Nous suivons les indices un par un.",
        verbToConjugate: "suivre",
        correctAnswer: "Nous avons suivi les indices un par un.",
        explanation: "Suivre est irrégulier : nous avons suivi."
      },
      {
        id: 145,
        presentSentence: "Vous battez le record de temps.",
        verbToConjugate: "battre",
        correctAnswer: "Vous avez battu le record de temps.",
        explanation: "Battre est irrégulier : vous avez battu."
      },
      {
        id: 146,
        presentSentence: "Ils perdent leur chemin dans le labyrinthe.",
        verbToConjugate: "perdre",
        correctAnswer: "Ils ont perdu leur chemin dans le labyrinthe.",
        explanation: "Perdre est irrégulier : ils ont perdu."
      },
      {
        id: 147,
        presentSentence: "Je tiens fermement la clé magique.",
        verbToConjugate: "tenir",
        correctAnswer: "J'ai tenu fermement la clé magique.",
        explanation: "Tenir est irrégulier : j'ai tenu."
      },
      {
        id: 148,
        presentSentence: "Tu obtiens finalement la réponse.",
        verbToConjugate: "obtenir",
        correctAnswer: "Tu as obtenu finalement la réponse.",
        explanation: "Obtenir est irrégulier : tu as obtenu."
      },
      {
        id: 149,
        presentSentence: "Elle pousse la porte secrète.",
        verbToConjugate: "pousser",
        correctAnswer: "Elle a poussé la porte secrète.",
        explanation: "Pousser (verbe régulier) : elle a poussé."
      },
      {
        id: 150,
        presentSentence: "Nous découvrons le trésor caché.",
        verbToConjugate: "découvrir",
        correctAnswer: "Nous avons découvert le trésor caché.",
        explanation: "Découvrir est irrégulier : nous avons découvert."
      }
    ]
  }
];