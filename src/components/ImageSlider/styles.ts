import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

type ImageIndexProps = {
  active: boolean;
};

export const Container = styled.View`
  height: 200px;
  background-color: purple;
`;

export const Dots = styled.View`
    flex-direction: row;
    background-color: #222a;
    border-radius: 10px;
    padding: 2px 5px;
    align-self: flex-end;
    justify-content: space-between;
    width: ${width / 3};
    position:  absolute;
    z-index: 1;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
`;

export const WrapperImage = styled.View`
  width: ${width}px;
  height: 132px;
`;

export const Image = styled.Image`
  flex: 1;
`;
