import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

/**Notes: 
1. Search input component is in the NavBar component. Pass the search input to the Game Grid component to the Navbar component via App component.
2. Because we have a simple form with single input field, its easier to use the ref hook instead of stake hook
**/

interface Props{
    onSearch: (searchText:string)=>void;
}


const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);  
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search Games"
          variant="filled"
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
