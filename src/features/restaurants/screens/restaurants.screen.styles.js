import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StatusBar } from "react-native";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
