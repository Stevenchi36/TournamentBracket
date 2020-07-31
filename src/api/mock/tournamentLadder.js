export const tournamentLadder = {
  ladderSize: 2,
  teamCount: 4,
  matches: [
    {
      number: 0,
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
      number: 1,
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
