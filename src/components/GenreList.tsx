import { HStack, Image, List, ListItem, Spinner, Text, Button } from "@chakra-ui/react";
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
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedUrl(genre.image_background)}>
            </Image>
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold':'normal'} fontSize='lg' variant="link" onClick={()=>onSelectGenre(genre)}>
                {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
