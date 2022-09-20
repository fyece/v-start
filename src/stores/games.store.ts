import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Game, GamesDto } from "@/types/game";

export const useGamesStore = defineStore("games", () => {
  const baseUrl =
    "https://api.rawg.io/api/games?key=f85e670587de45ccbf0587ede7b4ac8a&page=1&page_size=40";
  const games = ref<Game[]>([]);

  async function fetchGames() {
    try {
      await axios.get<GamesDto>(baseUrl).then((res) => {
        console.log(res);
        games.value = res.data.results;
      });
      // games = data.results;
      console.log(`service: ${games.value[0]}`);
    } catch (error) {
      console.warn(error);
    }
  }

  return { games, fetchGames };
});
