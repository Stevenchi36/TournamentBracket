export const tournamentLadder8 = {
  ladderSize: 2,
  teamCount: 8,
  matches: [
    [
      {
        number: 0,
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
        number: 1,
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
        number: 2,
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
        number: 3,
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
        number: 4,
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

export const tournamentLadderFull4 = {
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

export default [
  tournamentLadderFull4,
  tournamentLadder8,
];
