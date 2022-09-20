import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Game, GamesDto } from "@/types/game";

export const useGamesStore = defineStore("games", () => {
  const baseUrl = "https://api.rawg.io/api/games";
  const apiKey = "f85e670587de45ccbf0587ede7b4ac8a";
  const games = ref<Game[]>([]);
  const nextPage = ref("");

  async function fetchGames(page: number = 1, page_size = 36) {
    try {
      await axios
        .get<GamesDto>(baseUrl, {
          params: { key: apiKey, page, page_size },
        })
        .then((res) => {
          games.value = res.data.results;
          nextPage.value = res.data.next;
        });
    } catch (error) {
      console.warn(error);
    }
  }

  async function fetchNext(url: string) {
    try {
      await axios.get<GamesDto>(url).then((res) => {
        games.value.push(...res.data.results);
        nextPage.value = res.data.next;
      });
    } catch (error) {
      console.warn(error);
    }
  }

  return { games, nextPage, fetchGames, fetchNext };
});
