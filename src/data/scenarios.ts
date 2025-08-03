export interface Exercise {
  id: number;
  context: string;
  sentence: string;
  correctAnswer: string;
  explanation: string;
  verb: string;
  infinitive: string;
}

export interface Scenario {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  exercises: {
    easy: Exercise[];
    medium: Exercise[];
    hard: Exercise[];
  };
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Au parc d'aventure",
    description: "Accrobranche, tyrolienne, ponts suspendus. Conjugue les verbes du 1er groupe avec l'auxiliaire 'avoir'.",
    icon: "🌲",
    color: "bg-ouaip-green/20 text-ouaip-green",
    exercises: {
      easy: [
        {
          id: 1,
          context: "Tom s'amuse sur la tyrolienne du parc d'aventure.",
          sentence: "Aujourd'hui, Tom _____ sur la tyrolienne.",
          correctAnswer: "a glissé",
          explanation: "Le verbe 'glisser' se conjugue avec l'auxiliaire 'avoir' : il a glissé.",
          verb: "glisser",
          infinitive: "glisser"
        },
        {
          id: 2,
          context: "Les enfants adorent escalader les filets.",
          sentence: "Hier, les enfants _____ tous les filets.",
          correctAnswer: "ont escaladé",
          explanation: "Le verbe 'escalader' avec 'ils' : ils ont escaladé.",
          verb: "escalader",
          infinitive: "escalader"
        },
        {
          id: 3,
          context: "Marie traverse le pont suspendu avec prudence.",
          sentence: "Marie _____ le pont suspendu.",
          correctAnswer: "a traversé",
          explanation: "Le verbe 'traverser' avec 'elle' : elle a traversé.",
          verb: "traverser",
          infinitive: "traverser"
        },
        {
          id: 4,
          context: "Paul saute de branche en branche avec agilité.",
          sentence: "Paul _____ de branche en branche.",
          correctAnswer: "a sauté",
          explanation: "Le verbe 'sauter' se conjugue avec avoir : il a sauté.",
          verb: "sauter",
          infinitive: "sauter"
        },
        {
          id: 5,
          context: "Les guides expliquent les règles de sécurité.",
          sentence: "Les guides _____ les règles.",
          correctAnswer: "ont expliqué",
          explanation: "Le verbe 'expliquer' avec ils : ils ont expliqué.",
          verb: "expliquer",
          infinitive: "expliquer"
        }
      ],
      medium: [
        {
          id: 4,
          context: "Les moniteurs organisent une course d'obstacles.",
          sentence: "Les moniteurs _____ une course hier.",
          correctAnswer: "ont organisé",
          explanation: "Organiser + avoir : ils ont organisé.",
          verb: "organisé",
          infinitive: "organiser"
        },
        {
          id: 5,
          context: "Nous participons à l'activité accrobranche.",
          sentence: "Nous _____ à l'accrobranche.",
          correctAnswer: "avons participé",
          explanation: "Participer + avoir : nous avons participé.",
          verb: "participé",
          infinitive: "participer"
        }
      ],
      hard: [
        {
          id: 6,
          context: "Le groupe termine l'activité mais ne récupère pas encore.",
          sentence: "Le groupe _____ mais ne _____ pas encore.",
          correctAnswer: "a terminé, a récupéré",
          explanation: "Attention à la négation : 'ne a pas encore récupéré' devient 'n'a pas encore récupéré'.",
          verb: "terminer/récupérer",
          infinitive: "terminer/récupérer"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Dans la cuisine du chef Léo",
    description: "Recettes, gestes précis. Maîtrise les verbes pronominaux au passé composé.",
    icon: "👨‍🍳",
    color: "bg-ouaip-red/20 text-ouaip-red",
    exercises: {
      easy: [
        {
          id: 7,
          context: "Avant de cuisiner, il faut respecter l'hygiène.",
          sentence: "Nous _____ les mains avant de cuisiner.",
          correctAnswer: "nous sommes lavé les",
          explanation: "Se laver est pronominal : nous nous sommes lavé les mains.",
          verb: "se laver",
          infinitive: "se laver"
        }
      ],
      medium: [
        {
          id: 8,
          context: "Le chef se prépare pour le service.",
          sentence: "Le chef _____ pour le service.",
          correctAnswer: "s'est préparé",
          explanation: "Se préparer : il s'est préparé.",
          verb: "préparé",
          infinitive: "se préparer"
        }
      ],
      hard: [
        {
          id: 9,
          context: "Les cuisiniers ne se sont pas encore reposés.",
          sentence: "Les cuisiniers ne _____ pas encore _____.",
          correctAnswer: "se sont, reposés",
          explanation: "Négation + pronominal : ne se sont pas encore reposés.",
          verb: "se reposer",
          infinitive: "se reposer"
        }
      ]
    }
  },
  {
    id: 3,
    title: "Carnet de voyage de Sofia",
    description: "Villes, transports, hôtels. Apprends les verbes qui se conjuguent avec 'être' et leurs accords.",
    icon: "✈️",
    color: "bg-ouaip-blue/20 text-ouaip-blue",
    exercises: {
      easy: [
        {
          id: 10,
          context: "Sofia voyage en Europe et visite Bruxelles.",
          sentence: "Sofia _____ tard à Bruxelles hier soir.",
          correctAnswer: "est arrivée",
          explanation: "Arriver + être + accord féminin : elle est arrivée.",
          verb: "arriver",
          infinitive: "arriver"
        }
      ],
      medium: [
        {
          id: 11,
          context: "Les touristes visitent la Grand-Place.",
          sentence: "Les touristes _____ de l'hôtel ce matin.",
          correctAnswer: "sont sortis",
          explanation: "Sortir + être + accord masculin pluriel : ils sont sortis.",
          verb: "sortis",
          infinitive: "sortir"
        }
      ],
      hard: [
        {
          id: 12,
          context: "Les voyageuses ne sont jamais revenues de leur excursion.",
          sentence: "Les voyageuses ne _____ jamais _____ de leur excursion.",
          correctAnswer: "sont, revenues",
          explanation: "Négation + être + accord féminin pluriel : ne sont jamais revenues.",
          verb: "revenir",
          infinitive: "revenir"
        }
      ]
    }
  },
  {
    id: 4,
    title: "Journal du club de foot",
    description: "Match, entraînement, score. Travaille les négations et les adverbes (bien, déjà, encore).",
    icon: "⚽",
    color: "bg-ouaip-yellow/20 text-ouaip-dark-blue",
    exercises: {
      easy: [
        {
          id: 13,
          context: "L'équipe joue un match difficile.",
          sentence: "Les joueurs ne _____ pas encore de but.",
          correctAnswer: "ont marqué",
          explanation: "Négation avec 'encore' : ne ont pas encore marqué → n'ont pas encore marqué.",
          verb: "marquer",
          infinitive: "marquer"
        }
      ],
      medium: [
        {
          id: 14,
          context: "L'entraîneur prépare ses stratégies.",
          sentence: "L'entraîneur _____ bien _____ son équipe.",
          correctAnswer: "a, préparé",
          explanation: "Adverbe 'bien' : a bien préparé.",
          verb: "préparé",
          infinitive: "préparer"
        }
      ],
      hard: [
        {
          id: 15,
          context: "Les supporters n'ont jamais vu un tel match.",
          sentence: "Les supporters n'_____ jamais _____ un tel match.",
          correctAnswer: "ont, vu",
          explanation: "Négation 'ne...jamais' : n'ont jamais vu.",
          verb: "voir",
          infinitive: "voir"
        }
      ]
    }
  },
  {
    id: 5,
    title: "Escape game virtuel",
    description: "Énigmes, indices, mystères. Maîtrise les verbes irréguliers fréquents (voir, prendre, écrire...).",
    icon: "🔍",
    color: "bg-ouaip-dark-blue/20 text-ouaip-dark-blue",
    exercises: {
      easy: [
        {
          id: 16,
          context: "Jules résout l'énigme et note la solution.",
          sentence: "Jules _____ le code secret sur le mur.",
          correctAnswer: "a écrit",
          explanation: "Écrire est irrégulier : il a écrit (et non 'a écrivé').",
          verb: "écrire",
          infinitive: "écrire"
        }
      ],
      medium: [
        {
          id: 17,
          context: "Les joueurs découvrent des indices cachés.",
          sentence: "Les joueurs _____ des indices.",
          correctAnswer: "ont pris",
          explanation: "Prendre est irrégulier : ils ont pris (et non 'ont prendé').",
          verb: "pris",
          infinitive: "prendre"
        }
      ],
      hard: [
        {
          id: 18,
          context: "L'équipe n'a jamais résolu une énigme si complexe.",
          sentence: "L'équipe n'_____ jamais _____ une énigme si complexe.",
          correctAnswer: "a, résolue",
          explanation: "Résoudre + COD antéposé : l'énigme qu'elle a résolue (accord avec COD).",
          verb: "résoudre",
          infinitive: "résoudre"
        }
      ]
    }
  }
];