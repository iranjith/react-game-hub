import React from 'react'
import useGenres from '../hooks/useGenres';

const GenreList = () => {

  const { genres} = useGenres();



  return (
    <ul>
        <li> {genres.map(genre=><li key={genre.id}>{genre.name}</li>)}</li>
    </ul>
  )
}

export default GenreList