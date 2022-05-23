import React from 'react';
import { View } from 'react-native';

import { Container, Dots, ImageIndex, WrapperImage, Image } from './styles';

interface Props {
    imagesUrls: string[];
}

const ImageSlider: React.FC<Props> = ({imagesUrls}) => {
  return (
      <Container>
          <Dots>
              <ImageIndex active={true} />
              <ImageIndex active={false} />
              <ImageIndex active={false} />
              <ImageIndex active={false} />
          </Dots>
          <WrapperImage>
              <Image resizeMode='cover' source={{uri: imagesUrls[0]}}/>
          </WrapperImage>
      </Container>
  );
}

export default ImageSlider;