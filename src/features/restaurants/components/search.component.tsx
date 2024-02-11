import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { LocationsContext } from "@/services/location/locations.context";

const SearchBarContainer = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
`;

interface Props {
  isFavouritesToggled: boolean;
  onFavouritesToggle: any;
}

export const Search = ({ isFavouritesToggled, onFavouritesToggle }: Props) => {
  const { keyword, search } = useContext(LocationsContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarContainer>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => search(searchKeyword)}
        value={searchKeyword}
      />
    </SearchBarContainer>
  );
};
