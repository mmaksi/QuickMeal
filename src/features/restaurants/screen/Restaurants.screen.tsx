import React, { useContext } from "react";
import RestaurantInfoCard from "@/features/restaurants/components/InfoCard.component";
import styled from "styled-components/native";
import Spacer from "@/components/spacer/Spacer";
import { SafeArea } from "@/features/restaurants/components/utility/SafeArea";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import { Camelize } from "@/utils/camelize";
import { Result } from "@/services/restaurants/restaurant";
import { ActivityIndicator } from "react-native";
import { Search } from "@/features/restaurants/components/search.component";
import { NavigationProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "@/infra/navigation/restaurants.navigator";

const RestaurantsList = styled.FlatList`
  padding: 0 16px;
`;

const Loading = styled.View`
  position: absolute;
  top: 50%;
  left: 46%;
  z-index: 1;
`;

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export default function RestaurantScreens({ navigation }: Props) {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <>
      {isLoading && (
        <Loading>
          <ActivityIndicator color="#FFBC11" size="large" />
        </Loading>
      )}

      <SafeArea>
        <Search />
        <RestaurantsList
          data={restaurants}
          renderItem={(props) => {
            const item = props.item as Camelize<Result>;
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer key={item.name} position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item: any) => item.name}
        />
      </SafeArea>
    </>
  );
}
