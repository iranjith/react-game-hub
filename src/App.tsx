import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import useGameQueryStore from "./store";

export interface GameQuery {
  genreId?: number;
  platformId: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  //const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const {gameQuery,setSearchText,setGenreId,setPlatformId,setSortOrder}= useGameQueryStore();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar
         
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"} paddingX={5}>
          <GenreList
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading ></GameHeading>
          <Flex marginBottom={5}>
            <Box>
              <PlatformSelector
              ></PlatformSelector>
            </Box>
            <SortSelector
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
