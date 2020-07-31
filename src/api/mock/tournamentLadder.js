export const tournamentLadder = {
  ladderSize: 2,
  teamCount: 4,
  matches: [
    {
      name: 'A',
      isCompleted: true,
      team1: {
        name: 'Team Uno',
        score: 3,
      },
      team2: {
        name: 'Team Dos',
        score: 1,
      },
    },
    {
      name: 'B',
      isCompleted: false,
      team1: {
        name: 'Team Tres',
        score: 2,
      },
      team2: {
        name: 'Team Cuatro',
        score: 1,
      },
    },
  ],
};

export default tournamentLadder;
