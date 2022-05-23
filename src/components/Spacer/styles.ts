import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type StyleProp = {
  spacing?: number;
};

export const Container = styled.View<StyleProp>`
  height: ${({ spacing }) => (spacing ? RFValue(spacing) : RFValue(16))}px;
`;
