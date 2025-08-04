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
        presentSentence: "Pierre observe les autres grimpeurs.",
        verbToConjugate: "observe",
        correctAnswer: "a observé",
        explanation: "Le verbe 'observer' avec il : il a observé.",
        choices: ["a observé", "est observé", "s'est observé"]
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
        explanation: "Le verbe 'terminer' avec ils : ils ont terminé.",
        choices: ["ont terminé", "sont terminés", "se sont terminés"]
      },
      {
        id: 14,
        presentSentence: "Sarah photographie ses amis.",
        verbToConjugate: "photographie",
        correctAnswer: "a photographié",
        explanation: "Le verbe 'photographier' avec elle : elle a photographié.",
        choices: ["a photographié", "est photographiée", "s'est photographiée"]
      },
      {
        id: 15,
        presentSentence: "Nous marchons sur les ponts de singe.",
        verbToConjugate: "marchons",
        correctAnswer: "avons marché",
        explanation: "Le verbe 'marcher' avec nous : nous avons marché.",
        choices: ["avons marché", "sommes marchés", "nous sommes marchés"]
      },
      {
        id: 16,
        presentSentence: "Tu écoutes les conseils du guide.",
        verbToConjugate: "écoutes",
        correctAnswer: "as écouté",
        explanation: "Le verbe 'écouter' avec tu : tu as écouté.",
        choices: ["as écouté", "es écouté", "t'es écouté"]
      },
      {
        id: 17,
        presentSentence: "Il balance sur la tyrolienne géante.",
        verbToConjugate: "balance",
        correctAnswer: "a balancé",
        explanation: "Le verbe 'balancer' avec il : il a balancé.",
        choices: ["a balancé", "est balancé", "s'est balancé"]
      },
      {
        id: 18,
        presentSentence: "Elles jouent dans les filets d'escalade.",
        verbToConjugate: "jouent",
        correctAnswer: "ont joué",
        explanation: "Le verbe 'jouer' avec elles : elles ont joué.",
        choices: ["ont joué", "sont jouées", "se sont jouées"]
      },
      {
        id: 19,
        presentSentence: "Elle dépasse ses limites aujourd'hui.",
        verbToConjugate: "dépasse",
        correctAnswer: "a dépassé",
        explanation: "Le verbe 'dépasser' avec elle : elle a dépassé.",
        choices: ["a dépassé", "est dépassée", "s'est dépassée"]
      },
      {
        id: 20,
        presentSentence: "Les enfants rigolent dans les arbres.",
        verbToConjugate: "rigolent",
        correctAnswer: "ont rigolé",
        explanation: "Le verbe 'rigoler' avec ils : ils ont rigolé.",
        choices: ["ont rigolé", "sont rigolés", "se sont rigolés"]
      },
      {
        id: 21,
        presentSentence: "Tu progresses rapidement sur le parcours.",
        verbToConjugate: "progresses",
        correctAnswer: "as progressé",
        explanation: "Le verbe 'progresser' avec tu : tu as progressé.",
        choices: ["as progressé", "es progressé", "t'es progressé"]
      },
      {
        id: 22,
        presentSentence: "Elle monte courageusement vers les hauteurs.",
        verbToConjugate: "monte",
        correctAnswer: "a monté",
        explanation: "Le verbe 'monter' avec elle : elle a monté.",
        choices: ["a monté", "est montée", "s'est montée"]
      },
      {
        id: 23,
        presentSentence: "Nous choisissons le parcours difficile.",
        verbToConjugate: "choisissons",
        correctAnswer: "avons choisi",
        explanation: "Le verbe 'choisir' avec nous : nous avons choisi.",
        choices: ["avons choisi", "sommes choisis", "nous sommes choisis"]
      },
      {
        id: 24,
        presentSentence: "Vous respectez les consignes de sécurité.",
        verbToConjugate: "respectez",
        correctAnswer: "avez respecté",
        explanation: "Le verbe 'respecter' avec vous : vous avez respecté.",
        choices: ["avez respecté", "êtes respectés", "vous êtes respectés"]
      },
      {
        id: 25,
        presentSentence: "Ils glissent ensemble sur la grande tyrolienne.",
        verbToConjugate: "glissent",
        correctAnswer: "ont glissé",
        explanation: "Le verbe 'glisser' avec ils : ils ont glissé.",
        choices: ["ont glissé", "sont glissés", "se sont glissés"]
      },
      {
        id: 26,
        presentSentence: "Elle s'amuse beaucoup dans les arbres.",
        verbToConjugate: "s'amuse",
        correctAnswer: "s'est amusée",
        explanation: "Le verbe pronominal 's'amuser' avec elle : elle s'est amusée.",
        choices: ["s'est amusée", "a amusé", "est amusée"]
      },
      {
        id: 27,
        presentSentence: "Le groupe découvre de nouveaux défis.",
        verbToConjugate: "découvre",
        correctAnswer: "a découvert",
        explanation: "Le verbe 'découvrir' avec il : il a découvert.",
        choices: ["a découvert", "est découvert", "s'est découvert"]
      },
      {
        id: 28,
        presentSentence: "Tu franchis tous les obstacles.",
        verbToConjugate: "franchis",
        correctAnswer: "as franchi",
        explanation: "Le verbe 'franchir' avec tu : tu as franchi.",
        choices: ["as franchi", "es franchi", "t'es franchi"]
      },
      {
        id: 29,
        presentSentence: "Elle réussit parfaitement son parcours.",
        verbToConjugate: "réussit",
        correctAnswer: "a réussi",
        explanation: "Le verbe 'réussir' avec elle : elle a réussi.",
        choices: ["a réussi", "est réussie", "s'est réussie"]
      },
      {
        id: 30,
        presentSentence: "Nous applaudissons les autres participants.",
        verbToConjugate: "applaudissons",
        correctAnswer: "avons applaudi",
        explanation: "Le verbe 'applaudir' avec nous : nous avons applaudi.",
        choices: ["avons applaudi", "sommes applaudis", "nous sommes applaudis"]
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
        correctAnswer: "nous nous sommes lavé",
        explanation: "Se laver est pronominal : nous nous sommes lavé les mains.",
        choices: ["nous nous sommes lavé", "nous avons lavé", "nous étions lavé"]
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
        presentSentence: "Les apprentis se dépêchent de finir leur plat.",
        verbToConjugate: "se dépêchent",
        correctAnswer: "se sont dépêchés",
        explanation: "Se dépêcher : ils se sont dépêchés.",
        choices: ["se sont dépêchés", "ont dépêché", "sont dépêchés"]
      },
      {
        id: 35,
        presentSentence: "Elle se spécialise dans les desserts.",
        verbToConjugate: "se spécialise",
        correctAnswer: "s'est spécialisée",
        explanation: "Se spécialiser : elle s'est spécialisée.",
        choices: ["s'est spécialisée", "a spécialisé", "est spécialisée"]
      },
      {
        id: 36,
        presentSentence: "Nous nous amusons à créer de nouveaux plats.",
        verbToConjugate: "nous amusons",
        correctAnswer: "nous nous sommes amusés",
        explanation: "S'amuser : nous nous sommes amusés.",
        choices: ["nous nous sommes amusés", "nous avons amusé", "nous étions amusés"]
      },
      {
        id: 37,
        presentSentence: "Vous vous organisez en cuisine.",
        verbToConjugate: "vous organisez",
        correctAnswer: "vous êtes organisés",
        explanation: "S'organiser : vous vous êtes organisés (le premier 'vous' est déjà dans la phrase).",
        choices: ["vous êtes organisés", "avez organisé", "étiez organisés"]
      },
      {
        id: 38,
        presentSentence: "Ils se disputent pour la meilleure recette.",
        verbToConjugate: "se disputent",
        correctAnswer: "se sont disputés",
        explanation: "Se disputer : ils se sont disputés.",
        choices: ["se sont disputés", "ont disputé", "sont disputés"]
      },
      {
        id: 39,
        presentSentence: "Il se trompe dans les proportions.",
        verbToConjugate: "se trompe",
        correctAnswer: "s'est trompé",
        explanation: "Se tromper : il s'est trompé.",
        choices: ["s'est trompé", "a trompé", "est trompé"]
      },
      {
        id: 40,
        presentSentence: "Le cuisinier se repose après le service.",
        verbToConjugate: "se repose",
        correctAnswer: "s'est reposé",
        explanation: "Se reposer : il s'est reposé.",
        choices: ["s'est reposé", "a reposé", "est reposé"]
      },
      {
        id: 41,
        presentSentence: "Les chefs se rappellent la recette de grand-mère.",
        verbToConjugate: "se rappellent",
        correctAnswer: "se sont rappelé",
        explanation: "Se rappeler : ils se sont rappelé la recette.",
        choices: ["se sont rappelé", "ont rappelé", "sont rappelés"]
      },
      {
        id: 42,
        presentSentence: "Elle se brûle en touchant la poêle.",
        verbToConjugate: "se brûle",
        correctAnswer: "s'est brûlée",
        explanation: "Se brûler : elle s'est brûlée.",
        choices: ["s'est brûlée", "a brûlé", "est brûlée"]
      },
      {
        id: 43,
        presentSentence: "Ils s'aident mutuellement en cuisine.",
        verbToConjugate: "s'aident",
        correctAnswer: "se sont aidés",
        explanation: "S'aider : ils se sont aidés.",
        choices: ["se sont aidés", "ont aidé", "sont aidés"]
      },
      {
        id: 44,
        presentSentence: "Elles se régalent avec ce dessert.",
        verbToConjugate: "se régalent",
        correctAnswer: "se sont régalées",
        explanation: "Se régaler : elles se sont régalées.",
        choices: ["se sont régalées", "ont régalé", "sont régalées"]
      },
      {
        id: 45,
        presentSentence: "Ils se perfectionnent dans l'art culinaire.",
        verbToConjugate: "se perfectionnent",
        correctAnswer: "se sont perfectionnés",
        explanation: "Se perfectionner : ils se sont perfectionnés.",
        choices: ["se sont perfectionnés", "ont perfectionné", "sont perfectionnés"]
      },
      {
        id: 46,
        presentSentence: "Il se salit les mains avec la farine.",
        verbToConjugate: "se salit",
        correctAnswer: "s'est sali",
        explanation: "Se salir : il s'est sali.",
        choices: ["s'est sali", "a sali", "est sali"]
      },
      {
        id: 47,
        presentSentence: "Les apprentis se débrouillent bien avec les épices.",
        verbToConjugate: "se débrouillent",
        correctAnswer: "se sont débrouillés",
        explanation: "Se débrouiller : ils se sont débrouillés.",
        choices: ["se sont débrouillés", "ont débrouillé", "sont débrouillés"]
      },
      {
        id: 48,
        presentSentence: "Elle s'inquiète pour la cuisson du gâteau.",
        verbToConjugate: "s'inquiète",
        correctAnswer: "s'est inquiétée",
        explanation: "S'inquiéter : elle s'est inquiétée.",
        choices: ["s'est inquiétée", "a inquiété", "est inquiétée"]
      },
      {
        id: 49,
        presentSentence: "Paul se retrouve en cuisine chaque matin.",
        verbToConjugate: "se retrouve",
        correctAnswer: "s'est retrouvé",
        explanation: "Se retrouver : il s'est retrouvé.",
        choices: ["s'est retrouvé", "a retrouvé", "est retrouvé"]
      },
      {
        id: 50,
        presentSentence: "Elle se plaint de la chaleur des fourneaux.",
        verbToConjugate: "se plaint",
        correctAnswer: "s'est plainte",
        explanation: "Se plaindre : elle s'est plainte.",
        choices: ["s'est plainte", "a plaint", "est plainte"]
      },
      {
        id: 51,
        presentSentence: "Ils se moquent de mes maladresses.",
        verbToConjugate: "se moquent",
        correctAnswer: "se sont moqués",
        explanation: "Se moquer : ils se sont moqués.",
        choices: ["se sont moqués", "ont moqué", "sont moqués"]
      },
      {
        id: 52,
        presentSentence: "Elle se décide enfin pour le menu.",
        verbToConjugate: "se décide",
        correctAnswer: "s'est décidée",
        explanation: "Se décider : elle s'est décidée.",
        choices: ["s'est décidée", "a décidé", "est décidée"]
      },
      {
        id: 53,
        presentSentence: "Les cuisiniers se demandent comment faire cette sauce.",
        verbToConjugate: "se demandent",
        correctAnswer: "se sont demandé",
        explanation: "Se demander : ils se sont demandé comment faire.",
        choices: ["se sont demandé", "ont demandé", "sont demandés"]
      },
      {
        id: 54,
        presentSentence: "Elle se souvient de sa première leçon de cuisine.",
        verbToConjugate: "se souvient",
        correctAnswer: "s'est souvenue",
        explanation: "Se souvenir : elle s'est souvenue.",
        choices: ["s'est souvenue", "a souvenu", "est souvenue"]
      },
      {
        id: 55,
        presentSentence: "Nous nous excusons pour le retard du plat.",
        verbToConjugate: "nous excusons",
        correctAnswer: "nous sommes excusés",
        explanation: "S'excuser : nous nous sommes excusés (le premier 'nous' est déjà dans la phrase).",
        choices: ["nous sommes excusés", "avons excusé", "étions excusés"]
      },
      {
        id: 56,
        presentSentence: "Vous vous habituez aux nouveaux ustensiles.",
        verbToConjugate: "vous habituez",
        correctAnswer: "vous êtes habitués",
        explanation: "S'habituer : vous vous êtes habitués (le premier 'vous' est déjà dans la phrase).",
        choices: ["vous êtes habitués", "avez habitué", "étiez habitués"]
      },
      {
        id: 57,
        presentSentence: "Ils se félicitent pour ce succès culinaire.",
        verbToConjugate: "se félicitent",
        correctAnswer: "se sont félicités",
        explanation: "Se féliciter : ils se sont félicités.",
        choices: ["se sont félicités", "ont félicité", "sont félicités"]
      },
      {
        id: 58,
        presentSentence: "Il se dirige vers le frigo pour les ingrédients.",
        verbToConjugate: "se dirige",
        correctAnswer: "s'est dirigé",
        explanation: "Se diriger : il s'est dirigé.",
        choices: ["s'est dirigé", "a dirigé", "est dirigé"]
      },
      {
        id: 59,
        presentSentence: "Elle se lève tôt pour préparer le petit-déjeuner.",
        verbToConjugate: "se lève",
        correctAnswer: "s'est levée",
        explanation: "Se lever : elle s'est levée.",
        choices: ["s'est levée", "a levé", "est levée"]
      },
      {
        id: 60,
        presentSentence: "Elle se présente comme la nouvelle apprentie.",
        verbToConjugate: "se présente",
        correctAnswer: "s'est présentée",
        explanation: "Se présenter : elle s'est présentée.",
        choices: ["s'est présentée", "a présenté", "est présentée"]
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
        explanation: "Arriver + être + accord féminin : elle est arrivée.",
        choices: ["est arrivée", "a arrivé", "s'est arrivée"]
      },
      {
        id: 62,
        presentSentence: "Les touristes sortent de l'hôtel ce matin.",
        verbToConjugate: "sortent",
        correctAnswer: "sont sortis",
        explanation: "Sortir + être + accord masculin pluriel : ils sont sortis.",
        choices: ["sont sortis", "ont sorti", "se sont sortis"]
      },
      {
        id: 63,
        presentSentence: "Nous, Lucas et moi, nous partons en voyage demain matin.",
        verbToConjugate: "partons",
        correctAnswer: "sommes partis",
        explanation: "Partir + être : nous sommes partis.",
        choices: ["sommes partis", "avons parti", "nous sommes parti"]
      },
      {
        id: 64,
        presentSentence: "Toi Alice, tu viens avec nous en excursion.",
        verbToConjugate: "viens",
        correctAnswer: "es venue",
        explanation: "Venir + être + accord féminin : tu es venue.",
        choices: ["es venue", "as venu", "t'es venue"]
      },
      {
        id: 65,
        presentSentence: "Marie tombe amoureuse de cette ville.",
        verbToConjugate: "tombe",
        correctAnswer: "est tombée",
        explanation: "Tomber + être + accord féminin : elle est tombée.",
        choices: ["est tombée", "a tombé", "s'est tombée"]
      },
      {
        id: 66,
        presentSentence: "Nous, Emma et moi, nous entrons dans le musée.",
        verbToConjugate: "entrons",
        correctAnswer: "sommes entrés",
        explanation: "Entrer + être : nous sommes entrés.",
        choices: ["sommes entrés", "avons entré", "nous sommes entré"]
      },
      {
        id: 67,
        presentSentence: "Vous, Marc et Pierre, vous retournez à l'hôtel avant la nuit.",
        verbToConjugate: "retournez",
        correctAnswer: "êtes retournés",
        explanation: "Retourner + être : vous êtes retournés.",
        choices: ["êtes retournés", "avez retourné", "vous êtes retourné"]
      },
      {
        id: 68,
        presentSentence: "Ils montent au sommet de la tour.",
        verbToConjugate: "montent",
        correctAnswer: "sont montés",
        explanation: "Monter + être : ils sont montés.",
        choices: ["sont montés", "ont monté", "se sont montés"]
      },
      {
        id: 69,
        presentSentence: "Il descend du train à la gare centrale.",
        verbToConjugate: "descend",
        correctAnswer: "est descendu",
        explanation: "Descendre + être : il est descendu.",
        choices: ["est descendu", "a descendu", "s'est descendu"]
      },
      {
        id: 70,
        presentSentence: "La voyageuse reste trois jours à Paris.",
        verbToConjugate: "reste",
        correctAnswer: "est restée",
        explanation: "Rester + être + accord féminin : elle est restée.",
        choices: ["est restée", "a resté", "s'est restée"]
      },
      {
        id: 71,
        presentSentence: "Marc revient de son voyage en Italie.",
        verbToConjugate: "revient",
        correctAnswer: "est revenu",
        explanation: "Revenir + être : il est revenu.",
        choices: ["est revenu", "a revenu", "s'est revenu"]
      },
      {
        id: 72,
        presentSentence: "Elle passe par Londres avant Paris.",
        verbToConjugate: "passe",
        correctAnswer: "est passée",
        explanation: "Passer + être : elle est passée.",
        choices: ["est passée", "a passé", "s'est passée"]
      },
      {
        id: 73,
        presentSentence: "Nous naissons avec l'envie de voyager.",
        verbToConjugate: "naissons",
        correctAnswer: "sommes nés",
        explanation: "Naitre + être : nous sommes nés.",
        choices: ["sommes nés", "avons naissé", "nous sommes naissé"]
      },
      {
        id: 74,
        presentSentence: "Vous devenez de vrais globe-trotteurs.",
        verbToConjugate: "devenez",
        correctAnswer: "êtes devenus",
        explanation: "Devenir + être : vous êtes devenus.",
        choices: ["êtes devenus", "avez devenu", "vous êtes devenu"]
      },
      {
        id: 75,
        presentSentence: "Ils repartent vers une nouvelle destination.",
        verbToConjugate: "repartent",
        correctAnswer: "sont repartis",
        explanation: "Repartir + être : ils sont repartis.",
        choices: ["sont repartis", "ont reparti", "se sont repartis"]
      },
      {
        id: 76,
        presentSentence: "Elle retombe sous le charme de cette région.",
        verbToConjugate: "retombe",
        correctAnswer: "est retombée",
        explanation: "Retomber + être : elle est retombée.",
        choices: ["est retombée", "a retombé", "s'est retombée"]
      },
      {
        id: 77,
        presentSentence: "Marie intervient pour aider les autres voyageurs.",
        verbToConjugate: "intervient",
        correctAnswer: "est intervenue",
        explanation: "Intervenir + être : elle est intervenue.",
        choices: ["est intervenue", "a intervenu", "s'est intervenue"]
      },
      {
        id: 78,
        presentSentence: "Elle va directement à son hôtel.",
        verbToConjugate: "va",
        correctAnswer: "est allée",
        explanation: "Aller + être + accord féminin : elle est allée.",
        choices: ["est allée", "a allé", "s'est allée"]
      },
      {
        id: 79,
        presentSentence: "Nous sortons vers la sortie d'urgence.",
        verbToConjugate: "sortons",
        correctAnswer: "sommes sortis",
        explanation: "Sortir + être : nous sommes sortis."
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
        presentSentence: "Ils mangent dans ce petit restaurant.",
        verbToConjugate: "mangent",
        correctAnswer: "ont mangé",
        explanation: "Avec l'auxiliaire avoir, pas d'accord du participe passé avec le sujet.",
        choices: ["ont mangé", "sont mangés", "se sont mangés"]
      },
      {
        id: 82,
        presentSentence: "Il arrive au bon moment.",
        verbToConjugate: "arrive",
        correctAnswer: "est arrivé",
        explanation: "Arriver + être : il est arrivé."
      },
      {
        id: 83,
        presentSentence: "Toi Alice, tu parviens enfin à destination.",
        verbToConjugate: "parviens",
        correctAnswer: "es parvenue",
        explanation: "Parvenir + être + accord féminin : tu es parvenue."
      },
      {
        id: 84,
        presentSentence: "Elle disparait dans la foule du marché.",
        verbToConjugate: "disparait",
        correctAnswer: "a disparu",
        explanation: "Avec l'auxiliaire avoir, pas d'accord du participe passé avec le sujet."
      },
      {
        id: 85,
        presentSentence: "Nous prévoyons un moment pour jouer ensemble.",
        verbToConjugate: "prévoyons",
        correctAnswer: "avons prévu",
        explanation: "Avec l'auxiliaire avoir, pas d'accord du participe passé avec le sujet."
      },
      {
        id: 86,
        presentSentence: "Vous photographiez le monument.",
        verbToConjugate: "photographiez",
        correctAnswer: "avez photographié",
        explanation: "Avec l'auxiliaire avoir, pas d'accord du participe passé avec le sujet."
      },
      {
        id: 87,
        presentSentence: "Ils visitent le musée en groupe.",
        verbToConjugate: "visitent",
        correctAnswer: "ont visité",
        explanation: "Avec l'auxiliaire avoir, pas d'accord du participe passé avec le sujet."
      },
      {
        id: 88,
        presentSentence: "Moi, Mathias, je vais à la gare centrale.",
        verbToConjugate: "vais",
        correctAnswer: "suis allé",
        explanation: "Aller + être : je suis allé."
      },
      {
        id: 89,
        presentSentence: "Toi, Isabelle, tu rentres chez toi après le voyage.",
        verbToConjugate: "rentres",
        correctAnswer: "es rentrée",
        explanation: "Rentrer + être + accord féminin : tu es rentrée."
      },
      {
        id: 90,
        presentSentence: "Elle ressort son appareil photo.",
        verbToConjugate: "ressort",
        correctAnswer: "a ressorti",
        explanation: "Avec l'auxiliaire avoir, pas d'accord du participe passé avec le sujet."
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
        presentSentence: "Les joueurs marquent un but magnifique.",
        verbToConjugate: "marquent",
        correctAnswer: "ont marqué",
        explanation: "Avec l'auxiliaire avoir : ils ont marqué.",
        choices: ["ont marqué", "sont marqués", "se sont marqués"]
      },
      {
        id: 92,
        presentSentence: "L'entraineur prépare bien son équipe.",
        verbToConjugate: "prépare",
        correctAnswer: "a bien préparé",
        explanation: "L'adverbe 'bien' se place entre l'auxiliaire et le participe : a bien préparé.",
        choices: ["a bien préparé", "est bien préparé", "a préparé bien"]
      },
      {
        id: 93,
        presentSentence: "Les supporters voient un match exceptionnel.",
        verbToConjugate: "voient",
        correctAnswer: "ont vu",
        explanation: "Verbe voir irrégulier avec avoir : ils ont vu.",
        choices: ["ont vu", "sont vus", "ont vus"]
      },
      {
        id: 94,
        presentSentence: "Il comprend maintenant les règles.",
        verbToConjugate: "comprend",
        correctAnswer: "a compris",
        explanation: "Verbe comprendre irrégulier : il a compris.",
        choices: ["a compris", "est compris", "a comprit"]
      },
      {
        id: 95,
        presentSentence: "Samedi, tu joues au foot avec ton équipe.",
        verbToConjugate: "joues",
        correctAnswer: "as joué",
        explanation: "Avec l'auxiliaire avoir : tu as joué.",
        choices: ["as joué", "es joué", "as jouée"]
      },
      {
        id: 96,
        presentSentence: "Elle rate parfois ses penalties.",
        verbToConjugate: "rate",
        correctAnswer: "a raté",
        explanation: "Verbe du 1er groupe avec avoir : elle a raté.",
        choices: ["a raté", "est ratée", "s'est ratée"]
      },
      {
        id: 97,
        presentSentence: "Nous courons vite sur le terrain.",
        verbToConjugate: "courons",
        correctAnswer: "avons couru",
        explanation: "Verbe courir irrégulier : nous avons couru.",
        choices: ["avons couru", "sommes courus", "avons couru"]
      },
      {
        id: 98,
        presentSentence: "Vous perdez contre cette équipe redoutable.",
        verbToConjugate: "perdez",
        correctAnswer: "avez perdu",
        explanation: "Verbe perdre irrégulier : vous avez perdu.",
        choices: ["avez perdu", "êtes perdus", "vous êtes perdus"]
      },
      {
        id: 99,
        presentSentence: "Ils finissent l'entraînement avec énergie.",
        verbToConjugate: "finissent",
        correctAnswer: "ont fini",
        explanation: "Verbe du 2e groupe avec avoir : ils ont fini.",
        choices: ["ont fini", "sont finis", "se sont finis"]
      },
      {
        id: 100,
        presentSentence: "Le gardien arrête bien tous les tirs.",
        verbToConjugate: "arrête",
        correctAnswer: "a bien arrêté",
        explanation: "L'adverbe 'bien' se place entre l'auxiliaire et le participe : a bien arrêté.",
        choices: ["a bien arrêté", "est bien arrêté", "a arrêté bien"]
      },
      {
        id: 101,
        presentSentence: "Tu gagnes souvent contre moi.",
        verbToConjugate: "gagnes",
        correctAnswer: "as gagné",
        explanation: "Verbe du 1er groupe avec avoir : tu as gagné.",
        choices: ["as gagné", "es gagné", "t'es gagné"]
      },
      {
        id: 102,
        presentSentence: "Elle dribble déjà comme une professionnelle.",
        verbToConjugate: "dribble",
        correctAnswer: "a déjà dribblé",
        explanation: "L'adverbe 'déjà' se place entre l'auxiliaire et le participe : a déjà dribblé.",
        choices: ["a déjà dribblé", "est déjà dribblée", "a dribblé déjà"]
      },
      {
        id: 103,
        presentSentence: "Nous vendons nos billets rapidement.",
        verbToConjugate: "vendons",
        correctAnswer: "avons vendu",
        explanation: "Verbe vendre irrégulier : nous avons vendu.",
        choices: ["avons vendu", "sommes vendus", "nous sommes vendus"]
      },
      {
        id: 104,
        presentSentence: "Vous tirez bien dans les angles.",
        verbToConjugate: "tirez",
        correctAnswer: "avez bien tiré",
        explanation: "L'adverbe 'bien' se place entre l'auxiliaire et le participe : avez bien tiré.",
        choices: ["avez bien tiré", "êtes bien tirés", "avez tiré bien"]
      },
      {
        id: 105,
        presentSentence: "Ils battent l'équipe adverse facilement.",
        verbToConjugate: "battent",
        correctAnswer: "ont battu",
        explanation: "Verbe battre irrégulier : ils ont battu.",
        choices: ["ont battu", "sont battus", "se sont battus"]
      },
      {
        id: 106,
        presentSentence: "Je mets mes crampons neufs.",
        verbToConjugate: "mets",
        correctAnswer: "ai mis",
        explanation: "Verbe mettre irrégulier : j'ai mis.",
        choices: ["ai mis", "suis mis", "me suis mis"]
      },
      {
        id: 107,
        presentSentence: "Tu défends déjà très bien ton but.",
        verbToConjugate: "défends",
        correctAnswer: "as déjà défendu",
        explanation: "L'adverbe 'déjà' se place entre l'auxiliaire et le participe : as déjà défendu.",
        choices: ["as déjà défendu", "es déjà défendu", "as défendu déjà"]
      },
      {
        id: 108,
        presentSentence: "Elle fait des passes précises.",
        verbToConjugate: "fait",
        correctAnswer: "a fait",
        explanation: "Verbe faire irrégulier : elle a fait.",
        choices: ["a fait", "est faite", "s'est faite"]
      },
      {
        id: 109,
        presentSentence: "Nous sautons bien par-dessus les obstacles.",
        verbToConjugate: "sautons",
        correctAnswer: "avons bien sauté",
        explanation: "L'adverbe 'bien' se place entre l'auxiliaire et le participe : avons bien sauté.",
        choices: ["avons bien sauté", "sommes bien sautés", "avons sauté bien"]
      },
      {
        id: 110,
        presentSentence: "Vous prenez des risques calculés.",
        verbToConjugate: "prenez",
        correctAnswer: "avez pris",
        explanation: "Verbe prendre irrégulier : vous avez pris.",
        choices: ["avez pris", "êtes pris", "vous êtes pris"]
      },
      {
        id: 111,
        presentSentence: "Ils tombent lors des tacles.",
        verbToConjugate: "tombent",
        correctAnswer: "sont tombés",
        explanation: "Verbe tomber avec être : ils sont tombés.",
        choices: ["sont tombés", "ont tombé", "se sont tombés"]
      },
      {
        id: 112,
        presentSentence: "Je réussis déjà mes premiers matchs.",
        verbToConjugate: "réussis",
        correctAnswer: "ai déjà réussi",
        explanation: "L'adverbe 'déjà' se place entre l'auxiliaire et le participe : ai déjà réussi.",
        choices: ["ai déjà réussi", "suis déjà réussi", "ai réussi déjà"]
      },
      {
        id: 113,
        presentSentence: "Tu vois maintenant la différence.",
        verbToConjugate: "vois",
        correctAnswer: "as vu",
        explanation: "Verbe voir irrégulier : tu as vu.",
        choices: ["as vu", "es vu", "t'es vu"]
      },
      {
        id: 114,
        presentSentence: "Elle applaudit bien les belles actions.",
        verbToConjugate: "applaudit",
        correctAnswer: "a bien applaudi",
        explanation: "L'adverbe 'bien' se place entre l'auxiliaire et le participe : a bien applaudi.",
        choices: ["a bien applaudi", "est bien applaudie", "a applaudi bien"]
      },
      {
        id: 115,
        presentSentence: "Nous sortons du terrain victorieux.",
        verbToConjugate: "sortons",
        correctAnswer: "sommes sortis",
        explanation: "Verbe sortir avec être : nous sommes sortis.",
        choices: ["sommes sortis", "avons sorti", "nous sommes sorti"]
      },
      {
        id: 116,
        presentSentence: "Vous lisez déjà les mouvements adverses.",
        verbToConjugate: "lisez",
        correctAnswer: "avez déjà lu",
        explanation: "L'adverbe 'déjà' se place entre l'auxiliaire et le participe : avez déjà lu.",
        choices: ["avez déjà lu", "êtes déjà lus", "avez lu déjà"]
      },
      {
        id: 117,
        presentSentence: "Ils suivent maintenant les conseils.",
        verbToConjugate: "suivent",
        correctAnswer: "ont suivi",
        explanation: "Verbe suivre irrégulier : ils ont suivi.",
        choices: ["ont suivi", "sont suivis", "se sont suivis"]
      },
      {
        id: 118,
        presentSentence: "Je choisis bien mes passes.",
        verbToConjugate: "choisis",
        correctAnswer: "ai bien choisi",
        explanation: "L'adverbe 'bien' se place entre l'auxiliaire et le participe : ai bien choisi.",
        choices: ["ai bien choisi", "suis bien choisi", "ai choisi bien"]
      },
      {
        id: 119,
        presentSentence: "Tu reviens de tes blessures.",
        verbToConjugate: "reviens",
        correctAnswer: "es revenu(e)",
        explanation: "Verbe revenir avec être + accord : tu es revenu(e).",
        choices: ["es revenu(e)", "as revenu", "t'es revenu"]
      },
      {
        id: 120,
        presentSentence: "Elle réfléchit déjà comme une stratège.",
        verbToConjugate: "réfléchit",
        correctAnswer: "a déjà réfléchi",
        explanation: "L'adverbe 'déjà' se place entre l'auxiliaire et le participe : a déjà réfléchi.",
        choices: ["a déjà réfléchi", "est déjà réfléchie", "a réfléchi déjà"]
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
        explanation: "Écrire est irrégulier : il a écrit (et non 'a écrivé').",
        choices: ["a écrit", "est écrit", "s'est écrit"]
      },
      {
        id: 122,
        presentSentence: "Les joueurs prennent des indices.",
        verbToConjugate: "prennent",
        correctAnswer: "ont pris",
        explanation: "Prendre est irrégulier : ils ont pris (et non 'ont prendé').",
        choices: ["ont pris", "sont pris", "se sont pris"]
      },
      {
        id: 123,
        presentSentence: "Je vois une clé cachée sous le tapis.",
        verbToConjugate: "vois",
        correctAnswer: "ai vu",
        explanation: "Voir est irrégulier : j'ai vu.",
        choices: ["ai vu", "suis vu", "me suis vu"]
      },
      {
        id: 124,
        presentSentence: "Tu fais une découverte importante.",
        verbToConjugate: "fais",
        correctAnswer: "as fait",
        explanation: "Faire est irrégulier : tu as fait.",
        choices: ["as fait", "es fait", "t'es fait"]
      },
      {
        id: 125,
        presentSentence: "Elle dit la solution à haute voix.",
        verbToConjugate: "dit",
        correctAnswer: "a dit",
        explanation: "Dire est irrégulier : elle a dit.",
        choices: ["a dit", "est dite", "s'est dite"]
      },
      {
        id: 126,
        presentSentence: "Nous lisons les instructions attentivement.",
        verbToConjugate: "lisons",
        correctAnswer: "avons lu",
        explanation: "Lire est irrégulier : nous avons lu.",
        choices: ["avons lu", "sommes lus", "nous sommes lus"]
      },
      {
        id: 127,
        presentSentence: "Vous mettez la clé dans la serrure.",
        verbToConjugate: "mettez",
        correctAnswer: "avez mis",
        explanation: "Mettre est irrégulier : vous avez mis.",
        choices: ["avez mis", "êtes mis", "vous êtes mis"]
      },
      {
        id: 128,
        presentSentence: "Ils ouvrent la porte mystérieuse.",
        verbToConjugate: "ouvrent",
        correctAnswer: "ont ouvert",
        explanation: "Ouvrir est irrégulier : ils ont ouvert.",
        choices: ["ont ouvert", "sont ouverts", "se sont ouverts"]
      },
      {
        id: 129,
        presentSentence: "Je comprends enfin l'énigme.",
        verbToConjugate: "comprends",
        correctAnswer: "ai compris",
        explanation: "Comprendre est irrégulier : j'ai compris.",
        choices: ["ai compris", "suis compris", "me suis compris"]
      },
      {
        id: 130,
        presentSentence: "Tu apprends les règles du jeu.",
        verbToConjugate: "apprends",
        correctAnswer: "as appris",
        explanation: "Apprendre est irrégulier : tu as appris.",
        choices: ["as appris", "es appris", "t'es appris"]
      },
      {
        id: 131,
        presentSentence: "Elle boit une potion magique.",
        verbToConjugate: "boit",
        correctAnswer: "a bu",
        explanation: "Boire est irrégulier : elle a bu.",
        choices: ["a bu", "est bue", "s'est bue"]
      },
      {
        id: 132,
        presentSentence: "Nous courons vers la sortie.",
        verbToConjugate: "courons",
        correctAnswer: "avons couru",
        explanation: "Courir est irrégulier : nous avons couru.",
        choices: ["avons couru", "sommes courus", "nous sommes courus"]
      },
      {
        id: 133,
        presentSentence: "Vous offrez votre aide aux autres.",
        verbToConjugate: "offrez",
        correctAnswer: "avez offert",
        explanation: "Offrir est irrégulier : vous avez offert.",
        choices: ["avez offert", "êtes offerts", "vous êtes offerts"]
      },
      {
        id: 134,
        presentSentence: "Ils reçoivent un message crypté.",
        verbToConjugate: "reçoivent",
        correctAnswer: "ont reçu",
        explanation: "Recevoir est irrégulier : ils ont reçu.",
        choices: ["ont reçu", "sont reçus", "se sont reçus"]
      },
      {
        id: 135,
        presentSentence: "Je conduis l'équipe vers la victoire.",
        verbToConjugate: "conduis",
        correctAnswer: "ai conduit",
        explanation: "Conduire est irrégulier : j'ai conduit.",
        choices: ["ai conduit", "suis conduit", "me suis conduit"]
      },
      {
        id: 136,
        presentSentence: "Tu construis un plan d'évasion.",
        verbToConjugate: "construis",
        correctAnswer: "as construit",
        explanation: "Construire est irrégulier : tu as construit.",
        choices: ["as construit", "es construit", "t'es construit"]
      },
      {
        id: 137,
        presentSentence: "Elle craint les pièges du labyrinthe.",
        verbToConjugate: "craint",
        correctAnswer: "a craint",
        explanation: "Craindre est irrégulier : elle a craint.",
        choices: ["a craint", "est crainte", "s'est crainte"]
      },
      {
        id: 138,
        presentSentence: "Nous résolvons toutes les énigmes.",
        verbToConjugate: "résolvons",
        correctAnswer: "avons résolu",
        explanation: "Résoudre est irrégulier : nous avons résolu.",
        choices: ["avons résolu", "sommes résolus", "nous sommes résolus"]
      },
      {
        id: 139,
        presentSentence: "Vous connaissez déjà ce type de jeu.",
        verbToConjugate: "connaissez",
        correctAnswer: "avez connu",
        explanation: "Connaître est irrégulier : vous avez connu.",
        choices: ["avez connu", "êtes connus", "vous êtes connus"]
      },
      {
        id: 140,
        presentSentence: "Ils vivent une aventure extraordinaire.",
        verbToConjugate: "vivent",
        correctAnswer: "ont vécu",
        explanation: "Vivre est irrégulier : ils ont vécu.",
        choices: ["ont vécu", "sont vécus", "se sont vécus"]
      },
      {
        id: 141,
        presentSentence: "Je peins un symbole sur le mur.",
        verbToConjugate: "peins",
        correctAnswer: "ai peint",
        explanation: "Peindre est irrégulier : j'ai peint.",
        choices: ["ai peint", "suis peint", "me suis peint"]
      },
      {
        id: 142,
        presentSentence: "Tu joins les deux parties du puzzle.",
        verbToConjugate: "joins",
        correctAnswer: "as joint",
        explanation: "Joindre est irrégulier : tu as joint.",
        choices: ["as joint", "es joint", "t'es joint"]
      },
      {
        id: 143,
        presentSentence: "Elle rompt le code de la porte.",
        verbToConjugate: "rompt",
        correctAnswer: "a rompu",
        explanation: "Rompre est irrégulier : elle a rompu.",
        choices: ["a rompu", "est rompue", "s'est rompue"]
      },
      {
        id: 144,
        presentSentence: "Nous suivons les indices un par un.",
        verbToConjugate: "suivons",
        correctAnswer: "avons suivi",
        explanation: "Suivre est irrégulier : nous avons suivi.",
        choices: ["avons suivi", "sommes suivis", "nous sommes suivis"]
      },
      {
        id: 145,
        presentSentence: "Vous battez le record de temps.",
        verbToConjugate: "battez",
        correctAnswer: "avez battu",
        explanation: "Battre est irrégulier : vous avez battu.",
        choices: ["avez battu", "êtes battus", "vous êtes battus"]
      },
      {
        id: 146,
        presentSentence: "Ils perdent leur chemin dans le labyrinthe.",
        verbToConjugate: "perdent",
        correctAnswer: "ont perdu",
        explanation: "Perdre est irrégulier : ils ont perdu.",
        choices: ["ont perdu", "sont perdus", "se sont perdus"]
      },
      {
        id: 147,
        presentSentence: "Je tiens fermement la clé magique.",
        verbToConjugate: "tiens",
        correctAnswer: "ai tenu",
        explanation: "Tenir est irrégulier : j'ai tenu.",
        choices: ["ai tenu", "suis tenu", "me suis tenu"]
      },
      {
        id: 148,
        presentSentence: "Tu obtiens finalement la réponse.",
        verbToConjugate: "obtiens",
        correctAnswer: "as obtenu",
        explanation: "Obtenir est irrégulier : tu as obtenu.",
        choices: ["as obtenu", "es obtenu", "t'es obtenu"]
      },
      {
        id: 149,
        presentSentence: "Elle pousse la porte secrète.",
        verbToConjugate: "pousse",
        correctAnswer: "a poussé",
        explanation: "Pousser (verbe régulier) : elle a poussé.",
        choices: ["a poussé", "est poussée", "s'est poussée"]
      },
      {
        id: 150,
        presentSentence: "Nous découvrons le trésor caché.",
        verbToConjugate: "découvrons",
        correctAnswer: "avons découvert",
        explanation: "Découvrir est irrégulier : nous avons découvert.",
        choices: ["avons découvert", "sommes découverts", "nous sommes découverts"]
      }
    ]
  }
];