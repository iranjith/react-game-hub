import { useState } from "react";
import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import usePlatforms, { Platform } from "./hooks/usePlatforms";

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
}

function App() {

  const [gameQuery,setGameQuery]= useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base:'1fr',
        lg:'200px 1fr'
      }}
    >
      <GridItem pl="2" area={"nav"} >
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"} paddingX={5}>
          <GenreList onSelectGenre={(genre)=> setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}></GenreList>
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=> setGameQuery({...gameQuery, platform})}></PlatformSelector>
        <GameGrid gameQuery={gameQuery} ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
