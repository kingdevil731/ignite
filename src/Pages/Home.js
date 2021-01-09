import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../Components/Game";
// Style & Animation
import styled from "styled-components";
import { fadeIn } from "../animations";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// game detail
import GameDetail from "../Components/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
  // currentLocaiton
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get the data from the state
  const { popular, newGames, upComing, searched } = useSelector(
    (state) => state.games
  );
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Search Results</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  playtime={game.playtime}
                  platforms={game.platforms}
                  stores={game.stores}
                  released={game.released}
                  tba={game.tba}
                  background_image={game.background_image}
                  rating={game.rating}
                  rating_top={game.rating_top}
                  ratings={game.ratings}
                  ratings_count={game.ratings_count}
                  reviews_text_count={game.reviews_text_count}
                  added={game.added}
                  added_by_status={game.added_by_status}
                  suggestion_count={game.suggestion_count}
                  updated={game.updated}
                  id={game.id}
                  score={game.score}
                  clip={game.clip}
                  tags={game.tags}
                  esrb_rating={game.esrb_rating}
                  user_game={game.user_game}
                  reviews_count={game.reviews_count}
                  saturated_color={game.saturated_color}
                  dominant_color={game.dominant_color}
                  short_screenshots={game.short_screenshots}
                  parent_platforms={game.parent_platforms}
                  genres={game.genres}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>UpComing Games</h2>
        <Games>
          {upComing.map((game) => (
            <Game
              name={game.name}
              playtime={game.playtime}
              platforms={game.platforms}
              stores={game.stores}
              released={game.released}
              tba={game.tba}
              background_image={game.background_image}
              rating={game.rating}
              rating_top={game.rating_top}
              ratings={game.ratings}
              ratings_count={game.ratings_count}
              reviews_text_count={game.reviews_text_count}
              added={game.added}
              added_by_status={game.added_by_status}
              suggestion_count={game.suggestion_count}
              updated={game.updated}
              id={game.id}
              score={game.score}
              clip={game.clip}
              tags={game.tags}
              esrb_rating={game.esrb_rating}
              user_game={game.user_game}
              reviews_count={game.reviews_count}
              saturated_color={game.saturated_color}
              dominant_color={game.dominant_color}
              short_screenshots={game.short_screenshots}
              parent_platforms={game.parent_platforms}
              genres={game.genres}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              playtime={game.playtime}
              platforms={game.platforms}
              stores={game.stores}
              released={game.released}
              tba={game.tba}
              background_image={game.background_image}
              rating={game.rating}
              rating_top={game.rating_top}
              ratings={game.ratings}
              ratings_count={game.ratings_count}
              reviews_text_count={game.reviews_text_count}
              added={game.added}
              added_by_status={game.added_by_status}
              suggestion_count={game.suggestion_count}
              updated={game.updated}
              id={game.id}
              score={game.score}
              clip={game.clip}
              tags={game.tags}
              esrb_rating={game.esrb_rating}
              user_game={game.user_game}
              reviews_count={game.reviews_count}
              saturated_color={game.saturated_color}
              dominant_color={game.dominant_color}
              short_screenshots={game.short_screenshots}
              parent_platforms={game.parent_platforms}
              genres={game.genres}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              playtime={game.playtime}
              platforms={game.platforms}
              stores={game.stores}
              released={game.released}
              tba={game.tba}
              background_image={game.background_image}
              rating={game.rating}
              rating_top={game.rating_top}
              ratings={game.ratings}
              ratings_count={game.ratings_count}
              reviews_text_count={game.reviews_text_count}
              added={game.added}
              added_by_status={game.added_by_status}
              suggestion_count={game.suggestion_count}
              updated={game.updated}
              id={game.id}
              score={game.score}
              clip={game.clip}
              tags={game.tags}
              esrb_rating={game.esrb_rating}
              user_game={game.user_game}
              reviews_count={game.reviews_count}
              saturated_color={game.saturated_color}
              dominant_color={game.dominant_color}
              short_screenshots={game.short_screenshots}
              parent_platforms={game.parent_platforms}
              genres={game.genres}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
