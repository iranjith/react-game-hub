import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error} = useGenres();
  const selectedGenreId= useGameQueryStore(s=>s.gameQuery.genreId);
  const setSelectedGenreId= useGameQueryStore(s=>s.setGenreId)

  if(error) return null;

  if(isLoading) return <Spinner></Spinner>

  return (
    <>
    <Heading fontSize='xl' marginBottom={3}>Genres</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedUrl(genre.image_background)}>
            </Image>
            <Button textAlign='left' whiteSpace='normal' fontWeight={genre.id === selectedGenreId ? 'bold':'normal'} fontSize='lg' variant="link" onClick={()=>setSelectedGenreId(genre.id)}>
                {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
