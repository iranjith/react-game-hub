import React from 'react'
import useScreenshots from '../hooks/useScreenshots';
import { Image } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/layout';

interface Props{
    gameId:number;
}

const GameScreenshots = ({gameId}:Props) => {

    const {data, error, isLoading}= useScreenshots(gameId);

    if(isLoading) return null;

  return (
    <SimpleGrid columns={{base:1, md:2}} spacing={2}>
        {data?.results.map(file=><Image key={file.id} src={file.image}></Image>)}
    </SimpleGrid>
  )
}

export default GameScreenshots