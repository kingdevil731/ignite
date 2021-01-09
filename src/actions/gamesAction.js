import axios from "axios";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGameUrl,
} from "../api";

// Action Creator

/*
dispatch({
    type: "FETCH_GAMES", -> type of dispatch/action
    payload: { -> what we are sending/data
      popular: popularData, -> popular = the reducer/placeholder we created in the reducer gameReducer ... popularData is what we received 
    },
  });
  */
export const loadGames = () => async (dispatch) => {
  // FETCH Axios
  const popularData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upComingGamesData = await axios.get(upcomingGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upComing: upComingGamesData.data.results,
    },
  });
};
export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
