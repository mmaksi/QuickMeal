import { SvgXml } from "react-native-svg";

import star from "assets/star.ts";
import open from "assets/open.ts";

import Spacer from "@/components/spacer/Spacer.tsx";
import Text from "@/components/typography/Text.ts";
import { Result } from "@/services/restaurants/restaurant";

import {
  Address,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
  Icon,
} from "./InfoCard.styles.ts";
import { Camelize } from "@/utils/camelize.js";
import { View } from "react-native";
import { Favourite } from "@/components/favourites/favourite.component.tsx";

interface Props {
  restaurant: Camelize<Result>;
}

export default function RestaurantInfoCard({ restaurant }: Props) {
  const {
    rating,
    vicinity,
    photos,
    icon,
    name,
    isclosedtemporarily,
    isopennow,
  } = restaurant;
  const ratingArray = Array.from(new Array(4));
  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isclosedtemporarily && (
              <Text variant="error" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isopennow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
}
