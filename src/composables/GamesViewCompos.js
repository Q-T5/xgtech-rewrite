import { computed } from 'vue';

export default function useGamesComposable() {
  const availableGames = [];

  function getGameFromList(index) {
    return availableGames[index];
  }

  const computedGames = computed(() => {
    return availableGames.value;
  });

  return {
    computedGames,
    getGameFromList
  };
}
