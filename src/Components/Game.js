import React from "react";
// Style & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// Link
import { Link } from "react-router-dom";
// Image Resize & getPlatform Svg
import { getPlatform, smallImage } from "../util";

const Game = ({
  name,
  playtime,
  platforms,
  stores,
  released,
  tba,
  background_image,
  rating,
  rating_top,
  ratings,
  ratings_count,
  reviews_text_count,
  added,
  added_by_status,
  suggestion_count,
  updated,
  id,
  score,
  clip,
  tags,
  esrb_rating,
  user_game,
  reviews_count,
  saturated_color,
  dominant_color,
  short_screenshots,
  parent_platforms,
  genres,
  key,
}) => {
  // conversion of number to string
  const stringPathId = id.toString();
  // Load Details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>Release: {released}</p>
        <Platforms>
          {platforms.map((item) => {
            return <img src={getPlatform(item.platform.name)} alt={item} />;
          })}
        </Platforms>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(background_image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  margin-bottom: 1rem;
  img {
    margin-left: 0;
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export default Game;
