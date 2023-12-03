import { Grid, Show, GridItem, Flex, Box } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`,
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr",
    }}
  >
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
  )
}

export default HomePage