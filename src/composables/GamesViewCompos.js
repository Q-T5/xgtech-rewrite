import { computed } from 'vue';

export default function useGamesComposable() {
  const availableGames = [
    {
      gameTitle: 'Need For Speed',
      gamePublisher: 'EA Sports',
      gameCost: 3500,
      gamePoster: 'https://files.fm/thumb_show.php?i=dgrqyep4s',
      release: '14-11-2004',
      rating: 3.5,
    },
    {
      gameTitle: 'Midnight Club',
      gamePublisher: 'Rockstar Games',
      gameCost: 4500,
      gamePoster: 'https://files.fm/thumb_show.php?i=crpnsh6js',
      release: '10-06-2007',
      rating: 4.5,
    },
    {
      gameTitle: 'God of War',
      gamePublisher: 'Santa Monica Studio',
      gameCost: 6000,
      gamePoster: 'https://files.fm/thumb_show.php?i=cfnpzbs5r',
      release: '07-11-2009',
      rating: 3.5,
    },
    {
      gameTitle: 'The Last of Us',
      gamePublisher: 'Naughty Dog & Sony Entertainment',
      gameCost: 5000,
      gamePoster: 'https://files.fm/thumb_show.php?i=tmny3bu82',
      release: '12-05-2018',
      rating: 2.5,
    },
    {
      gameTitle: 'FIFA 2023',
      gamePublisher: 'EA Sports',
      gameCost: 8500,
      gamePoster: 'https://files.fm/thumb_show.php?i=v3xjxfj79',
      release: '14-02-2023',
      rating: 4.5,
    },
    {
      gameTitle: "No Man's Sky",
      gamePublisher: 'Hello Games & Sony Entertainment',
      gameCost: 7500,
      gamePoster: 'https://files.fm/thumb_show.php?i=ek5d5ykxa',
      release: '09-08-2016',
      rating: 3.5,
    },
  ];

  function getGameFromList(index) {
    return availableGames[index];
  }

  const computedGames = computed(() => {
    return availableGames;
  });

  return {
    computedGames,
    getGameFromList,
  };
}
