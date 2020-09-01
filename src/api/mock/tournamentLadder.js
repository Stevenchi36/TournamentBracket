const tournamentLadderFull4 = {
  ladderName: '4 Teams - Finished',
  ladderSize: 2,
  teamCount: 4,
  matches: [
    [
      {
        isCompleted: true,
        isInProgress: false,
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
        isCompleted: true,
        isInProgress: false,
        team1: {
          name: 'Team Dos',
          score: 3,
        },
        team2: {
          name: 'Team Tres',
          score: 2,
        },
      },
    ],
    [
      {
        isCompleted: true,
        isInProgress: false,
        team1: {
          name: 'Team Cero',
          score: 0,
        },
        team2: {
          name: 'Team Dos',
          score: 3,
        },
      },
    ],
  ],
};

const tournamentLadder8 = {
  ladderName: '8 Teams - Unfinished',
  ladderSize: 2,
  teamCount: 8,
  matches: [
    [
      {
        isCompleted: true,
        isInProgress: false,
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
        isCompleted: false,
        isInProgress: true,
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
        isCompleted: false,
        isInProgress: true,
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
        isCompleted: false,
        isInProgress: true,
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
        isCompleted: false,
        isInProgress: false,
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

const tournamentLadder16Full = {
  ladderName: '16 Teams - Finished',
  teamCount: 16,
  matches: [
    [
      {
        isCompleted: true,
        isInProgress: false,
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
        isCompleted: true,
        isInProgress: true,
        team1: {
          name: 'Team Dos',
          score: 3,
        },
        team2: {
          name: 'Team Tres',
          score: 1,
        },
      },
      {
        isCompleted: true,
        isInProgress: true,
        team1: {
          name: 'Team Cuatro',
          score: 3,
        },
        team2: {
          name: 'Team Cinco',
          score: 2,
        },
      },
      {
        isCompleted: true,
        isInProgress: true,
        team1: {
          name: 'Team Seis',
          score: 0,
        },
        team2: {
          name: 'Team Siete',
          score: 3,
        },
      },
      {
        isCompleted: true,
        isInProgress: false,
        team1: {
          name: 'Team Ocho',
          score: 3,
        },
        team2: {
          name: 'Team Nueve',
          score: 1,
        },
      },
      {
        isCompleted: true,
        isInProgress: true,
        team1: {
          name: 'Team Diez',
          score: 3,
        },
        team2: {
          name: 'Team Once',
          score: 2,
        },
      },
      {
        isCompleted: true,
        isInProgress: true,
        team1: {
          name: 'Team Doce',
          score: 1,
        },
        team2: {
          name: 'Team Trece',
          score: 3,
        },
      },
      {
        isCompleted: true,
        isInProgress: true,
        team1: {
          name: 'Team Catorce',
          score: 0,
        },
        team2: {
          name: 'Team Quince',
          score: 3,
        },
      },
    ],
    [
      {
        isCompleted: true,
        isInProgress: false,
        team1: {
          name: 'Team Cero',
          score: 3,
        },
        team2: {
          name: 'Team Dos',
          score: 2,
        },
      },
      {
        isCompleted: true,
        isInProgress: false,
        team1: {
          name: 'Team Cuatro',
          score: 1,
        },
        team2: {
          name: 'Team Siete',
          score: 3,
        },
      },
      {
        isCompleted: true,
        isInProgress: false,
        team1: {
          name: 'Team Ocho',
          score: 3,
        },
        team2: {
          name: 'Team Diez',
          score: 1,
        },
      },
      {
        isCompleted: true,
        isInProgress: false,
        team1: {
          name: 'Team Trece',
          score: 2,
        },
        team2: {
          name: 'Team Quince',
          score: 3,
        },
      },
    ],
    [
      {
        isCompleted: true,
        isInProgress: false,
        team1: {
          name: 'Team Cero',
          score: 1,
        },
        team2: {
          name: 'Team Siete',
          score: 3,
        },
      },
      {
        isCompleted: true,
        isInProgress: false,
        team1: {
          name: 'Team Ocho',
          score: 1,
        },
        team2: {
          name: 'Team Quince',
          score: 3,
        },
      },
    ],
    [
      {
        isCompleted: true,
        isInProgress: false,
        team1: {
          name: 'Team Siete',
          score: 3,
        },
        team2: {
          name: 'Team Quince',
          score: 2,
        },
      },
    ],
  ],
};

export default [
  tournamentLadderFull4,
  tournamentLadder8,
  tournamentLadder16Full,
];
