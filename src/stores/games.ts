import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Game, GamesDto } from "@/types/game";

export const useGamesStore = defineStore("games", () => {
  const baseUrl =
    "https://api.rawg.io/api/games?key=f85e670587de45ccbf0587ede7b4ac8a&page=1&page_size=40";
  let games: Game[] = reactive([]);

  const getGames = computed((state) => state.games);

  async function fetchGames() {
    try {
      const responce = await axios.get<GamesDto>(baseUrl);
      games = responce.data.results;
    } catch (error) {
      console.warn(error);
    }
  }

  return { games, getGames, fetchGames };
});
