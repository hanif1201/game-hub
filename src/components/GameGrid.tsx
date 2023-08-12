/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ol>
        {games.map((games) => (
          <li key={games.id}>{games.name}</li>
        ))}
      </ol>
    </>
  );
};

export default GameGrid;
