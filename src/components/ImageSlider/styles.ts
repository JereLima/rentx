import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

type ImageIndexProps = {
  active: boolean;
};

export const Container = styled.View``;

export const Dots = styled.View`
  flex-direction: row;
  background-color: #999a;
  border-radius: 10px;
  padding: 2px 5px;
  align-self: flex-end;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 5px;
  background-color: ${({theme, active}) => active ? theme.colors.main : theme.colors.main_light};
`;

export const WrapperImage = styled.View`
  width: ${width}px;
  height: 132px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
