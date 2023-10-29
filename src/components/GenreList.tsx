import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data} = useGenres();
  return (
    <ul>
        <li> {data.map(genre=><li key={genre.id}>{genre.name}</li>)}</li>
    </ul>
  )
}

export default GenreList