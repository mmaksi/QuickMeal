import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: ${(props) => props.theme.sizes[1]};
  color: ${(props) => props.theme.colors.text.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://wallpapercave.com/wp/wp1874173.jpg"],
    address = "100 some street name",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5} mode="elevated">
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}
