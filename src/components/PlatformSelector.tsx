import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props{
    onSelectPlatform:(platform:Platform) => void;
    selectedPlatform: Platform | null;
}


//Notes: Platform selector component is in the GridItem component. Pass the platform selected input to the Game Grid component via App component.

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

  const {data, error}= usePlatforms();

  if(error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}> {selectedPlatform?.name} </MenuButton>
        <MenuList>
            {data.map(platform=><MenuItem onClick={()=> onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector