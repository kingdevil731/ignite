// Base Url
const base_url = "https://api.rawg.io/api/key=bb5119046a6e4964a0e5c311fcd37cf8?";

//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
// current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// Last Year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// Next Year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Api Calls
// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// upcoming games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// New Games
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
// exports
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;
// Game Details
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}`;
// ScreenShots
export const gameScreenshotsUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;
// Search Game
export const searchGameUrl = (game_name) =>
  `${base_url}games?search=${game_name}`;
