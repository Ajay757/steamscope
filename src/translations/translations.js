export const translations = {
  en: {
    dashboardTitle: 'Steam Game Performance Dashboard',
    intro:
      'Compare popular Steam games by player counts, genre, ratings, price, and activity trends. Use the filters to switch between popularity rankings and multi-game activity comparisons.',
    header: {
      popularityTitle: 'Rank game popularity',
      popularityText: 'Filter by genre and compare peak or average player counts.',
      activityTitle: 'Compare activity trends',
      activityText: 'Add multiple games and inspect monthly or yearly movement.',
    },
    language: {
      selectorLabel: 'Language',
    },
    stats: {
      sectionLabel: 'Dashboard summary',
      gamesAnalyzed: 'Games analyzed',
      gamesAnalyzedDetail: 'Synthetic sample dataset',
      mostPopular: 'Most popular game',
      highestRated: 'Highest rated',
      averagePrice: 'Average price',
      byPeakPlayers: (value) => `${value} peak players`,
      ratingDetail: (value) => `${value} user rating`,
      priceDetail: 'Canadian dollars',
    },
    charts: {
      popular: {
        title: 'Most Popular Games by Player Count',
        description:
          'Compare the highest and average player counts of selected Steam games.',
        placeholder: 'Bar chart placeholder',
        topGamesLabel: 'Top 8 games',
        emptyState: 'No games match the selected filters.',
        ariaLabel: 'Bar chart comparing Steam game player counts',
        screenReaderSummary: (metric) =>
          `Horizontal bar chart showing the top games sorted by ${metric}. Use the genre, metric, and time frame controls to update the chart.`,
        metricContext: {
          peakPlayers: {
            title: 'What peak players means',
            description:
              'Peak players records the all-time highest count of simultaneous players for each game. It helps show which games have reached the biggest single activity spike.',
          },
          averagePlayers: {
            weekly: {
              title: 'What weekly average players means',
              description:
                'Weekly average players estimates the typical simultaneous-player count during the most recent week. It is useful for reading current short-term activity.',
            },
            monthly: {
              title: 'What monthly average players means',
              description:
                'Monthly average players shows the typical simultaneous-player count for the most recent month. It smooths out daily swings while still reflecting recent activity.',
            },
            yearly: {
              title: 'What yearly average players means',
              description:
                'Yearly average players shows the typical simultaneous-player count across the year. It is best for comparing longer-term, sustained popularity.',
            },
          },
        },
      },
      activity: {
        title: 'Player Activity Over Time',
        description:
          'Follow player activity by month or year for a selected Steam game.',
        placeholder: 'Line chart placeholder',
        xAxis: {
          monthly: 'Month',
          yearly: 'Year',
        },
        yAxis: 'Average players',
        tooltipPlayers: 'Players',
        ariaLabel: 'Line chart comparing Steam game player activity over time',
        screenReaderSummary: (count) =>
          `Line chart comparing player activity for ${count} selected game${
            count === 1 ? '' : 's'
          }. Use the add game and time period controls to update the chart.`,
        compareLabel: (count) =>
          count === 1 ? '1 selected game' : `${count} selected games`,
      },
    },
    filters: {
      genre: 'Genre',
      metric: 'Metric',
      timeFrame: 'Time frame',
      averagePeriod: 'Average period',
      game: 'Game',
      compareGames: 'Compare games',
      compareHint: 'Select up to 4 games to compare on the same chart.',
      addGame: 'Add game',
      chooseGame: 'Choose a game',
      selectedGames: 'Selected games',
      maxGamesReached: 'Maximum of 4 games selected',
      selectedCount: (count, max) => `${count}/${max} selected`,
      removeGame: (game) => `Remove ${game}`,
      timePeriod: 'Time period',
      allGenres: 'All genres',
      peakPlayers: 'Peak players',
      genres: {
        all: 'All genres',
        Shooter: 'Shooter',
        RPG: 'RPG',
        Action: 'Action',
        Strategy: 'Strategy',
        Simulation: 'Simulation',
        Sandbox: 'Sandbox',
      },
      metrics: {
        peakPlayers: 'Peak players',
        averagePlayers: 'Average players',
      },
      peakMetricLabel: 'Peak players (all-time)',
      allTime: 'All-time',
      averagePeriods: {
        weekly: 'Weekly',
        monthly: 'Monthly',
        yearly: 'Yearly',
      },
      averageMetricLabel: (period) => `Average players (${period})`,
      twelveMonths: '12 months',
      activityPeriods: {
        monthly: 'Monthly',
        yearly: 'Yearly',
      },
    },
    months: {
      short: {
        Jan: 'Jan',
        Feb: 'Feb',
        Mar: 'Mar',
        Apr: 'Apr',
        May: 'May',
        Jun: 'Jun',
        Jul: 'Jul',
        Aug: 'Aug',
        Sep: 'Sep',
        Oct: 'Oct',
        Nov: 'Nov',
        Dec: 'Dec',
      },
      full: {
        Jan: 'January',
        Feb: 'February',
        Mar: 'March',
        Apr: 'April',
        May: 'May',
        Jun: 'June',
        Jul: 'July',
        Aug: 'August',
        Sep: 'September',
        Oct: 'October',
        Nov: 'November',
        Dec: 'December',
      },
    },
    dataNoticeTitle: 'Synthetic data notice',
    dataNotice:
      'This dashboard uses synthetic sample data created for educational purposes. The figures are not live Steam data and should not be interpreted as current platform statistics.',
    footerNote: 'SEG3125 Assignment 5 bilingual interactive dashboard prototype.',
  },
  fr: {
    dashboardTitle: 'Tableau de bord des performances des jeux Steam',
    intro:
      "Comparez des jeux Steam populaires selon le nombre de joueurs, le genre, les notes, le prix et les tendances d'activité. Utilisez les filtres pour passer des classements aux comparaisons entre jeux.",
    header: {
      popularityTitle: 'Classer la popularité',
      popularityText:
        'Filtrez par genre et comparez le nombre maximal ou moyen de joueurs.',
      activityTitle: "Comparer l'activité",
      activityText:
        'Ajoutez plusieurs jeux et examinez les tendances mensuelles ou annuelles.',
    },
    language: {
      selectorLabel: 'Langue',
    },
    stats: {
      sectionLabel: 'Résumé du tableau de bord',
      gamesAnalyzed: 'Jeux analysés',
      gamesAnalyzedDetail: 'Jeu de données synthétiques',
      mostPopular: 'Jeu le plus populaire',
      highestRated: 'Mieux noté',
      averagePrice: 'Prix moyen',
      byPeakPlayers: (value) => `${value} joueurs au maximum`,
      ratingDetail: (value) => `Note de ${value}`,
      priceDetail: 'Dollars canadiens',
    },
    charts: {
      popular: {
        title: 'Jeux les plus populaires selon le nombre de joueurs',
        description:
          'Comparez le nombre maximal et moyen de joueurs de certains jeux Steam.',
        placeholder: 'Emplacement du diagramme à barres',
        topGamesLabel: '8 meilleurs jeux',
        emptyState: 'Aucun jeu ne correspond aux filtres sélectionnés.',
        ariaLabel:
          'Diagramme à barres comparant le nombre de joueurs des jeux Steam',
        screenReaderSummary: (metric) =>
          `Diagramme à barres horizontal montrant les meilleurs jeux triés selon ${metric}. Utilisez les contrôles de genre, de mesure et de période pour mettre à jour le graphique.`,
        metricContext: {
          peakPlayers: {
            title: 'Signification du nombre maximal',
            description:
              "Le nombre maximal indique le plus grand nombre de joueurs simultanés atteint par chaque jeu. Il aide à repérer les plus grands pics d'activité.",
          },
          averagePlayers: {
            weekly: {
              title: 'Signification de la moyenne hebdomadaire',
              description:
                "La moyenne hebdomadaire estime le nombre typique de joueurs simultanés pendant la semaine la plus récente. Elle aide à lire l'activité actuelle à court terme.",
            },
            monthly: {
              title: 'Signification de la moyenne mensuelle',
              description:
                "La moyenne mensuelle indique le nombre typique de joueurs simultanés pendant le mois le plus récent. Elle réduit les variations quotidiennes tout en gardant une vue récente.",
            },
            yearly: {
              title: 'Signification de la moyenne annuelle',
              description:
                "La moyenne annuelle indique le nombre typique de joueurs simultanés sur l'année. Elle convient mieux pour comparer une popularité durable.",
            },
          },
        },
      },
      activity: {
        title: 'Activité des joueurs au fil du temps',
        description:
          "Suivez l'activité des joueurs par mois ou par année pour un jeu Steam sélectionné.",
        placeholder: 'Emplacement du graphique linéaire',
        xAxis: {
          monthly: 'Mois',
          yearly: 'Année',
        },
        yAxis: 'Joueurs moyens',
        tooltipPlayers: 'Joueurs',
        ariaLabel:
          "Graphique linéaire comparant l'activité des joueurs Steam au fil du temps",
        screenReaderSummary: (count) =>
          `Graphique linéaire comparant l'activité des joueurs pour ${count} ${
            count === 1 ? 'jeu sélectionné' : 'jeux sélectionnés'
          }. Utilisez les contrôles d'ajout de jeu et de période pour mettre à jour le graphique.`,
        compareLabel: (count) =>
          count === 1 ? '1 jeu sélectionné' : `${count} jeux sélectionnés`,
      },
    },
    filters: {
      genre: 'Genre',
      metric: 'Mesure',
      timeFrame: 'Période',
      averagePeriod: 'Période moyenne',
      game: 'Jeu',
      compareGames: 'Comparer les jeux',
      compareHint: "Sélectionnez jusqu'à 4 jeux à comparer sur le même graphique.",
      addGame: 'Ajouter un jeu',
      chooseGame: 'Choisir un jeu',
      selectedGames: 'Jeux sélectionnés',
      maxGamesReached: 'Maximum de 4 jeux sélectionnés',
      selectedCount: (count, max) => `${count}/${max} sélectionnés`,
      removeGame: (game) => `Retirer ${game}`,
      timePeriod: 'Période',
      allGenres: 'Tous les genres',
      peakPlayers: 'Joueurs simultanés maximum',
      genres: {
        all: 'Tous les genres',
        Shooter: 'Tir',
        RPG: 'Jeu de rôle',
        Action: 'Action',
        Strategy: 'Stratégie',
        Simulation: 'Simulation',
        Sandbox: 'Bac à sable',
      },
      metrics: {
        peakPlayers: 'Joueurs simultanés maximum',
        averagePlayers: 'Joueurs moyens',
      },
      peakMetricLabel: 'Joueurs maximum (historique)',
      allTime: 'Historique',
      averagePeriods: {
        weekly: 'Hebdomadaire',
        monthly: 'Mensuelle',
        yearly: 'Annuelle',
      },
      averageMetricLabel: (period) => `Joueurs moyens (${period})`,
      twelveMonths: '12 mois',
      activityPeriods: {
        monthly: 'Mensuel',
        yearly: 'Annuel',
      },
    },
    months: {
      short: {
        Jan: 'Janv.',
        Feb: 'Févr.',
        Mar: 'Mars',
        Apr: 'Avr.',
        May: 'Mai',
        Jun: 'Juin',
        Jul: 'Juill.',
        Aug: 'Août',
        Sep: 'Sept.',
        Oct: 'Oct.',
        Nov: 'Nov.',
        Dec: 'Déc.',
      },
      full: {
        Jan: 'Janvier',
        Feb: 'Février',
        Mar: 'Mars',
        Apr: 'Avril',
        May: 'Mai',
        Jun: 'Juin',
        Jul: 'Juillet',
        Aug: 'Août',
        Sep: 'Septembre',
        Oct: 'Octobre',
        Nov: 'Novembre',
        Dec: 'Décembre',
      },
    },
    dataNoticeTitle: 'Avis sur les données synthétiques',
    dataNotice:
      "Ce tableau de bord utilise des données synthétiques créées à des fins éducatives. Les chiffres ne sont pas des données Steam en direct et ne doivent pas être interprétés comme des statistiques actuelles de la plateforme.",
    footerNote:
      'Prototype de tableau de bord interactif bilingue pour le devoir 5 de SEG3125.',
  },
}
