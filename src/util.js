// Imports
// icons
import playstation from "./img/playstation.svg";
import steam from "./img/steam.svg";
import xbox from "./img/xbox.svg";
import nintendo from "./img/nintendo.svg";
import apple from "./img/apple.svg";
import gamepad from "./img/gamepad.svg";
// stars images
import starFull from "./img/star-full.png";
import startEmpty from "./img/star-empty.png";

// smallImage - return url for a smaller image instead of full 4k
export const smallImage = (imagePath, size) => {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "/media/screenshots",
        `/media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};

// Get Platforms image based on name passed in the param platform
export const getPlatform = (platform) => {
  switch (platform) {
    case "PlayStation 4":
      return playstation;
    case "PlayStation 5":
      return playstation;
    case "Xbox One":
      return xbox;
    case "Xbox Series S/X":
      return xbox;
    case "Nintendo Switch":
      return nintendo;
    case "PC":
      return steam;
    case "iOS":
      return apple;
    default:
      return gamepad;
  }
};
// Return stars image rating
export const getStars = (game) => {
  const stars = [];
  const rating = Math.floor(game.rating);
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img alt={i} src={starFull} key={i} />);
    } else {
      stars.push(<img alt={i} src={startEmpty} key={i} />);
    }
  }
  return stars;
};
