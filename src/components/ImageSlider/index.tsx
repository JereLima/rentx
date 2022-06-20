import React, { useRef, useState } from "react";
import { View, ViewToken } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Container, Dots, ImageIndex, WrapperImage, Image } from "./styles";

interface Props {
  imagesUrls: string[];
}

interface ChangedImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const ImageSlider: React.FC<Props> = ({ imagesUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const indexChanged = useRef((info: ChangedImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });
  return (
    <Container>
      <Dots>
        {imagesUrls.map((i, x) => (
          <ImageIndex key={String(x)} active={x === imageIndex} />
        ))}
      </Dots>
      <WrapperImage>
        <FlatList
          data={imagesUrls}
          horizontal
          keyExtractor={(key) => key}
          onViewableItemsChanged={indexChanged.current}
          renderItem={({ item }) => (
            <WrapperImage>
              <Image resizeMode="contain" source={{ uri: item }} />
            </WrapperImage>
          )}
        />
      </WrapperImage>
    </Container>
  );
};

export default ImageSlider;
