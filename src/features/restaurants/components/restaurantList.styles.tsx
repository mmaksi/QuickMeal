import styled from "styled-components/native";
import { FlatList } from "react-native";

export const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },
})``;
