import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type {
  Game,
  GameDetails,
  GamesDto,
  GameStore,
  GameStoresDto,
} from "@/types/game";

export const useGamesStore = defineStore("games", () => {
  const baseUrl = "https://api.rawg.io/api/games";
  const apiKey = "f85e670587de45ccbf0587ede7b4ac8a";
  const games = ref<Game[]>([]);
  const nextPage = ref("");
  const whereToBuy = ref<GameStore[]>([]);
  const choosenGame = ref<GameDetails>({} as GameDetails);

  async function fetchGames(
    options = { page: 1, page_size: 36, ordering: "-added" }
  ) {
    try {
      await axios
        .get<GamesDto>(baseUrl, {
          params: {
            key: apiKey,
            page: options.page,
            page_size: options.page_size,
            ordering: options.ordering,
          },
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
    console.log("store fetch new");

    try {
      await axios.get<GamesDto>(url).then((res) => {
        games.value.push(...res.data.results);
        nextPage.value = res.data.next;
      });
    } catch (error) {
      console.warn(error);
    }
  }

  async function fetchGame(slug: string) {
    try {
      await axios
        .get<GameDetails>(baseUrl + "/" + slug, { params: { key: apiKey } })
        .then((res) => {
          choosenGame.value = res.data;
        });
    } catch (error) {
      console.warn(error);
    }
  }

  async function fetchWhereToBuy(slug: string) {
    console.log(`fetching game stores by url: games/${slug}`);
    try {
      await axios.get<GameStoresDto>(baseUrl + slug + "/stores").then((res) => {
        whereToBuy.value = res.data.results;
      });
    } catch (error) {
      console.warn(error);
    }
  }

  return {
    games,
    nextPage,
    whereToBuy,
    choosenGame,
    fetchGames,
    fetchNext,
    fetchGame,
    fetchWhereToBuy,
  };
});
