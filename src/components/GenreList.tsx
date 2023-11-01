import { HStack, Image, List, ListItem, Spinner, Text, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

interface Props{
    onSelectGenre:(genre:Genre)=> void;
    selectedGenre: Genre | null;
}

const GenreList = ( {selectedGenre,onSelectGenre} : Props) => {
  const { data, isLoading } = useGenres();

  if(isLoading) return <Spinner></Spinner>

  return (
    <>
    <Heading fontSize='xl' marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedUrl(genre.image_background)}>
            </Image>
            <Button textAlign='left' whiteSpace='normal' fontWeight={genre.id === selectedGenre?.id ? 'bold':'normal'} fontSize='lg' variant="link" onClick={()=>onSelectGenre(genre)}>
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
