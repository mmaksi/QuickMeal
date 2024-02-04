import styled from "styled-components/native";
import { Card } from "react-native-paper";

export interface Theme {
  sizes: string[];
  space: string;
  fonts: {
    body: string;
    heading: string;
  };
  fontSizes: {
    caption: string;
    body: string;
  };
  fontWeights: {
    regular: string;
    medium: string;
    bold: string;
  };
  colors: {
    bg: {
      primary: string;
    };
    text: {
      primary: string;
      error: string;
    };
    space: string[];
  };
}

export const Info = styled.View<{ theme: Theme }>`
  padding: ${(props) => props.theme.sizes[1]};
`;

export const Address = styled.Text<{ theme: Theme }>`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const RestaurantCard = styled(Card)<{ theme: Theme }>`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)<{ theme: Theme }>`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View<{ theme: Theme }>`
  padding: ${(props) => props.theme.space[2]} 0;
  flex-direction: row;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  height: 15px;
  width: 15px;
`;
