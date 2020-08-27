export const tournamentLadder = {
  ladderSize: 2,
  teamCount: 8,
  matches: [
    [
      {
        number: 0,
        isCompleted: true,
        team1: {
          name: 'Team Cero',
          score: 3,
        },
        team2: {
          name: 'Team Uno',
          score: 1,
        },
      },
      {
        number: 1,
        isCompleted: false,
        team1: {
          name: 'Team Dos',
          score: 2,
        },
        team2: {
          name: 'Team Tres',
          score: 1,
        },
      },
      {
        number: 2,
        isCompleted: false,
        team1: {
          name: 'Team Cuatro',
          score: 0,
        },
        team2: {
          name: 'Team Cinco',
          score: 0,
        },
      },
      {
        number: 3,
        isCompleted: false,
        team1: {
          name: 'Team Seis',
          score: 0,
        },
        team2: {
          name: 'Team Siete',
          score: 0,
        },
      },
    ],
    [
      {
        number: 4,
        isCompleted: false,
        team1: {
          name: 'Team Cero',
          score: 0,
        },
        team2: {
          name: '',
          score: '',
        },
      },
    ],
  ],
};

export default tournamentLadder;
