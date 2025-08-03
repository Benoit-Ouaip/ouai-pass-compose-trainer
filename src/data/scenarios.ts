export interface Exercise {
  id: number;
  presentSentence: string;
  verbToConjugate: string;
  correctAnswer: string;
  explanation: string;
  choices?: string[]; // Pour le niveau 1 (choix multiple)
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
        verbToConjugate: "glisse",
        correctAnswer: "a glissé",
        explanation: "Le verbe 'glisser' se conjugue avec l'auxiliaire 'avoir' : il a glissé.",
        choices: ["a glissé", "est glissé", "s'est glissé"]
      },
      {
        id: 2,
        presentSentence: "Les enfants escaladent tous les filets.",
        verbToConjugate: "escaladent",
        correctAnswer: "ont escaladé",
        explanation: "Le verbe 'escalader' avec 'ils' : ils ont escaladé.",
        choices: ["ont escaladé", "sont escaladés", "se sont escaladés"]
      },
      {
        id: 3,
        presentSentence: "Marie traverse le pont suspendu.",
        verbToConjugate: "traverse",
        correctAnswer: "a traversé",
        explanation: "Le verbe 'traverser' avec 'elle' : elle a traversé.",
        choices: ["a traversé", "est traversée", "s'est traversée"]
      },
      {
        id: 4,
        presentSentence: "Paul saute de branche en branche.",
        verbToConjugate: "saute",
        correctAnswer: "a sauté",
        explanation: "Le verbe 'sauter' se conjugue avec avoir : il a sauté.",
        choices: ["a sauté", "est sauté", "s'est sauté"]
      },
      {
        id: 5,
        presentSentence: "Les guides expliquent les règles.",
        verbToConjugate: "expliquent",
        correctAnswer: "ont expliqué",
        explanation: "Le verbe 'expliquer' avec ils : ils ont expliqué.",
        choices: ["ont expliqué", "sont expliqués", "se sont expliqués"]
      },
      {
        id: 6,
        presentSentence: "Nous attachons notre harnais.",
        verbToConjugate: "attachons",
        correctAnswer: "avons attaché",
        explanation: "Le verbe 'attacher' avec nous : nous avons attaché.",
        choices: ["avons attaché", "sommes attachés", "nous sommes attachés"]
      },
      {
        id: 7,
        presentSentence: "Tu observes les autres grimpeurs.",
        verbToConjugate: "observes",
        correctAnswer: "as observé",
        explanation: "Le verbe 'observer' avec tu : tu as observé.",
        choices: ["as observé", "es observé", "t'es observé"]
      },
      {
        id: 8,
        presentSentence: "Elle encourage son équipe.",
        verbToConjugate: "encourage",
        correctAnswer: "a encouragé",
        explanation: "Le verbe 'encourager' avec elle : elle a encouragé.",
        choices: ["a encouragé", "est encouragée", "s'est encouragée"]
      },
      {
        id: 9,
        presentSentence: "Ils grimpent jusqu'au sommet.",
        verbToConjugate: "grimpent",
        correctAnswer: "ont grimpé",
        explanation: "Le verbe 'grimper' avec ils : ils ont grimpé.",
        choices: ["ont grimpé", "sont grimpés", "se sont grimpés"]
      },
      {
        id: 10,
        presentSentence: "Je teste ma force sur la corde.",
        verbToConjugate: "teste",
        correctAnswer: "ai testé",
        explanation: "Le verbe 'tester' avec je : j'ai testé.",
        choices: ["ai testé", "suis testé", "me suis testé"]
      },
      {
        id: 11,
        presentSentence: "Le moniteur aide les débutants.",
        verbToConjugate: "aide",
        correctAnswer: "a aidé",
        explanation: "Le verbe 'aider' avec il : il a aidé.",
        choices: ["a aidé", "est aidé", "s'est aidé"]
      },
      {
        id: 12,
        presentSentence: "Vous admirez le paysage d'en haut.",
        verbToConjugate: "admirez",
        correctAnswer: "avez admiré",
        explanation: "Le verbe 'admirer' avec vous : vous avez admiré.",
        choices: ["avez admiré", "êtes admirés", "vous êtes admirés"]
      },
      {
        id: 13,
        presentSentence: "Les participants terminent le parcours.",
        verbToConjugate: "terminent",
        correctAnswer: "ont terminé",
        explanation: "Le verbe 'terminer' avec ils : ils ont terminé."
      },
      {
        id: 14,
        presentSentence: "Sarah photographie ses amis.",
        verbToConjugate: "photographie",
        correctAnswer: "a photographié",
        explanation: "Le verbe 'photographier' avec elle : elle a photographié."
      },
      {
        id: 15,
        presentSentence: "Nous marchons sur les ponts de singe.",
        verbToConjugate: "marchons",
        correctAnswer: "avons marché",
        explanation: "Le verbe 'marcher' avec nous : nous avons marché."
      },
      {
        id: 16,
        presentSentence: "Tu écoutes les conseils du guide.",
        verbToConjugate: "écoutes",
        correctAnswer: "as écouté",
        explanation: "Le verbe 'écouter' avec tu : tu as écouté."
      },
      {
        id: 17,
        presentSentence: "Il balance sur la tyrolienne géante.",
        verbToConjugate: "balance",
        correctAnswer: "a balancé",
        explanation: "Le verbe 'balancer' avec il : il a balancé."
      },
      {
        id: 18,
        presentSentence: "Elles jouent dans les filets d'escalade.",
        verbToConjugate: "jouent",
        correctAnswer: "ont joué",
        explanation: "Le verbe 'jouer' avec elles : elles ont joué."
      },
      {
        id: 19,
        presentSentence: "Elle dépasse ses limites aujourd'hui.",
        verbToConjugate: "dépasse",
        correctAnswer: "a dépassé",
        explanation: "Le verbe 'dépasser' avec elle : elle a dépassé."
      },
      {
        id: 20,
        presentSentence: "Les enfants rigolent dans les arbres.",
        verbToConjugate: "rigolent",
        correctAnswer: "ont rigolé",
        explanation: "Le verbe 'rigoler' avec ils : ils ont rigolé."
      },
      {
        id: 21,
        presentSentence: "Tu progresses rapidement sur le parcours.",
        verbToConjugate: "progresses",
        correctAnswer: "as progressé",
        explanation: "Le verbe 'progresser' avec tu : tu as progressé."
      },
      {
        id: 22,
        presentSentence: "Elle monte courageusement vers les hauteurs.",
        verbToConjugate: "monte",
        correctAnswer: "a monté",
        explanation: "Le verbe 'monter' avec elle : elle a monté."
      },
      {
        id: 23,
        presentSentence: "Nous choisissons le parcours difficile.",
        verbToConjugate: "choisissons",
        correctAnswer: "avons choisi",
        explanation: "Le verbe 'choisir' avec nous : nous avons choisi."
      },
      {
        id: 24,
        presentSentence: "Vous respectez les consignes de sécurité.",
        verbToConjugate: "respectez",
        correctAnswer: "avez respecté",
        explanation: "Le verbe 'respecter' avec vous : vous avez respecté."
      },
      {
        id: 25,
        presentSentence: "Ils glissent ensemble sur la grande tyrolienne.",
        verbToConjugate: "glissent",
        correctAnswer: "ont glissé",
        explanation: "Le verbe 'glisser' avec ils : ils ont glissé."
      },
      {
        id: 26,
        presentSentence: "Elle s'amuse beaucoup dans les arbres.",
        verbToConjugate: "s'amuse",
        correctAnswer: "s'est amusée",
        explanation: "Le verbe pronominal 's'amuser' avec elle : elle s'est amusée."
      },
      {
        id: 27,
        presentSentence: "Le groupe découvre de nouveaux défis.",
        verbToConjugate: "découvre",
        correctAnswer: "a découvert",
        explanation: "Le verbe 'découvrir' avec il : il a découvert."
      },
      {
        id: 28,
        presentSentence: "Tu franchis tous les obstacles.",
        verbToConjugate: "franchis",
        correctAnswer: "as franchi",
        explanation: "Le verbe 'franchir' avec tu : tu as franchi."
      },
      {
        id: 29,
        presentSentence: "Elle réussit parfaitement son parcours.",
        verbToConjugate: "réussit",
        correctAnswer: "a réussi",
        explanation: "Le verbe 'réussir' avec elle : elle a réussi."
      },
      {
        id: 30,
        presentSentence: "Nous applaudissons les autres participants.",
        verbToConjugate: "applaudissons",
        correctAnswer: "avons applaudi",
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
        verbToConjugate: "nous lavons",
        correctAnswer: "nous sommes lavé",
        explanation: "Se laver est pronominal : nous nous sommes lavé les mains.",
        choices: ["nous sommes lavé", "nous avons lavé", "nous étions lavé"]
      },
      {
        id: 32,
        presentSentence: "Le chef se prépare pour le service.",
        verbToConjugate: "se prépare",
        correctAnswer: "s'est préparé",
        explanation: "Se préparer : il s'est préparé.",
        choices: ["s'est préparé", "a préparé", "est préparé"]
      },
      {
        id: 33,
        presentSentence: "Elle se concentre sur sa recette.",
        verbToConjugate: "se concentre",
        correctAnswer: "s'est concentrée",
        explanation: "Se concentrer : elle s'est concentrée.",
        choices: ["s'est concentrée", "a concentré", "est concentrée"]
      },
      {
        id: 34,
        presentSentence: "Tu te dépêches de finir ton plat.",
        verbToConjugate: "te dépêches",
        correctAnswer: "t'es dépêché(e)",
        explanation: "Se dépêcher : tu t'es dépêché(e).",
        choices: ["t'es dépêché(e)", "as dépêché", "es dépêché"]
      },
      {
        id: 35,
        presentSentence: "Elle se spécialise dans les desserts.",
        verbToConjugate: "se spécialise",
        correctAnswer: "s'est spécialisée",
        explanation: "Se spécialiser : elle s'est spécialisée."
      },
      {
        id: 36,
        presentSentence: "Nous nous amusons à créer de nouveaux plats.",
        verbToConjugate: "nous amusons",
        correctAnswer: "nous sommes amusés",
        explanation: "S'amuser : nous nous sommes amusés."
      },
      {
        id: 37,
        presentSentence: "Vous vous organisez bien en cuisine.",
        verbToConjugate: "vous organisez",
        correctAnswer: "vous êtes organisés",
        explanation: "S'organiser : vous vous êtes organisés."
      },
      {
        id: 38,
        presentSentence: "Ils se disputent pour la meilleure recette.",
        verbToConjugate: "se disputent",
        correctAnswer: "se sont disputés",
        explanation: "Se disputer : ils se sont disputés."
      },
      {
        id: 39,
        presentSentence: "Il se trompe dans les proportions.",
        verbToConjugate: "se trompe",
        correctAnswer: "s'est trompé",
        explanation: "Se tromper : il s'est trompé."
      },
      {
        id: 40,
        presentSentence: "Le cuisinier se repose après le service.",
        verbToConjugate: "se repose",
        correctAnswer: "s'est reposé",
        explanation: "Se reposer : il s'est reposé."
      },
      {
        id: 41,
        presentSentence: "Tu te rappelles la recette de grand-mère.",
        verbToConjugate: "te rappelles",
        correctAnswer: "t'es rappelé(e)",
        explanation: "Se rappeler : tu t'es rappelé(e)."
      },
      {
        id: 42,
        presentSentence: "Elle se brûle en touchant la poêle.",
        verbToConjugate: "se brûle",
        correctAnswer: "s'est brûlée",
        explanation: "Se brûler : elle s'est brûlée."
      },
      {
        id: 43,
        presentSentence: "Nous nous aidons mutuellement.",
        verbToConjugate: "nous aidons",
        correctAnswer: "nous sommes aidés",
        explanation: "S'aider : nous nous sommes aidés."
      },
      {
        id: 44,
        presentSentence: "Vous vous régalez avec ce dessert.",
        verbToConjugate: "vous régalez",
        correctAnswer: "vous êtes régalés",
        explanation: "Se régaler : vous vous êtes régalés."
      },
      {
        id: 45,
        presentSentence: "Ils se perfectionnent dans l'art culinaire.",
        verbToConjugate: "se perfectionnent",
        correctAnswer: "se sont perfectionnés",
        explanation: "Se perfectionner : ils se sont perfectionnés."
      },
      {
        id: 46,
        presentSentence: "Il se salit les mains avec la farine.",
        verbToConjugate: "se salit",
        correctAnswer: "s'est sali",
        explanation: "Se salir : il s'est sali."
      },
      {
        id: 47,
        presentSentence: "Tu te débrouilles bien avec les épices.",
        verbToConjugate: "te débrouilles",
        correctAnswer: "t'es débrouillé(e)",
        explanation: "Se débrouiller : tu t'es débrouillé(e)."
      },
      {
        id: 48,
        presentSentence: "Elle s'inquiète pour la cuisson du gâteau.",
        verbToConjugate: "s'inquiète",
        correctAnswer: "s'est inquiétée",
        explanation: "S'inquiéter : elle s'est inquiétée."
      },
      {
        id: 49,
        presentSentence: "Nous nous retrouvons en cuisine chaque matin.",
        verbToConjugate: "nous retrouvons",
        correctAnswer: "nous sommes retrouvés",
        explanation: "Se retrouver : nous nous sommes retrouvés."
      },
      {
        id: 50,
        presentSentence: "Vous vous plaignez de la chaleur des fourneaux.",
        verbToConjugate: "vous plaignez",
        correctAnswer: "vous êtes plaints",
        explanation: "Se plaindre : vous vous êtes plaints."
      },
      {
        id: 51,
        presentSentence: "Ils se moquent de mes maladresses.",
        verbToConjugate: "se moquent",
        correctAnswer: "se sont moqués",
        explanation: "Se moquer : ils se sont moqués."
      },
      {
        id: 52,
        presentSentence: "Elle se décide enfin pour le menu.",
        verbToConjugate: "se décide",
        correctAnswer: "s'est décidée",
        explanation: "Se décider : elle s'est décidée."
      },
      {
        id: 53,
        presentSentence: "Tu te demandes comment faire cette sauce.",
        verbToConjugate: "te demandes",
        correctAnswer: "t'es demandé(e)",
        explanation: "Se demander : tu t'es demandé(e)."
      },
      {
        id: 54,
        presentSentence: "Elle se souvient de sa première leçon de cuisine.",
        verbToConjugate: "se souvient",
        correctAnswer: "s'est souvenue",
        explanation: "Se souvenir : elle s'est souvenue."
      },
      {
        id: 55,
        presentSentence: "Nous nous excusons pour le retard du plat.",
        verbToConjugate: "nous excusons",
        correctAnswer: "nous sommes excusés",
        explanation: "S'excuser : nous nous sommes excusés."
      },
      {
        id: 56,
        presentSentence: "Vous vous habituez aux nouveaux ustensiles.",
        verbToConjugate: "vous habituez",
        correctAnswer: "vous êtes habitués",
        explanation: "S'habituer : vous vous êtes habitués."
      },
      {
        id: 57,
        presentSentence: "Ils se félicitent pour ce succès culinaire.",
        verbToConjugate: "se félicitent",
        correctAnswer: "se sont félicités",
        explanation: "Se féliciter : ils se sont félicités."
      },
      {
        id: 58,
        presentSentence: "Il se dirige vers le frigo pour les ingrédients.",
        verbToConjugate: "se dirige",
        correctAnswer: "s'est dirigé",
        explanation: "Se diriger : il s'est dirigé."
      },
      {
        id: 59,
        presentSentence: "Tu te lèves tôt pour préparer le petit-déjeuner.",
        verbToConjugate: "te lèves",
        correctAnswer: "t'es levé(e)",
        explanation: "Se lever : tu t'es levé(e)."
      },
      {
        id: 60,
        presentSentence: "Elle se présente comme la nouvelle apprentie.",
        verbToConjugate: "se présente",
        correctAnswer: "s'est présentée",
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
        verbToConjugate: "arrive",
        correctAnswer: "est arrivée",
        explanation: "Arriver + être + accord féminin : elle est arrivée."
      },
      {
        id: 62,
        presentSentence: "Les touristes sortent de l'hôtel ce matin.",
        verbToConjugate: "sortent",
        correctAnswer: "sont sortis",
        explanation: "Sortir + être + accord masculin pluriel : ils sont sortis."
      },
      {
        id: 63,
        presentSentence: "Nous partons en voyage demain matin.",
        verbToConjugate: "partons",
        correctAnswer: "sommes partis",
        explanation: "Partir + être : nous sommes partis."
      },
      {
        id: 64,
        presentSentence: "Tu viens avec nous en excursion.",
        verbToConjugate: "viens",
        correctAnswer: "es venu(e)",
        explanation: "Venir + être : tu es venu(e)."
      },
      {
        id: 65,
        presentSentence: "Elle tombe amoureuse de cette ville.",
        verbToConjugate: "tombe",
        correctAnswer: "est tombée",
        explanation: "Tomber + être + accord féminin : elle est tombée."
      },
      {
        id: 66,
        presentSentence: "Nous entrons dans le musée.",
        verbToConjugate: "entrons",
        correctAnswer: "sommes entrés",
        explanation: "Entrer + être : nous sommes entrés."
      },
      {
        id: 67,
        presentSentence: "Vous retournez à l'hôtel avant la nuit.",
        verbToConjugate: "retournez",
        correctAnswer: "êtes retournés",
        explanation: "Retourner + être : vous êtes retournés."
      },
      {
        id: 68,
        presentSentence: "Ils montent au sommet de la tour.",
        verbToConjugate: "montent",
        correctAnswer: "sont montés",
        explanation: "Monter + être : ils sont montés."
      },
      {
        id: 69,
        presentSentence: "Il descend du train à la gare centrale.",
        verbToConjugate: "descend",
        correctAnswer: "est descendu",
        explanation: "Descendre + être : il est descendu."
      },
      {
        id: 70,
        presentSentence: "La voyageuse reste trois jours à Paris.",
        verbToConjugate: "reste",
        correctAnswer: "est restée",
        explanation: "Rester + être + accord féminin : elle est restée."
      },
      {
        id: 71,
        presentSentence: "Tu reviens de ton voyage en Italie.",
        verbToConjugate: "reviens",
        correctAnswer: "es revenu(e)",
        explanation: "Revenir + être : tu es revenu(e)."
      },
      {
        id: 72,
        presentSentence: "Elle passe par Londres avant Paris.",
        verbToConjugate: "passe",
        correctAnswer: "est passée",
        explanation: "Passer + être : elle est passée."
      },
      {
        id: 73,
        presentSentence: "Nous naissons tous avec l'envie de voyager.",
        verbToConjugate: "naissons",
        correctAnswer: "sommes nés",
        explanation: "Naître + être : nous sommes nés."
      },
      {
        id: 74,
        presentSentence: "Vous devenez de vrais globe-trotteurs.",
        verbToConjugate: "devenez",
        correctAnswer: "êtes devenus",
        explanation: "Devenir + être : vous êtes devenus."
      },
      {
        id: 75,
        presentSentence: "Ils repartent vers une nouvelle destination.",
        verbToConjugate: "repartent",
        correctAnswer: "sont repartis",
        explanation: "Repartir + être : ils sont repartis."
      },
      {
        id: 76,
        presentSentence: "Elle retombe sous le charme de cette région.",
        verbToConjugate: "retombe",
        correctAnswer: "est retombée",
        explanation: "Retomber + être : elle est retombée."
      },
      {
        id: 77,
        presentSentence: "Tu interviens pour aider les autres voyageurs.",
        verbToConjugate: "interviens",
        correctAnswer: "es intervenu(e)",
        explanation: "Intervenir + être : tu es intervenu(e)."
      },
      {
        id: 78,
        presentSentence: "Elle va directement à son hôtel.",
        verbToConjugate: "va",
        correctAnswer: "est allée",
        explanation: "Aller + être + accord féminin : elle est allée."
      },
      {
        id: 79,
        presentSentence: "Nous accourons vers la sortie d'urgence.",
        verbToConjugate: "accourons",
        correctAnswer: "sommes accourus",
        explanation: "Accourir + être : nous sommes accourus."
      },
      {
        id: 80,
        presentSentence: "Vous mourez d'envie de visiter ce château.",
        verbToConjugate: "mourez",
        correctAnswer: "êtes morts",
        explanation: "Mourir + être : vous êtes morts."
      },
      {
        id: 81,
        presentSentence: "Ils demeurent dans ce petit village.",
        verbToConjugate: "demeurent",
        correctAnswer: "sont demeurés",
        explanation: "Demeurer + être : ils sont demeurés."
      },
      {
        id: 82,
        presentSentence: "Il survient au bon moment.",
        verbToConjugate: "survient",
        correctAnswer: "est survenu",
        explanation: "Survenir + être : il est survenu."
      },
      {
        id: 83,
        presentSentence: "Tu parviens enfin à destination.",
        verbToConjugate: "parviens",
        correctAnswer: "es parvenu(e)",
        explanation: "Parvenir + être : tu es parvenu(e)."
      },
      {
        id: 84,
        presentSentence: "Elle disparaît dans la foule du marché.",
        verbToConjugate: "disparaît",
        correctAnswer: "a disparu",
        explanation: "Disparaître + avoir : elle a disparu."
      },
      {
        id: 85,
        presentSentence: "Nous convenons d'un rendez-vous au café.",
        verbToConjugate: "convenons",
        correctAnswer: "sommes convenus",
        explanation: "Convenir + être : nous sommes convenus."
      },
      {
        id: 86,
        presentSentence: "Vous apparaissez soudain devant le monument.",
        verbToConjugate: "apparaissez",
        correctAnswer: "avez apparu",
        explanation: "Apparaître + avoir : vous avez apparu."
      },
      {
        id: 87,
        presentSentence: "Ils échappent de justesse au contrôle.",
        verbToConjugate: "échappent",
        correctAnswer: "ont échappé",
        explanation: "Échapper + avoir : ils ont échappé."
      },
      {
        id: 88,
        presentSentence: "Je surgis de derrière la colonne.",
        verbToConjugate: "surgis",
        correctAnswer: "ai surgi",
        explanation: "Surgir + avoir : j'ai surgi."
      },
      {
        id: 89,
        presentSentence: "Tu émerges de ta sieste dans le train.",
        verbToConjugate: "émerges",
        correctAnswer: "as émergé",
        explanation: "Émerger + avoir : tu as émergé."
      },
      {
        id: 90,
        presentSentence: "Elle ressort son appareil photo.",
        verbToConjugate: "ressort",
        correctAnswer: "est ressortie",
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
        verbToConjugate: "marquent",
        correctAnswer: "n'ont pas encore marqué",
        explanation: "Négation avec 'encore' : ne ont pas encore marqué → n'ont pas encore marqué."
      },
      {
        id: 92,
        presentSentence: "L'entraîneur prépare bien son équipe.",
        verbToConjugate: "prépare",
        correctAnswer: "a bien préparé",
        explanation: "Adverbe 'bien' : a bien préparé."
      },
      {
        id: 93,
        presentSentence: "Les supporters ne voient jamais un tel match.",
        verbToConjugate: "voient",
        correctAnswer: "n'ont jamais vu",
        explanation: "Négation 'ne...jamais' : n'ont jamais vu."
      },
      {
        id: 94,
        presentSentence: "Il ne comprend pas encore les règles.",
        verbToConjugate: "comprend",
        correctAnswer: "n'a pas encore compris",
        explanation: "Négation 'ne...pas encore' : n'a pas encore compris."
      },
      {
        id: 95,
        presentSentence: "Tu joues déjà très bien au foot.",
        verbToConjugate: "joues",
        correctAnswer: "as déjà joué",
        explanation: "Adverbe 'déjà' : as déjà joué."
      },
      {
        id: 96,
        presentSentence: "Elle ne rate jamais ses penalties.",
        verbToConjugate: "rate",
        correctAnswer: "n'a jamais raté",
        explanation: "Négation 'ne...jamais' : n'a jamais raté."
      },
      {
        id: 97,
        presentSentence: "Nous courons déjà assez vite.",
        verbToConjugate: "courons",
        correctAnswer: "avons déjà couru",
        explanation: "Adverbe 'déjà' : avons déjà couru."
      },
      {
        id: 98,
        presentSentence: "Vous ne perdez jamais contre cette équipe.",
        verbToConjugate: "perdez",
        correctAnswer: "n'avez jamais perdu",
        explanation: "Négation 'ne...jamais' : n'avez jamais perdu."
      },
      {
        id: 99,
        presentSentence: "Ils ne finissent pas encore l'entraînement.",
        verbToConjugate: "finissent",
        correctAnswer: "n'ont pas encore fini",
        explanation: "Négation 'ne...pas encore' : n'ont pas encore fini."
      },
      {
        id: 100,
        presentSentence: "Le gardien arrête bien tous les tirs.",
        verbToConjugate: "arrête",
        correctAnswer: "a bien arrêté",
        explanation: "Adverbe 'bien' : a bien arrêté."
      },
      {
        id: 101,
        presentSentence: "Tu ne gagnes jamais contre moi.",
        verbToConjugate: "gagnes",
        correctAnswer: "n'as jamais gagné",
        explanation: "Négation 'ne...jamais' : n'as jamais gagné."
      },
      {
        id: 102,
        presentSentence: "Elle dribble déjà comme une professionnelle.",
        verbToConjugate: "dribble",
        correctAnswer: "a déjà dribblé",
        explanation: "Adverbe 'déjà' : a déjà dribblé."
      },
      {
        id: 103,
        presentSentence: "Nous ne vendons pas encore nos billets.",
        verbToConjugate: "vendons",
        correctAnswer: "n'avons pas encore vendu",
        explanation: "Négation 'ne...pas encore' : n'avons pas encore vendu."
      },
      {
        id: 104,
        presentSentence: "Vous tirez bien dans les angles.",
        verbToConjugate: "tirez",
        correctAnswer: "avez bien tiré",
        explanation: "Adverbe 'bien' : avez bien tiré."
      },
      {
        id: 105,
        presentSentence: "Ils ne battent jamais l'équipe adverse.",
        verbToConjugate: "battent",
        correctAnswer: "n'ont jamais battu",
        explanation: "Négation 'ne...jamais' : n'ont jamais battu."
      },
      {
        id: 106,
        presentSentence: "Je ne mets pas encore mes crampons.",
        verbToConjugate: "mets",
        correctAnswer: "n'ai pas encore mis",
        explanation: "Négation 'ne...pas encore' : n'ai pas encore mis."
      },
      {
        id: 107,
        presentSentence: "Tu défends déjà très bien ton but.",
        verbToConjugate: "défends",
        correctAnswer: "as déjà défendu",
        explanation: "Adverbe 'déjà' : as déjà défendu."
      },
      {
        id: 108,
        presentSentence: "Elle ne fait jamais de fautes graves.",
        verbToConjugate: "fait",
        correctAnswer: "n'a jamais fait",
        explanation: "Négation 'ne...jamais' : n'a jamais fait."
      },
      {
        id: 109,
        presentSentence: "Nous sautons bien par-dessus les obstacles.",
        verbToConjugate: "sautons",
        correctAnswer: "avons bien sauté",
        explanation: "Adverbe 'bien' : avons bien sauté."
      },
      {
        id: 110,
        presentSentence: "Vous ne prenez pas encore de risques.",
        verbToConjugate: "prenez",
        correctAnswer: "n'avez pas encore pris",
        explanation: "Négation 'ne...pas encore' : n'avez pas encore pris."
      },
      {
        id: 111,
        presentSentence: "Ils ne tombent jamais lors des tacles.",
        verbToConjugate: "tombent",
        correctAnswer: "ne sont jamais tombés",
        explanation: "Négation 'ne...jamais' avec être : ne sont jamais tombés."
      },
      {
        id: 112,
        presentSentence: "Je réussis déjà mes premiers matchs.",
        verbToConjugate: "réussis",
        correctAnswer: "ai déjà réussi",
        explanation: "Adverbe 'déjà' : ai déjà réussi."
      },
      {
        id: 113,
        presentSentence: "Tu ne vois pas encore la différence.",
        verbToConjugate: "vois",
        correctAnswer: "n'as pas encore vu",
        explanation: "Négation 'ne...pas encore' : n'as pas encore vu."
      },
      {
        id: 114,
        presentSentence: "Elle applaudit bien les belles actions.",
        verbToConjugate: "applaudit",
        correctAnswer: "a bien applaudi",
        explanation: "Adverbe 'bien' : a bien applaudi."
      },
      {
        id: 115,
        presentSentence: "Nous ne sortons jamais du terrain perdants.",
        verbToConjugate: "sortons",
        correctAnswer: "ne sommes jamais sortis",
        explanation: "Négation 'ne...jamais' avec être : ne sommes jamais sortis."
      },
      {
        id: 116,
        presentSentence: "Vous lisez déjà les mouvements adverses.",
        verbToConjugate: "lisez",
        correctAnswer: "avez déjà lu",
        explanation: "Adverbe 'déjà' : avez déjà lu."
      },
      {
        id: 117,
        presentSentence: "Ils ne suivent pas encore les conseils.",
        verbToConjugate: "suivent",
        correctAnswer: "n'ont pas encore suivi",
        explanation: "Négation 'ne...pas encore' : n'ont pas encore suivi."
      },
      {
        id: 118,
        presentSentence: "Je choisis bien mes passes.",
        verbToConjugate: "choisis",
        correctAnswer: "ai bien choisi",
        explanation: "Adverbe 'bien' : ai bien choisi."
      },
      {
        id: 119,
        presentSentence: "Tu ne reviens jamais de tes blessures.",
        verbToConjugate: "reviens",
        correctAnswer: "n'es jamais revenu(e)",
        explanation: "Négation 'ne...jamais' avec être : n'es jamais revenu(e)."
      },
      {
        id: 120,
        presentSentence: "Elle réfléchit déjà comme une stratège.",
        verbToConjugate: "réfléchit",
        correctAnswer: "a déjà réfléchi",
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
        verbToConjugate: "écrit",
        correctAnswer: "a écrit",
        explanation: "Écrire est irrégulier : il a écrit (et non 'a écrivé')."
      },
      {
        id: 122,
        presentSentence: "Les joueurs prennent des indices.",
        verbToConjugate: "prennent",
        correctAnswer: "ont pris",
        explanation: "Prendre est irrégulier : ils ont pris (et non 'ont prendé')."
      },
      {
        id: 123,
        presentSentence: "Je vois une clé cachée sous le tapis.",
        verbToConjugate: "vois",
        correctAnswer: "ai vu",
        explanation: "Voir est irrégulier : j'ai vu."
      },
      {
        id: 124,
        presentSentence: "Tu fais une découverte importante.",
        verbToConjugate: "fais",
        correctAnswer: "as fait",
        explanation: "Faire est irrégulier : tu as fait."
      },
      {
        id: 125,
        presentSentence: "Elle dit la solution à haute voix.",
        verbToConjugate: "dit",
        correctAnswer: "a dit",
        explanation: "Dire est irrégulier : elle a dit."
      },
      {
        id: 126,
        presentSentence: "Nous lisons les instructions attentivement.",
        verbToConjugate: "lisons",
        correctAnswer: "avons lu",
        explanation: "Lire est irrégulier : nous avons lu."
      },
      {
        id: 127,
        presentSentence: "Vous mettez la clé dans la serrure.",
        verbToConjugate: "mettez",
        correctAnswer: "avez mis",
        explanation: "Mettre est irrégulier : vous avez mis."
      },
      {
        id: 128,
        presentSentence: "Ils ouvrent la porte mystérieuse.",
        verbToConjugate: "ouvrent",
        correctAnswer: "ont ouvert",
        explanation: "Ouvrir est irrégulier : ils ont ouvert."
      },
      {
        id: 129,
        presentSentence: "Je comprends enfin l'énigme.",
        verbToConjugate: "comprends",
        correctAnswer: "ai compris",
        explanation: "Comprendre est irrégulier : j'ai compris."
      },
      {
        id: 130,
        presentSentence: "Tu apprends les règles du jeu.",
        verbToConjugate: "apprends",
        correctAnswer: "as appris",
        explanation: "Apprendre est irrégulier : tu as appris."
      },
      {
        id: 131,
        presentSentence: "Elle boit une potion magique.",
        verbToConjugate: "boit",
        correctAnswer: "a bu",
        explanation: "Boire est irrégulier : elle a bu."
      },
      {
        id: 132,
        presentSentence: "Nous courons vers la sortie.",
        verbToConjugate: "courons",
        correctAnswer: "avons couru",
        explanation: "Courir est irrégulier : nous avons couru."
      },
      {
        id: 133,
        presentSentence: "Vous offrez votre aide aux autres.",
        verbToConjugate: "offrez",
        correctAnswer: "avez offert",
        explanation: "Offrir est irrégulier : vous avez offert."
      },
      {
        id: 134,
        presentSentence: "Ils reçoivent un message crypté.",
        verbToConjugate: "reçoivent",
        correctAnswer: "ont reçu",
        explanation: "Recevoir est irrégulier : ils ont reçu."
      },
      {
        id: 135,
        presentSentence: "Je conduis l'équipe vers la victoire.",
        verbToConjugate: "conduis",
        correctAnswer: "ai conduit",
        explanation: "Conduire est irrégulier : j'ai conduit."
      },
      {
        id: 136,
        presentSentence: "Tu construis un plan d'évasion.",
        verbToConjugate: "construis",
        correctAnswer: "as construit",
        explanation: "Construire est irrégulier : tu as construit."
      },
      {
        id: 137,
        presentSentence: "Elle craint les pièges du labyrinthe.",
        verbToConjugate: "craint",
        correctAnswer: "a craint",
        explanation: "Craindre est irrégulier : elle a craint."
      },
      {
        id: 138,
        presentSentence: "Nous résolvons toutes les énigmes.",
        verbToConjugate: "résolvons",
        correctAnswer: "avons résolu",
        explanation: "Résoudre est irrégulier : nous avons résolu."
      },
      {
        id: 139,
        presentSentence: "Vous connaissez déjà ce type de jeu.",
        verbToConjugate: "connaissez",
        correctAnswer: "avez connu",
        explanation: "Connaître est irrégulier : vous avez connu."
      },
      {
        id: 140,
        presentSentence: "Ils vivent une aventure extraordinaire.",
        verbToConjugate: "vivent",
        correctAnswer: "ont vécu",
        explanation: "Vivre est irrégulier : ils ont vécu."
      },
      {
        id: 141,
        presentSentence: "Je peins un symbole sur le mur.",
        verbToConjugate: "peins",
        correctAnswer: "ai peint",
        explanation: "Peindre est irrégulier : j'ai peint."
      },
      {
        id: 142,
        presentSentence: "Tu joins les deux parties du puzzle.",
        verbToConjugate: "joins",
        correctAnswer: "as joint",
        explanation: "Joindre est irrégulier : tu as joint."
      },
      {
        id: 143,
        presentSentence: "Elle rompt le code de la porte.",
        verbToConjugate: "rompt",
        correctAnswer: "a rompu",
        explanation: "Rompre est irrégulier : elle a rompu."
      },
      {
        id: 144,
        presentSentence: "Nous suivons les indices un par un.",
        verbToConjugate: "suivons",
        correctAnswer: "avons suivi",
        explanation: "Suivre est irrégulier : nous avons suivi."
      },
      {
        id: 145,
        presentSentence: "Vous battez le record de temps.",
        verbToConjugate: "battez",
        correctAnswer: "avez battu",
        explanation: "Battre est irrégulier : vous avez battu."
      },
      {
        id: 146,
        presentSentence: "Ils perdent leur chemin dans le labyrinthe.",
        verbToConjugate: "perdent",
        correctAnswer: "ont perdu",
        explanation: "Perdre est irrégulier : ils ont perdu."
      },
      {
        id: 147,
        presentSentence: "Je tiens fermement la clé magique.",
        verbToConjugate: "tiens",
        correctAnswer: "ai tenu",
        explanation: "Tenir est irrégulier : j'ai tenu."
      },
      {
        id: 148,
        presentSentence: "Tu obtiens finalement la réponse.",
        verbToConjugate: "obtiens",
        correctAnswer: "as obtenu",
        explanation: "Obtenir est irrégulier : tu as obtenu."
      },
      {
        id: 149,
        presentSentence: "Elle pousse la porte secrète.",
        verbToConjugate: "pousse",
        correctAnswer: "a poussé",
        explanation: "Pousser (verbe régulier) : elle a poussé."
      },
      {
        id: 150,
        presentSentence: "Nous découvrons le trésor caché.",
        verbToConjugate: "découvrons",
        correctAnswer: "avons découvert",
        explanation: "Découvrir est irrégulier : nous avons découvert."
      }
    ]
  }
];