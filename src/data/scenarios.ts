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
        presentSentence: "Les participants testent leur force sur la corde.",
        verbToConjugate: "testent",
        correctAnswer: "ont testé",
        explanation: "Le verbe 'tester' avec ils : ils ont testé.",
        choices: ["ont testé", "sont testés", "se sont testés"]
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
        presentSentence: "Elle dépasse ses limites.",
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
        presentSentence: "Tu progresses sur le parcours.",
        verbToConjugate: "progresses",
        correctAnswer: "as progressé",
        explanation: "Le verbe 'progresser' avec tu : tu as progressé.",
        choices: ["as progressé", "es progressé", "t'es progressé"]
      },
      {
        id: 22,
        presentSentence: "Elle monte vers les hauteurs.",
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
        presentSentence: "Elle s'amuse dans les arbres.",
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
        presentSentence: "Elle réussit son parcours.",
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
        correctAnswer: "nous sommes lavé(e)s",
        explanation: "Se laver est pronominal et se conjugue avec être : nous nous sommes lavé(e)s.",
        choices: ["nous sommes lavé(e)s", "nous avons lavé", "nous étions lavé(e)s"]
      },
      {
        id: 32,
        presentSentence: "Le chef se prépare pour le service.",
        verbToConjugate: "se prépare",
        correctAnswer: "s'est",
        explanation: "Se préparer est pronominal : il s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 33,
        presentSentence: "Elle se concentre sur sa recette.",
        verbToConjugate: "se concentre",
        correctAnswer: "s'est",
        explanation: "Se concentrer est pronominal : elle s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 34,
        presentSentence: "Les apprentis se dépêchent de finir leur plat.",
        verbToConjugate: "se dépêchent",
        correctAnswer: "se sont",
        explanation: "Se dépêcher est pronominal : ils se sont.",
        choices: ["se sont", "ont", "sont"]
      },
      {
        id: 35,
        presentSentence: "Elle se spécialise dans les desserts.",
        verbToConjugate: "se spécialise",
        correctAnswer: "s'est",
        explanation: "Se spécialiser est pronominal : elle s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 36,
        presentSentence: "Nous nous amusons à créer de nouveaux plats.",
        verbToConjugate: "nous amusons",
        correctAnswer: "nous sommes",
        explanation: "S'amuser est pronominal : nous nous sommes.",
        choices: ["nous sommes", "nous avons", "nous étions"]
      },
      {
        id: 37,
        presentSentence: "Vous vous organisez en cuisine.",
        verbToConjugate: "vous organisez",
        correctAnswer: "vous êtes",
        explanation: "S'organiser est pronominal : vous vous êtes (le premier 'vous' est déjà dans la phrase).",
        choices: ["vous êtes", "avez", "étiez"]
      },
      {
        id: 38,
        presentSentence: "Ils se disputent pour la meilleure recette.",
        verbToConjugate: "se disputent",
        correctAnswer: "se sont",
        explanation: "Se disputer est pronominal : ils se sont.",
        choices: ["se sont", "ont", "sont"]
      },
      {
        id: 39,
        presentSentence: "Il se trompe dans les proportions.",
        verbToConjugate: "se trompe",
        correctAnswer: "s'est",
        explanation: "Se tromper est pronominal : il s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 40,
        presentSentence: "Le cuisinier se repose après le service.",
        verbToConjugate: "se repose",
        correctAnswer: "s'est",
        explanation: "Se reposer est pronominal : il s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 41,
        presentSentence: "Les chefs se rappellent la recette de grand-mère.",
        verbToConjugate: "se rappellent",
        correctAnswer: "se sont",
        explanation: "Se rappeler est pronominal : ils se sont.",
        choices: ["se sont", "ont", "sont"]
      },
      {
        id: 42,
        presentSentence: "Elle se brûle en touchant la poêle.",
        verbToConjugate: "se brûle",
        correctAnswer: "s'est",
        explanation: "Se brûler est pronominal : elle s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 43,
        presentSentence: "Ils s'aident en cuisine.",
        verbToConjugate: "s'aident",
        correctAnswer: "se sont",
        explanation: "S'aider est pronominal : ils se sont.",
        choices: ["se sont", "ont", "sont"]
      },
      {
        id: 44,
        presentSentence: "Elles se régalent avec ce dessert.",
        verbToConjugate: "se régalent",
        correctAnswer: "se sont",
        explanation: "Se régaler est pronominal : elles se sont.",
        choices: ["se sont", "ont", "sont"]
      },
      {
        id: 45,
        presentSentence: "Ils se perfectionnent dans l'art culinaire.",
        verbToConjugate: "se perfectionnent",
        correctAnswer: "se sont",
        explanation: "Se perfectionner est pronominal : ils se sont.",
        choices: ["se sont", "ont", "sont"]
      },
      {
        id: 46,
        presentSentence: "Il se salit les mains avec la farine.",
        verbToConjugate: "se salit",
        correctAnswer: "s'est",
        explanation: "Se salir est pronominal : il s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 47,
        presentSentence: "Les apprentis se débrouillent avec les épices.",
        verbToConjugate: "se débrouillent",
        correctAnswer: "se sont",
        explanation: "Se débrouiller est pronominal : ils se sont.",
        choices: ["se sont", "ont", "sont"]
      },
      {
        id: 48,
        presentSentence: "Elle s'inquiète pour la cuisson du gâteau.",
        verbToConjugate: "s'inquiète",
        correctAnswer: "s'est",
        explanation: "S'inquiéter est pronominal : elle s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 49,
        presentSentence: "Paul se retrouve en cuisine chaque matin.",
        verbToConjugate: "se retrouve",
        correctAnswer: "s'est",
        explanation: "Se retrouver est pronominal : il s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 50,
        presentSentence: "Elle se plaint de la chaleur des fourneaux.",
        verbToConjugate: "se plaint",
        correctAnswer: "s'est",
        explanation: "Se plaindre est pronominal : elle s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 51,
        presentSentence: "Ils se moquent de mes maladresses.",
        verbToConjugate: "se moquent",
        correctAnswer: "se sont",
        explanation: "Se moquer est pronominal : ils se sont.",
        choices: ["se sont", "ont", "sont"]
      },
      {
        id: 52,
        presentSentence: "Elle se décide pour le menu.",
        verbToConjugate: "se décide",
        correctAnswer: "s'est",
        explanation: "Se décider est pronominal : elle s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 53,
        presentSentence: "Les cuisiniers se demandent comment faire cette sauce.",
        verbToConjugate: "se demandent",
        correctAnswer: "se sont",
        explanation: "Se demander est pronominal : ils se sont.",
        choices: ["se sont", "ont", "sont"]
      },
      {
        id: 54,
        presentSentence: "Elle se souvient de sa première leçon de cuisine.",
        verbToConjugate: "se souvient",
        correctAnswer: "s'est",
        explanation: "Se souvenir est pronominal : elle s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 55,
        presentSentence: "Nous nous excusons pour le retard du plat.",
        verbToConjugate: "nous excusons",
        correctAnswer: "nous sommes",
        explanation: "S'excuser est pronominal : nous nous sommes (le premier 'nous' est déjà dans la phrase).",
        choices: ["nous sommes", "avons", "étions"]
      },
      {
        id: 56,
        presentSentence: "Vous vous habituez aux nouveaux ustensiles.",
        verbToConjugate: "vous habituez",
        correctAnswer: "vous êtes",
        explanation: "S'habituer est pronominal : vous vous êtes (le premier 'vous' est déjà dans la phrase).",
        choices: ["vous êtes", "avez", "étiez"]
      },
      {
        id: 57,
        presentSentence: "Ils se félicitent pour ce succès culinaire.",
        verbToConjugate: "se félicitent",
        correctAnswer: "se sont",
        explanation: "Se féliciter est pronominal : ils se sont.",
        choices: ["se sont", "ont", "sont"]
      },
      {
        id: 58,
        presentSentence: "Il se dirige vers le frigo pour les ingrédients.",
        verbToConjugate: "se dirige",
        correctAnswer: "s'est",
        explanation: "Se diriger est pronominal : il s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 59,
        presentSentence: "Elle se lève tôt pour préparer le petit-déjeuner.",
        verbToConjugate: "se lève",
        correctAnswer: "s'est",
        explanation: "Se lever est pronominal : elle s'est.",
        choices: ["s'est", "a", "est"]
      },
      {
        id: 60,
        presentSentence: "Elle se présente comme la nouvelle apprentie.",
        verbToConjugate: "se présente",
        correctAnswer: "s'est",
        explanation: "Se présenter est pronominal : elle s'est.",
        choices: ["s'est", "a", "est"]
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
        correctAnswer: "est",
        explanation: "Arriver se conjugue avec être : elle est.",
        choices: ["est", "a", "s'est"]
      },
      {
        id: 62,
        presentSentence: "Les touristes sortent de l'hôtel ce matin.",
        verbToConjugate: "sortent",
        correctAnswer: "sont",
        explanation: "Sortir se conjugue avec être : ils sont.",
        choices: ["sont", "ont", "se sont"]
      },
      {
        id: 63,
        presentSentence: "Nous, Lucas et moi, nous partons en voyage demain matin.",
        verbToConjugate: "partons",
        correctAnswer: "sommes",
        explanation: "Partir se conjugue avec être : nous sommes.",
        choices: ["sommes", "avons", "nous sommes"]
      },
      {
        id: 64,
        presentSentence: "Toi Alice, tu viens avec nous en excursion.",
        verbToConjugate: "viens",
        correctAnswer: "es",
        explanation: "Venir se conjugue avec être : tu es.",
        choices: ["es", "as", "t'es"]
      },
      {
        id: 65,
        presentSentence: "Marie tombe amoureuse de cette ville.",
        verbToConjugate: "tombe",
        correctAnswer: "est",
        explanation: "Tomber se conjugue avec être : elle est.",
        choices: ["est", "a", "s'est"]
      },
      {
        id: 66,
        presentSentence: "Nous, Emma et moi, nous entrons dans le musée.",
        verbToConjugate: "entrons",
        correctAnswer: "sommes",
        explanation: "Entrer se conjugue avec être : nous sommes.",
        choices: ["sommes", "avons", "nous sommes"]
      },
      {
        id: 67,
        presentSentence: "Vous, Marc et Pierre, vous retournez à l'hôtel avant la nuit.",
        verbToConjugate: "retournez",
        correctAnswer: "êtes",
        explanation: "Retourner se conjugue avec être : vous êtes.",
        choices: ["êtes", "avez", "vous êtes"]
      },
      {
        id: 68,
        presentSentence: "Ils montent au sommet de la tour.",
        verbToConjugate: "montent",
        correctAnswer: "sont",
        explanation: "Monter se conjugue avec être : ils sont.",
        choices: ["sont", "ont", "se sont"]
      },
      {
        id: 69,
        presentSentence: "Il descend du train à la gare centrale.",
        verbToConjugate: "descend",
        correctAnswer: "est",
        explanation: "Descendre se conjugue avec être : il est.",
        choices: ["est", "a", "s'est"]
      },
      {
        id: 70,
        presentSentence: "La voyageuse reste trois jours à Paris.",
        verbToConjugate: "reste",
        correctAnswer: "est",
        explanation: "Rester se conjugue avec être : elle est.",
        choices: ["est", "a", "s'est"]
      },
      {
        id: 71,
        presentSentence: "Marc revient de son voyage en Italie.",
        verbToConjugate: "revient",
        correctAnswer: "est",
        explanation: "Revenir se conjugue avec être : il est.",
        choices: ["est", "a", "s'est"]
      },
      {
        id: 72,
        presentSentence: "Elle passe par Londres avant Paris.",
        verbToConjugate: "passe",
        correctAnswer: "est",
        explanation: "Passer se conjugue avec être : elle est.",
        choices: ["est", "a", "s'est"]
      },
      {
        id: 73,
        presentSentence: "Nous naissons avec l'envie de voyager.",
        verbToConjugate: "naissons",
        correctAnswer: "sommes",
        explanation: "Naître se conjugue avec être : nous sommes.",
        choices: ["sommes", "avons", "nous sommes"]
      },
      {
        id: 74,
        presentSentence: "Vous devenez de vrais globe-trotteurs.",
        verbToConjugate: "devenez",
        correctAnswer: "êtes",
        explanation: "Devenir se conjugue avec être : vous êtes.",
        choices: ["êtes", "avez", "vous êtes"]
      },
      {
        id: 75,
        presentSentence: "Ils repartent vers une nouvelle destination.",
        verbToConjugate: "repartent",
        correctAnswer: "sont",
        explanation: "Repartir se conjugue avec être : ils sont.",
        choices: ["sont", "ont", "se sont"]
      },
      {
        id: 76,
        presentSentence: "Elle retombe sous le charme de cette région.",
        verbToConjugate: "retombe",
        correctAnswer: "est",
        explanation: "Retomber se conjugue avec être : elle est.",
        choices: ["est", "a", "s'est"]
      },
      {
        id: 77,
        presentSentence: "Marie intervient pour aider les autres voyageurs.",
        verbToConjugate: "intervient",
        correctAnswer: "est",
        explanation: "Intervenir se conjugue avec être : elle est.",
        choices: ["est", "a", "s'est"]
      },
      {
        id: 78,
        presentSentence: "Elle va directement à son hôtel.",
        verbToConjugate: "va",
        correctAnswer: "est",
        explanation: "Aller se conjugue avec être : elle est.",
        choices: ["est", "a", "s'est"]
      },
      {
        id: 79,
        presentSentence: "Nous sortons vers la sortie d'urgence.",
        verbToConjugate: "sortons",
        correctAnswer: "sommes",
        explanation: "Sortir se conjugue avec être : nous sommes."
      },
      {
        id: 80,
        presentSentence: "Vous mourez d'envie de visiter ce château.",
        verbToConjugate: "mourez",
        correctAnswer: "êtes",
        explanation: "Mourir se conjugue avec être : vous êtes."
      },
      {
        id: 81,
        presentSentence: "Ils mangent dans ce petit restaurant.",
        verbToConjugate: "mangent",
        correctAnswer: "ont",
        explanation: "Manger se conjugue avec avoir : ils ont.",
        choices: ["ont", "sont", "se sont"]
      },
      {
        id: 82,
        presentSentence: "Il arrive au bon moment.",
        verbToConjugate: "arrive",
        correctAnswer: "est",
        explanation: "Arriver se conjugue avec être : il est."
      },
      {
        id: 83,
        presentSentence: "Toi Alice, tu parviens à destination.",
        verbToConjugate: "parviens",
        correctAnswer: "es",
        explanation: "Parvenir se conjugue avec être : tu es."
      },
      {
        id: 84,
        presentSentence: "Elle disparait dans la foule du marché.",
        verbToConjugate: "disparait",
        correctAnswer: "a",
        explanation: "Disparaître se conjugue avec avoir : elle a."
      },
      {
        id: 85,
        presentSentence: "Nous prévoyons un moment pour jouer ensemble.",
        verbToConjugate: "prévoyons",
        correctAnswer: "avons",
        explanation: "Prévoir se conjugue avec avoir : nous avons."
      },
      {
        id: 86,
        presentSentence: "Vous photographiez le monument.",
        verbToConjugate: "photographiez",
        correctAnswer: "avez",
        explanation: "Photographier se conjugue avec avoir : vous avez."
      },
      {
        id: 87,
        presentSentence: "Ils visitent le musée en groupe.",
        verbToConjugate: "visitent",
        correctAnswer: "ont",
        explanation: "Visiter se conjugue avec avoir : ils ont."
      },
      {
        id: 88,
        presentSentence: "Moi, Mathias, je vais à la gare centrale.",
        verbToConjugate: "vais",
        correctAnswer: "suis",
        explanation: "Aller se conjugue avec être : je suis."
      },
      {
        id: 89,
        presentSentence: "Toi, Isabelle, tu rentres chez toi après le voyage.",
        verbToConjugate: "rentres",
        correctAnswer: "es",
        explanation: "Rentrer se conjugue avec être : tu es."
      },
      {
        id: 90,
        presentSentence: "Elle ressort son appareil photo.",
        verbToConjugate: "ressort",
        correctAnswer: "a",
        explanation: "Ressortir se conjugue avec avoir : elle a."
      }
    ]
  },
  {
    id: 4,
    title: "Journal du club de foot",
    description: "Match, entraînement, score. Travaille les verbes avec l'auxiliaire avoir ou être.",
    icon: "⚽",
    color: "bg-ouaip-yellow/20 text-ouaip-dark-blue",
    exercises: [
      {
        id: 91,
        presentSentence: "Les joueurs marquent un but magnifique.",
        verbToConjugate: "marquent",
        correctAnswer: "ont",
        explanation: "Marquer se conjugue avec avoir : ils ont.",
        choices: ["ont", "sont", "se sont"]
      },
      {
        id: 92,
        presentSentence: "L'entraineur prépare son équipe.",
        verbToConjugate: "prépare",
        correctAnswer: "a",
        explanation: "Préparer se conjugue avec avoir : il a.",
        choices: ["a", "est", "s'est"]
      },
      {
        id: 93,
        presentSentence: "Les supporters voient un match exceptionnel.",
        verbToConjugate: "voient",
        correctAnswer: "ont",
        explanation: "Voir se conjugue avec avoir : ils ont.",
        choices: ["ont", "sont", "ont"]
      },
      {
        id: 94,
        presentSentence: "Il comprend les règles.",
        verbToConjugate: "comprend",
        correctAnswer: "a",
        explanation: "Comprendre se conjugue avec avoir : il a.",
        choices: ["a", "est", "a"]
      },
      {
        id: 95,
        presentSentence: "Samedi, tu joues au foot avec ton équipe.",
        verbToConjugate: "joues",
        correctAnswer: "as",
        explanation: "Jouer se conjugue avec avoir : tu as.",
        choices: ["as", "es", "as"]
      },
      {
        id: 96,
        presentSentence: "Elle rate ses penalties.",
        verbToConjugate: "rate",
        correctAnswer: "a",
        explanation: "Rater se conjugue avec avoir : elle a.",
        choices: ["a", "est", "s'est"]
      },
      {
        id: 97,
        presentSentence: "Nous courons sur le terrain.",
        verbToConjugate: "courons",
        correctAnswer: "avons",
        explanation: "Courir se conjugue avec avoir : nous avons.",
        choices: ["avons", "sommes", "avons"]
      },
      {
        id: 98,
        presentSentence: "Vous perdez contre cette équipe redoutable.",
        verbToConjugate: "perdez",
        correctAnswer: "avez",
        explanation: "Perdre se conjugue avec avoir : vous avez.",
        choices: ["avez", "êtes", "vous êtes"]
      },
      {
        id: 99,
        presentSentence: "Ils finissent l'entraînement avec énergie.",
        verbToConjugate: "finissent",
        correctAnswer: "ont",
        explanation: "Finir se conjugue avec avoir : ils ont.",
        choices: ["ont", "sont", "se sont"]
      },
      {
        id: 100,
        presentSentence: "Le gardien arrête tous les tirs.",
        verbToConjugate: "arrête",
        correctAnswer: "a",
        explanation: "Arrêter se conjugue avec avoir : il a.",
        choices: ["a", "est", "s'est"]
      },
      {
        id: 101,
        presentSentence: "Tu gagnes contre moi.",
        verbToConjugate: "gagnes",
        correctAnswer: "as",
        explanation: "Gagner se conjugue avec avoir : tu as.",
        choices: ["as", "es", "t'es"]
      },
      {
        id: 102,
        presentSentence: "Elle dribble comme une professionnelle.",
        verbToConjugate: "dribble",
        correctAnswer: "a",
        explanation: "Dribbler se conjugue avec avoir : elle a.",
        choices: ["a", "est", "s'est"]
      },
      {
        id: 103,
        presentSentence: "Nous vendons nos billets.",
        verbToConjugate: "vendons",
        correctAnswer: "avons",
        explanation: "Vendre se conjugue avec avoir : nous avons.",
        choices: ["avons", "sommes", "nous sommes"]
      },
      {
        id: 104,
        presentSentence: "Vous tirez dans les angles.",
        verbToConjugate: "tirez",
        correctAnswer: "avez",
        explanation: "Tirer se conjugue avec avoir : vous avez.",
        choices: ["avez", "êtes", "vous êtes"]
      },
      {
        id: 105,
        presentSentence: "Ils battent l'équipe adverse.",
        verbToConjugate: "battent",
        correctAnswer: "ont",
        explanation: "Battre se conjugue avec avoir : ils ont.",
        choices: ["ont", "sont", "se sont"]
      },
      {
        id: 106,
        presentSentence: "J'enfile mes crampons neufs.",
        verbToConjugate: "enfile",
        correctAnswer: "ai",
        explanation: "Enfiler se conjugue avec avoir : j'ai.",
        choices: ["ai", "suis", "me suis"]
      },
      {
        id: 107,
        presentSentence: "Tu défends ton but.",
        verbToConjugate: "défends",
        correctAnswer: "as",
        explanation: "Défendre se conjugue avec avoir : tu as.",
        choices: ["as", "es", "t'es"]
      },
      {
        id: 108,
        presentSentence: "Elle fait des passes précises.",
        verbToConjugate: "fait",
        correctAnswer: "a",
        explanation: "Faire se conjugue avec avoir : elle a.",
        choices: ["a", "est", "s'est"]
      },
      {
        id: 109,
        presentSentence: "Nous sautons par-dessus les obstacles.",
        verbToConjugate: "sautons",
        correctAnswer: "avons",
        explanation: "Sauter se conjugue avec avoir : nous avons.",
        choices: ["avons", "sommes", "nous sommes"]
      },
      {
        id: 110,
        presentSentence: "Vous prenez des risques calculés.",
        verbToConjugate: "prenez",
        correctAnswer: "avez",
        explanation: "Prendre se conjugue avec avoir : vous avez.",
        choices: ["avez", "êtes", "vous êtes"]
      },
      {
        id: 111,
        presentSentence: "Ils tombent lors des tacles.",
        verbToConjugate: "tombent",
        correctAnswer: "sont",
        explanation: "Tomber se conjugue avec être : ils sont.",
        choices: ["sont", "ont", "se sont"]
      },
      {
        id: 112,
        presentSentence: "Je réussis mes premiers matchs.",
        verbToConjugate: "réussis",
        correctAnswer: "ai",
        explanation: "Réussir se conjugue avec avoir : j'ai.",
        choices: ["ai", "suis", "me suis"]
      },
      {
        id: 113,
        presentSentence: "Tu vois la différence.",
        verbToConjugate: "vois",
        correctAnswer: "as",
        explanation: "Voir se conjugue avec avoir : tu as.",
        choices: ["as", "es", "t'es"]
      },
      {
        id: 114,
        presentSentence: "Elle applaudit les belles actions.",
        verbToConjugate: "applaudit",
        correctAnswer: "a",
        explanation: "Applaudir se conjugue avec avoir : elle a.",
        choices: ["a", "est", "s'est"]
      },
      {
        id: 115,
        presentSentence: "Nous sortons du terrain victorieux.",
        verbToConjugate: "sortons",
        correctAnswer: "sommes",
        explanation: "Sortir se conjugue avec être : nous sommes.",
        choices: ["sommes", "avons", "nous sommes"]
      },
      {
        id: 116,
        presentSentence: "Vous lisez les mouvements adverses.",
        verbToConjugate: "lisez",
        correctAnswer: "avez",
        explanation: "Lire se conjugue avec avoir : vous avez.",
        choices: ["avez", "êtes", "vous êtes"]
      },
      {
        id: 117,
        presentSentence: "Ils suivent les conseils.",
        verbToConjugate: "suivent",
        correctAnswer: "ont",
        explanation: "Suivre se conjugue avec avoir : ils ont.",
        choices: ["ont", "sont", "se sont"]
      },
      {
        id: 118,
        presentSentence: "Je choisis mes passes.",
        verbToConjugate: "choisis",
        correctAnswer: "ai",
        explanation: "Choisir se conjugue avec avoir : j'ai.",
        choices: ["ai", "suis", "me suis"]
      },
      {
        id: 119,
        presentSentence: "Tu reviens de tes blessures.",
        verbToConjugate: "reviens",
        correctAnswer: "es",
        explanation: "Revenir se conjugue avec être : tu es.",
        choices: ["es", "as", "t'es"]
      },
      {
        id: 120,
        presentSentence: "Elle réfléchit comme une stratège.",
        verbToConjugate: "réfléchit",
        correctAnswer: "a",
        explanation: "Réfléchir se conjugue avec avoir : elle a.",
        choices: ["a", "est", "s'est"]
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
        presentSentence: "Maria écrit le code secret sur le mur.",
        verbToConjugate: "écrit",
        correctAnswer: "a écrit",
        explanation: "Écrire se conjugue avec avoir : elle a écrit.",
        choices: ["a écrit", "est écrit", "s'est écrit"]
      },
      {
        id: 122,
        presentSentence: "Les joueurs prennent des indices.",
        verbToConjugate: "prennent",
        correctAnswer: "ont pris",
        explanation: "Prendre se conjugue avec avoir : ils ont pris.",
        choices: ["ont pris", "sont pris", "se sont pris"]
      },
      {
        id: 123,
        presentSentence: "Je vois une clé cachée sous le tapis.",
        verbToConjugate: "vois",
        correctAnswer: "ai vu",
        explanation: "Voir se conjugue avec avoir : j'ai vu.",
        choices: ["ai vu", "suis vu", "me suis vu"]
      },
      {
        id: 124,
        presentSentence: "Tu fais une découverte importante.",
        verbToConjugate: "fais",
        correctAnswer: "as fait",
        explanation: "Faire se conjugue avec avoir : tu as fait.",
        choices: ["as fait", "es fait", "t'es fait"]
      },
      {
        id: 125,
        presentSentence: "Elle dit la solution à haute voix.",
        verbToConjugate: "dit",
        correctAnswer: "a dit",
        explanation: "Dire se conjugue avec avoir : elle a dit.",
        choices: ["a dit", "est dite", "s'est dite"]
      },
      {
        id: 126,
        presentSentence: "Nous lisons les instructions attentivement.",
        verbToConjugate: "lisons",
        correctAnswer: "avons lu",
        explanation: "Lire se conjugue avec avoir : nous avons lu.",
        choices: ["avons lu", "sommes lus", "nous sommes lus"]
      },
      {
        id: 127,
        presentSentence: "Vous mettez la clé dans la serrure.",
        verbToConjugate: "mettez",
        correctAnswer: "avez mis",
        explanation: "Mettre se conjugue avec avoir : vous avez mis.",
        choices: ["avez mis", "êtes mis", "vous êtes mis"]
      },
      {
        id: 128,
        presentSentence: "Ils ouvrent la porte mystérieuse.",
        verbToConjugate: "ouvrent",
        correctAnswer: "ont ouvert",
        explanation: "Ouvrir se conjugue avec avoir : ils ont ouvert.",
        choices: ["ont ouvert", "sont ouverts", "se sont ouverts"]
      },
      {
        id: 129,
        presentSentence: "Je comprends l'énigme.",
        verbToConjugate: "comprends",
        correctAnswer: "ai compris",
        explanation: "Comprendre se conjugue avec avoir : j'ai compris.",
        choices: ["ai compris", "suis compris", "me suis compris"]
      },
      {
        id: 130,
        presentSentence: "Tu apprends les règles du jeu.",
        verbToConjugate: "apprends",
        correctAnswer: "as appris",
        explanation: "Apprendre se conjugue avec avoir : tu as appris.",
        choices: ["as appris", "es appris", "t'es appris"]
      },
      {
        id: 131,
        presentSentence: "Elle boit une potion magique.",
        verbToConjugate: "boit",
        correctAnswer: "a bu",
        explanation: "Boire se conjugue avec avoir : elle a bu.",
        choices: ["a bu", "est bue", "s'est bue"]
      },
      {
        id: 132,
        presentSentence: "Nous courons vers la sortie.",
        verbToConjugate: "courons",
        correctAnswer: "avons couru",
        explanation: "Courir se conjugue avec avoir : nous avons couru.",
        choices: ["avons couru", "sommes courus", "nous sommes courus"]
      },
      {
        id: 133,
        presentSentence: "Vous offrez votre aide aux autres.",
        verbToConjugate: "offrez",
        correctAnswer: "avez offert",
        explanation: "Offrir se conjugue avec avoir : vous avez offert.",
        choices: ["avez offert", "êtes offerts", "vous êtes offerts"]
      },
      {
        id: 134,
        presentSentence: "Ils reçoivent un message crypté.",
        verbToConjugate: "reçoivent",
        correctAnswer: "ont reçu",
        explanation: "Recevoir se conjugue avec avoir : ils ont reçu.",
        choices: ["ont reçu", "sont reçus", "se sont reçus"]
      },
      {
        id: 135,
        presentSentence: "Je conduis l'équipe vers la victoire.",
        verbToConjugate: "conduis",
        correctAnswer: "ai conduit",
        explanation: "Conduire se conjugue avec avoir : j'ai conduit.",
        choices: ["ai conduit", "suis conduit", "me suis conduit"]
      },
      {
        id: 136,
        presentSentence: "Tu construis un plan d'évasion.",
        verbToConjugate: "construis",
        correctAnswer: "as construit",
        explanation: "Construire se conjugue avec avoir : tu as construit.",
        choices: ["as construit", "es construit", "t'es construit"]
      },
      {
        id: 137,
        presentSentence: "Elle craint les pièges du labyrinthe.",
        verbToConjugate: "craint",
        correctAnswer: "a craint",
        explanation: "Craindre se conjugue avec avoir : elle a craint.",
        choices: ["a craint", "est crainte", "s'est crainte"]
      },
      {
        id: 138,
        presentSentence: "Nous résolvons toutes les énigmes.",
        verbToConjugate: "résolvons",
        correctAnswer: "avons résolu",
        explanation: "Résoudre se conjugue avec avoir : nous avons résolu.",
        choices: ["avons résolu", "sommes résolus", "nous sommes résolus"]
      },
      {
        id: 139,
        presentSentence: "Vous connaissez ce type de jeu.",
        verbToConjugate: "connaissez",
        correctAnswer: "avez connu",
        explanation: "Connaître se conjugue avec avoir : vous avez connu.",
        choices: ["avez connu", "êtes connus", "vous êtes connus"]
      },
      {
        id: 140,
        presentSentence: "Ils vivent une aventure extraordinaire.",
        verbToConjugate: "vivent",
        correctAnswer: "ont vécu",
        explanation: "Vivre se conjugue avec avoir : ils ont vécu.",
        choices: ["ont vécu", "sont vécus", "se sont vécus"]
      },
      {
        id: 141,
        presentSentence: "Maria peint un symbole sur le mur.",
        verbToConjugate: "peint",
        correctAnswer: "a peint",
        explanation: "Peindre se conjugue avec avoir : elle a peint.",
        choices: ["ai peint", "suis peint", "me suis peint"]
      },
      {
        id: 142,
        presentSentence: "Tu joins les deux parties du puzzle.",
        verbToConjugate: "joins",
        correctAnswer: "as joint",
        explanation: "Joindre se conjugue avec avoir : tu as joint.",
        choices: ["as joint", "es joint", "t'es joint"]
      },
      {
        id: 143,
        presentSentence: "Elle rompt le code de la porte.",
        verbToConjugate: "rompt",
        correctAnswer: "a rompu",
        explanation: "Rompre se conjugue avec avoir : elle a rompu.",
        choices: ["a rompu", "est rompue", "s'est rompue"]
      },
      {
        id: 144,
        presentSentence: "Nous suivons les indices un par un.",
        verbToConjugate: "suivons",
        correctAnswer: "avons suivi",
        explanation: "Suivre se conjugue avec avoir : nous avons suivi.",
        choices: ["avons suivi", "sommes suivis", "nous sommes suivis"]
      },
      {
        id: 145,
        presentSentence: "Vous battez le record de temps.",
        verbToConjugate: "battez",
        correctAnswer: "avez battu",
        explanation: "Battre se conjugue avec avoir : vous avez battu.",
        choices: ["avez battu", "êtes battus", "vous êtes battus"]
      },
      {
        id: 146,
        presentSentence: "Ils perdent leur chemin dans le labyrinthe.",
        verbToConjugate: "perdent",
        correctAnswer: "ont perdu",
        explanation: "Perdre se conjugue avec avoir : ils ont perdu.",
        choices: ["ont perdu", "sont perdus", "se sont perdus"]
      },
      {
        id: 147,
        presentSentence: "Je tiens fermement la clé magique.",
        verbToConjugate: "tiens",
        correctAnswer: "ai tenu",
        explanation: "Tenir se conjugue avec avoir : j'ai tenu.",
        choices: ["ai tenu", "suis tenu", "me suis tenu"]
      },
      {
        id: 148,
        presentSentence: "Tu obtiens la réponse.",
        verbToConjugate: "obtiens",
        correctAnswer: "as obtenu",
        explanation: "Obtenir se conjugue avec avoir : tu as obtenu.",
        choices: ["as obtenu", "es obtenu", "t'es obtenu"]
      },
      {
        id: 149,
        presentSentence: "Elle pousse la porte secrète.",
        verbToConjugate: "pousse",
        correctAnswer: "a poussé",
        explanation: "Pousser se conjugue avec avoir : elle a poussé.",
        choices: ["a poussé", "est poussée", "s'est poussée"]
      },
      {
        id: 150,
        presentSentence: "Nous découvrons le trésor caché.",
        verbToConjugate: "découvrons",
        correctAnswer: "avons découvert",
        explanation: "Découvrir se conjugue avec avoir : nous avons découvert.",
        choices: ["avons découvert", "sommes découverts", "nous sommes découverts"]
      }
    ]
  }
];