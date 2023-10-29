import { useState } from "react";
import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
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
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
